import React from 'react';
import { Phone, MessageCircle, MapPin, Globe, UserCheck, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import HexIcon from '../brand/HexIcon';

export default function ContactCard({ className = '' }) {
  const { contacts } = COMPANY_INFO;
  const teamList = [
    { ...contacts.owner, key: 'owner' },
    { ...contacts.manager, key: 'manager' },
    { ...contacts.accountant, key: 'accountant' },
  ];

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamList.map((member) => (
          <div
            key={member.key}
            className={`gold-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group border ${
              member.isOwner ? 'border-gold/50 shadow-gold-sm bg-gradient-to-b from-[#14120B] to-[#0A0A0A]' : 'border-gold/30'
            }`}
          >
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>

            <div>
              {/* Header with Hexagon Badge */}
              <div className="flex items-center gap-3 mb-4">
                <HexIcon iconName={member.isOwner ? 'ShieldCheck' : 'User'} size="default" />
                <div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gold uppercase block">
                    {member.title}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold-gradient transition-colors">
                    {member.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#A0A0A0] mb-5 leading-relaxed min-h-[36px]">
                {member.role}
              </p>

              {/* Status / Contact Block */}
              {member.isOwner ? (
                <div className="p-3.5 rounded-xl bg-black/60 border border-gold/30 flex items-center justify-between mb-5">
                  <span className="text-[11px] text-[#A0A0A0] font-semibold">PATIENT DESK:</span>
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    Managed by Care Team
                  </span>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-black/60 border border-gold/25 flex items-center justify-between mb-5">
                  <span className="text-[11px] text-[#A0A0A0] font-semibold">DIRECT CONTACT:</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white tracking-wider">
                    {member.phone}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/5">
              {member.isOwner ? (
                <>
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gold/15 hover:bg-gold text-gold hover:text-black text-xs font-bold border border-gold/40 transition-all duration-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>

                  <a
                    href={`https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=Hello%20R.S.%20Health%20Care%20Service,%20I%20would%20like%20to%20inquire%20about%20your%20healthcare%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black text-xs font-bold border border-[#25D366]/40 transition-all duration-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gold/15 hover:bg-gold text-gold hover:text-black text-xs font-bold border border-gold/40 transition-all duration-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/91${member.phone}?text=Hello%20${encodeURIComponent(member.name)},%20I%20would%20like%20to%20inquire%20about%20R.S.%20Health%20Care%20Service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black text-xs font-bold border border-[#25D366]/40 transition-all duration-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Location & Coverage Banner */}
      <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#17140B] via-[#0F0E0A] to-[#17140B] border border-gold/30 shadow-gold-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
            <Globe className="w-5 h-5 animate-pulse-slow" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gold-gradient uppercase tracking-wider">
              {COMPANY_INFO.serviceArea}
            </h4>
            <p className="text-xs text-[#B0B0B0]">
              Primary Operational Hub: <strong className="text-white">{COMPANY_INFO.location}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A72C] bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/30">
          <MapPin className="w-3.5 h-3.5" />
          <span>Serving Families Across India 24/7</span>
        </div>
      </div>
    </div>
  );
}
