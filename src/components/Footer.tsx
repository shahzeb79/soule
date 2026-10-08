import React from 'react';
import { Category } from '../types';
import { ArrowUp, Globe, ShieldCheck } from 'lucide-react';
import { SouleLogo } from './SouleLogo';

interface FooterProps {
  onSelectCategory: (c: Category) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-800 text-xs">
      {/* Top Banner */}
      <div className="border-b border-neutral-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <SouleLogo size={28} color="#0CB581" showText={true} />
            <p className="text-neutral-500 max-w-md">
              Swiss-engineered performance footwear. Soft landings, explosive take-offs, and zero-gravity comfort for runners worldwide.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-full transition-colors flex items-center gap-2 cursor-pointer font-semibold text-xs"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-900 text-[11px]">
              Footwear Collections
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <button
                  onClick={() => onSelectCategory('men')}
                  className="hover:text-black cursor-pointer"
                >
                  Men's Shoes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('women')}
                  className="hover:text-black cursor-pointer"
                >
                  Women's Shoes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('kids')}
                  className="hover:text-black cursor-pointer"
                >
                  Kids' Shoes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-black cursor-pointer"
                >
                  Full Footwear Line
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-900 text-[11px]">
              Activity
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>Road Running</li>
              <li>Trail Running</li>
              <li>Speed & Racing</li>
              <li>All Day & Travel</li>
              <li>Hiking & Trekking</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-900 text-[11px]">
              Innovation & Lab
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>SouleFoam™ Dual Core</li>
              <li>SpeedBoard™ Carbon Plate</li>
              <li>MissionGrip™ Wet Lug Matrix</li>
              <li>Circular Bio-Based Materials</li>
              <li>Zurich Biomechanics Research</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-900 text-[11px]">
              Swiss Customer Care
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>30-Day Free Trial</li>
              <li>Free Returns & Exchanges</li>
              <li>Shoe Size & Fit Finder</li>
              <li>Order Status Tracking</li>
              <li>Contact Zurich Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900">soule AG</span>
            <span>· Förrlibuckstrasse 190, 8005 Zürich, Switzerland</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Sale</span>
            <span>Cookie Settings</span>
            <span>© {new Date().getFullYear()} soule. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
