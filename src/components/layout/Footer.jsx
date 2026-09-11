import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Globe, ShieldCheck, Heart, Clock, ArrowRight } from 'lucide-react';
import BrandLogo from '../brand/BrandLogo';
import { SERVICES } from '../../data/servicesData';
import { COMPANY_INFO } from '../../data/companyData';
import ECGDivider from '../brand/ECGDivider';

export default function Footer() {
  const { contacts } = COMPANY_INFO;

  return (
    <footer className="bg-[#050505] text-[#D0D0D0] border-t border-gold/30 relative overflow-hidden pt-12 pb-24 md:pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-gold/20">
          {/* Col 1: Brand & Philosophy (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="default" />

            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed pt-2">
              R.S. Health Care Service provides 24/7 hospital-standard, compassionate healthcare and patient nursing solutions in the comfort of your home. Serving families with verified clinical and domestic care across India.
            </p>

            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#17140B] to-[#0A0A0A] border border-gold/25 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-gold-gradient uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Verified Quality Standards</span>
              </div>
              <p className="text-[11px] text-[#8E8E93]">
                Background-checked male & female nursing staff, clinical caregivers, and modern medical equipment.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gold">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-semibold">24 Hours / 365 Days Uninterrupted Support</span>
            </div>
          </div>

          {/* Col 2: Quick Links (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient border-b border-gold/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#A5A5A5] hover:text-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold/60" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A5A5A5] hover:text-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold/60" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#A5A5A5] hover:text-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold/60" /> All Services
                </Link>
              </li>
              <li>
                <Link to="/book-service" className="text-[#A5A5A5] hover:text-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold/60" /> Book a Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A5A5A5] hover:text-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold/60" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/credits" className="text-[#A5A5A5] hover:text-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold/60" /> Image Credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient border-b border-gold/20 pb-2">
              Healthcare Services
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-[#A5A5A5] hover:text-gold transition-colors line-clamp-1 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs font-bold text-gold hover:underline inline-block pt-1"
                >
                  + View 6 More Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contacts (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient border-b border-gold/20 pb-2">
              Care Desk & Staffing
            </h4>

            <div className="space-y-2.5 text-xs">
              {/* Manager */}
              <div className="p-3 rounded-xl bg-black/60 border border-gold/30 hover:border-gold transition-colors">
                <div className="text-[10px] uppercase font-bold text-gold tracking-wider">
                  {contacts.manager.title}
                </div>
                <div className="font-bold text-white text-sm">{contacts.manager.name}</div>
                <a
                  href={`tel:${contacts.manager.phone}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E5B842] hover:text-white mt-1 font-bold"
                >
                  <Phone className="w-3 h-3" /> {contacts.manager.phone}
                </a>
                <p className="text-[10px] text-[#8E8E93] mt-0.5">{contacts.manager.role}</p>
              </div>

              {/* Accountant */}
              <div className="p-3 rounded-xl bg-black/60 border border-gold/20 hover:border-gold/50 transition-colors">
                <div className="text-[10px] uppercase font-bold text-gold tracking-wider">
                  {contacts.accountant.title}
                </div>
                <div className="font-bold text-white text-sm">{contacts.accountant.name}</div>
                <a
                  href={`tel:${contacts.accountant.phone}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E5B842] hover:text-white mt-1"
                >
                  <Phone className="w-3 h-3" /> {contacts.accountant.phone}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-xs text-[#B0B0B0] pt-1">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Operational Base: <strong>{COMPANY_INFO.location}</strong></span>
              </div>

              <div className="flex items-start gap-2 text-xs text-gold font-semibold">
                <Globe className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.serviceArea}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E93]">
          <p>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-3 text-[11px] text-gold/80">
            <span>Care You Can Trust, Comfort They Deserve</span>
            <span>•</span>
            <Link to="/credits" className="hover:underline text-gold">
              Image Credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
