import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle, AlertCircle, Calendar, User, PhoneCall, MapPin, Clock, Stethoscope } from 'lucide-react';
import { SERVICES } from '../../data/servicesData';
import { COMPANY_INFO } from '../../data/companyData';
import Button from './Button';

export default function BookingForm({ preselectedService = '', className = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    patientName: '',
    service: preselectedService || 'Nursing Staff & Clinical Care',
    staffPreference: 'Any / As Recommended',
    shift: '24 Hours (Live-in Care)',
    location: '',
    preferredDate: '',
    preferredTime: 'Morning Shift (8 AM - 8 PM)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your mobile number';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.patientName.trim()) errs.patientName = "Please enter patient's name";
    if (!formData.location.trim()) errs.location = 'Please specify city / location (e.g. Khanna, Chandigarh, etc.)';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate structured WhatsApp message
    const waText = 
`*NEW HEALTHCARE SERVICE INQUIRY*
━━━━━━━━━━━━━━━━━━━━
*R.S. HEALTH CARE SERVICE*
_Care You Can Trust, Comfort They Deserve_
━━━━━━━━━━━━━━━━━━━━
👤 *Requester Name:* ${formData.fullName}
📱 *Phone Number:* ${formData.phone}
🏥 *Patient Name:* ${formData.patientName}
🩺 *Selected Service:* ${formData.service}
👥 *Staff Preference:* ${formData.staffPreference}
⏱️ *Required Shift:* ${formData.shift}
📍 *Location/City:* ${formData.location}
📅 *Preferred Start Date:* ${formData.preferredDate || 'Earliest Possible'}
🕒 *Preferred Time Slot:* ${formData.preferredTime}
📝 *Requirement Details:*
${formData.message ? formData.message : 'Please connect with us for further assessment.'}
━━━━━━━━━━━━━━━━━━━━
_Inquiry sent from Website Booking Portal_`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/91${COMPANY_INFO.primaryWhatsApp}?text=${encodedText}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`gold-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-gold/30 shadow-gold-md relative overflow-hidden ${className}`}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-2">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Priority Care Booking</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
          Book a Healthcare Service
        </h3>
        <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
          Fill out the details below. We will immediately prepare your care plan and connect via WhatsApp and direct call with our Care Manager.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Your Full Name <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Sharma"
                className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                  errors.fullName ? 'border-red-500' : 'border-gold/30 focus:border-gold'
                } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
              />
              <User className="w-4 h-4 text-[#8E8E93] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Mobile Number <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                  errors.phone ? 'border-red-500' : 'border-gold/30 focus:border-gold'
                } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
              />
              <PhoneCall className="w-4 h-4 text-[#8E8E93] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
          </div>

          {/* Patient Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Patient Name / Relation <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="e.g. Father / S. Gurdeep Singh"
              className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                errors.patientName ? 'border-red-500' : 'border-gold/30 focus:border-gold'
              } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
            />
            {errors.patientName && <p className="text-xs text-red-400 mt-1">{errors.patientName}</p>}
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Select Healthcare Service <span className="text-red-400">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/90 border border-gold/30 focus:border-gold text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#121212] text-white">
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Staff Gender Preference */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Staff Preference (M/F)
            </label>
            <select
              name="staffPreference"
              value={formData.staffPreference}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/90 border border-gold/30 focus:border-gold text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
            >
              <option value="Any / As Recommended">Any / Best Qualified</option>
              <option value="Female Staff Only">Female Staff Only</option>
              <option value="Male Staff Only">Male Staff Only</option>
            </select>
          </div>

          {/* Shift / Duration Preference */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Shift / Duration Required
            </label>
            <select
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/90 border border-gold/30 focus:border-gold text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
            >
              <option value="24 Hours (Live-in Care)">24 Hours (Round-the-clock Live-in)</option>
              <option value="12 Hours Day Shift">12 Hours Day Shift (8 AM - 8 PM)</option>
              <option value="12 Hours Night Shift">12 Hours Night Shift (8 PM - 8 AM)</option>
              <option value="Per Visit / Procedure Basis">Per Visit / Procedure Basis</option>
              <option value="Equipment Rental / Purchase">Equipment Rental / Purchase</option>
            </select>
          </div>

          {/* Location / City */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Location / City / Address <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Khanna, Chandigarh, Ludhiana, etc."
                className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                  errors.location ? 'border-red-500' : 'border-gold/30 focus:border-gold'
                } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
              />
              <MapPin className="w-4 h-4 text-[#8E8E93] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.location && <p className="text-xs text-red-400 mt-1">{errors.location}</p>}
          </div>

          {/* Preferred Start Date */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
              Preferred Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-gold/30 focus:border-gold text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Message / Patient Requirement */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C] mb-1.5">
            Patient Requirement & Medical Details (Optional)
          </label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the patient's condition (e.g. bedridden, post-surgery, stroke recovery, tracheostomy, mobility support, oxygen required)..."
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-gold/30 focus:border-gold text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            className="w-full text-center flex items-center justify-center gap-3 text-base font-bold shadow-lg"
            icon={MessageCircle}
          >
            Send Inquiry to Care Manager via WhatsApp
          </Button>

          <p className="text-center text-[11px] text-[#A0A0A0] mt-2.5">
            🔒 Your contact and patient details are kept strictly private & confidential.
          </p>
        </div>
      </form>

      {/* Direct Call Quick Bar */}
      <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white">Prefer to talk directly right now?</h4>
          <p className="text-xs text-[#9E9E9E]">Our Care Manager is available 24/7 for immediate assistance.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="px-4 py-2 rounded-xl bg-gold/15 hover:bg-gold text-gold hover:text-black text-xs font-bold border border-gold/30 flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Manager: {COMPANY_INFO.contacts.manager.name} ({COMPANY_INFO.primaryPhone})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
