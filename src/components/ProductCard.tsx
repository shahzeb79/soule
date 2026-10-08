import React, { useState } from 'react';
import { Product, ProductColorway, ProductSize } from '../types';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { ShoeGraphic } from './ShoeGraphic';
import { Check, Plus, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product, initialColorway?: ProductColorway) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails
}) => {
  const [selectedColorway, setSelectedColorway] = useState<ProductColorway>(
    product.colorways[0]
  );
  const [hoveredColorway, setHoveredColorway] = useState<ProductColorway | null>(null);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [recentlyAddedSize, setRecentlyAddedSize] = useState<string | null>(null);

  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  const activeColorway = hoveredColorway || selectedColorway;

  const handleQuickAdd = (size: ProductSize, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!size.inStock) return;

    addToCart(product, activeColorway, size, 1);
    setRecentlyAddedSize(size.size);
    setTimeout(() => {
      setRecentlyAddedSize(null);
      setIsQuickAddOpen(false);
    }, 1200);
  };

  return (
    <div
      onClick={() => onOpenDetails(product, activeColorway)}
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-neutral-200/70 hover:border-neutral-300 transition-all duration-300 cursor-pointer hover:shadow-lg"
    >
      {/* Visual Container (65-70% height with clean neutral background) */}
      <div className="relative aspect-[4/3] w-full bg-[#F5F5F7] overflow-hidden flex items-center justify-center p-6 transition-colors">
        {/* Subtle Badge (Anti-slop clean text) */}
        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs z-10">
            {product.badge}
          </span>
        )}

        {/* Quick View Button on top right hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(product, activeColorway);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs text-neutral-700 opacity-0 group-hover:opacity-100 hover:text-black hover:scale-105 transition-all shadow-2xs z-10"
          title="Quick View"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Shoe Image / Graphic */}
        <div className="w-full h-full flex items-center justify-center relative transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          {activeColorway.image ? (
            <img
              src={activeColorway.image}
              alt={`${product.name} - ${activeColorway.name}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          ) : (
            <ShoeGraphic
              primaryColor={activeColorway.primaryColorHex}
              accentColor={activeColorway.accentColorHex}
              angle="side"
              className="w-full h-full"
            />
          )}
        </div>

        {/* Quick Add Slide-Up Drawer Overlay */}
        {isQuickAddOpen && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md p-3 border-t border-neutral-200 shadow-lg z-20 animate-fadeIn"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-neutral-800 uppercase tracking-wider">
                Select Size ({product.gender}):
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsQuickAddOpen(false);
                }}
                className="text-[11px] text-neutral-400 hover:text-black font-bold"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 max-h-32 overflow-y-auto">
              {product.sizes.map((s) => (
                <button
                  key={s.size}
                  disabled={!s.inStock}
                  onClick={(e) => handleQuickAdd(s, e)}
                  className={`py-1.5 px-1 text-[11px] font-semibold rounded text-center transition-all ${
                    !s.inStock
                      ? 'bg-neutral-100 text-neutral-300 line-through cursor-not-allowed'
                      : recentlyAddedSize === s.size
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border border-neutral-200'
                  }`}
                >
                  {recentlyAddedSize === s.size ? <Check className="w-3 h-3 mx-auto" /> : s.us.replace('US ', '')}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white space-y-3">
        {/* Top: Color Swatches & Category Info */}
        <div className="space-y-1.5">
          {/* Colorway Switcher Dots */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.colorways.map((cw) => {
                const isSelected = activeColorway.id === cw.id;
                return (
                  <button
                    key={cw.id}
                    onMouseEnter={() => setHoveredColorway(cw)}
                    onMouseLeave={() => setHoveredColorway(null)}
                    onClick={() => setSelectedColorway(cw)}
                    className={`w-3.5 h-3.5 rounded-full border transition-all ${
                      isSelected
                        ? 'ring-1.5 ring-black ring-offset-1 border-transparent scale-110'
                        : 'border-neutral-300 hover:scale-110'
                    }`}
                    style={{ backgroundColor: cw.primaryColorHex }}
                    title={cw.name}
                    aria-label={cw.name}
                  />
                );
              })}
              <span className="text-[11px] text-neutral-400 ml-1">
                {product.colorways.length} colors
              </span>
            </div>

            {/* Quick Add Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsQuickAddOpen(!isQuickAddOpen);
              }}
              className="text-xs font-semibold text-neutral-700 hover:text-black flex items-center gap-1 p-1 hover:bg-neutral-100 rounded transition-colors"
              title="Quick Add to Bag"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Quick Add</span>
            </button>
          </div>

          {/* Activity & Cushioning Kicker */}
          <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
            {product.subCategory} · {product.cushioning}
          </p>

          {/* Product Name */}
          <h3 className="text-base font-bold text-neutral-900 group-hover:text-black tracking-tight leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Bottom: Price in Tabular Numerals */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-sm font-semibold tabular-nums text-neutral-900">
            {formatPrice(product.priceCHF)}
          </span>
          <span className="text-[11px] text-neutral-400">
            {product.weight.split('/')[0].trim()}
          </span>
        </div>
      </div>
    </div>
  );
};
