import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ExternalLink, Camera, ArrowLeft } from 'lucide-react';
import { IMAGE_CREDITS } from '../data/imageCredits';
import { HEALTHCARE_IMAGES } from '../data/images';
import HealthcareImage from '../components/common/HealthcareImage';
import SEOHead from '../components/common/SEOHead';

export default function ImageCreditsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] pt-28 sm:pt-36 pb-20">
      <SEOHead 
        title="Image Credits & Licensing | R.S. Health Care Service" 
        description="Source and licensing attribution records for all authentic healthcare photography used on R.S. Health Care Service."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-[#8E8E93]">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gold font-semibold">Image Credits & Licensing</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Source Transparency & Licensing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Photography & Asset Credits
          </h1>
          <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2 max-w-3xl">
            All photography featured across R.S. Health Care Service is sourced exclusively from reputable, free-for-commercial-use royalty-free repositories (Unsplash Free Commercial License). No copyrighted hospital imagery has been scraped or reused.
          </p>
        </div>

        {/* Credits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGE_CREDITS.map((item, idx) => {
            const imgData = HEALTHCARE_IMAGES[item.key];
            return (
              <div
                key={idx}
                className="gold-card rounded-2xl overflow-hidden flex flex-col justify-between border border-gold/25 group"
              >
                {imgData && (
                  <HealthcareImage
                    src={imgData.thumbnail || imgData.url}
                    alt={item.title}
                    aspectRatio="16/9"
                    rounded="none"
                    borderGold={false}
                    overlay="dark"
                    className="h-40 w-full"
                  />
                )}

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="mt-2 space-y-1 text-xs text-[#A0A0A0]">
                      <div>
                        <span className="text-[#6E6E73]">Photographer: </span>
                        <strong className="text-[#CFCFCF]">{item.photographer}</strong>
                      </div>
                      <div>
                        <span className="text-[#6E6E73]">Source: </span>
                        <span className="text-gold font-semibold">{item.source}</span>
                      </div>
                      <div>
                        <span className="text-[#6E6E73]">License: </span>
                        <span className="text-[#25D366] font-medium">{item.license}</span>
                      </div>
                      <div>
                        <span className="text-[#6E6E73]">Used On: </span>
                        <span className="text-white">{item.usedOn}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
                    >
                      <span>View Original Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
