import React from 'react';
import { Instagram, MessageCircle, Sparkles, ShieldCheck, MapPin, ArrowRight, Award, Star } from 'lucide-react';
import { STORE_DETAILS } from '../data/sareesData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#7C1A06] via-[#A52207] to-[#161616] text-white overflow-hidden py-14 md:py-24 border-b border-amber-900/40">
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C8FF2E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tokens Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="token-badge-lime">
                <Instagram className="w-3.5 h-3.5 inline text-pink-600" />
                @ithlaatisarees Official
              </span>
              <span className="text-token-xs font-mono text-amber-200/90 px-3 py-1 bg-white/10 rounded-full border border-amber-300/30">
                Krackerz System: #7C1A06 • #CF2B09 • #C8FF2E
              </span>
            </div>

            {/* Main Display Headline (text-9: 72px / text-4xl: 56px) */}
            <h1 className="font-serif text-token-9 font-bold tracking-tight text-white leading-tight">
              THE REGAL SAREE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF2E] via-amber-200 to-[#F7F6F0]">
                COLLECTION FOR CONNOISSEURS
              </span>
            </h1>

            {/* Body Text */}
            <p className="text-token-base text-neutral-200 font-sans max-w-2xl leading-relaxed">
              Experience authentic Banarasi kadwa zari, Rajasthani Bandhani tie-dye, sheer Organza, and Lucknowi Chikankari. Directly sourced from our viral Instagram posts to your doorstep with live video inspection.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onExploreClick}
                className="token-btn-accent text-token-sm font-semibold py-3.5 px-7"
              >
                <span>Explore Instagram Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}?text=${encodeURIComponent('Hi Ithlaati Sarees! I want to request a live WhatsApp video shopping call to see your Banarasi & Bandhani sarees.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="token-btn-whatsapp text-token-sm font-semibold py-3.5 px-6"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current" />
                <span>WhatsApp Live Video Demo</span>
              </a>
            </div>

            {/* Metrics Pills */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-amber-900/60">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/10 text-[#C8FF2E] flex items-center justify-center shrink-0 border border-white/20">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-token-sm text-white">{STORE_DETAILS.followersCount}</span>
                  <span className="block text-[11px] text-neutral-300">Instagram Followers</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/10 text-emerald-300 flex items-center justify-center shrink-0 border border-white/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-token-sm text-white">100% Authentic</span>
                  <span className="block text-[11px] text-neutral-300">Silk Mark Certified</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/10 text-amber-300 flex items-center justify-center shrink-0 border border-white/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-token-sm text-white">Indore Boutique</span>
                  <span className="block text-[11px] text-neutral-300">South Tukoganj</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C8FF2E]/40 shadow-2xl bg-neutral-900 group">
                <img 
                  src="/images/hero_banner.png" 
                  alt="Ithlaati Sarees Featured Banarasi Collection" 
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20"></div>

                {/* Overlaid Instagram Live Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-amber-300/30 flex items-center justify-between">
                  <div>
                    <span className="token-badge-lime text-[10px] py-0.5 px-2 mb-1">
                      🔥 Most Saved Instagram Post
                    </span>
                    <h3 className="font-serif text-sm font-semibold text-white">
                      Imperial Crimson Banarasi Kadwa Silk
                    </h3>
                    <p className="text-[11px] text-amber-200">
                      Code: #ITH-BAN-01 • ₹18,999
                    </p>
                  </div>
                  <a 
                    href={STORE_DETAILS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition-colors shadow-md"
                    title="View on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Floating Instagram Review */}
              <div className="absolute -top-4 -left-4 bg-white text-neutral-900 p-3 rounded-xl shadow-xl border border-amber-200 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center font-serif font-bold text-amber-900 shrink-0">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-[11px] font-medium text-neutral-800 line-clamp-1">
                    "Exact saree as shown on Instagram!"
                  </p>
                  <span className="text-[10px] text-neutral-500 font-sans">- @priyanka_indore</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
