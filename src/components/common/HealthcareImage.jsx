import React, { useState } from 'react';
import { Heart, Stethoscope } from 'lucide-react';

export default function HealthcareImage({
  src,
  alt = "R.S. Health Care Service",
  aspectRatio = "16/9",
  className = "",
  overlay = "dark", // 'dark' | 'gold' | 'vignette' | 'none'
  hoverZoom = true,
  rounded = "2xl",
  borderGold = true,
  priority = false,
  objectPosition = "center",
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const aspectClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
    "3/4": "aspect-[3/4]",
    "21/9": "aspect-[21/9]",
  }[aspectRatio] || "aspect-video";

  const roundedClasses = {
    "none": "rounded-none",
    "lg": "rounded-lg",
    "xl": "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    "full": "rounded-full",
  }[rounded] || "rounded-2xl";

  const overlayClasses = {
    "dark": "bg-gradient-to-t from-black/80 via-black/30 to-transparent",
    "gold": "bg-gradient-to-t from-black/90 via-black/40 to-[#D4A72C15]",
    "vignette": "bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.85)_100%)]",
    "hero": "bg-gradient-to-r from-black/95 via-black/75 to-black/40",
    "none": "",
  }[overlay] || "";

  return (
    <div
      className={`relative overflow-hidden bg-[#0A0A0A] ${aspectClasses} ${roundedClasses} ${
        borderGold ? 'border border-gold/30 shadow-gold-sm' : ''
      } ${className}`}
    >
      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#121212] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-gold/30 border-t-gold animate-spin"></div>
        </div>
      )}

      {/* Error Fallback */}
      {error ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A160E] to-[#0A0A0A] flex flex-col items-center justify-center p-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-2">
            <Heart className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-gold uppercase tracking-wider">
            R.S. Health Care Service
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ objectPosition }}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hoverZoom ? 'group-hover:scale-105' : ''
          } ${loaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}

      {/* Atmospheric Overlays */}
      {overlay !== 'none' && !error && (
        <div className={`absolute inset-0 pointer-events-none ${overlayClasses}`}></div>
      )}

      {/* Subtle Gold Shimmer Border on Hover */}
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors pointer-events-none rounded-inherit"></div>
    </div>
  );
}
