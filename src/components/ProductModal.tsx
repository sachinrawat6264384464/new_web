import React, { useState } from 'react';
import { SareeProduct } from '../types';
import { X, Instagram, MessageCircle, Heart, Plus, Check, ShieldCheck, Truck, Sparkles, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_DETAILS } from '../data/sareesData';

interface ProductModalProps {
  product: SareeProduct | null;
  onClose: () => void;
  isWishlisted: boolean;
  isInInquiry: boolean;
  onToggleWishlist: (product: SareeProduct) => void;
  onToggleInquiry: (product: SareeProduct) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isWishlisted,
  isInInquiry,
  onToggleWishlist,
  onToggleInquiry
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);

  const handleWhatsAppClick = () => {
    // Fire celebratory confetti!
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });

    const msg = encodeURIComponent(
      `Hello Ithlaati Sarees! I am interested in purchasing/inquiring about this saree from your website:\n\n` +
      `📌 *Saree Name:* ${product.name}\n` +
      `🏷️ *Saree Code:* ${product.code}\n` +
      `💰 *Price:* ₹${product.price.toLocaleString('en-IN')}\n` +
      `🧵 *Fabric:* ${product.fabric}\n` +
      `✨ *Craft:* ${product.craft}\n\n` +
      `Please confirm availability, live video demo time, and shipping details to my location.`
    );

    window.open(`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}?text=${msg}`, '_blank');
  };

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Gallery */}
          <div className="p-6 bg-neutral-50 flex flex-col justify-between">
            
            {/* Main Active Image Display */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-inner mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80';
                }}
              />
              <span className="token-badge-lime absolute top-3 left-3 text-[10px]">
                <Instagram className="w-3 h-3 text-pink-600 inline" /> Official Instagram Post
              </span>
            </div>

            {/* Thumbnail Row */}
            {product.galleryImages.length > 1 && (
              <div className="flex items-center gap-3">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-[#0000EE] scale-105 shadow-md' : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Saree Specs & Order Actions */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold font-mono text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                  CODE: {product.code}
                </span>
                <a
                  href={product.instagramPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-pink-600 font-medium hover:underline flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>View Original Instagram Post</span>
                </a>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl font-bold text-[#161616] leading-snug">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="font-serif text-3xl font-bold text-[#161616]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-neutral-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                  Save {discountPercent}%
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-4">
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="bg-[#F7F6F0] p-4 rounded-xl border border-neutral-200 space-y-2 text-xs font-sans">
                <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                  <span className="text-neutral-500">Fabric Material:</span>
                  <span className="font-semibold text-neutral-900">{product.fabric}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                  <span className="text-neutral-500">Craftsmanship:</span>
                  <span className="font-semibold text-neutral-900">{product.craft}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                  <span className="text-neutral-500">Blouse Piece:</span>
                  <span className="font-semibold text-emerald-800">Included ({product.blouseIncluded ? 'Yes' : 'No'})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Length & Drape:</span>
                  <span className="font-semibold text-neutral-900">{product.sareeLength}</span>
                </div>
              </div>

              {/* Delivery Guarantees */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-neutral-600">
                <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg border border-neutral-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Authentic Handloom</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg border border-neutral-200">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Worldwide Tracked Shipping</span>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="space-y-3 pt-4 border-t border-neutral-200">
              
              {/* Main Primary WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full token-btn-whatsapp py-3.5 text-sm font-bold shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Inquire & Buy via WhatsApp ({STORE_DETAILS.whatsappPrimary})</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                {/* Add to Inquiry Drawer Toggle */}
                <button
                  onClick={() => onToggleInquiry(product)}
                  className={`py-3 px-4 text-xs font-semibold rounded-xl border transition-all flex items-center justify-center gap-2 ${
                    isInInquiry
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                      : 'bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-100'
                  }`}
                >
                  {isInInquiry ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Added to Inquiry Bag</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Inquiry Bag</span>
                    </>
                  )}
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`py-3 px-4 text-xs font-semibold rounded-xl border transition-all flex items-center justify-center gap-2 ${
                    isWishlisted
                      ? 'bg-red-50 text-red-700 border-red-300'
                      : 'bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-red-600' : ''}`} />
                  <span>{isWishlisted ? 'Saved in Wishlist' : 'Save Wishlist'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
