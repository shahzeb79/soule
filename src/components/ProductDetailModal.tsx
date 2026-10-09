import React, { useState, useEffect } from 'react';
import { Product, ProductColorway, ProductSize } from '../types';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { ShoeGraphic } from './ShoeGraphic';
import {
  X,
  Check,
  Star,
  Shield,
  RotateCw,
  Ruler,
  ChevronRight,
  Sparkles,
  Zap,
  Leaf,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  initialColorway?: ProductColorway;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  initialColorway,
  isOpen,
  onClose
}) => {
  if (!isOpen || !product) return null;

  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  const [selectedColorway, setSelectedColorway] = useState<ProductColorway>(
    initialColorway || product.colorways[0]
  );
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(() => {
    return product.sizes.find((s) => s.inStock) || null;
  });

  const [activeAngle, setActiveAngle] = useState<string>('side');
  const [isRotating, setIsRotating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<'tech' | 'specs' | 'reviews'>('tech');
  const [imageError, setImageError] = useState(false);

  // Reset imageError and angle when colorway changes
  useEffect(() => {
    setImageError(false);
    setActiveAngle('side');
  }, [selectedColorway.id]);

  const angleDefinitions = [
    { id: 'side', label: 'Side Profile', shortLabel: 'Side' },
    { id: 'perspective', label: '3/4 Dynamic', shortLabel: '3/4 Dynamic' },
    { id: 'top', label: 'Top Down', shortLabel: 'Top' },
    { id: 'sole', label: 'Cloud Sole', shortLabel: 'Sole' },
    { id: 'front', label: 'Front Toe', shortLabel: 'Front' },
    { id: 'back', label: 'Heel Back', shortLabel: 'Heel' },
  ];

  const getAngleImageUrl = (ang: string): string | null => {
    if (ang.startsWith('extra-')) {
      const idx = parseInt(ang.replace('extra-', ''), 10);
      if (selectedColorway.additionalImages && selectedColorway.additionalImages[idx]) {
        return selectedColorway.additionalImages[idx];
      }
    }
    if (selectedColorway.angles && (selectedColorway.angles as any)[ang]) {
      return (selectedColorway.angles as any)[ang] || null;
    }
    if (ang === 'side' && selectedColorway.image) {
      return selectedColorway.image;
    }
    return null;
  };

  const currentAngleImageUrl = getAngleImageUrl(activeAngle);

  // Available angles with images
  const allAnglesList = angleDefinitions.filter(a => {
    // Show if has image, or is one of core angles
    return Boolean(getAngleImageUrl(a.id)) || ['side', 'perspective', 'top', 'sole'].includes(a.id);
  });

  const handleAngleCycle = () => {
    setIsRotating(true);
    const availableAngleIds = allAnglesList.map((a) => a.id);
    const nextIdx = (availableAngleIds.indexOf(activeAngle) + 1) % availableAngleIds.length;
    setActiveAngle(availableAngleIds[nextIdx]);
    setTimeout(() => setIsRotating(false), 300);
  };

  const handleAddToBag = () => {
    if (!selectedSize || !selectedSize.inStock) return;

    setIsAdding(true);
    setTimeout(() => {
      addToCart(product, selectedColorway, selectedSize, 1);
      setIsAdding(false);
      setAddSuccess(true);
      setTimeout(() => setAddSuccess(false), 2000);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-black transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* ==================================================== */}
          {/* LEFT COLUMN: Interactive Multi-Angle Footwear Gallery (7 cols) */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 bg-[#F6F6F8] p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200">
            {/* Top Bar inside gallery */}
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span className="font-semibold uppercase tracking-wider text-neutral-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Multi-Angle Studio · {angleDefinitions.find(a => a.id === activeAngle)?.label || 'View'}</span>
              </span>
              <button
                onClick={handleAngleCycle}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-2xs border border-neutral-200 text-neutral-800 font-semibold hover:border-black transition-all cursor-pointer"
                title="Rotate View"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
                <span>Cycle Angles</span>
              </button>
            </div>

            {/* Main Stage Display */}
            <div className="my-6 sm:my-8 relative aspect-[4/3] flex items-center justify-center">
              <div
                className={`w-full h-full flex items-center justify-center transition-all duration-300 ${
                  isRotating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                }`}
              >
                {/* Check if current angle has an uploaded photo */}
                {currentAngleImageUrl && !imageError ? (
                  <img
                    key={`${selectedColorway.id}-${activeAngle}`}
                    src={currentAngleImageUrl}
                    alt={`${product.name} - ${selectedColorway.name} (${activeAngle} view)`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-contain filter drop-shadow-xl animate-fadeIn"
                  />
                ) : selectedColorway.image && !imageError ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={selectedColorway.image}
                      alt={`${product.name} - ${selectedColorway.name}`}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-contain filter drop-shadow-xl"
                    />
                    {activeAngle !== 'side' && (
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 text-white rounded text-[10px] font-semibold backdrop-blur-xs">
                        Viewing Primary Angle
                      </div>
                    )}
                  </div>
                ) : (
                  <ShoeGraphic
                    primaryColor={selectedColorway.primaryColorHex}
                    accentColor={selectedColorway.accentColorHex}
                    angle={(activeAngle as any) || 'side'}
                    className="w-full h-full filter drop-shadow-lg"
                  />
                )}
              </div>
            </div>

            {/* Multi-Angle Interactive Thumbnail Ribbon & Angle Buttons */}
            <div className="space-y-3 pt-3 border-t border-neutral-200/70">
              {/* Thumbnail Strip for Multi-Angle Images */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider shrink-0 mr-1">
                  Angles:
                </span>
                {allAnglesList.map((ang) => {
                  const imgUrl = getAngleImageUrl(ang.id);
                  const isSelected = activeAngle === ang.id;
                  return (
                    <button
                      key={ang.id}
                      onClick={() => setActiveAngle(ang.id)}
                      className={`group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                        isSelected
                          ? 'bg-neutral-900 text-white border-black shadow-xs ring-2 ring-black/20'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-black hover:bg-neutral-50'
                      }`}
                      title={ang.label}
                    >
                      {/* Mini Thumbnail */}
                      <div className="w-6 h-6 rounded bg-neutral-100 border border-neutral-200 overflow-hidden flex items-center justify-center shrink-0">
                        {imgUrl ? (
                          <img
                            src={imgUrl}
                            alt={ang.label}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-[8px] font-bold text-neutral-400">CAD</span>
                        )}
                      </div>
                      <span>{ang.shortLabel}</span>
                      {imgUrl && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="Photo available" />
                      )}
                    </button>
                  );
                })}

                {/* Additional gallery images if present */}
                {selectedColorway.additionalImages?.map((extraImg, idx) => (
                  <button
                    key={`extra-${idx}`}
                    onClick={() => setActiveAngle(`extra-${idx}`)}
                    className={`group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                      activeAngle === `extra-${idx}`
                        ? 'bg-neutral-900 text-white border-black shadow-xs ring-2 ring-black/20'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-black hover:bg-neutral-50'
                    }`}
                  >
                    <div className="w-6 h-6 rounded bg-neutral-100 border border-neutral-200 overflow-hidden shrink-0">
                      <img src={extraImg} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <span>Angle {idx + 1}</span>
                  </button>
                ))}
              </div>

              {/* Sustainability Callout */}
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium">{product.sustainability.recycledContent}</span>
                </div>
                <span className="text-[11px] text-neutral-400">High-Resolution Angles</span>
              </div>
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: Contiguous Purchase Module (5 cols)   */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-white space-y-6">
            <div className="space-y-6">
              {/* Category, Rating & Title */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    {product.gender} · {product.activity}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-neutral-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-neutral-400">({product.reviewCount})</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight">
                  {product.name}
                </h2>

                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold tabular-nums text-neutral-900">
                    {formatPrice(product.priceCHF)}
                  </span>
                  <span className="text-xs text-neutral-500">
                    All taxes incl. · Free nationwide delivery in Pakistan on orders over Rs. 5,000
                  </span>
                </div>
              </div>

              {/* Colorway Selector */}
              <div className="space-y-2.5 pt-2 border-t border-neutral-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-700">
                    Color: <span className="font-normal text-neutral-500">{selectedColorway.name}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colorways.map((cw) => {
                    const isSelected = selectedColorway.id === cw.id;
                    return (
                      <button
                        key={cw.id}
                        onClick={() => setSelectedColorway(cw)}
                        className={`group relative p-1 rounded-full transition-all cursor-pointer ${
                          isSelected ? 'ring-2 ring-black ring-offset-2' : 'hover:scale-105'
                        }`}
                      >
                        <span
                          className="w-7 h-7 rounded-full border border-neutral-300 block shadow-inner"
                          style={{ backgroundColor: cw.primaryColorHex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector Grid */}
              <div className="space-y-2.5 pt-2 border-t border-neutral-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-700">
                    Select Size ({product.gender === 'kids' ? 'Kids' : product.gender}):
                  </span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="inline-flex items-center gap-1 text-neutral-600 hover:text-black font-semibold underline decoration-dotted cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size & Fit Guide</span>
                  </button>
                </div>

                {/* Sizing Interactive Table / Popover */}
                {showSizeGuide && (
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-2 animate-fadeIn">
                    <div className="flex items-center justify-between font-bold text-neutral-800">
                      <span>Swiss Fit Recommendation:</span>
                      <span className="text-emerald-700 font-semibold">True to Size</span>
                    </div>
                    <p className="text-neutral-500">
                      For long-distance runs ({'>'}10k), we suggest choosing a half-size larger to accommodate foot expansion.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {product.sizes.map((s) => {
                    const isSelected = selectedSize?.size === s.size;
                    return (
                      <button
                        key={s.size}
                        disabled={!s.inStock}
                        onClick={() => setSelectedSize(s)}
                        className={`py-3 px-2 rounded-xl text-center font-bold text-xs transition-all cursor-pointer border ${
                          !s.inStock
                            ? 'bg-neutral-100 text-neutral-300 border-neutral-200 line-through cursor-not-allowed'
                            : isSelected
                            ? 'bg-black text-white border-black shadow-md ring-2 ring-black ring-offset-1'
                            : 'bg-white text-neutral-800 border-neutral-200 hover:border-black'
                        }`}
                      >
                        <div>{s.us}</div>
                        <div className={`text-[10px] font-normal ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                          {s.eu}
                        </div>
                        {s.stockCount && s.stockCount <= 3 && (
                          <div className="text-[9px] text-amber-500 font-semibold mt-0.5">
                            Only {s.stockCount} left
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Add to Bag CTA Button (Contiguous Action) */}
              <div className="pt-2">
                <button
                  disabled={!selectedSize || !selectedSize.inStock || isAdding}
                  onClick={handleAddToBag}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99] ${
                    addSuccess
                      ? 'bg-emerald-600 text-white'
                      : !selectedSize
                      ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                      : 'bg-neutral-900 hover:bg-black text-white hover:shadow-xl'
                  }`}
                >
                  {isAdding ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : addSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Your Shopping Bag!</span>
                    </>
                  ) : (
                    <>
                      <span>Add to Bag</span>
                      <span className="opacity-40">·</span>
                      <span className="tabular-nums">{formatPrice(product.priceCHF)}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Risk-free Guarantee Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs text-neutral-600 pt-2">
                <div className="flex items-center gap-2 p-2.5 bg-neutral-50 rounded-lg">
                  <Shield className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>30-Day Free Trail & Returns</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-neutral-50 rounded-lg">
                  <Zap className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>Dispatched in 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Bottom Tabs: Tech, Specs & Reviews */}
            <div className="pt-6 border-t border-neutral-100">
              <div className="flex items-center gap-4 border-b border-neutral-200 text-xs font-semibold pb-2">
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`pb-2 -mb-2 border-b-2 cursor-pointer ${
                    activeTab === 'tech' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  Technology
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 -mb-2 border-b-2 cursor-pointer ${
                    activeTab === 'specs' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  Tech Specs
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 -mb-2 border-b-2 cursor-pointer ${
                    activeTab === 'reviews' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  Reviews ({product.reviewCount})
                </button>
              </div>

              <div className="pt-4 text-xs">
                {activeTab === 'tech' && (
                  <div className="space-y-3 animate-fadeIn">
                    <p className="text-neutral-700 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-2 pt-1">
                      {product.technologies.map((tech, idx) => (
                        <div key={idx} className="p-2.5 bg-neutral-50 rounded-lg">
                          <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
                            {tech.name}
                          </h4>
                          <p className="text-neutral-600 mt-0.5">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="space-y-2 animate-fadeIn divide-y divide-neutral-100">
                    <div className="flex justify-between py-1.5 text-neutral-700">
                      <span className="text-neutral-400">Weight:</span>
                      <span className="font-semibold tabular-nums">{product.weight}</span>
                    </div>
                    <div className="flex justify-between py-1.5 text-neutral-700">
                      <span className="text-neutral-400">Heel-to-Toe Drop:</span>
                      <span className="font-semibold tabular-nums">{product.heelDrop}</span>
                    </div>
                    <div className="flex justify-between py-1.5 text-neutral-700">
                      <span className="text-neutral-400">Cushioning Level:</span>
                      <span className="font-semibold">{product.cushioning}</span>
                    </div>
                    <div className="flex justify-between py-1.5 text-neutral-700">
                      <span className="text-neutral-400">Stability Profile:</span>
                      <span className="font-semibold">{product.stability}</span>
                    </div>
                    <div className="flex justify-between py-1.5 text-neutral-700">
                      <span className="text-neutral-400">Lacing System:</span>
                      <span className="font-semibold">{product.lacing}</span>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-neutral-900 tabular-nums">
                          {product.rating} / 5.0
                        </div>
                        <p className="text-neutral-500 text-[11px]">Based on {product.reviewCount} runner ratings</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          98% Recommended
                        </span>
                      </div>
                    </div>
                    <div className="p-2.5 border border-neutral-100 rounded-lg space-y-1">
                      <div className="flex items-center justify-between text-neutral-800 font-semibold">
                        <span>Marc B. · Verified Marathoner</span>
                        <span className="text-neutral-400 text-[10px]">2 weeks ago</span>
                      </div>
                      <p className="text-neutral-600">
                        "The cloud pods eliminate the usual knee stiffness on 25km weekend asphalt runs. Unbelievable return on speed workouts."
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
