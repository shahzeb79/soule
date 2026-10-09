import { PRODUCTS_DATA, HERO_CAMPAIGN_IMG, TECH_SOLE_DETAIL_IMG } from './productsData';
import { Product, FilterState } from '../types';
import { db, isFirebaseConfigured } from './firebaseClient';
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { deleteShoeImageByUrl } from './storageService';

export interface CMSResponse<T> {
  data: T;
  meta: {
    total: number;
    responseTimeMs: number;
    source: 'firebase-firestore-cms' | 'local-edge-cache';
  };
}

export interface CategoryCounts {
  all: number;
  men: number;
  women: number;
  kids: number;
}

export interface EditorialStory {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  readTime: string;
  image: string;
  summary: string;
}

export const EDITORIAL_STORIES: EditorialStory[] = [
  {
    id: 'story-1',
    title: 'The Zurich Aerodynamics Lab',
    subtitle: 'Behind the Hollow Pod Geometry',
    tag: 'Engineering',
    readTime: '3 min read',
    image: TECH_SOLE_DETAIL_IMG,
    summary: 'How our engineering team in Zurich redesigned the fundamental structure of athletic cushioning to collapse on landing and lock rigid for propulsion.'
  },
  {
    id: 'story-2',
    title: 'Zero-Gravity Running on Asphalt',
    subtitle: 'The Science of SouleFoam™ Dual Core',
    tag: 'Biomechanics',
    readTime: '4 min read',
    image: HERO_CAMPAIGN_IMG,
    summary: 'Testing ground impact forces across 10,000 runners. The data proving reduced joint torque and 22% faster stride return.'
  }
];

class HeadlessCMSClient {
  private memoryCache: Product[] | null = null;
  private cacheTimestamp = 0;
  private CACHE_TTL_MS = 60 * 1000; // 1 minute in-memory cache
  private listeners: Array<() => void> = [];

