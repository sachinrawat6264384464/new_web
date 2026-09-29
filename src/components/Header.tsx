import React, { useState } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Heart, 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Code2
} from 'lucide-react';
import { STORE_DETAILS } from '../data/sareesData';

interface HeaderProps {
  wishlistCount: number;
  inquiryCount: number;
  onOpenInquiry: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onToggleTokensModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  wishlistCount,
  inquiryCount,
  onOpenInquiry,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  onToggleTokensModal
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      
      {/* Krackerz Announcement Bar */}
      <div className="bg-[#161616] text-[#F7F6F0] py-2 px-4 text-token-xs font-sans border-b border-neutral-800">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="token-badge-lime text-[10px] py-0.5 px-2">
              <Sparkles className="w-3 h-3 inline text-pink-600" /> Instagram Spotlight
            </span>
            <span className="hidden md:inline text-neutral-300">
              Direct Instagram @ithlaatisarees Posts • Take screenshot or tap WhatsApp to inquire!
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-300">
            <a 
              href={STORE_DETAILS.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#C8FF2E] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>{STORE_DETAILS.instagramHandle}</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href={`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: {STORE_DETAILS.whatsappPrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-custom py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-11 h-11 rounded-xl overflow-hidden border border-amber-300 shadow-sm group-hover:scale-105 transition-transform bg-[#161616] flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="Ithlaati Sarees Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&auto=format&fit=crop&q=80';
                }}
              />
            </div>
            <div>
              <span className="block font-serif text-xl font-bold tracking-tight text-[#161616] group-hover:text-[#CF2B09] transition-colors leading-none">
                ITHLAATI SAREES
              </span>
              <span className="block text-[11px] font-sans tracking-widest text-[#646464] uppercase mt-0.5">
                INDORE • KRACKERZ DESIGN SYSTEM
              </span>
            </div>
          </a>

          {/* Center Search Input */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4 relative">
            <input
              type="text"
              placeholder="Search by Saree Code (#ITH-BAN-01), craft, fabric, or color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F7F6F0] text-[#161616] pl-10 pr-4 py-2.5 rounded-full text-token-xs font-sans border border-neutral-300 focus:outline-none focus:border-[#0000EE] transition-all placeholder:text-neutral-500"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-neutral-400 hover:text-neutral-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Design Tokens Inspector Trigger */}
            <button
              onClick={onToggleTokensModal}
              title="Inspect Krackerz Design System Tokens"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-token-xs font-mono rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-[#0000EE]" />
              <span className="font-semibold">Krackerz Tokens</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="p-2.5 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors relative"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5 text-[#161616]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#CF2B09] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Inquiry Cart Drawer Trigger */}
            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#F7F6F0] hover:bg-neutral-200 border border-neutral-300 transition-colors text-neutral-900"
              title="Inquiry Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#161616]" />
                {inquiryCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#0000EE] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {inquiryCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-token-xs font-semibold font-sans">
                Inquiry Bag
              </span>
            </button>

            {/* WhatsApp Direct Order Button */}
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}?text=${encodeURIComponent('Hello Ithlaati Sarees! I am visiting your Krackerz-designed website and would like to place an inquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="token-btn-whatsapp text-token-xs py-2 px-3 sm:px-4 hidden sm:inline-flex"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-800 hover:bg-neutral-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-200 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search saree by code or craft..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F7F6F0] text-[#161616] pl-10 pr-4 py-2 rounded-lg text-token-xs font-sans border border-neutral-300"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
            </div>

            <div className="flex flex-col gap-2 pt-2 text-token-xs font-medium">
              <a href="#collection" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-3 hover:bg-neutral-100 rounded">
                🛍️ Instagram Saree Posts
              </a>
              <a href="#comparison" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-3 hover:bg-neutral-100 rounded">
                📊 Saree Craft Comparison
              </a>
              <a href="#reels" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-3 hover:bg-neutral-100 rounded">
                🎥 Instagram Video Reels
              </a>
              <a href="#how-to-order" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-3 hover:bg-neutral-100 rounded">
                📲 How to Order via WhatsApp
              </a>
              <a href="#store-location" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-3 hover:bg-neutral-100 rounded">
                📍 Visit Indore Store
              </a>
              <button 
                onClick={() => { onToggleTokensModal(); setIsMobileMenuOpen(false); }}
                className="py-2 px-3 text-left font-mono bg-amber-50 text-amber-900 rounded border border-amber-200"
              >
                ⚙️ View Krackerz Design Tokens
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
