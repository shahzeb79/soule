import React from 'react';
import { X, Award, ShieldCheck, Sparkles, MapPin, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SouleLogo } from './SouleLogo';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export const AboutUsModal: React.FC<AboutUsModalProps> = ({
  isOpen,
  onClose,
  onOpenContact
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SouleLogo size={24} color="#0CB581" showText={true} />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-l border-neutral-200 pl-3">
              About Us
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10 text-neutral-800">
          {/* Hero Section */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/60 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#0CB581]" />
              <span>Born in the Swiss Alps · Engineered for Pakistan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Igniting the human spirit through the motion of running.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              soule was founded with one radical ambition: to revolutionize the sensation of running.
              Combining minimalist Swiss design engineering with cutting-edge athletic biomechanics,
              our footwear delivers cushioned landings and explosive, propulsive take-offs on every terrain.
            </p>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0CB581]" />
              </div>
              <h3 className="font-extrabold text-base text-neutral-900">SouleFoam™ Dual Core</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our proprietary zero-gravity cushioning absorbs vertical shock and converts it immediately into forward kinetic propulsion.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                <Award className="w-5 h-5 text-[#0CB581]" />
              </div>
              <h3 className="font-extrabold text-base text-neutral-900">Carbon Speedboard®</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A flex-tuned carbon composite transition plate engineered to flex naturally with every foot strike for effortless speed.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#0CB581]" />
              </div>
              <h3 className="font-extrabold text-base text-neutral-900">Precision Fit & Comfort</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Breathable engineered mesh uppers, ergonomic heel lock collar, and speed-lacing that adapts seamlessly to your foot profile.
              </p>
            </div>
          </div>

          {/* Pakistan Operations & Commitment */}
          <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl space-y-6 relative overflow-hidden">
            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0CB581]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nationwide Presence in Pakistan</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Official soule Flagship Footwear in Pakistan
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We are proud to serve the runner, athlete, and urban explorer community across Pakistan.
                All inventory is priced transparently in Pakistani Rupees (PKR) with localized customer support,
                nationwide dispatch via reliable courier networks (TCS, Leopard Express), and Cash on Delivery (COD) availability.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0CB581] shrink-0" />
                  <span>Free delivery over Rs. 5,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0CB581] shrink-0" />
                  <span>Cash on Delivery (COD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0CB581] shrink-0" />
                  <span>7-Day Easy Size Exchange</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability & Values */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#0CB581]" />
              <span>Sustainable Craftsmanship & Circular Vision</span>
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We engineer our performance shoes to tread lightly on the planet. Over 90% of our polyester materials
              are recycled, our foam midsoles utilize bio-based castor bean composites, and every pair is crafted
              to withstand thousands of kilometers of rigorous training and daily wear.
            </p>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500">
              Have questions about sizing, materials, or order status?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {onOpenContact && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Open Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
