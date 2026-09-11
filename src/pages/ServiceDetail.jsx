import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  HelpCircle, 
  ChevronDown, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  CalendarCheck,
  Stethoscope,
  Activity,
  Heart
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICE_IMAGE_MAP } from '../data/images';
import HexIcon from '../components/brand/HexIcon';
import Button from '../components/common/Button';
import BookingForm from '../components/common/BookingForm';
import HealthcareImage from '../components/common/HealthcareImage';
import SEOHead from '../components/common/SEOHead';
import ECGDivider from '../components/brand/ECGDivider';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const {
    id,
    title,
    cardSubtitle,
    tagline,
    iconName,
    badge,
    genderAvailability,
    shiftOptions,
    briefDesc,
    fullDesc,
    keyFeatures = [],
    whoNeedsThis = [],
    staffHighlights = [],
    responsibilities = [],
    faqs = [],
  } = service;

  const imageObj = SERVICE_IMAGE_MAP[id] || SERVICE_IMAGE_MAP[slug];
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] pt-28 sm:pt-36 pb-20">
      <SEOHead 
        title={`${title} | R.S. Health Care Service`}
        description={briefDesc}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-[#8E8E93]">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gold font-semibold">{title}</span>
        </div>
      </div>

      {/* Hero Header with Service Image */}
      <section className="py-12 bg-dark-radial border-y border-gold/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {badge && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/40">
                    {badge}
                  </span>
                )}
                {genderAvailability && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/60 text-[#CFCFCF] border border-white/10">
                    {genderAvailability}
                  </span>
                )}
                {shiftOptions && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/60 text-[#A0A0A0] border border-white/10">
                    {shiftOptions}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                {title}
              </h1>

              <p className="text-sm sm:text-base text-gold font-medium italic">
                "{tagline}"
              </p>

              <p className="text-sm text-[#B0B0B0] leading-relaxed max-w-3xl">
                {fullDesc}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  to={`/book-service?service=${encodeURIComponent(title)}`}
                  variant="gold"
                  size="md"
                  icon={CalendarCheck}
                >
                  Book This Service
                </Button>

                <Button
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  variant="outline"
                  size="md"
                  icon={Phone}
                >
                  Call Manager: {COMPANY_INFO.primaryPhone}
                </Button>
              </div>
            </div>

            {/* Right Featured Service Photograph */}
            <div className="lg:col-span-5">
              <div className="gold-card rounded-3xl p-3 border border-gold/40 shadow-gold-lg relative overflow-hidden">
                {imageObj && (
                  <HealthcareImage
                    src={imageObj.url}
                    alt={imageObj.alt || title}
                    aspectRatio="4/3"
                    rounded="2xl"
                    borderGold={false}
                    overlay="dark"
                    priority={true}
                    className="w-full"
                  />
                )}

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">24/7 Patient Dispatch</span>
                    <span className="text-[11px] text-[#9E9E9E] block">Khanna, Chandigarh & Pan-India</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold border border-gold/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Details, Features, Who Needs, Staff (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Key Features & Procedures */}
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-gold" />
                  <span>Clinical Duties & Care Specifications</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {keyFeatures.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#0C0C0C] border border-gold/20 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#D0D0D0] leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Needs This Service */}
              {whoNeedsThis.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-gold" />
                    <span>Who Benefits From This Care</span>
                  </h2>
                  <div className="gold-card rounded-2xl p-6 border border-gold/25 space-y-3">
                    {whoNeedsThis.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#C0C0C0]">
                        <span className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Staff Qualifications & Credentials */}
              {staffHighlights.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-gold" />
                    <span>Staff Qualifications & Safety Standards</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {staffHighlights.map((hl, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-black/70 border border-white/10 flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[#C5C5C5] leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Frequently Asked Questions */}
              {faqs.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-gold" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div
                          key={i}
                          className="gold-card rounded-xl overflow-hidden border border-gold/20"
                        >
                          <button
                            type="button"
                            onClick={() => toggleFaq(i)}
                            className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-white hover:text-gold transition-colors"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed border-t border-white/5 pt-3">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Pre-filled Booking Form (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <BookingForm preselectedService={title} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-[#080808] border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient">
              Complementary Care
            </span>
            <h2 className="text-2xl font-display font-bold text-white mt-1">
              Related Healthcare Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => {
              const relImg = SERVICE_IMAGE_MAP[rel.id] || SERVICE_IMAGE_MAP[rel.slug];
              return (
                <div key={rel.id} className="gold-card rounded-2xl overflow-hidden flex flex-col justify-between group">
                  {relImg && (
                    <HealthcareImage
                      src={relImg.thumbnail || relImg.url}
                      alt={relImg.alt || rel.title}
                      aspectRatio="16/9"
                      rounded="none"
                      borderGold={false}
                      overlay="dark"
                      className="h-36 w-full"
                    />
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <HexIcon iconName={rel.iconName || 'Activity'} size="small" />
                      <h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                        {rel.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#9E9E9E] line-clamp-2 leading-relaxed">
                      {rel.briefDesc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <Link to={`/services/${rel.slug}`} className="text-xs font-bold text-gold hover:underline">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
