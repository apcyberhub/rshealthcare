import React, { useState, useMemo } from 'react';
import { Search, Filter, Stethoscope, Heart, Activity, UserCheck, PackageCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import ServiceCard from '../components/common/ServiceCard';
import ECGDivider from '../components/brand/ECGDivider';
import Button from '../components/common/Button';
import SEOHead from '../components/common/SEOHead';

export default function ServicesCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services (12)' },
    { id: 'clinical', label: 'Clinical & Nursing' },
    { id: 'personal', label: 'Personal & Elder Care' },
    { id: 'critical', label: 'Critical & ICU Care' },
    { id: 'specialized', label: 'Specialized & Equipment' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES.filter((s) => {
      const matchesSearch = 
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.briefDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.keyFeatures.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === 'clinical') {
        return ['nursing-staff', 'doctor-visit', 'tracheostomy-care', 'gda-staff'].includes(s.id);
      }
      if (selectedCategory === 'personal') {
        return ['patient-care', 'elder-care', 'care-taker', 'baby-mother-care'].includes(s.id);
      }
      if (selectedCategory === 'critical') {
        return ['icu-care', 'ventilator-staff', 'tracheostomy-care'].includes(s.id);
      }
      if (selectedCategory === 'specialized') {
        return ['physiotherapy', 'medical-equipment', 'baby-mother-care', 'doctor-visit'].includes(s.id);
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] pt-28 sm:pt-36 pb-20">
      <SEOHead 
        title="Our Healthcare Services | R.S. Health Care Service" 
        description="Explore all 12 home healthcare services by R.S. Health Care Service including Nursing Staff, Patient Attendants, Elder Care, ICU Care, Physiotherapy, and Medical Equipment."
      />

      {/* Page Header */}
      <section className="py-12 bg-dark-radial border-b border-gold/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Comprehensive Care Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Our Healthcare <span className="text-gold-gradient">Services</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#B0B0B0] max-w-2xl mx-auto mt-3">
            Professional care and clinical support designed around your family's specific medical and comfort requirements.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services by name, condition (e.g. ICU, nurse, elder, physiotherapy, ventilator)..."
                className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-[#0F0E0A] border border-gold/30 focus:border-gold text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all shadow-gold-sm"
              />
              <Search className="w-5 h-5 text-gold absolute left-4 top-4 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-3.5 text-xs text-gold hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-gold text-black shadow-gold-sm'
                      : 'bg-[#141414] text-[#A0A0A0] hover:text-white border border-white/10 hover:border-gold/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 gold-card rounded-3xl p-8 max-w-lg mx-auto">
              <p className="text-base font-bold text-white mb-2">No matching services found</p>
              <p className="text-xs text-[#8E8E93] mb-4">Try adjusting your search terms or view all services.</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} variant="gold" size="sm">
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Emergency / Consultation CTA */}
      <section className="py-12 bg-[#090909] border-t border-gold/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Unsure Which Service Your Patient Needs?
          </h3>
          <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl mx-auto">
            Speak directly with our senior care coordinator to evaluate your patient's prescriptions and formulate a tailored care plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              to="/book-service"
              variant="gold"
              size="md"
            >
              Request Free Consultation
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="md"
            >
              Contact Care Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
