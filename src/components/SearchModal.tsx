import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { Product } from '../types';
import { headlessCMS } from '../cms/headlessCms';
import { useCurrency } from '../context/CurrencyContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatPrice } = useCurrency();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        // open search trigger
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Live search debounced
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      const res = await headlessCMS.getProducts({ searchQuery: query });
      setResults(res.data);
      setIsLoading(false);
    }, 120);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-5 py-4 border-b border-neutral-100">
          <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by shoe name, road, trail, kid, cushion..."
            className="w-full bg-transparent text-base sm:text-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-mono text-neutral-400 bg-neutral-100 rounded border border-neutral-200">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            className="ml-3 p-1.5 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="p-5 bg-neutral-50/50">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {['CloudRush', 'Waterproof Trail', 'Women Plush', 'Kids MiniStrider', 'Marathon Speed', 'All Day'].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-neutral-700 hover:border-black hover:text-black transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-neutral-100 p-2">
          {isLoading ? (
            <div className="py-12 text-center text-sm text-neutral-400">
              Searching Swiss shoe catalog...
            </div>
          ) : query && results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-neutral-700">No shoes matching "{query}"</p>
              <p className="text-xs text-neutral-400 mt-1">Try searching "Road", "Trail", "Plush" or "Kid"</p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                    {product.colorways[0]?.image ? (
                      <img
                        src={product.colorways[0].image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full border border-neutral-300 bg-white" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-black flex items-center gap-2">
                      {product.name}
                      <span className="text-[11px] font-normal text-neutral-500 uppercase tracking-wider">
                        ({product.gender})
                      </span>
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {product.activity} · {product.cushioning} Cushioning · {product.weight}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tabular-nums text-neutral-900">
                    {formatPrice(product.priceCHF)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
