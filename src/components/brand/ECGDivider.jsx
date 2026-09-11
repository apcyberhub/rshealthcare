import React from 'react';

export default function ECGDivider({ title, subtitle, className = '' }) {
  return (
    <div className={`w-full flex flex-col items-center justify-center my-6 sm:my-10 ${className}`}>
      <div className="w-full max-w-4xl flex items-center justify-center gap-3 sm:gap-6 px-4">
        {/* Left Pulse Line */}
        <div className="flex-1 flex items-center">
          <svg className="w-full h-8" viewBox="0 0 250 40" fill="none" preserveAspectRatio="none">
            <path
              d="M0 20 L90 20 L100 20 L110 5 L120 35 L130 10 L140 25 L150 20 L250 20"
              stroke="url(#ecgGoldGradLeft)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="ecgGoldGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4A72C" stopOpacity="0" />
                <stop offset="60%" stopColor="#D4A72C" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F4C95D" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Center Title or Heart Emblem */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#110E07] border border-gold/40 shadow-gold-sm">
          {title ? (
            <h2 className="text-xs sm:text-sm md:text-base font-display font-bold uppercase tracking-[0.2em] text-gold-gradient text-center">
              {title}
            </h2>
          ) : (
            <svg className="w-4 h-4 text-gold fill-gold/20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </div>

        {/* Right Pulse Line */}
        <div className="flex-1 flex items-center">
          <svg className="w-full h-8" viewBox="0 0 250 40" fill="none" preserveAspectRatio="none">
            <path
              d="M0 20 L100 20 L110 15 L120 30 L130 5 L140 35 L150 20 L160 20 L250 20"
              stroke="url(#ecgGoldGradRight)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="ecgGoldGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F4C95D" stopOpacity="1" />
                <stop offset="40%" stopColor="#D4A72C" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4A72C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {subtitle && (
        <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2 max-w-xl text-center px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
