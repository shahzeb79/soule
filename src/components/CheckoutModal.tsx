import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { CheckoutFormData, OrderConfirmation } from '../types';
import {
  X,
  CreditCard,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Truck,
  ArrowRight,
  Sparkles,
  RotateCcw,
  PackageCheck
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose
}) => {
  const {
    items,
    subtotalCHF,
    discountRate,
    discountCode,
    shippingCostCHF,
    totalCHF,
    clearCart
  } = useCart();

  const { formatPrice, currency } = useCurrency();

  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Switzerland',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<OrderConfirmation | null>(null);

  if (!isOpen) return null;

  // Auto-fill demo details for rapid testing
  const handleFillDemoData = () => {
    setFormData({
      email: 'alex.huber@zurich.run',
      firstName: 'Alexandre',
      lastName: 'Huber',
      address: 'Gotthardstrasse 24',
      city: 'Zurich',
      postalCode: '8002',
      country: 'Switzerland',
      shippingMethod: 'standard',
      paymentMethod: 'card',
      cardNumber: '4242 •••• •••• 4242',
      cardExpiry: '08/28',
      cardCvc: '884',
      cardName: 'Alexandre Huber'
    });
  };

  const handleCardNumberChange = (val: string) => {
    // Basic formatting
    const raw = val.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(\d{4})/g, '$1 ').trim();
    setFormData((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setProcessingStep('Connecting to secure banking gateway...');

    setTimeout(() => {
      setProcessingStep('Authorizing 3D-Secure 2.0 verification...');
    }, 800);

    setTimeout(() => {
      setProcessingStep('Confirming order with Soule Zurich...');
    }, 1600);

    setTimeout(() => {
      const orderNumber = `SLE-${Math.floor(10000 + Math.random() * 90000)}`;
      const confirmation: OrderConfirmation = {
        orderNumber,
        date: new Date().toLocaleDateString('en-CH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        items: [...items],
        subtotal: subtotalCHF,
        discount: subtotalCHF * discountRate,
        shipping: shippingCostCHF,
        total: totalCHF,
        currency,
        shippingDetails: { ...formData },
        estimatedDelivery: '2 business days (Swiss Post Priority)'
      };

      setConfirmedOrder(confirmation);
      setIsProcessing(false);
      clearCart();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-neutral-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-sm tracking-wide">
              SOULE SECURE CHECKOUT
            </span>
            <span className="text-xs text-neutral-400 hidden sm:inline">
              · 256-Bit Encrypted Sandbox
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ========================================================= */}
        {/* VIEW 1: Order Confirmation Receipt View                   */}
        {/* ========================================================= */}
        {confirmedOrder ? (
          <div className="p-6 sm:p-10 space-y-6 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                Payment Authorized Successfully
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 pt-2">
                Thank you for your order, {confirmedOrder.shippingDetails.firstName}!
              </h2>
              <p className="text-sm text-neutral-500">
                Order <strong className="text-neutral-900 font-mono">{confirmedOrder.orderNumber}</strong> has been routed to our Zurich fulfillment center.
              </p>
            </div>

            {/* Tracking Status Timeline */}
            <div className="max-w-lg mx-auto bg-neutral-50 rounded-xl p-4 border border-neutral-200 text-left space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-700">
                <span>Swiss Carbon-Neutral Delivery</span>
                <span className="text-emerald-700 font-bold">{confirmedOrder.estimatedDelivery}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-medium pt-2">
                <div className="p-2 bg-emerald-50 text-emerald-800 rounded border border-emerald-200">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mx-auto mb-1" />
                  <span>1. Confirmed</span>
                </div>
                <div className="p-2 bg-neutral-100 text-neutral-600 rounded">
                  <div className="w-2 h-2 rounded-full bg-neutral-400 mx-auto mb-1" />
                  <span>2. Assembled</span>
                </div>
                <div className="p-2 bg-neutral-100 text-neutral-600 rounded">
                  <div className="w-2 h-2 rounded-full bg-neutral-400 mx-auto mb-1" />
                  <span>3. Dispatched</span>
                </div>
              </div>
            </div>

            {/* Itemized Receipt Summary */}
            <div className="max-w-lg mx-auto border border-neutral-200 rounded-xl divide-y divide-neutral-100 text-left text-xs">
              <div className="p-3 bg-neutral-100/60 font-bold text-neutral-800 flex justify-between">
                <span>Receipt Summary</span>
                <span className="font-mono">{confirmedOrder.items.length} items</span>
              </div>
              <div className="p-3 space-y-2 max-h-40 overflow-y-auto">
                {confirmedOrder.items.map((it) => (
                  <div key={it.cartItemId} className="flex justify-between">
                    <div>
                      <p className="font-semibold text-neutral-900">{it.product.name} ({it.selectedSize.us})</p>
                      <p className="text-neutral-500 text-[11px]">Qty: {it.quantity} · {it.selectedColorway.name}</p>
                    </div>
                    <span className="tabular-nums font-semibold">
                      {formatPrice(it.product.priceCHF * it.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-neutral-50 flex justify-between font-bold text-sm text-neutral-900">
                <span>Total Paid</span>
                <span className="tabular-nums">{formatPrice(confirmedOrder.total)}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-black hover:bg-neutral-800 text-white text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : isProcessing ? (
          /* ========================================================= */
          /* VIEW 2: Realistic Payment Processing Screen               */
          /* ========================================================= */
          <div className="p-16 flex flex-col items-center justify-center space-y-6 text-center animate-fadeIn">
            <div className="relative w-16 h-16">
              <div className="w-16 h-16 rounded-full border-4 border-neutral-200 border-t-black animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-5 h-5 text-neutral-700" />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-neutral-900">Processing Dummy Payment</h3>
              <p className="text-xs text-neutral-500 font-mono animate-pulse">
                {processingStep}
              </p>
            </div>

            <p className="text-[11px] text-neutral-400 max-w-xs">
              Simulating encrypted bank gateway handshake. Please do not close this window.
            </p>
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 3: Checkout Payment & Address Form                   */
          /* ========================================================= */
          <form onSubmit={handleSubmitPayment} className="p-6 sm:p-8 space-y-6">
            {/* Quick Demo Autofill Helper */}
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neutral-700" />
                <span className="text-xs font-semibold text-neutral-800">
                  Quick Prototype Mode:
                </span>
              </div>
              <button
                type="button"
                onClick={handleFillDemoData}
                className="text-xs px-3 py-1 bg-white hover:bg-black hover:text-white text-neutral-800 font-bold border border-neutral-300 rounded-lg transition-all cursor-pointer shadow-2xs"
              >
                Auto-Fill Swiss Demo Details
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Shipping Address */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Truck className="w-4 h-4" />
                  <span>1. Delivery Destination</span>
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="runner@soule.ch"
                    className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Alex"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Huber"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Gotthardstrasse 24"
                    className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Zurich"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="8002"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Dummy Secure Payment Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" />
                  <span>2. Payment Processing</span>
                </h3>

                {/* Simulated Payment Cards / Apple Pay Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      formData.paymentMethod === 'card'
                        ? 'border-black bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700'
                    }`}
                  >
                    Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'apple-pay' })}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      formData.paymentMethod === 'apple-pay'
                        ? 'border-black bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700'
                    }`}
                  >
                    Apple Pay / GPay
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => handleCardNumberChange(e.target.value)}
                      placeholder="4242 4242 4242 4242"
                      className="w-full text-xs p-2.5 pr-8 border border-neutral-300 rounded-lg font-mono focus:outline-none focus:border-black"
                    />
                    <CreditCard className="w-4 h-4 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      value={formData.cardExpiry}
                      onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                      placeholder="12/28"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg font-mono focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      CVC / CVV
                    </label>
                    <input
                      type="password"
                      required
                      maxLength={4}
                      value={formData.cardCvc}
                      onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                      placeholder="•••"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg font-mono focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* Total Summary */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-1.5">
                  <div className="flex justify-between text-neutral-600">
                    <span>Order Subtotal ({items.length} items)</span>
                    <span className="tabular-nums font-semibold">{formatPrice(subtotalCHF)}</span>
                  </div>
                  {discountRate > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Promo Discount ({discountCode})</span>
                      <span className="tabular-nums">-{formatPrice(subtotalCHF * discountRate)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-600">
                    <span>Swiss Priority Shipping</span>
                    <span className="tabular-nums font-semibold">
                      {shippingCostCHF === 0 ? 'FREE' : formatPrice(shippingCostCHF)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-neutral-200 flex justify-between font-extrabold text-sm text-neutral-900">
                    <span>Amount Due</span>
                    <span className="tabular-nums text-base">{formatPrice(totalCHF)}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:shadow-xl"
                >
                  <Lock className="w-4 h-4" />
                  <span>Pay {formatPrice(totalCHF)} (Simulate)</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Simulated test mode · No real charge occurs</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
