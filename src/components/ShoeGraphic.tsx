import React from 'react';

interface ShoeGraphicProps {
  primaryColor?: string;
  accentColor?: string;
  angle?: 'side' | 'perspective' | 'top' | 'sole';
  className?: string;
}

export const ShoeGraphic: React.FC<ShoeGraphicProps> = ({
  primaryColor = '#E2E8F0',
  accentColor = '#0F172A',
  angle = 'side',
  className = 'w-full h-full',
}) => {
  // If top angle
  if (angle === 'top') {
    return (
      <svg
        viewBox="0 0 500 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`gradTopBase-${primaryColor}`} x1="50" y1="120" x2="450" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor={primaryColor} />
            <stop offset="0.7" stopColor={primaryColor} stopOpacity="0.85" />
            <stop offset="1" stopColor={primaryColor} stopOpacity="0.7" />
          </linearGradient>
          <filter id="shoeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodOpacity="0.08" />
          </filter>
        </defs>
        
        {/* Shadow */}
        <ellipse cx="250" cy="120" rx="190" ry="60" fill="#000000" fillOpacity="0.06" filter="blur(8px)" />
        
        {/* Outsole rim */}
        <path
          d="M70 120 C70 80, 130 60, 240 60 C360 60, 430 85, 435 120 C430 155, 360 180, 240 180 C130 180, 70 160, 70 120 Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="2"
        />

        {/* Upper Body */}
        <path
          d="M80 120 C80 88, 140 70, 240 70 C350 70, 420 92, 422 120 C420 148, 350 170, 240 170 C140 170, 80 152, 80 120 Z"
          fill={`url(#gradTopBase-${primaryColor})`}
        />

        {/* Collar / Opening */}
        <ellipse cx="180" cy="120" rx="42" ry="24" fill="#1E293B" />
        <ellipse cx="180" cy="120" rx="36" ry="18" fill="#0F172A" />

        {/* Tongue and Speed Lacing */}
        <path d="M220 120 L330 120" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
        <path d="M240 102 L240 138" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M265 100 L265 140" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M290 102 L290 138" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M315 106 L315 134" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* Toe Cap */}
        <path
          d="M370 95 C395 104, 415 112, 420 120 C415 128, 395 136, 370 145 C380 132, 380 108, 370 95 Z"
          fill={accentColor}
          fillOpacity="0.25"
        />
        
        {/* soule branding icon */}
        <circle cx="140" cy="120" r="5" fill="#FFFFFF" fillOpacity="0.8" />
      </svg>
    );
  }

  // If sole angle (bottom looking up at cloud pods)
  if (angle === 'sole') {
    return (
      <svg
        viewBox="0 0 500 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Outsole Base Outline */}
        <path
          d="M60 120 C60 70, 140 50, 250 50 C370 50, 440 80, 440 120 C440 160, 370 190, 250 190 C140 190, 60 170, 60 120 Z"
          fill="#F8FAFC"
          stroke="#E2E8F0"
          strokeWidth="3"
        />
        {/* Central Speedboard Channel */}
        <path
          d="M100 120 L400 120"
          stroke={accentColor}
          strokeWidth="10"
          strokeLinecap="round"
        />
        
        {/* Cloud Pod lugs - On running signature tubular lugs */}
        {[-32, 32].map((offsetY, idx) => (
          <g key={idx}>
            <rect x="100" y={120 + offsetY - 14} width="36" height="28" rx="6" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2" />
            <rect x="150" y={120 + offsetY - 15} width="42" height="30" rx="6" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2" />
            <rect x="205" y={120 + offsetY - 16} width="42" height="32" rx="6" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2" />
            <rect x="260" y={120 + offsetY - 16} width="44" height="32" rx="6" fill={primaryColor} stroke="#FFFFFF" strokeWidth="2" />
            <rect x="315" y={120 + offsetY - 15} width="40" height="30" rx="6" fill={accentColor} stroke="#FFFFFF" strokeWidth="2" />
            <rect x="365" y={120 + offsetY - 13} width="34" height="26" rx="6" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2" />
          </g>
        ))}

        <circle cx="250" cy="120" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
        <text x="250" y="123" textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="bold" fill="#0F172A">
          SOULE
        </text>
      </svg>
    );
  }

  // Perspective angle (3/4 dynamic run pose)
  if (angle === 'perspective') {
    return (
      <svg
        viewBox="0 0 520 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`gradPersp-${primaryColor}`} x1="60" y1="60" x2="440" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor={primaryColor} />
            <stop offset="0.6" stopColor={primaryColor} stopOpacity="0.9" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Ground contact shadow */}
        <ellipse cx="270" cy="245" rx="190" ry="14" fill="#000000" fillOpacity="0.1" filter="blur(8px)" />

        {/* Sole - Sculpted Midsole with Hollow Cloud Pods */}
        <path
          d="M80 190 C120 185, 200 188, 280 185 C360 180, 420 160, 455 140 C465 175, 410 220, 310 225 C200 230, 95 225, 75 200 Z"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="2"
        />

        {/* Signature Hollow Pods along bottom edge */}
        {[
          { x: 100, y: 195, w: 26, h: 22, rx: 7 },
          { x: 138, y: 196, w: 28, h: 23, rx: 7 },
          { x: 178, y: 197, w: 30, h: 24, rx: 7 },
          { x: 220, y: 197, w: 32, h: 24, rx: 7 },
          { x: 265, y: 195, w: 34, h: 23, rx: 7 },
          { x: 312, y: 190, w: 34, h: 21, rx: 7 },
          { x: 360, y: 180, w: 32, h: 18, rx: 6 },
          { x: 405, y: 165, w: 28, h: 16, rx: 5 },
        ].map((pod, i) => (
          <g key={i}>
            <rect x={pod.x} y={pod.y} width={pod.w} height={pod.h} rx={pod.rx} fill="#0F172A" />
            <rect x={pod.x + 4} y={pod.y + 4} width={pod.w - 8} height={pod.h - 8} rx={pod.rx - 2} fill="#FAFAFA" />
          </g>
        ))}

        {/* Upper Footwear Body */}
        <path
          d="M85 190 C78 150, 95 105, 150 90 C180 80, 215 105, 250 115 C295 125, 360 120, 425 145 C445 152, 455 162, 445 175 C410 185, 350 188, 280 185 C200 188, 120 185, 85 190 Z"
          fill={`url(#gradPersp-${primaryColor})`}
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* Collar & Tongue */}
        <path
          d="M145 92 C158 80, 185 82, 195 95 C205 108, 180 122, 155 115 Z"
          fill="#1E293B"
        />

        {/* Speed Lacing Strands */}
        <path d="M220 108 L212 125" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        <path d="M245 114 L235 132" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        <path d="M272 120 L260 140" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        <path d="M302 126 L290 148" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />

        {/* Heel Cage Overlay */}
        <path
          d="M85 188 C80 140, 110 115, 140 125 C145 150, 130 180, 85 188 Z"
          fill={accentColor}
          fillOpacity="0.2"
        />

        {/* Iconic soule micro insignia */}
        <circle cx="160" cy="148" r="8" fill={accentColor} />
        <circle cx="160" cy="148" r="4" fill="#FFFFFF" />
      </svg>
    );
  }

  // Default: Side Profile (Classic On-style Clean Technical Silhouette)
  return (
    <svg
      viewBox="0 0 540 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`gradSide-${primaryColor}`} x1="70" y1="80" x2="480" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor={primaryColor} />
          <stop offset="0.75" stopColor={primaryColor} stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.45" />
        </linearGradient>
        <filter id="softPodShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="270" cy="242" rx="195" ry="12" fill="#000000" fillOpacity="0.09" filter="blur(6px)" />

      {/* Outsole Base / Speedboard Line */}
      <path
        d="M78 206 C140 204, 260 205, 360 198 C420 193, 465 178, 480 156"
        stroke={accentColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Midsole Layer */}
      <path
        d="M74 195 C110 192, 230 193, 340 188 C405 184, 455 170, 482 150 C485 168, 450 215, 370 220 C280 225, 120 226, 70 208 Z"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="1.5"
      />

      {/* On-Signature Hollow Pods (Zero-Gravity Cloud Elements) */}
      {[
        { x: 92, y: 198, w: 26, h: 22, rx: 7 },
        { x: 130, y: 199, w: 28, h: 23, rx: 7 },
        { x: 172, y: 200, w: 30, h: 24, rx: 7 },
        { x: 216, y: 200, w: 32, h: 24, rx: 7 },
        { x: 262, y: 198, w: 34, h: 23, rx: 7 },
        { x: 310, y: 193, w: 34, h: 22, rx: 7 },
        { x: 360, y: 184, w: 32, h: 19, rx: 6 },
        { x: 410, y: 170, w: 30, h: 17, rx: 5 },
      ].map((pod, i) => (
        <g key={i}>
          {/* Outer hollow pod ring */}
          <rect
            x={pod.x}
            y={pod.y}
            width={pod.w}
            height={pod.h}
            rx={pod.rx}
            fill="#0F172A"
          />
          {/* Inner cutout hole to reveal hollow technology */}
          <rect
            x={pod.x + 4.5}
            y={pod.y + 4.5}
            width={pod.w - 9}
            height={pod.h - 9}
            rx={pod.rx - 2}
            fill="#FAFAFA"
          />
        </g>
      ))}

      {/* Footwear Upper (Engineered Mesh Shape) */}
      <path
        d="M80 195 C72 155, 92 108, 148 94 C175 88, 206 112, 245 122 C295 132, 375 130, 445 152 C468 158, 482 165, 478 175 C440 185, 360 188, 280 186 C190 188, 110 188, 80 195 Z"
        fill={`url(#gradSide-${primaryColor})`}
        stroke="#E2E8F0"
        strokeWidth="1.5"
      />

      {/* Breathable Engineered Mesh Vent Dots */}
      <g fill={accentColor} fillOpacity="0.18">
        <circle cx="340" cy="148" r="1.5" />
        <circle cx="350" cy="149" r="1.5" />
        <circle cx="360" cy="151" r="1.5" />
        <circle cx="370" cy="153" r="1.5" />
        <circle cx="380" cy="155" r="1.5" />
        <circle cx="390" cy="158" r="1.5" />
        <circle cx="400" cy="160" r="1.5" />
        <circle cx="355" cy="157" r="1.5" />
        <circle cx="368" cy="160" r="1.5" />
        <circle cx="382" cy="163" r="1.5" />
      </g>

      {/* Heel Cup Reinforcement */}
      <path
        d="M80 194 C76 150, 104 122, 136 130 C138 158, 122 186, 80 194 Z"
        fill={accentColor}
        fillOpacity="0.12"
      />

      {/* Collar & Ankle Cutout */}
      <path
        d="M144 95 C154 84, 182 86, 192 100 C200 112, 178 124, 154 118 Z"
        fill="#1E293B"
      />

      {/* Clean Speed Lacing Details */}
      <path d="M216 116 L208 132" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M242 122 L232 140" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M270 128 L258 148" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M300 134 L288 156" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />

      {/* Geometric Modern Minimalist Branding: The soule winged 'S' emblem */}
      <g transform="translate(178, 136) scale(0.24)">
        <path
          d="M 68 36 C 62 26, 48 24, 34 25 C 22 26, 18 36, 19 46 C 20 57, 28 66, 42 75 C 49 79, 54 84, 52 90 C 49 96, 38 98, 25 97 C 14 96, 6 92, 4 86 C 3 83, 6 81, 9 83 C 17 87, 27 88, 37 87 C 44 86, 46 81, 42 76 C 36 71, 26 64, 18 55 C 11 47, 12 33, 23 24 C 36 14, 56 16, 67 27 C 70 30, 69 34, 68 36 Z"
          fill="#0CB581"
        />
        <path
          d="M 48 56 C 58 45, 75 30, 95 19 C 96 18, 97 19, 96 21 C 89 31, 76 43, 60 55 C 53 60, 49 61, 48 56 Z"
          fill="#0CB581"
        />
        <path
          d="M 52 64 C 62 55, 76 43, 92 37 C 93 36, 94 38, 92 39 C 83 48, 71 58, 59 66 C 55 69, 52 68, 52 64 Z"
          fill="#0CB581"
        />
        <path
          d="M 56 74 C 65 67, 75 58, 83 55 C 84 55, 84 56, 83 57 C 76 64, 68 71, 60 76 C 57 78, 55 77, 56 74 Z"
          fill="#0CB581"
        />
      </g>
    </svg>
  );
};
