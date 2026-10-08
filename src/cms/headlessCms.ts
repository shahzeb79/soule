import { PRODUCTS_DATA, HERO_CAMPAIGN_IMG, TECH_SOLE_DETAIL_IMG } from './productsData';
import { Product, FilterState, Category } from '../types';

export interface CMSResponse<T> {
  data: T;
  meta: {
    total: number;
    responseTimeMs: number;
    source: 'soule-headless-cms-edge';
  };
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
  private cache = new Map<string, Product[]>();

  async getProducts(filters?: Partial<FilterState>): Promise<CMSResponse<Product[]>> {
    const startTime = performance.now();
    // Simulate instantaneous edge resolution (<15ms)
    await new Promise((r) => setTimeout(r, 12));

    let list = [...PRODUCTS_DATA];

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
        source: 'soule-headless-cms-edge'
      }
    };
  }

  async getProductById(id: string): Promise<Product | null> {
    const item = PRODUCTS_DATA.find((p) => p.id === id);
    return item || null;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const item = PRODUCTS_DATA.find((p) => p.slug === slug);
    return item || null;
  }

  async getStories(): Promise<EditorialStory[]> {
    return EDITORIAL_STORIES;
  }
}

export const headlessCMS = new HeadlessCMSClient();
