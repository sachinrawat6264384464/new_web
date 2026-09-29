import React from 'react';
import { STORE_DETAILS } from '../data/sareesData';
import { Instagram, MessageCircle, Phone, Mail, MapPin, Heart, Sparkles, Code2 } from 'lucide-react';

interface FooterProps {
  onToggleTokensModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onToggleTokensModal }) => {
  return (
    <footer className="bg-[#161616] text-white border-t border-amber-900/60 pt-16 pb-8 font-sans">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-400 bg-neutral-900 flex items-center justify-center">
                <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                ITHLAATI SAREES
              </span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Indore’s premier royal saree house. Dedicated to preserving authentic Indian handloom weaves, Banarasi kadwa zari, Rajasthani Bandhani, and Lucknowi Chikankari directly featured on our Instagram page.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-600/20 text-pink-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors border border-pink-500/30"
                title="Instagram @ithlaatisarees"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors border border-emerald-500/30"
                title="WhatsApp Hotline"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-amber-200 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Instagram Saree Catalog</a></li>
              <li><a href="#reels" className="hover:text-white transition-colors">Instagram Video Reels</a></li>
              <li><a href="#how-to-order" className="hover:text-white transition-colors">How to Order via WhatsApp</a></li>
              <li><a href="#store-location" className="hover:text-white transition-colors">Indore Store Location</a></li>
              <li>
                <button onClick={onToggleTokensModal} className="text-amber-300 hover:underline flex items-center gap-1 font-mono text-[11px]">
                  <Code2 className="w-3 h-3" /> View Design System Tokens
                </button>
              </li>
            </ul>
          </div>

          {/* Saree Collections */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-amber-200 uppercase tracking-wider">
              Saree Weaves
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><span className="hover:text-white transition-colors">Banarasi Kadwa Silk</span></li>
              <li><span className="hover:text-white transition-colors">Rajasthani Bandhani</span></li>
              <li><span className="hover:text-white transition-colors">Kanjivaram Temple Silk</span></li>
              <li><span className="hover:text-white transition-colors">Pastel Sheer Organza</span></li>
              <li><span className="hover:text-white transition-colors">Lucknowi Chikankari</span></li>
              <li><span className="hover:text-white transition-colors">Tissue Chanderi</span></li>
              <li><span className="hover:text-white transition-colors">Handloom Double Ikat</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-amber-200 uppercase tracking-wider">
              Indore Store Contact
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>13, Kanchan Bagh, Opp SNG Hospital, South Tukoganj, Indore – 452001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {STORE_DETAILS.whatsappPrimary}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{STORE_DETAILS.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Ithlaati Sarees. All Rights Reserved. Crafted for Regal Luxury.</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-300 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
            <span>Tokens: #161616 • #0000EE • #C8FF2E • #F7F6F0</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
