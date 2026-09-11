import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Heart, 
  ShieldCheck, 
  Stethoscope, 
  Activity, 
  Clock, 
  CalendarCheck,
  UserCheck
} from 'lucide-react';
import BrandLogo from '../brand/BrandLogo';
import { SERVICES } from '../../data/servicesData';
import { COMPANY_INFO } from '../../data/companyData';
import Button from '../common/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Book Service', path: '/book-service' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gold/25 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4 border-b border-white/5'
      }`}
    >
      {/* Top micro bar for 24/7 service & Manager contact */}
      <div className="hidden lg:block border-b border-gold/15 pb-1.5 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#A0A0A0]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold font-semibold">
              <Clock className="w-3.5 h-3.5" /> 24/7 Home Healthcare & Nursing Staff Support
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[#CFCFCF]">Operational Hub: <strong className="text-white">{COMPANY_INFO.location}</strong></span>
            <span className="text-white/20">•</span>
            <span className="text-gold font-semibold">{COMPANY_INFO.serviceArea}</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-white hover:text-gold transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-gold" />
              Manager ({COMPANY_INFO.contacts.manager.name}): <span className="text-gold font-bold">{COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogo size={isScrolled ? 'small' : 'default'} />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                        location.pathname.startsWith('/services')
                          ? 'text-gold bg-gold/10 border border-gold/30'
                          : 'text-[#D0D0D0] hover:text-gold hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-gold' : ''}`} />
                    </button>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] mt-2 p-5 rounded-2xl bg-[#0D0D0D]/95 backdrop-blur-xl border border-gold/40 shadow-[0_15px_50px_rgba(0,0,0,0.95)] grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        {/* Dropdown Header */}
                        <div className="col-span-2 pb-2 border-b border-gold/20 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient">
                            Our Complete Healthcare Services (12 Categories)
                          </span>
                          <Link
                            to="/services"
                            className="text-xs font-semibold text-gold hover:underline"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            View All Services →
                          </Link>
                        </div>

                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gold/10 hover:border-gold/30 border border-transparent transition-all group"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-gold/20 flex items-center justify-center text-gold group-hover:border-gold group-hover:scale-105 transition-all flex-shrink-0">
                              <Stethoscope className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-white group-hover:text-gold transition-colors">
                                {s.title}
                              </h4>
                              <p className="text-[11px] text-[#8E8E93] line-clamp-1 mt-0.5">
                                {s.cardSubtitle}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-gold bg-gold/10 border border-gold/30'
                      : 'text-[#D0D0D0] hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              variant="call"
              size="sm"
              icon={Phone}
            >
              CALL NOW: {COMPANY_INFO.primaryPhone}
            </Button>

            <Button
              href={`https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=Hello%20R.S.%20Health%20Care%20Service,%20I%20would%20like%20to%20inquire%20about%20your%20healthcare%20services.`}
              variant="whatsapp"
              size="sm"
              icon={MessageCircle}
            >
              WHATSAPP
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              variant="call"
              size="sm"
              className="px-2.5 py-1.5 md:hidden text-xs"
              icon={Phone}
            >
              Call Manager
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#141414] border border-gold/30 text-gold hover:text-white hover:border-gold transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0A0A]/98 border-b border-gold/30 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto px-4 py-6">
          <div className="space-y-3">
            {/* Quick trust strip */}
            <div className="p-3 rounded-xl bg-gold/10 border border-gold/30 text-xs text-center text-gold font-bold">
              24/7 Care Manager: {COMPANY_INFO.contacts.manager.name} ({COMPANY_INFO.primaryPhone})
            </div>

            {/* Links */}
            <Link
              to="/"
              className="block px-4 py-3 rounded-xl font-bold text-base text-white hover:bg-gold/10 hover:text-gold transition-colors"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block px-4 py-3 rounded-xl font-bold text-base text-white hover:bg-gold/10 hover:text-gold transition-colors"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base text-white hover:bg-gold/10 hover:text-gold transition-colors"
              >
                <span>Healthcare Services (12)</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-gold' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-black/50 rounded-xl border border-gold/15 mt-1">
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-xs font-bold text-gold uppercase tracking-wider border-b border-gold/15 mb-1"
                  >
                    → View All Services Overview
                  </Link>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-[#D0D0D0] hover:text-gold hover:bg-gold/5"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/book-service"
              className="block px-4 py-3 rounded-xl font-bold text-base text-gold hover:bg-gold/10 transition-colors"
            >
              Book a Service
            </Link>

            <Link
              to="/contact"
              className="block px-4 py-3 rounded-xl font-bold text-base text-white hover:bg-gold/10 hover:text-gold transition-colors"
            >
              Contact Us
            </Link>

            {/* Direct Contact Buttons */}
            <div className="pt-4 border-t border-gold/20 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0] text-center">
                Contact Care Desk
              </div>
              
              <Button
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                variant="call"
                size="md"
                className="w-full justify-center"
                icon={Phone}
              >
                Call Manager ({COMPANY_INFO.contacts.manager.phone})
              </Button>

              <Button
                href={`https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=Hello%20Govind%20Kumar%20(Manager),%20I%20need%20healthcare%20assistance.`}
                variant="whatsapp"
                size="md"
                className="w-full justify-center"
                icon={MessageCircle}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
