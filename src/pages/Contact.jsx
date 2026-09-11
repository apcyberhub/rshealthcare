import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Globe, Clock, Mail, Send, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import ContactCard from '../components/common/ContactCard';
import Button from '../components/common/Button';
import HexIcon from '../components/brand/HexIcon';
import SEOHead from '../components/common/SEOHead';

export default function Contact() {
  const { contacts } = COMPANY_INFO;

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    subject: 'General Healthcare Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    const waText = 
`*DIRECT CONTACT MESSAGE*
━━━━━━━━━━━━━━━━━━━━
*R.S. HEALTH CARE SERVICE*
━━━━━━━━━━━━━━━━━━━━
👤 *From:* ${formState.name}
📱 *Phone:* ${formState.phone}
📌 *Subject:* ${formState.subject}
💬 *Message:*
${formState.message || 'Please connect with me.'}
━━━━━━━━━━━━━━━━━━━━`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] pt-28 sm:pt-36 pb-20">
      <SEOHead 
        title="Contact Us | R.S. Health Care Service" 
        description="Contact R.S. Health Care Service in Khanna (Chandigarh). Founded by Ravinder Singh. Call Care Manager Govind Kumar: 9050281680, or Accountant Kajal: 8307620046 for 24/7 home care."
      />

      {/* Hero Banner */}
      <section className="py-12 bg-dark-radial border-b border-gold/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Official Contact Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Contact <span className="text-gold-gradient">R.S. Health Care Service</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#B0B0B0] max-w-2xl mx-auto mt-3">
            Reach out to our leadership and patient coordination team directly for immediate assistance, staffing, and consultation.
          </p>
        </div>
      </section>

      {/* Leadership Contacts Cards Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient">
              Official Personnel Directory
            </span>
            <h2 className="text-2xl font-display font-bold text-white mt-1">
              Direct Phone & WhatsApp Lines
            </h2>
          </div>

          <ContactCard />
        </div>
      </section>

      {/* Contact Form & Location Details */}
      <section className="py-16 bg-[#080808] border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Direct Query Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="gold-card rounded-3xl p-6 sm:p-8 border border-gold/30 shadow-gold-md">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] mb-6">
                  Have a question regarding staffing, service rates, or equipment rental? Send us a quick note.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gold mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-gold/30 focus:border-gold text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gold mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="Enter your 10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-gold/30 focus:border-gold text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gold mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/90 border border-gold/30 focus:border-gold text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="Home Nursing Inquiry">Home Nursing Inquiry</option>
                      <option value="Patient Attendant Staffing">Patient Attendant Staffing</option>
                      <option value="Elder Care Long-term Support">Elder Care Long-term Support</option>
                      <option value="ICU Equipment & Setup">ICU Equipment & Setup</option>
                      <option value="Physiotherapy Sessions">Physiotherapy Sessions</option>
                      <option value="Accounts & Billing Inquiry">Accounts & Billing Inquiry</option>
                      <option value="Other Medical Requirement">Other Medical Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gold mb-1.5">
                      Message / Question
                    </label>
                    <textarea
                      rows="4"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Type your message or requirement..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-gold/30 focus:border-gold text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="whatsapp"
                    size="lg"
                    className="w-full justify-center"
                    icon={Send}
                  >
                    Send Message via WhatsApp
                  </Button>
                </form>
              </div>
            </div>

            {/* Right: Operational Hub Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="gold-card rounded-3xl p-6 sm:p-8 border border-gold/35 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-gradient">
                    Headquarters
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-1">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-[#8E8E93] italic mt-0.5">
                    "{COMPANY_INFO.tagline}"
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Location:</strong>
                      <span className="text-[#C0C0C0]">{COMPANY_INFO.location}</span>
                      <span className="text-[#8E8E93] block">Ludhiana / Chandigarh Region, Punjab, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Service Coverage:</strong>
                      <span className="text-gold font-semibold">{COMPANY_INFO.serviceArea}</span>
                      <span className="text-[#8E8E93] block">Rapid dispatch across Northern India and Pan-India live-in staff</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Operational Hours:</strong>
                      <span className="text-[#25D366] font-semibold">24 Hours / 7 Days a Week</span>
                      <span className="text-[#8E8E93] block">Emergency night nursing & day shifts</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold/20 flex flex-col gap-2">
                  <span className="text-xs text-[#A0A0A0]">Need to book immediately?</span>
                  <Button
                    to="/book-service"
                    variant="gold"
                    size="md"
                    className="w-full justify-center"
                  >
                    Go To Service Booking Portal
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
