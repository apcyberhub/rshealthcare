import React from 'react';
import { 
  Heart, 
  User, 
  ShieldCheck, 
  HeartHandshake, 
  UserCheck, 
  Clock, 
  Activity, 
  Stethoscope, 
  Baby, 
  Wind, 
  ShieldAlert, 
  PackageCheck, 
  Users, 
  MapPin, 
  Globe, 
  Star, 
  Sparkles,
  Accessibility
} from 'lucide-react';

const ICON_MAP = {
  Heart,
  User,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
  Clock,
  Activity,
  Stethoscope,
  PersonStanding: Accessibility,
  Baby,
  Wind,
  ShieldAlert,
  PackageCheck,
  Users,
  MapPin,
  Globe,
  Star,
  Sparkles,
};

export default function HexIcon({ iconName = 'Heart', size = 'default', className = '' }) {
  const IconComponent = ICON_MAP[iconName] || Heart;
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Hexagonal Gold Outer Frame */}
      <div className={`relative flex items-center justify-center transition-all duration-300 ${
        isLarge ? 'w-16 h-16' : isSmall ? 'w-9 h-9' : 'w-12 h-12'
      }`}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(212,167,44,0.3)]">
          <polygon
            points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25"
            fill="#0F0E0B"
            stroke="url(#hexGoldGradient)"
            strokeWidth="3.5"
          />
          <polygon
            points="50 10, 84 29, 84 71, 50 90, 16 71, 16 29"
            fill="none"
            stroke="url(#hexGoldGradientSubtle)"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="hexGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0C2" />
              <stop offset="40%" stopColor="#F4C95D" />
              <stop offset="80%" stopColor="#D4A72C" />
              <stop offset="100%" stopColor="#735105" />
            </linearGradient>
            <linearGradient id="hexGoldGradientSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4C95D" />
              <stop offset="100%" stopColor="#523803" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Icon */}
        <div className="relative z-10 text-[#F4C95D] flex items-center justify-center">
          <IconComponent className={`${isLarge ? 'w-7 h-7' : isSmall ? 'w-4 h-4' : 'w-5 h-5'}`} />
        </div>
      </div>
    </div>
  );
}
