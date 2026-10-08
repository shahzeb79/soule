import React from 'react';
import { Category, Product } from '../types';
import { HERO_CAMPAIGN_IMG } from '../cms/productsData';
import { ArrowUpRight, Zap, ShieldCheck, Sparkles } from 'lucide-react';

interface ShopHeroProps {
  category: Category;
  onSelectCategory: (cat: Category) => void;
  onOpenFlagship: () => void;
}

export const ShopHero: React.FC<ShopHeroProps> = ({
  category,
  onSelectCategory,
  onOpenFlagship
}) => {
  const getTitles = () => {
    switch (category) {
      case 'men':
        return {
          title: "Men's Performance Shoes",
          subtitle: "Swiss-engineered running, trail, and all-day shoes with zero-gravity cushioning."
        };
      case 'women':
        return {
          title: "Women's Performance Shoes",
          subtitle: "Biomechanically engineered for the female foot: plush landings, explosive energy return."
        };
      case 'kids':
        return {
          title: "Kids' Active Footwear",
          subtitle: "Flexible cloud pods supporting growing feet on playgrounds, gym floors, and trails."
        };
      default:
        return {
          title: 'Engineered Performance Footwear',
          subtitle: 'The full soule footwear line: from road racing and mountain trails to all-day movement.'
        };
    }
  };

  const { title, subtitle } = getTitles();

  return (
    <div className="bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & Category Selector */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span>Zurich Biomechanics · 2026 Collection</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#121212] leading-[1.1] max-w-xl">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-lg leading-relaxed">
              {subtitle}
            </p>

            {/* Category Segmented Selector Buttons */}
            <div className="pt-2">
              <div className="inline-flex p-1 bg-neutral-100 rounded-xl border border-neutral-200/60 max-w-full overflow-x-auto">
                {[
                  { id: 'all', label: 'All (15)' },
                  { id: 'men', label: "Men's (5)" },
                  { id: 'women', label: "Women's (5)" },
                  { id: 'kids', label: "Kids' (5)" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => onSelectCategory(tab.id as Category)}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      category === tab.id
                        ? 'bg-black text-white shadow-sm'
                        : 'text-neutral-600 hover:text-black hover:bg-neutral-200/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-500 border-t border-neutral-100">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
                <span>SouleFoam™ Dual Core</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-neutral-800" />
                <span>SpeedBoard™ Carbon Plate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-800" />
                <span>30-Day Trial Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Campaign Banner */}
          <div className="lg:col-span-5">
            <div
              onClick={onOpenFlagship}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              {/* Campaign Image */}
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={HERO_CAMPAIGN_IMG}
                  alt="Soule CloudRush Campaign"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Campaign Overlay Text */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-300 bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                    Campaign Spotlight
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 text-white">
                    CloudRush 2 · Flagship
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5 max-w-xs">
                    Tested across 10,000 Swiss marathon miles. Zero-gravity push off.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
