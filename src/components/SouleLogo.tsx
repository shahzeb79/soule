import React from 'react';

interface SouleLogoProps {
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
  showText?: boolean;
  textColor?: string;
}

export const SouleLogo: React.FC<SouleLogoProps> = ({
  className = '',
  size = 36,
  color = '#0CB581',
  accentColor = '#0EA775',
  showText = false,
  textColor = '#121212',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Aerodynamic Winged 'S' Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="souleGreenGradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1CD199" />
            <stop offset="0.6" stopColor={color} />
            <stop offset="1" stopColor={accentColor} />
          </linearGradient>
          <filter id="souleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#0CB581" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter="url(#souleGlow)">
          {/* Main 'S' Ribbon Body */}
          <path
            d="M 68 36
               C 62 26, 48 24, 34 25
               C 22 26, 18 36, 19 46
               C 20 57, 28 66, 42 75
               C 49 79, 54 84, 52 90
               C 49 96, 38 98, 25 97
               C 14 96, 6 92, 4 86
               C 3 83, 6 81, 9 83
               C 17 87, 27 88, 37 87
               C 44 86, 46 81, 42 76
               C 36 71, 26 64, 18 55
               C 11 47, 12 33, 23 24
               C 36 14, 56 16, 67 27
               C 70 30, 69 34, 68 36 Z"
            fill="url(#souleGreenGradient)"
          />

          {/* Inner Kinetic Shadow / Depth Line in the 'S' */}
          <path
            d="M 33 27
               C 46 27, 58 31, 65 37
               C 61 41, 51 40, 41 37
               C 29 34, 21 42, 22 51
               C 23 59, 32 67, 43 74
               C 49 78, 51 83, 49 87
               C 47 90, 42 92, 36 91
               C 43 89, 44 85, 41 81
               C 34 75, 23 68, 17 58
               C 13 50, 14 38, 23 31
               C 26 28, 29 27, 33 27 Z"
            fill="#099468"
            fillOpacity="0.35"
          />

          {/* Wing Feather 1 (Top Primary Feather - Sweeping upwards to the right) */}
          <path
            d="M 48 56
               C 58 45, 75 30, 95 19
               C 96 18, 97 19, 96 21
               C 89 31, 76 43, 60 55
               C 53 60, 49 61, 48 56 Z"
            fill="url(#souleGreenGradient)"
          />

          {/* Wing Feather 2 (Middle Wing Feather - Parallel aerodynamic blade) */}
          <path
            d="M 52 64
               C 62 55, 76 43, 92 37
               C 93 36, 94 38, 92 39
               C 83 48, 71 58, 59 66
               C 55 69, 52 68, 52 64 Z"
            fill="url(#souleGreenGradient)"
          />

          {/* Wing Feather 3 (Lower Stabilizing Blade) */}
          <path
            d="M 56 74
               C 65 67, 75 58, 83 55
               C 84 55, 84 56, 83 57
               C 76 64, 68 71, 60 76
               C 57 78, 55 77, 56 74 Z"
            fill="url(#souleGreenGradient)"
          />
        </g>
      </svg>

      {/* Brand Text Lockup */}
      {showText && (
        <span
          className="text-2xl font-black tracking-tighter font-mono lowercase select-none"
          style={{ color: textColor }}
        >
          soule
        </span>
      )}
    </div>
  );
};
