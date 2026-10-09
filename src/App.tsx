import React, { useState, useEffect } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { ShopHero } from './components/ShopHero';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { TechnologySection } from './components/TechnologySection';
import { Footer } from './components/Footer';
import { Product, ProductColorway, Category, FilterState } from './types';
import { headlessCMS } from './cms/headlessCms';
import { Sparkles, RotateCcw } from 'lucide-react';
import { AdminPanel } from './components/AdminPanel';

export function ShopApp() {
  const [isAdminView, setIsAdminView] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.location.pathname.startsWith('/admin') ||
      window.location.search.includes('view=admin') ||
      window.location.hash === '#admin'
    );
  });

  const [currentCategory, setCurrentCategory] = useState<Category>('men'); // Defaults to men like on.com/en-ch/shop/men
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Filter State
  const [filterState, setFilterState] = useState<FilterState>({
    category: 'men',
    activity: [],
    cushioning: [],
    sort: 'featured',
    searchQuery: '',
    inStockOnly: false
  });

  // Layout View Controls
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);

  // Modal states
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedInitialColorway, setSelectedInitialColorway] = useState<ProductColorway | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Listen for browser back/forward and URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      const isNowAdmin =
        window.location.pathname.startsWith('/admin') ||
        window.location.search.includes('view=admin') ||
        window.location.hash === '#admin';
      setIsAdminView(isNowAdmin);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    if (path.startsWith('/admin')) {
      window.history.pushState({}, '', '/admin');
      setIsAdminView(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      setIsAdminView(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync category change with filterState
  const handleSelectCategory = (cat: Category) => {
    setCurrentCategory(cat);
    setFilterState((prev) => ({
      ...prev,
      category: cat
    }));
  };

  const handleFilterChange = (updates: Partial<FilterState>) => {
    setFilterState((prev) => ({
      ...prev,
      ...updates
    }));
  };

  const handleResetFilters = () => {
    setFilterState({
      category: currentCategory,
      activity: [],
      cushioning: [],
      sort: 'featured',
      searchQuery: '',
      inStockOnly: false
    });
  };

  // Load products from headless CMS
  useEffect(() => {
    let isSubscribed = true;
    setIsLoading(true);

    headlessCMS
      .getProducts(filterState, true)
      .then((res) => {
        if (isSubscribed) {
          setProducts(res.data);
          setTotalCount(res.meta.total);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching CMS products:', err);
        if (isSubscribed) setIsLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [filterState, isAdminView]);

  const handleOpenDetails = (product: Product, initialColorway?: ProductColorway) => {
    setSelectedProduct(product);
    setSelectedInitialColorway(initialColorway);
  };

  const handleOpenFlagship = async () => {
    const flagship = await headlessCMS.getProductById('men-soule-cloudrush-2');
    if (flagship) {
      setSelectedProduct(flagship);
    }
  };

  const scrollToFootwear = () => {
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  // Compute CSS grid class based on gridCols
  const getGridColsClass = () => {
    if (gridCols === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8';
    if (gridCols === 4) return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6';
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8';
  };

  if (isAdminView) {
    return <AdminPanel onBackToStore={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#121212]">
      {/* Global Navigation Bar */}
      <Navbar
        currentCategory={currentCategory}
        onSelectCategory={handleSelectCategory}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToTech={() => {
          document.getElementById('innovation')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onNavigateToAdmin={() => navigateTo('/admin')}
      />

      {/* Editorial Category Showcase Banner */}
      <ShopHero
        category={currentCategory}
        onSelectCategory={handleSelectCategory}
        onOpenFlagship={handleOpenFlagship}
      />

      {/* Sticky Filter & Sort Bar */}
      <FilterBar
        filterState={filterState}
        onFilterChange={handleFilterChange}
        totalResults={totalCount}
        gridCols={gridCols}
        onGridColsChange={setGridCols}
        onResetFilters={handleResetFilters}
      />

      {/* Product Catalog Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {isLoading ? (
          <div className="py-24 text-center space-y-3">
            <div className="w-8 h-8 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
              Querying Swiss Headless CMS...
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="py-24 text-center max-w-md mx-auto space-y-4">
            <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-400">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-neutral-900">
                No styles match your filters
              </h3>
              <p className="text-xs text-neutral-500">
                Try selecting a different activity or clearing cushioning preferences.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-black text-white text-xs font-bold rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className={getGridColsClass()}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
        )}
      </main>

      {/* Swiss Engineering & Innovation Section */}
      <TechnologySection onExploreFootwear={scrollToFootwear} />

      {/* Minimalist Swiss Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigateToAdmin={() => navigateTo('/admin')}
      />

      {/* Product Detail Modal (High-fidelity Micro-Interactions) */}
      <ProductDetailModal
        product={selectedProduct}
        initialColorway={selectedInitialColorway}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Persistent Shopping Cart Slide-over Drawer */}
      <CartDrawer onStartCheckout={() => setIsCheckoutOpen(true)} />

      {/* Secure Payment Processing Checkout Simulation */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Instant Search Overlay */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => {
          setSelectedProduct(prod);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <ShopApp />
      </CartProvider>
    </CurrencyProvider>
  );
}
