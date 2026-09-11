import React from 'react';
import { ShieldCheck, HeartHandshake, UserCheck, Clock, Award, CheckCircle2, Phone, MessageCircle, Heart, MapPin, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { HEALTHCARE_IMAGES } from '../data/images';
import Button from '../components/common/Button';
import TrustPillars from '../components/common/TrustPillars';
import ContactCard from '../components/common/ContactCard';
import CardEmblem from '../components/brand/CardEmblem';
import HealthcareImage from '../components/common/HealthcareImage';
import ECGDivider from '../components/brand/ECGDivider';
import SEOHead from '../components/common/SEOHead';

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] pt-28 sm:pt-36 pb-20">
      <SEOHead 
        title="About Us | R.S. Health Care Service" 
        description="Learn about R.S. Health Care Service, our founding mission, verified healthcare staff, and leadership team in Khanna (Chandigarh) providing compassionate home care across India."
      />

      {/* Hero Banner */}
      <section className="relative py-16 bg-[#050505] border-b border-gold/20 overflow-hidden">
        {/* Background Image with subtle overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HEALTHCARE_IMAGES.healthcareTeam.url}
            alt={HEALTHCARE_IMAGES.healthcareTeam.alt}
            className="w-full h-full object-cover opacity-15 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Our Heritage & Purpose</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="text-gold-gradient">R.S. Health Care Service</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#B5B5B5] max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            "Care You Can Trust, Comfort They Deserve" — Dedicated to providing hospital-grade clinical and bedside nursing care in the comfort of your home.
          </p>
        </div>
      </section>

      {/* Brand Story & Mission */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-gradient">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
                Compassionate Healthcare Grounded in Dignity & Trust
              </h2>

              <p className="text-sm text-[#B0B0B0] leading-relaxed">
                <strong className="text-white">R.S. Health Care Service</strong> was established under the leadership of Founder & Owner <strong className="text-gold">{COMPANY_INFO.owner.name}</strong> with a singular, heartfelt vision: to provide patients, elderly parents, and recovering individuals with professional hospital-grade care without requiring prolonged, costly, and emotionally draining hospital stays.
              </p>

              <p className="text-sm text-[#B0B0B0] leading-relaxed">
                Headquartered in <strong className="text-gold">{COMPANY_INFO.location}</strong> with an active service dispatch network spanning across India, we deploy certified nurses (GNM, B.Sc), patient attendants, geriatric caregivers, physiotherapists, and critical care technicians to homes 24 hours a day, 365 days a year.
              </p>

              <div className="p-4 rounded-2xl bg-black/70 border border-gold/30 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Our Guiding Philosophy</span>
                </div>
                <p className="text-xs text-[#CFCFCF] italic">
                  "We Care Because You Matter — Healthcare is not merely a service; it is a sacred trust between caregivers and the families who place their loved ones in our hands."
                </p>
              </div>
            </div>

            {/* Right Column (6 Cols) — Visual Photo & Card Emblems */}
            <div className="lg:col-span-6 space-y-4">
              <HealthcareImage
                src={HEALTHCARE_IMAGES.consultation.url}
                alt={HEALTHCARE_IMAGES.consultation.alt}
                aspectRatio="16/9"
                rounded="3xl"
                overlay="dark"
                className="w-full shadow-gold-md"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CardEmblem variant="heart-house" />
                <CardEmblem variant="we-care" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-16 bg-[#080808] border-y border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient">
              Our Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              What Sets R.S. Health Care Apart
            </h2>
          </div>

          <TrustPillars variant="cards" />
        </div>
      </section>

      {/* Staff Verification & Safety Standards */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-card rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-gold-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Safety & Verification Protocols</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  100% Verified, Trained & Compassionate Staff
                </h3>

                <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                  Welcoming a caregiver into your home requires absolute trust. We enforce strict multi-tier vetting for every single male and female staff member before deployment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Complete Background & Identity Checks",
                    "Certified GNM, B.Sc & GDA Nursing Credentials",
                    "Rigorous Hospital ICU/Ward Clinical Training",
                    "Polite, Respectful & Culturally Sensitive Conduct",
                    "Emergency Protocol & Basic Life Support (BLS)",
                    "Prompt Staff Replacement Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E0E0E0]">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-3 rounded-2xl bg-black/80 border border-gold/30">
                <HealthcareImage
                  src={HEALTHCARE_IMAGES.healthcareTeam.url}
                  alt={HEALTHCARE_IMAGES.healthcareTeam.alt}
                  aspectRatio="16/9"
                  rounded="xl"
                  borderGold={false}
                  overlay="dark"
                  className="w-full mb-4"
                />

                <div className="text-center space-y-3 p-2">
                  <h4 className="text-base font-bold text-white">Dedicated Care Team</h4>
                  <p className="text-xs text-[#9E9E9E]">
                    Our coordination desk operates 24 hours a day to match and dispatch the right staff for your patient.
                  </p>
                  <Button
                    to="/book-service"
                    variant="gold"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Book Verified Staff Now
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Care Coordination Directory */}
      <section className="py-20 bg-[#080808] border-t border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-gradient">
              Key Contacts
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
              Leadership & Patient Coordination
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2">
              Direct access to our management team for inquiries, staffing requests, and emergency deployments.
            </p>
          </div>

          <ContactCard />
        </div>
      </section>
    </div>
  );
}
