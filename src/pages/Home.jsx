import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  CalendarCheck, 
  ShieldCheck, 
  HeartHandshake, 
  UserCheck, 
  Clock, 
  Activity, 
  Stethoscope, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Globe, 
  Sparkles, 
  ChevronRight,
  User,
  Star,
  Users
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyData';
import { HEALTHCARE_IMAGES } from '../data/images';
import Button from '../components/common/Button';
import TrustPillars from '../components/common/TrustPillars';
import ServiceCard from '../components/common/ServiceCard';
import ContactCard from '../components/common/ContactCard';
import BookingForm from '../components/common/BookingForm';
import ECGDivider from '../components/brand/ECGDivider';
import HexIcon from '../components/brand/HexIcon';
import CardEmblem from '../components/brand/CardEmblem';
import HealthcareImage from '../components/common/HealthcareImage';
import SEOHead from '../components/common/SEOHead';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0]">
      <SEOHead 
        title="R.S. Health Care Service | Compassionate Home Healthcare & Nursing" 
        description="24/7 Professional Home Healthcare, Nursing Staff, Patient Care, Elder Care, ICU Care, Physiotherapy, and Medical Equipment across India. Primary hub in Khanna (Chandigarh)."
      />

      {/* =========================================================================
          HERO SECTION — Cinematic Black & Gold with Authentic Photography
      ========================================================================== */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 overflow-hidden bg-[#050505]">
        {/* Cinematic Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HEALTHCARE_IMAGES.hero.url}
            alt={HEALTHCARE_IMAGES.hero.alt}
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#D4A72C15_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Hero Text & CTAs (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold/25 via-gold/15 to-transparent border border-gold/40 shadow-gold-sm backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-gold uppercase">
                  Care You Can Trust, Comfort They Deserve
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.15]">
                Compassionate Healthcare,{' '}
                <span className="text-gold-gradient block mt-1">
                  Right at Your Doorstep
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg text-[#C8C8C8] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Professional, trained and compassionate healthcare services for patients, elderly people, mothers, babies and families — available 24/7 across India from our Khanna (Chandigarh) operational hub.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Button
                  to="/book-service"
                  variant="gold"
                  size="lg"
                  icon={CalendarCheck}
                  className="shadow-gold-md"
                >
                  BOOK A SERVICE
                </Button>

                <Button
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  variant="outline"
                  size="lg"
                  icon={Phone}
                >
                  CALL NOW: {COMPANY_INFO.primaryPhone}
                </Button>

                <Button
                  href={`https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=Hello%20R.S.%20Health%20Care%20Service,%20I%20need%20immediate%20healthcare%20support.`}
                  variant="whatsapp"
                  size="lg"
                  icon={MessageCircle}
                >
                  WHATSAPP
                </Button>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0">
                {[
                  "✓ Professional Care",
                  "✓ Trained Staff",
                  "✓ Compassionate Support",
                  "✓ 24/7 Service"
                ].map((badge, idx) => (
                  <div 
                    key={idx}
                    className="p-2 rounded-xl bg-black/75 border border-gold/30 text-center text-xs font-bold text-[#E5B842] shadow-sm backdrop-blur-sm"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Visual Card (5 Cols) — Official Visiting Card Artwork Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md gold-card rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-[0_20px_60px_rgba(0,0,0,0.95)] relative backdrop-blur-xl">
                {/* Gold corner ornaments */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/25 to-transparent rounded-tr-3xl pointer-events-none"></div>

                {/* Central Emblem */}
                <div className="text-center space-y-3 pb-6 border-b border-gold/20">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-[#14120C] border border-gold/50 flex items-center justify-center shadow-gold-sm">
                    <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none">
                      <path 
                        d="M50 24 C36 10, 16 24, 26 50 C34 68, 50 82, 50 82 C50 82, 66 68, 74 50 C84 24, 64 10, 50 24 Z" 
                        stroke="url(#heroGoldGrad2)" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="45" y="32" width="10" height="24" rx="2" fill="url(#heroGoldGrad2)" />
                      <rect x="38" y="39" width="24" height="10" rx="2" fill="url(#heroGoldGrad2)" />
                      <path 
                        d="M20 62 C22 75, 36 88, 50 94 C64 88, 78 75, 80 62 C74 70, 62 78, 50 82 C38 78, 26 70, 20 62 Z" 
                        fill="url(#heroGoldGrad2)" 
                      />
                      <defs>
                        <linearGradient id="heroGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFF0C2" />
                          <stop offset="35%" stopColor="#F4C95D" />
                          <stop offset="70%" stopColor="#D4A72C" />
                          <stop offset="100%" stopColor="#946B08" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h2 className="text-xl font-display font-extrabold text-gold-gradient tracking-wider">
                    R.S. HEALTH CARE SERVICE
                  </h2>
                  <p className="text-xs font-serif italic text-[#CFCFCF]">
                    "Care You Can Trust, Comfort They Deserve"
                  </p>
                </div>

                {/* 24/7 Care Coordination Contacts on Hero */}
                <div className="py-4 space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-gold/15 to-transparent border border-gold/35">
                    <div className="flex items-center gap-2.5">
                      <HexIcon iconName="ShieldCheck" size="small" />
                      <div>
                        <span className="text-[10px] text-gold font-bold uppercase tracking-wider">OWNER & FOUNDER</span>
                        <div className="text-xs font-bold text-white">{COMPANY_INFO.owner.name}</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-gold/80 font-bold px-2 py-0.5 rounded-md bg-gold/10 border border-gold/20">Executive Lead</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/70 border border-gold/30">
                    <div className="flex items-center gap-2.5">
                      <HexIcon iconName="User" size="small" />
                      <div>
                        <span className="text-[10px] text-gold font-bold uppercase">CARE MANAGER</span>
                        <div className="text-xs font-bold text-white">{COMPANY_INFO.contacts.manager.name}</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.manager.phone}`}
                      className="text-xs font-mono font-bold text-[#F4C95D] hover:underline"
                    >
                      {COMPANY_INFO.contacts.manager.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/70 border border-gold/20">
                    <div className="flex items-center gap-2.5">
                      <HexIcon iconName="User" size="small" />
                      <div>
                        <span className="text-[10px] text-gold font-bold uppercase">ACCOUNTANT</span>
                        <div className="text-xs font-bold text-white">{COMPANY_INFO.contacts.accountant.name}</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.accountant.phone}`}
                      className="text-xs font-mono font-bold text-[#F4C95D] hover:underline"
                    >
                      {COMPANY_INFO.contacts.accountant.phone}
                    </a>
                  </div>
                </div>

                {/* Service Area Footnote */}
                <div className="pt-3 border-t border-gold/20 flex items-center justify-between text-xs">
                  <span className="text-[#A0A0A0] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {COMPANY_INFO.location}
                  </span>
                  <span className="font-bold text-gold flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" /> {COMPANY_INFO.serviceArea}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUST STATS SECTION — Verified Statistics Bar
      ========================================================================== */}
      <section className="py-8 bg-[#080808] border-y border-gold/25 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className={`${idx > 0 && idx % 2 === 0 ? 'pt-4 sm:pt-0' : ''} ${idx % 2 === 1 ? 'pt-4 sm:pt-0' : ''}`}>
                <div className="text-2xl sm:text-4xl font-display font-extrabold text-gold-gradient">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#8E8E93] mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Card Trust Pill Bar */}
      <div className="-mt-4 relative z-20">
        <TrustPillars variant="bar" />
      </div>

      {/* =========================================================================
          SERVICES SECTION — 12 Complete Categories with Authentic Photography
      ========================================================================== */}
      <section id="services" className="py-20 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with ECG pulse divider */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ECGDivider 
              title="OUR SERVICES" 
              subtitle="Professional care and clinical support designed around your family's specific medical and personal needs." 
            />
          </div>

          {/* 12 Services Grid with Real Photography Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                showImage={true}
                featured={service.id === 'nursing-staff'}
              />
            ))}
          </div>

          {/* Quick CTA to see full catalog */}
          <div className="mt-12 text-center">
            <Button
              to="/services"
              variant="outline"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore Detailed Services & Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SERVICE SPOTLIGHT — Professional Nursing Care at Home
      ========================================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#0F0E0A] via-[#070707] to-[#0A0A0A] border-y border-gold/30 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-4 h-4" />
                <span>Featured Care Service</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                Professional Nursing Care <span className="text-gold-gradient">at Home</span>
              </h2>

              <p className="text-sm sm:text-base text-[#C0C0C0] leading-relaxed">
                Hospital discharge doesn't mean clinical care has to stop. Our certified GNM and B.Sc nurses deliver compassionate, sterile, and attentive hospital-standard treatments in the comfort and familiarity of your home.
              </p>

              {/* 6 Feature Pillars from prompt */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Trained Nursing Staff", desc: "Qualified GNM & B.Sc nurses with hospital clinical background." },
                  { title: "Personalized Patient Support", desc: "Customized daily care routines tailored to doctor directives." },
                  { title: "Home-Based Care", desc: "Hospital treatments without travel stress or hospital infection risks." },
                  { title: "Regular Monitoring", desc: "Continuous tracking of BP, SPO2, glucose, and critical vitals." },
                  { title: "Family Assistance", desc: "Relieving caregiving fatigue with professional bedside support." },
                  { title: "Flexible Care Options", desc: "12-hour day/night shifts or continuous 24-hour live-in nursing." },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-black/60 border border-gold/20 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-[#9A9A9A] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  to={`/book-service?service=${encodeURIComponent('Nursing Staff & Clinical Care')}`}
                  variant="gold"
                  size="lg"
                  icon={CalendarCheck}
                >
                  Request Nursing Care
                </Button>

                <Button
                  to="/services/nursing-care"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  View Nursing Protocols
                </Button>
              </div>
            </div>

            {/* Right Visual Image Showcase (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="gold-card rounded-3xl p-3 border border-gold/40 shadow-gold-lg relative overflow-hidden">
                <HealthcareImage
                  src={HEALTHCARE_IMAGES.nursingCare.url}
                  alt={HEALTHCARE_IMAGES.nursingCare.alt}
                  aspectRatio="4/3"
                  rounded="2xl"
                  borderGold={false}
                  overlay="dark"
                  className="w-full"
                />

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-gold" />
                      <span className="text-sm font-bold text-white">Clinical Nursing Quality</span>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gold text-black">
                      24/7 Active
                    </span>
                  </div>

                  <p className="text-xs text-[#9E9E9E]">
                    Background-verified nurses equipped with clinical diagnostics for home bedside support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY CARE CATEGORIES HIGHLIGHT WITH PHOTOGRAPHY
      ========================================================================== */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-gradient">
              Specialized Care Spectrum
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
              Comprehensive Support for Every Stage of Life
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2">
              Explore our core pillars of home healthcare assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "PATIENT CARE",
                tagline: "Reliable support for patients recovering at home.",
                icon: "UserCheck",
                slug: "patient-care",
                image: HEALTHCARE_IMAGES.patientCare,
                desc: "Assisted sponge bathing, hygiene, feeding assistance, diaper changing, and post-surgery patient comfort."
              },
              {
                title: "ELDER CARE",
                tagline: "Compassionate assistance for senior citizens.",
                icon: "Heart",
                slug: "elder-care",
                image: HEALTHCARE_IMAGES.elderCare,
                desc: "Dedicated daily living assistance, mobility support, medication management, and dementia/Alzheimer's companion care."
              },
              {
                title: "ICU CARE",
                tagline: "Specialized home-care support for critical patients.",
                icon: "Activity",
                slug: "icu-care",
                image: HEALTHCARE_IMAGES.icuCare,
                desc: "Complete intensive care setup at home with multi-para monitors, suction, BiPAP, and certified critical care nurses."
              },
              {
                title: "PHYSIOTHERAPY",
                tagline: "Professional rehabilitation and mobility support.",
                icon: "PersonStanding",
                slug: "physiotherapy",
                image: HEALTHCARE_IMAGES.physiotherapy,
                desc: "In-home physical therapy for stroke recovery, joint replacements, chronic back pain, and geriatric mobility restoration."
              },
              {
                title: "BABY & MOTHER CARE",
                tagline: "Dedicated support for new mothers and newborn babies.",
                icon: "Baby",
                slug: "baby-mother-care",
                image: HEALTHCARE_IMAGES.babyMotherCare,
                desc: "Traditional infant massage, cord hygiene, mother postnatal recovery, lactation guidance, and night-shift soothing."
              },
              {
                title: "DOCTOR AT HOME",
                tagline: "Convenient healthcare consultation at home.",
                icon: "Stethoscope",
                slug: "doctor-visit",
                image: HEALTHCARE_IMAGES.doctorVisit,
                desc: "Licensed physicians visiting your residence for comprehensive medical evaluations, prescriptions, and lab tests."
              },
            ].map((cat, i) => (
              <div 
                key={i}
                className="gold-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-gold transition-all duration-300"
              >
                {/* Photo banner */}
                <div className="relative">
                  <HealthcareImage
                    src={cat.image.thumbnail || cat.image.url}
                    alt={cat.image.alt}
                    aspectRatio="16/9"
                    rounded="none"
                    borderGold={false}
                    overlay="dark"
                    className="h-44 w-full"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold px-2.5 py-1 rounded-full bg-black/80 border border-gold/30 backdrop-blur-sm">
                      Home Visit
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-gold transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4A72C] mt-1 mb-2">
                    "{cat.tagline}"
                  </p>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to={`/services/${cat.slug}`}
                      className="text-xs font-bold text-white hover:text-gold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </Link>

                    <Button
                      to={`/book-service?service=${encodeURIComponent(cat.title)}`}
                      variant="gold"
                      size="sm"
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US — 6 Gold Feature Cards
      ========================================================================== */}
      <section id="why-us" className="py-20 bg-[#080808] border-y border-gold/25 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-gradient">
              The R.S. Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
              Why Families Choose R.S. Health Care
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2">
              Setting the standard for professional, ethical, and compassionate home healthcare across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Professional Care",
                desc: "Strict clinical standards, sterile procedures, and structured care plans supervised by experienced healthcare leads.",
                icon: "ShieldCheck"
              },
              {
                title: "Trained Staff",
                desc: "Certified GNM/B.Sc nurses, GDA assistants, and verified male & female caregivers with verified credentials.",
                icon: "UserCheck"
              },
              {
                title: "Compassionate Support",
                desc: "We treat every patient with the patience, warmth, and respect they would receive from their own loving family.",
                icon: "HeartHandshake"
              },
              {
                title: "24/7 Service",
                desc: "Round-the-clock telephone desk, night nursing, 24-hour live-in staff, and emergency medical support.",
                icon: "Clock"
              },
              {
                title: "Personalized Attention",
                desc: "One-on-one tailored care plans respecting doctor prescriptions, family preferences, and patient habits.",
                icon: "Sparkles"
              },
              {
                title: "Home Healthcare",
                desc: "Providing all hospital services—from nursing to ICU equipment and doctor visits—directly to your doorstep.",
                icon: "Activity"
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="gold-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-4 group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                    <HexIcon iconName={card.icon} size="default" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E9E9E] mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-gold font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW IT WORKS — Simple 4-Step Process
      ========================================================================== */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-gradient">
              Simple & Transparent
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2">
              Get certified healthcare support at your home in four easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "Tell Us Your Requirement",
                desc: "Fill our quick WhatsApp booking form or call our 24/7 care desk with your patient's details and required care.",
              },
              {
                step: "02",
                title: "Talk With Our Care Team",
                desc: "Our senior coordinator assesses the patient's medical condition, shift preferences (12h/24h), and staff gender preference.",
              },
              {
                step: "03",
                title: "Choose The Right Care Service",
                desc: "We match the most qualified nurse, attendant, or therapist and finalize the tailored home healthcare plan.",
              },
              {
                step: "04",
                title: "Get Professional Care at Home",
                desc: "Our verified staff arrives promptly at your doorstep to start attentive, compassionate, and reliable home care.",
              },
            ].map((step, idx) => (
              <div 
                key={idx}
                className="gold-card rounded-2xl p-6 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-gold-gradient opacity-80 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#9E9E9E] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold/15 flex items-center justify-between text-[11px] text-gold">
                  <span>Step {idx + 1} of 4</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              to="/book-service"
              variant="gold"
              size="lg"
              icon={CalendarCheck}
            >
              Start Step 01: Request Care Now
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPASSION & DIGNITY SECTION — Emotional Heart/Cross & Handshake Photo
      ========================================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#0F0E0A] to-[#050505] border-y border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image & Artwork Badges from Visiting Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <HealthcareImage
                src={HEALTHCARE_IMAGES.compassionCare.url}
                alt={HEALTHCARE_IMAGES.compassionCare.alt}
                aspectRatio="16/9"
                rounded="3xl"
                overlay="dark"
                className="w-full shadow-gold-md"
              />

              <div className="grid grid-cols-2 gap-3">
                <CardEmblem variant="heart-house" />
                <CardEmblem variant="we-care" />
              </div>
            </div>

            {/* Right Emotional Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 text-gold fill-gold/20" />
                <span>Our Core Care Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                Because Your Loved Ones <span className="text-gold-gradient">Deserve The Best Care</span>
              </h2>

              <blockquote className="p-4 rounded-2xl bg-black/60 border-l-4 border-gold text-sm sm:text-base text-[#D0D0D0] italic leading-relaxed">
                "We believe healthcare is not only about treatment. It is about comfort, dignity, trust and being there when families need support the most."
              </blockquote>

              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                When health challenges arise, being in your own home surrounded by cherished memories promotes faster recovery and emotional calm. Our mission at R.S. Health Care Service is to bring top-tier clinical expertise together with warmth and human kindness.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  to="/about"
                  variant="gold"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Read About Our Values
                </Button>

                <Button
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  variant="outline"
                  size="md"
                  icon={Phone}
                >
                  Speak With Care Manager
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE AREA SECTION — Khanna (Chandigarh) & All India Coverage
      ========================================================================== */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-gradient">
              Nationwide Reach
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
              Healthcare Support Across India
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2">
              Serving families with professional healthcare support and assistance.
            </p>
          </div>

          <div className="gold-card rounded-3xl p-6 sm:p-10 border border-gold/40 shadow-gold-md">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Main Operational Hub
                </h3>
                <div className="p-4 rounded-xl bg-black/70 border border-gold/25">
                  <span className="text-xs text-gold font-bold uppercase block">Primary Headquarters</span>
                  <span className="text-lg font-bold text-white block mt-1">{COMPANY_INFO.location}</span>
                  <span className="text-xs text-[#9E9E9E] block mt-1">Ludhiana / Chandigarh Region, Punjab</span>
                </div>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Fast emergency response and same-day staff deployment throughout Punjab, Chandigarh, Haryana, and neighboring northern regions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {COMPANY_INFO.serviceArea}
                </h3>
                <div className="p-4 rounded-xl bg-black/70 border border-gold/25">
                  <span className="text-xs text-gold font-bold uppercase block">Coverage Scope</span>
                  <span className="text-lg font-bold text-white block mt-1">Pan-India Deployment</span>
                  <span className="text-xs text-[#9E9E9E] block mt-1">24-Hour Live-in & Long-term Care</span>
                </div>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  We arrange verified long-term nursing, critical care staff, and medical equipment for families across all Indian states and metro cities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#18140B] to-[#0A0A0A] border border-gold/30 text-center space-y-4">
                <h4 className="text-base font-bold text-gold-gradient">
                  Need Staff In Your City?
                </h4>
                <p className="text-xs text-[#C0C0C0]">
                  Contact our care manager directly to verify immediate availability for your region.
                </p>
                <div className="space-y-2">
                  <Button
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    variant="gold"
                    size="sm"
                    className="w-full justify-center"
                    icon={Phone}
                  >
                    Call: {COMPANY_INFO.primaryPhone}
                  </Button>
                  <Button
                    href={`https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=Hello,%20I%20want%20to%20check%20healthcare%20service%20availability%20in%20my%20location.`}
                    variant="whatsapp"
                    size="sm"
                    className="w-full justify-center"
                    icon={MessageCircle}
                  >
                    Check City Availability
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OFFICIAL CONTACTS SHOWCASE (Manager & Accountant)
      ========================================================================== */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-gradient">
              Direct Contact Desk
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
              Our Patient Care & Staffing Coordinators
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2">
              Call or WhatsApp our Care Manager directly for 24/7 patient assistance, emergency staffing, and queries.
            </p>
          </div>

          <ContactCard />
        </div>
      </section>

      {/* =========================================================================
          BOOK A SERVICE EMBEDDED SECTION
      ========================================================================== */}
      <section id="book" className="py-20 bg-gradient-to-b from-[#080808] to-[#040404] border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
