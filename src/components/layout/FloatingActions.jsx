import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=Hello%20R.S.%20Health%20Care%20Service,%20I%20would%20like%20to%20inquire%20about%20your%20healthcare%20services.`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 border border-emerald-300/40"
          aria-label="Chat with R.S. Health Care on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>
          
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">
              24/7 WhatsApp
            </span>
            <span className="text-xs font-extrabold text-white">
              Instant Inquiry
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (< md screen) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-gold/30 p-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.9)]">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Manager */}
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gold/15 text-gold border border-gold/40 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-extrabold uppercase tracking-tight">Call Manager</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-black font-extrabold shadow-md active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-extrabold uppercase tracking-tight">WhatsApp</span>
          </a>

          {/* Book Online */}
          <Link
            to="/book-service"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1A1A1A] text-white border border-gold/30 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 mb-0.5 text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-tight">Book Care</span>
          </Link>
        </div>
      </div>
    </>
  );
}
