import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtitleColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 46,
  showText = true,
  textColor = 'text-white',
  subtitleColor = 'text-amber-300/80',
}) => {
  return (
    <div className={`flex items-center space-x-3.5 ${className}`}>
      {/* Emblem Circle */}
      <div
        className="relative flex items-center justify-center rounded-full bg-slate-900/90 p-1.5 border border-amber-500/40 shadow-lg shadow-amber-500/15 group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300 shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-amber-400"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Double Concentric Circles */}
          <circle
            cx="50"
            cy="50"
            r="43"
            fill="none"
            stroke="url(#logoGoldGrad)"
            strokeWidth="1.6"
            opacity="0.9"
          />
          <circle
            cx="49"
            cy="51"
            r="38.5"
            fill="none"
            stroke="url(#logoGoldGrad)"
            strokeWidth="1.1"
            opacity="0.75"
          />

          {/* Calligraphic Script 'M' */}
          <path
            d="M 22,62 C 18,52 24,38 33,40 C 39,41 38,55 42,66 C 45,51 52,38 60,37 C 68,36 67,52 70,68 C 72,55 77,44 82,46 C 85,47 82,53 79,53"
            fill="none"
            stroke="url(#logoGoldGrad)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Swash loop for M entry */}
          <path
            d="M 28,66 C 21,70 16,63 22,55"
            fill="none"
            stroke="url(#logoGoldGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Botanical Leaf Branch on the right arc */}
          <g fill="url(#logoGoldGrad)">
            {/* Stem curve */}
            <path
              d="M 78,55 Q 86,40 82,25"
              fill="none"
              stroke="url(#logoGoldGrad)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* Leaf 1 */}
            <path d="M 83,26 C 88,20 92,23 88,30 C 85,28 83,26 83,26 Z" />
            {/* Leaf 2 */}
            <path d="M 81,34 C 88,31 90,36 84,40 C 82,37 81,34 81,34 Z" />
            {/* Leaf 3 */}
            <path d="M 77,43 C 84,43 85,48 78,50 C 77,46 77,43 77,43 Z" />
            {/* Leaf 4 */}
            <path d="M 84,20 C 85,15 80,16 79,21 C 81,21 84,20 84,20 Z" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="text-left">
          <span className={`block text-xl sm:text-2xl font-bold tracking-wide font-serif-luxury ${textColor} group-hover:text-amber-400 transition-colors`}>
            Marhaba Hotel
          </span>
          <span className={`block text-[10px] tracking-widest uppercase ${subtitleColor}`}>
            Rawalpindi, Pakistan
          </span>
        </div>
      )}
    </div>
  );
};
