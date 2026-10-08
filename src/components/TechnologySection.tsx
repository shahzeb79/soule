import React, { useState } from 'react';
import { TECH_SOLE_DETAIL_IMG } from '../cms/productsData';
import { Sparkles, Layers, Zap, Shield, ArrowRight } from 'lucide-react';

export const TechnologySection: React.FC<{ onExploreFootwear: () => void }> = ({
  onExploreFootwear
}) => {
  const [podCompression, setPodCompression] = useState<number>(0);

  return (
    <section id="innovation" className="bg-[#121212] text-white py-16 sm:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>Swiss Engineering · Zurich Biomechanics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Soft landings. Explosive take-offs. Pure motion.
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Running shouldn’t feel like punishing your joints. We engineered SouleFoam™ hollow pods to adapt dynamically to your stride: cushioning when your foot touches down, then locking firm for an energetic push-off.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Pod Simulation */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Interactive Pod Cushioning Physics</h3>
                <p className="text-xs text-neutral-400">Drag the slider to test hollow pod compression under body weight.</p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-white/10 rounded text-neutral-300">
                {podCompression === 0 ? '0% (Airborne)' : `${podCompression}% (Ground Strike)`}
              </span>
            </div>

            {/* Slider Control */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={podCompression}
                onChange={(e) => setPodCompression(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>0% Touchdown</span>
                <span>50% Mid-Stance</span>
                <span>100% Full Compression Lock</span>
              </div>
            </div>

            {/* Visual Pod Simulation SVG */}
            <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 flex flex-col items-center justify-center">
              <svg viewBox="0 0 500 160" className="w-full max-w-md h-auto">
                {/* Upper Platform */}
                <rect x="40" y="20" width="420" height="12" rx="4" fill="#334155" />
                <text x="250" y="14" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="bold">
                  KINETIC SPEEDBOARD™ CARBON LAYER
                </text>

                {/* 5 Dynamic Compressing Hollow Pods */}
                {[70, 150, 230, 310, 390].map((cx, i) => {
                  const compressionScaleY = 1 - (podCompression / 100) * 0.45;
                  const podHeight = 56 * compressionScaleY;
                  const podY = 32 + (56 - podHeight);
                  return (
                    <g key={i}>
                      {/* Outer Pod */}
                      <rect
                        x={cx - 30}
                        y={podY}
                        width="60"
                        height={podHeight}
                        rx="16"
                        fill="#FFFFFF"
                        stroke="#94A3B8"
                        strokeWidth="2"
                      />
                      {/* Hollow Core */}
                      <rect
                        x={cx - 18}
                        y={podY + 10 * compressionScaleY}
                        width="36"
                        height={podHeight - 20 * compressionScaleY}
                        rx="10"
                        fill="#0F172A"
                      />
                      {/* Force Arrow when compressed */}
                      {podCompression > 30 && (
                        <path
                          d={`M${cx} ${podY - 6} L${cx} ${podY + 2}`}
                          stroke="#38BDF8"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Ground Contact Line */}
                <line x1="20" y1="92" x2="480" y2="92" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
                <text x="250" y="115" textAnchor="middle" fill="#64748B" fontSize="10">
                  {podCompression > 70
                    ? 'PODS LOCK SOLID → ENERGY TRANSMITS TO SPEEDBOARD'
                    : 'HOLLOW PODS CUSHION MULTI-DIRECTIONAL IMPACT'}
                </text>
              </svg>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-neutral-800/60 rounded-xl space-y-1">
                <span className="text-white font-bold text-xs">22% Less Torque</span>
                <p className="text-[11px] text-neutral-400">Reduced rotary stress on ankles and patellar tendons.</p>
              </div>
              <div className="p-3 bg-neutral-800/60 rounded-xl space-y-1">
                <span className="text-white font-bold text-xs">88% Energy Return</span>
                <p className="text-[11px] text-neutral-400">High-rebound mechanical pod rebound geometry.</p>
              </div>
              <div className="p-3 bg-neutral-800/60 rounded-xl space-y-1">
                <span className="text-white font-bold text-xs">100% Zero Rattling</span>
                <p className="text-[11px] text-neutral-400">Silent acoustic dampening foam formulation.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Macro Technical Imagery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img
                  src={TECH_SOLE_DETAIL_IMG}
                  alt="Soule Technical Sole Detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  Macro Precision Inspection
                </span>
                <h4 className="text-base font-bold text-white">
                  Bio-Circular Knit & Injection Pods
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every thread in the upper is spun from certified ocean-bound recycled polyester. Precision steam-formed without petroleum solvents.
                </p>
                <button
                  onClick={onExploreFootwear}
                  className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-neutral-300 underline underline-offset-4 cursor-pointer"
                >
                  <span>Shop the Soule collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
