import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ size = 'default', showTagline = true, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <Link 
      to="/" 
      className={`group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.01] ${className}`}
      aria-label="R.S. Health Care Service Home"
    >
      {/* Luxury Gold Heart + Cross in Hands SVG Emblem (exact motif from visiting card) */}
      <div className="relative flex-shrink-0">
        <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#1E1A11] to-[#0A0A0A] border border-gold/40 shadow-gold-sm group-hover:border-gold group-hover:shadow-gold-md transition-all duration-300 ${
          isLarge ? 'w-16 h-16' : isSmall ? 'w-10 h-10' : 'w-12 h-12'
        }`}>
          <svg 
            viewBox="0 0 100 100" 
            className={`${isLarge ? 'w-12 h-12' : isSmall ? 'w-7 h-7' : 'w-9 h-9'}`}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0C2" />
                <stop offset="35%" stopColor="#F4C95D" />
                <stop offset="70%" stopColor="#D4A72C" />
                <stop offset="100%" stopColor="#946B08" />
              </linearGradient>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#D4A72C" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Heart Outline */}
            <path 
              d="M50 24 C36 10, 16 24, 26 50 C34 68, 50 82, 50 82 C50 82, 66 68, 74 50 C84 24, 64 10, 50 24 Z" 
              stroke="url(#goldGradientLogo)" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldGlow)"
            />

            {/* Medical Cross Center */}
            <rect x="45" y="32" width="10" height="24" rx="2" fill="url(#goldGradientLogo)" />
            <rect x="38" y="39" width="24" height="10" rx="2" fill="url(#goldGradientLogo)" />

            {/* Gentle Supporting Hands Base */}
            <path 
              d="M20 62 C22 75, 36 88, 50 94 C64 88, 78 75, 80 62 C74 70, 62 78, 50 82 C38 78, 26 70, 20 62 Z" 
              fill="url(#goldGradientLogo)" 
              opacity="0.95"
            />
          </svg>
        </div>
      </div>

      {/* Typography from Visiting Card */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-display font-extrabold tracking-wider text-gold-gradient ${
            isLarge ? 'text-3xl' : isSmall ? 'text-lg' : 'text-xl sm:text-2xl'
          }`}>
            R.S.
          </span>
          <span className={`font-heading font-bold uppercase tracking-widest text-white ${
            isLarge ? 'text-lg' : isSmall ? 'text-xs' : 'text-xs sm:text-sm'
          }`}>
            HEALTH CARE
          </span>
        </div>
        
        <div className="flex items-center gap-1.5">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase text-[#F4C95D]">
            SERVICE
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>
        </div>

        {showTagline && (
          <p className="text-[10px] sm:text-[11px] font-medium text-[#CFCFCF] italic tracking-tight line-clamp-1 hidden xs:block mt-0.5">
            Care You Can Trust, Comfort They Deserve
          </p>
        )}
      </div>
    </Link>
  );
}
