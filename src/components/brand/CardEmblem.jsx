import React from 'react';

export default function CardEmblem({ variant = 'heart-house', className = '' }) {
  if (variant === 'we-care') {
    return (
      <div className={`flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-b from-[#18140B] to-[#0A0A0A] border border-gold/30 shadow-gold-md ${className}`}>
        {/* Hexagon with Home, Hands, and Cross */}
        <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(212,167,44,0.4)]">
            <polygon
              points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25"
              fill="#0D0C08"
              stroke="url(#cardGoldGrad1)"
              strokeWidth="3.5"
            />
            {/* House Outline */}
            <path
              d="M50 25 L72 42 L67 42 L67 68 L33 68 L33 42 L28 42 Z"
              fill="none"
              stroke="url(#cardGoldGrad1)"
              strokeWidth="2.5"
            />
            {/* Medical Cross */}
            <rect x="47" y="44" width="6" height="14" fill="url(#cardGoldGrad1)" />
            <rect x="43" y="48" width="14" height="6" fill="url(#cardGoldGrad1)" />
            {/* Caring Hands */}
            <path
              d="M26 62 C28 72, 38 80, 50 84 C62 80, 72 72, 74 62 C68 68, 58 74, 50 76 C42 74, 32 68, 26 62 Z"
              fill="url(#cardGoldGrad1)"
            />
            <defs>
              <linearGradient id="cardGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0C2" />
                <stop offset="35%" stopColor="#F4C95D" />
                <stop offset="70%" stopColor="#D4A72C" />
                <stop offset="100%" stopColor="#735105" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <span className="font-serif italic text-2xl sm:text-3xl text-gold-gradient font-bold tracking-wide">
          We Care
        </span>
        <span className="text-xs sm:text-sm text-[#E0E0E0] tracking-[0.2em] uppercase font-semibold mt-1">
          Because You Matter
        </span>
        <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent my-3"></div>
        <svg className="w-4 h-4 text-gold fill-gold/30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-b from-[#18140B] to-[#0A0A0A] border border-gold/30 shadow-gold-md ${className}`}>
      {/* Heart with House and Cross Inside */}
      <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(212,167,44,0.4)]">
          {/* Heart Frame */}
          <path
            d="M50 20 C34 6, 12 22, 24 50 C33 68, 50 85, 50 85 C50 85, 67 68, 76 50 C88 22, 66 6, 50 20 Z"
            fill="none"
            stroke="url(#cardGoldGrad2)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* House inside heart */}
          <path
            d="M50 32 L70 48 L65 48 L65 68 L35 68 L35 48 L30 48 Z"
            fill="none"
            stroke="url(#cardGoldGrad2)"
            strokeWidth="2.5"
          />
          {/* Window */}
          <rect x="42" y="44" width="6" height="6" fill="url(#cardGoldGrad2)" />
          {/* Cross at Bottom Right of House */}
          <rect x="62" y="56" width="6" height="16" fill="url(#cardGoldGrad2)" />
          <rect x="57" y="61" width="16" height="6" fill="url(#cardGoldGrad2)" />
          
          <defs>
            <linearGradient id="cardGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0C2" />
              <stop offset="30%" stopColor="#F4C95D" />
              <stop offset="70%" stopColor="#D4A72C" />
              <stop offset="100%" stopColor="#735105" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] uppercase text-gold-gradient text-center">
        COMPASSIONATE CARE
      </span>
      <span className="text-xs sm:text-sm text-white tracking-[0.2em] uppercase font-semibold mt-1">
        AT YOUR DOORSTEP
      </span>
      <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent my-3"></div>
      <svg className="w-4 h-4 text-gold fill-gold/30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </div>
  );
}
