import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import HexIcon from '../brand/HexIcon';
import Button from './Button';
import HealthcareImage from './HealthcareImage';
import { SERVICE_IMAGE_MAP } from '../../data/images';

export default function ServiceCard({ service, featured = false, showImage = true, className = '' }) {
  const {
    id,
    slug,
    title,
    cardSubtitle,
    briefDesc,
    iconName,
    badge,
    genderAvailability,
    shiftOptions,
    keyFeatures = [],
  } = service;

  const imageObj = SERVICE_IMAGE_MAP[id] || SERVICE_IMAGE_MAP[slug];

  return (
    <div
      className={`gold-card rounded-2xl overflow-hidden flex flex-col justify-between relative group ${
        featured ? 'border-gold shadow-gold-md lg:scale-[1.02]' : ''
      } ${className}`}
    >
      {/* Top accent shimmer on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:via-gold transition-all duration-500 z-10"></div>

      <div>
        {/* Optional Image Header */}
        {showImage && imageObj && (
          <div className="relative">
            <HealthcareImage
              src={imageObj.thumbnail || imageObj.url}
              alt={imageObj.alt || title}
              aspectRatio="16/9"
              rounded="none"
              borderGold={false}
              overlay="dark"
              className="h-44 w-full"
            />
            {/* Hexagon icon floating over image corner */}
            <div className="absolute -bottom-5 left-5 z-10">
              <HexIcon iconName={iconName || 'Activity'} size="default" />
            </div>

            {badge && (
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 text-gold border border-gold/40 shadow-md backdrop-blur-md">
                  {badge}
                </span>
              </div>
            )}
          </div>
        )}

        <div className={`p-5 sm:p-6 ${showImage && imageObj ? 'pt-7' : ''}`}>
          {/* Header if no image */}
          {(!showImage || !imageObj) && (
            <div className="flex items-start justify-between gap-3 mb-4">
              <HexIcon iconName={iconName || 'Activity'} size={featured ? 'large' : 'default'} />
              {badge && (
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 shadow-sm">
                  {badge}
                </span>
              )}
            </div>
          )}

          {/* Title & Subtitle */}
          <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-gold transition-colors tracking-wide leading-snug">
            <Link to={`/services/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>

          {cardSubtitle && (
            <p className="text-xs font-medium text-[#D4A72C] mt-1 mb-2 line-clamp-1">
              {cardSubtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-[#A8A8A8] mt-2 line-clamp-3 leading-relaxed">
            {briefDesc}
          </p>

          {/* Key Features Bullet points */}
          {keyFeatures.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
              {keyFeatures.slice(0, 2).map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#C5C5C5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Staff / Shift Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {genderAvailability && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#161616] text-[#B8860B] border border-gold/20">
                {genderAvailability}
              </span>
            )}
            {shiftOptions && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161616] text-[#8E8E93] border border-white/10">
                {shiftOptions.split('/')[0]}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 sm:p-6 pt-0 border-t border-gold/15 mt-2 flex items-center justify-between gap-3">
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F4C95D] hover:text-white transition-colors group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <Button
          to={`/book-service?service=${encodeURIComponent(title)}`}
          variant="gold"
          size="sm"
        >
          Book Service
        </Button>
      </div>
    </div>
  );
}
