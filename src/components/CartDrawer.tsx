import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { ShoeGraphic } from './ShoeGraphic';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  Truck
} from 'lucide-react';

interface CartDrawerProps {
  onStartCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onStartCheckout }) => {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItemsCount,
    subtotalCHF,
    discountRate,
    discountCode,
    applyDiscountCode,
    shippingCostCHF,
    freeShippingThresholdCHF,
    totalCHF
  } = useCart();

  const { formatPrice } = useCurrency();
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ success: boolean; text: string } | null>(null);

  if (!isOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyDiscountCode(promoInput);
    setPromoMessage({ success: res.success, text: res.message });
    if (res.success) {
      setPromoInput('');
    }
  };

  // Progress towards free shipping
  const shippingProgressPct = Math.min(100, Math.round((subtotalCHF / freeShippingThresholdCHF) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThresholdCHF - subtotalCHF);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl border-l border-neutral-200 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-neutral-800" />
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
              Your Shopping Bag
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 bg-neutral-100 rounded-full text-neutral-600 tabular-nums">
              {totalItemsCount}
            </span>
          </div>

          <button
            onClick={closeCart}
            className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-5 py-3 bg-neutral-50 border-b border-neutral-200/80">
          <div className="flex items-center justify-between text-xs font-medium mb-1.5">
            <div className="flex items-center gap-1.5 text-neutral-700">
              <Truck className="w-3.5 h-3.5 text-neutral-800" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-emerald-700 font-bold">Free Swiss shipping unlocked!</span>
              ) : (
                <span>
                  Add <strong className="text-neutral-900 tabular-nums">{formatPrice(remainingForFreeShipping)}</strong> for free shipping
                </span>
              )}
            </div>
            <span className="text-[11px] text-neutral-400 font-mono">{shippingProgressPct}%</span>
          </div>

          <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                remainingForFreeShipping === 0 ? 'bg-emerald-600' : 'bg-neutral-900'
              }`}
              style={{ width: `${shippingProgressPct}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-neutral-100 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-900">Your bag is empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs">
                  Discover our engineered zero-gravity footwear collection and experience running on clouds.
                </p>
              </div>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 bg-black text-white text-xs font-bold rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Explore Footwear
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartItemId} className="pt-4 first:pt-0 flex gap-4">
                {/* Item Thumbnail */}
                <div className="w-20 h-20 bg-neutral-100 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-neutral-200/60">
                  {item.selectedColorway.image ? (
                    <img
                      src={item.selectedColorway.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <ShoeGraphic
                      primaryColor={item.selectedColorway.primaryColorHex}
                      accentColor={item.selectedColorway.accentColorHex}
                      angle="side"
                      className="w-full h-full p-1"
                    />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-neutral-900 tracking-tight">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs text-neutral-500 space-y-0.5 mt-0.5">
                      <p>Size: <strong className="text-neutral-800">{item.selectedSize.us}</strong> ({item.selectedSize.eu})</p>
                      <p className="truncate">Color: {item.selectedColorway.name}</p>
                    </div>
                  </div>

                  {/* Quantity Stepper & Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="p-1.5 hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
                        title="Decrease"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-bold tabular-nums text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="p-1.5 hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
                        title="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-sm font-bold tabular-nums text-neutral-900">
                      {formatPrice(item.product.priceCHF * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Calculations & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-neutral-200 bg-neutral-50/70 space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="space-y-1.5">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code (try SOULE10)"
                    className="w-full bg-white text-xs pl-8 pr-3 py-2 border border-neutral-200 rounded-lg uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>

              {promoMessage && (
                <p
                  className={`text-[11px] font-medium ${
                    promoMessage.success ? 'text-emerald-600' : 'text-red-500'
                  }`}
                >
                  {promoMessage.text}
                </p>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold tabular-nums text-neutral-900">
                  {formatPrice(subtotalCHF)}
                </span>
              </div>

              {discountRate > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Discount ({discountCode})</span>
                  <span className="tabular-nums">-{formatPrice(subtotalCHF * discountRate)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Carbon-Neutral Shipping</span>
                <span className="font-semibold tabular-nums text-neutral-900">
                  {shippingCostCHF === 0 ? 'FREE' : formatPrice(shippingCostCHF)}
                </span>
              </div>

              <div className="pt-2 border-t border-neutral-200 flex justify-between text-sm font-extrabold text-neutral-900">
                <span>Total</span>
                <span className="tabular-nums text-base">{formatPrice(totalCHF)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                closeCart();
                onStartCheckout();
              }}
              className="w-full py-3.5 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>Secure Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
              <span>256-Bit SSL Encrypted · 30-Day Money Back</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
