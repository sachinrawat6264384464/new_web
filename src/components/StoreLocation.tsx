import React from 'react';
import { STORE_DETAILS } from '../data/sareesData';
import { MapPin, Phone, Mail, Clock, Navigation, Instagram, MessageCircle, ExternalLink } from 'lucide-react';

export const StoreLocation: React.FC = () => {
  return (
    <section id="store-location" className="py-16 bg-[#161616] text-white border-t border-amber-900/40 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Store Info (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="token-badge-lime text-[10px] py-0.5 px-3">
              <MapPin className="w-3 h-3 text-red-600 inline" /> Visit Flagship Store
            </span>

            <h2 className="font-serif text-3xl md:text-2xl font-bold text-white">
              Experience Ithlaati Sarees in Indore
            </h2>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Step into our luxury boutique in South Tukoganj, Indore to touch authentic silk textures, view live saree draping, and enjoy personalized styling consultation.
            </p>

            <div className="space-y-4 pt-2 text-xs font-sans">
              
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Boutique Address</span>
                  <span className="text-neutral-300">{STORE_DETAILS.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Phone & WhatsApp Hotline</span>
                  <span className="text-neutral-300">{STORE_DETAILS.whatsappPrimary} / {STORE_DETAILS.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Store Hours</span>
                  <span className="text-neutral-300">{STORE_DETAILS.openingHours}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-5 h-5 text-pink-400 shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Email Address</span>
                  <span className="text-neutral-300">{STORE_DETAILS.email}</span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={STORE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="token-btn-primary py-3 px-6 text-xs text-decoration-none"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}`}
                target="_blank"
                rel="noopener noreferrer"
                className="token-btn-whatsapp py-3 px-5 text-xs text-decoration-none"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book Store Appointment</span>
              </a>
            </div>

          </div>

          {/* Right Visual Store Map Card (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-neutral-900 p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#C8FF2E]">INDORE LOCATION CARD</span>
                  <h3 className="font-serif text-xl font-bold text-white">ITHLAATI SAREES BOUTIQUE</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-serif font-bold">
                  📍
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Located right opposite S.N.G Hospital in the heart of South Tukoganj, Indore. Parking available for all boutique visitors.
              </p>

              {/* Map Preview Box */}
              <div className="relative h-48 rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700 flex flex-col items-center justify-center p-6 text-center group cursor-pointer" onClick={() => window.open(STORE_DETAILS.googleMapsUrl, '_blank')}>
                <MapPin className="w-10 h-10 text-red-500 animate-bounce mb-2" />
                <span className="font-serif text-base font-semibold text-white">
                  13, Kanchan Bagh, South Tukoganj, Indore
                </span>
                <span className="text-xs text-amber-300 mt-1 underline">
                  Tap to view live interactive map on Google Maps
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 font-sans pt-2">
                <span>✨ 500+ Sarees in Physical Stock</span>
                <span>🛍️ Trial & Draping Room Available</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
