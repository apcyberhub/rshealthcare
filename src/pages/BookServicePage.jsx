import React from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarCheck, Phone, ShieldCheck, Clock, CheckCircle2, MessageCircle, Heart } from 'lucide-react';
import BookingForm from '../components/common/BookingForm';
import { COMPANY_INFO } from '../data/companyData';
import ContactCard from '../components/common/ContactCard';
import SEOHead from '../components/common/SEOHead';

export default function BookServicePage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preselectedService = searchParams.get('service') || '';

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] pt-28 sm:pt-36 pb-20">
      <SEOHead 
        title="Book a Healthcare Service | R.S. Health Care Service" 
        description="Book certified home healthcare, nursing staff, patient attendants, ICU care, elder care or medical equipment directly via WhatsApp or 24/7 phone support."
      />

      {/* Hero Banner */}
      <section className="py-12 bg-dark-radial border-b border-gold/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>24/7 Fast Care Dispatch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Book a <span className="text-gold-gradient">Healthcare Service</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#B0B0B0] max-w-2xl mx-auto mt-3">
            Fill out the requirement form below to generate an instant structured inquiry for WhatsApp, or contact our 24/7 dispatch desk directly.
          </p>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <BookingForm preselectedService={preselectedService} />
            </div>

            {/* Right: Why Book With Us & Direct Contact Options (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Process Card */}
              <div className="gold-card rounded-3xl p-6 sm:p-8 border border-gold/35 space-y-4">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span>Our Booking Assurance</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Fast Assessment:</strong> We review your patient's medical requirements and match the right staff within hours.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Verified Credentials:</strong> All staff are police-verified with certified medical or caregiving training.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Replacement Guarantee:</strong> Immediate replacement provided if you need a different staff member.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Flexible Shift Durations:</strong> 12-hour day/night shifts or continuous 24-hour live-in arrangements.
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Urgent Calls Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#18140B] to-[#0A0A0A] border border-gold/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <Clock className="w-4 h-4" />
                  <span>Immediate Medical Emergency?</span>
                </div>

                <h4 className="text-base font-bold text-white">
                  Call our care coordinators directly:
                </h4>

                <div className="space-y-2 text-xs">
                  <a
                    href={`tel:${COMPANY_INFO.contacts.manager.phone}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-gold/20 hover:border-gold transition-colors"
                  >
                    <div>
                      <span className="text-gold font-bold block">{COMPANY_INFO.contacts.manager.name} (Manager)</span>
                      <span className="text-[#8E8E93]">All Inquiries & Staff Deployment</span>
                    </div>
                    <span className="font-mono font-bold text-white">{COMPANY_INFO.contacts.manager.phone}</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.contacts.accountant.phone}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-gold/20 hover:border-gold transition-colors"
                  >
                    <div>
                      <span className="text-gold font-bold block">{COMPANY_INFO.contacts.accountant.name} (Accountant)</span>
                      <span className="text-[#8E8E93]">Billing & Invoicing Desk</span>
                    </div>
                    <span className="font-mono font-bold text-white">{COMPANY_INFO.contacts.accountant.phone}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Leadership Contacts Directory */}
      <section className="py-16 bg-[#080808] border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCard />
        </div>
      </section>
    </div>
  );
}
