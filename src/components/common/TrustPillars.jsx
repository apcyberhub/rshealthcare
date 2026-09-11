import React from 'react';
import { ShieldCheck, HeartHandshake, UserCheck, Clock } from 'lucide-react';

export default function TrustPillars({ variant = 'bar', className = '' }) {
  const items = [
    { label: "Professional Care", icon: ShieldCheck, desc: "Hospital-standard protocols" },
    { label: "Trained Staff", icon: UserCheck, desc: "Verified male & female specialists" },
    { label: "Compassionate Support", icon: HeartHandshake, desc: "Dignified patient attention" },
    { label: "24x7 Service", icon: Clock, desc: "Round-the-clock emergency support" }
  ];

  if (variant === 'bar') {
    return (
      <div className={`w-full max-w-5xl mx-auto px-3 sm:px-6 ${className}`}>
        <div className="relative rounded-2xl bg-gradient-to-r from-[#17140B] via-[#0F0E0A] to-[#17140B] border border-gold/35 p-3 sm:p-4 shadow-gold-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gold/20">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`flex items-center gap-2.5 sm:gap-3 ${idx > 0 && idx % 2 === 0 ? 'pt-3 lg:pt-0' : ''} ${idx % 2 === 1 ? 'pt-3 lg:pt-0 pl-0 sm:pl-3' : 'lg:pl-3 first:pl-0'}`}>
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/40 flex items-center justify-center flex-shrink-0 text-gold">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-[#A0A0A0] hidden sm:block">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Cards layout for detailed Why Us sections
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div 
            key={idx} 
            className="gold-card rounded-2xl p-6 flex flex-col items-start gap-4 relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 group-hover:border-gold transition-all duration-300 shadow-gold-sm">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold transition-colors">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A5A5] mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold/15 transition-all duration-500"></div>
          </div>
        );
      })}
    </div>
  );
}