  /**
   * Subscribe to CMS changes (created, updated, deleted shoes)
   */
  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  /**
   * Notify all listeners and dispatch window custom event
   */
  private notifyListeners() {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('HeadlessCMS listener error:', err);
      }
    });
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('soule_products_updated'));
    }
  }

  /**
   * Fetches live product counts across all categories from Firebase Firestore
   */
  async getCategoryCounts(forceFresh = false): Promise<CategoryCounts> {
    const { products } = await this.getRawProducts(forceFresh);
    return {
      all: products.length,
      men: products.filter((p) => p.gender === 'men').length,
      women: products.filter((p) => p.gender === 'women').length,
      kids: products.filter((p) => p.gender === 'kids').length
    };
  }

  /**
   * Fetches raw products list: either from Firestore or fallback to PRODUCTS_DATA
   */
  async getRawProducts(forceFresh = false): Promise<{ products: Product[]; source: 'firebase-firestore-cms' | 'local-edge-cache' }> {
    const now = Date.now();
    if (!forceFresh && this.memoryCache && now - this.cacheTimestamp < this.CACHE_TTL_MS) {
      return { products: this.memoryCache, source: isFirebaseConfigured ? 'firebase-firestore-cms' : 'local-edge-cache' };
    }

    if (db) {
      try {
        // Query the live Firestore CMS collection 'shoes_data'
        let querySnapshot = await getDocs(collection(db, 'shoes_data'));
        if (querySnapshot.empty) {
          querySnapshot = await getDocs(collection(db, 'products'));
        }

        if (!querySnapshot.empty) {
          const firestoreProducts: Product[] = [];
          querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            firestoreProducts.push({
              id: docSnap.id,
              slug: data.slug || docSnap.id,
              name: data.name || 'Untitled Shoe',
              subCategory: data.subCategory || data.category || 'Performance Footwear',
              gender: data.gender || 'men',
              activity: data.activity || 'Road Running',
              cushioning: data.cushioning || 'Responsive',
              priceCHF: Number(data.pricePKR || data.priceCHF || data.price || 18500),
              isNew: Boolean(data.isNew),
              isBestSeller: Boolean(data.isBestSeller),
              badge: data.badge || '',
              weight: data.weight || '230 g',
              heelDrop: data.heelDrop || '6 mm',
              stability: data.stability || 'Neutral',
              lacing: data.lacing || 'Speed Lacing',
              description: data.description || '',
              features: Array.isArray(data.features) ? data.features : [],
              technologies: Array.isArray(data.technologies) ? data.technologies : [],
              sustainability: data.sustainability || {
                recycledContent: '40% Recycled Content',
                details: 'Sustainable materials'
              },
              rating: Number(data.rating || 4.8),
              reviewCount: Number(data.reviewCount || 120),
              colorways: Array.isArray(data.colorways) && data.colorways.length > 0 ? data.colorways : [
                {
                  id: 'cw-default',
                  name: 'Standard Chalk',
                  primaryColorHex: '#E2E8F0',
                  accentColorHex: '#1E293B',
                  image: data.image || ''
                }
              ],
              sizes: Array.isArray(data.sizes) && data.sizes.length > 0 ? data.sizes : [
                { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
                { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
                { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true }
              ]
            });
          });

          this.memoryCache = firestoreProducts;
          this.cacheTimestamp = now;
          return { products: firestoreProducts, source: 'firebase-firestore-cms' };
        } else {
          // Both collections empty in Firestore: seed default catalog into shoes_data in the background
          this.seedDemoProductsToFirestore().catch((err) => {
            console.warn('Initial Firestore seed attempt skipped or failed:', err);
          });
        }
      } catch (err) {
        console.warn('Firestore fetch failed, using fallback data:', err);
      }
    }

    // Default fallback to bundled catalog
    this.memoryCache = PRODUCTS_DATA;
    this.cacheTimestamp = now;
    return { products: PRODUCTS_DATA, source: 'local-edge-cache' };
  }

  async getProducts(filters?: Partial<FilterState>, forceFresh = false): Promise<CMSResponse<Product[]>> {
    const startTime = performance.now();
    const { products: allProducts, source } = await this.getRawProducts(forceFresh);

    let list = [...allProducts];

    if (filters) {
      // Category filter (men, women, kids, all)
      if (filters.category && filters.category !== 'all') {
        list = list.filter((p) => p.gender === filters.category);
      }

      // Activity filter
      if (filters.activity && filters.activity.length > 0) {
        list = list.filter((p) => filters.activity?.includes(p.activity));
      }

      // Cushioning filter
      if (filters.cushioning && filters.cushioning.length > 0) {
        list = list.filter((p) => filters.cushioning?.includes(p.cushioning));
      }

      // In stock only
      if (filters.inStockOnly) {
        list = list.filter((p) => p.sizes.some((s) => s.inStock));
      }

      // Search Query
      if (filters.searchQuery && filters.searchQuery.trim().length > 0) {
        const q = filters.searchQuery.toLowerCase().trim();
        list = list.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.subCategory.toLowerCase().includes(q) ||
            p.activity.toLowerCase().includes(q) ||
            p.gender.toLowerCase().includes(q) ||
            p.technologies.some((t) => t.name.toLowerCase().includes(q))
        );
      }

      // Sort
      if (filters.sort) {
        switch (filters.sort) {
          case 'price-asc':
            list.sort((a, b) => a.priceCHF - b.priceCHF);
            break;
          case 'price-desc':
            list.sort((a, b) => b.priceCHF - a.priceCHF);
            break;
          case 'rating':
            list.sort((a, b) => b.rating - a.rating);
            break;
          case 'newest':
            list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
          case 'featured':
          default:
            list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
            break;
        }
      }
    }

    const duration = Math.round(performance.now() - startTime);

    return {
      data: list,
      meta: {
        total: list.length,
        responseTimeMs: duration,
        source
      }
    };
  }

  async getProductById(id: string): Promise<Product | null> {
    if (db) {
      try {
        let docRef = doc(db, 'shoes_data', id);
        let docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          docRef = doc(db, 'products', id);
          docSnap = await getDoc(docRef);
        }
        if (docSnap.exists()) {
          const data = docSnap.data();
          return { id: docSnap.id, ...data } as Product;
        }
      } catch (e) {
        console.warn('Firestore getProductById fallback:', e);
      }
    }
    const { products } = await this.getRawProducts();
    return products.find((p) => p.id === id) || null;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const { products } = await this.getRawProducts();
    return products.find((p) => p.slug === slug) || null;
  }

  async getStories(): Promise<EditorialStory[]> {
    return EDITORIAL_STORIES;
  }

  /**
   * Admin: Add new shoe to Firestore collection 'shoes_data'
   */
  async createShoe(shoe: Product): Promise<{ success: boolean; id: string }> {
    const shoeId = shoe.id || `${shoe.gender}-${shoe.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Date.now()}`;
    const newProduct: Product = { ...shoe, id: shoeId };

    if (!db) {
      throw new Error('Firebase Firestore is not initialized. Please verify configuration.');
    }

    await setDoc(doc(db, 'shoes_data', shoeId), newProduct);

    this.memoryCache = null; // Invalidate cache immediately
    this.notifyListeners();
    return { success: true, id: shoeId };
  }

  /**
   * Admin: Update existing shoe in Firestore collection 'shoes_data'
   */
  async updateShoe(shoe: Product): Promise<{ success: boolean }> {
    if (!shoe.id) throw new Error('Shoe ID is required for update');

    if (!db) {
      throw new Error('Firebase Firestore is not initialized. Please verify configuration.');
    }

    await setDoc(doc(db, 'shoes_data', shoe.id), shoe, { merge: true });

    this.memoryCache = null; // Invalidate cache immediately
    this.notifyListeners();
    return { success: true };
  }

  /**
   * Admin: Delete a shoe from Firestore collection 'shoes_data' and delete its uploaded images from Storage
   */
  async deleteShoe(shoeId: string, imageUrlsToDelete: string[] = []): Promise<{ success: boolean }> {
    // Delete associated images from Firebase Storage
    for (const url of imageUrlsToDelete) {
      if (url) {
        try {
          await deleteShoeImageByUrl(url);
        } catch (e) {
          console.warn('Could not delete image on shoe deletion:', e);
        }
      }
    }

    if (!db) {
      throw new Error('Firebase Firestore is not initialized. Please verify configuration.');
    }

    await deleteDoc(doc(db, 'shoes_data', shoeId));

    this.memoryCache = null; // Invalidate cache immediately
    this.notifyListeners();
    return { success: true };
  }

  /**
   * Admin Helper: seeds local PRODUCTS_DATA into Firebase Firestore shoes_data
   */
  async seedDemoProductsToFirestore(): Promise<{ count: number; success: boolean }> {
    if (!db) {
      throw new Error('Firebase Firestore is not initialized. Please configure VITE_FIREBASE_API_KEY in .env');
    }
    let seeded = 0;
    for (const prod of PRODUCTS_DATA) {
      await setDoc(doc(db, 'shoes_data', prod.id), prod, { merge: true });
      await setDoc(doc(db, 'products', prod.id), prod, { merge: true });
      seeded++;
    }
    this.memoryCache = null; // Invalidate cache
    this.notifyListeners();
    return { count: seeded, success: true };
  }
}

export const headlessCMS = new HeadlessCMSClient();
