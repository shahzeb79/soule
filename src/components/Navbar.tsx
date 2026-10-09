import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Category } from '../types';
import { SouleLogo } from './SouleLogo';

interface NavbarProps {
  currentCategory: Category;
  onSelectCategory: (category: Category) => void;
  onOpenSearch: () => void;
  onNavigateToTech?: () => void;
  onNavigateToAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCategory,
  onSelectCategory,
  onOpenSearch,
  onNavigateToTech,
  onNavigateToAdmin
}) => {
  const { totalItemsCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (cat: Category) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-colors">
      {/* Promotion Bar */}
      <div className="bg-[#121212] text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span>Engineered in Zurich</span>
        <span className="opacity-40">·</span>
        <span>Free nationwide delivery in Pakistan on orders over Rs. 5,000</span>
        <span className="opacity-40">·</span>
        <span className="text-neutral-300 hidden sm:inline">Use code <strong className="text-white underline decoration-dotted">SOULE10</strong> for 10% off</span>
      </div>

      {/* Main Navigation - 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('all')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="soule home"
          >
            <SouleLogo size={32} color="#0CB581" showText={true} />
          </button>
        </div>

        {/* Zone 2: 4-5 Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <button
            onClick={() => handleNavClick('men')}
            className={`transition-colors py-1 relative hover:text-black cursor-pointer ${
              currentCategory === 'men' ? 'text-black font-semibold' : ''
            }`}
          >
            Men
            {currentCategory === 'men' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('women')}
            className={`transition-colors py-1 relative hover:text-black cursor-pointer ${
              currentCategory === 'women' ? 'text-black font-semibold' : ''
            }`}
          >
            Women
            {currentCategory === 'women' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('kids')}
            className={`transition-colors py-1 relative hover:text-black cursor-pointer ${
              currentCategory === 'kids' ? 'text-black font-semibold' : ''
            }`}
          >
            Kids
            {currentCategory === 'kids' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>

          <button
            onClick={() => {
              if (onNavigateToTech) onNavigateToTech();
            }}
            className="transition-colors py-1 hover:text-black cursor-pointer"
          >
            Innovation
          </button>

          <button
            onClick={() => handleNavClick('all')}
            className={`transition-colors py-1 hover:text-black cursor-pointer ${
              currentCategory === 'all' ? 'text-black font-semibold' : ''
            }`}
          >
            All Footwear
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Search, Currency, Bag) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-medium"
            aria-label="Search footwear"
            title="Search (Press / to search)"
          >
            <Search className="w-4 h-4" />
            <span className="hidden lg:inline text-neutral-500">Search</span>
          </button>

          {/* Admin CMS Button */}
          {onNavigateToAdmin && (
            <button
              onClick={onNavigateToAdmin}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-black hover:text-white transition-all text-neutral-800 cursor-pointer"
              title="Open CMS Admin Panel (/admin)"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CB581]" />
              <span>Admin</span>
            </button>
          )}

          {/* Store Currency Badge (PKR Store) */}
          <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded bg-neutral-100 text-neutral-700">
            <span>PKR</span>
          </div>

          {/* Persistent Bag Button with Tabular Badge */}
          <button
            onClick={openCart}
            className="relative p-2.5 text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer group flex items-center"
            aria-label={`Shopping bag with ${totalItemsCount} items`}
          >
            <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-sm">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:bg-neutral-100 rounded-md cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-base font-medium">
            <button
              onClick={() => handleNavClick('all')}
              className="text-left py-2 border-b border-neutral-100 text-neutral-900"
            >
              All Shoes
            </button>
            <button
              onClick={() => handleNavClick('men')}
              className="text-left py-2 border-b border-neutral-100 text-neutral-900"
            >
              Men's Footwear
            </button>
            <button
              onClick={() => handleNavClick('women')}
              className="text-left py-2 border-b border-neutral-100 text-neutral-900"
            >
              Women's Footwear
            </button>
            <button
              onClick={() => handleNavClick('kids')}
              className="text-left py-2 border-b border-neutral-100 text-neutral-900"
            >
              Kids' Footwear
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToTech) onNavigateToTech();
              }}
              className="text-left py-2 text-neutral-900"
            >
              Swiss Zero-Gravity Innovation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
