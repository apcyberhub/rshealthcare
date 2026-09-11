import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Stethoscope } from 'lucide-react';
import Button from '../components/common/Button';
import SEOHead from '../components/common/SEOHead';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] flex items-center justify-center pt-24 pb-16 px-4">
      <SEOHead title="Page Not Found | R.S. Health Care Service" />

      <div className="max-w-md w-full text-center gold-card rounded-3xl p-8 sm:p-10 border border-gold/30 shadow-gold-lg">
        <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mx-auto mb-4">
          <Stethoscope className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-black text-gold-gradient">
          404
        </h1>

        <h2 className="text-xl font-bold text-white mt-2">
          Page Not Found
        </h2>

        <p className="text-xs sm:text-sm text-[#9E9E9E] mt-2 mb-6">
          The healthcare page or resource you are looking for might have moved or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="gold" size="md" icon={Home}>
            Back to Home
          </Button>
          <Button to="/services" variant="outline" size="md">
            View All Services
          </Button>
        </div>
      </div>
    </div>
  );
}
