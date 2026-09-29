import React from 'react';
import { SareeProduct } from '../types';
import { Instagram, MessageCircle, Heart, Eye, Plus, Check, Sparkles } from 'lucide-react';
import { STORE_DETAILS } from '../data/sareesData';

interface ProductCardProps {
  product: SareeProduct;
  isWishlisted: boolean;
  isInInquiry: boolean;
  onToggleWishlist: (product: SareeProduct) => void;
  onToggleInquiry: (product: SareeProduct) => void;
  onQuickView: (product: SareeProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  isInInquiry,
  onToggleWishlist,
  onToggleInquiry,
  onQuickView
}) => {
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  // Generate direct WhatsApp inquiry link pre-filled with saree details
  const whatsappMessage = encodeURIComponent(
    `Namaste Ithlaati Sarees! I saw this saree on your website (Instagram Post):\n\n` +
    `📌 *Saree Name:* ${product.name}\n` +
    `🏷️ *Saree Code:* ${product.code}\n` +
    `💰 *Price:* ₹${product.price.toLocaleString('en-IN')}\n` +
    `🧵 *Fabric:* ${product.fabric}\n\n` +
    `Please share more photos/live video demo on WhatsApp & availability for order!`
  );

  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappRawPrimary}?text=${whatsappMessage}`;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer" onClick={() => onQuickView(product)}>
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80';
          }}
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="token-badge-lime text-[10px] py-0.5 px-2">
            <Instagram className="w-3 h-3 text-pink-600 inline" /> Post #{product.code}
          </span>
          {product.isBestSeller && (
            <span className="bg-[#4A0E17] text-[#F3E5AB] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-300/40">
              👑 Best Seller
            </span>
          )}
        </div>

        {/* Top Right Wishlist Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full transition-all ${
            isWishlisted
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-red-600 backdrop-blur-sm'
          }`}
          title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Bottom Quick View Overlay Button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2.5 bg-white/95 backdrop-blur-md text-[#161616] text-xs font-semibold rounded-xl shadow-lg border border-neutral-200 hover:bg-[#161616] hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View & Details</span>
          </button>
        </div>

      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Craft Tag */}
          <div className="flex items-center justify-between text-[11px] text-neutral-500 font-sans mb-1">
            <span className="font-semibold text-amber-900 uppercase tracking-wider">{product.category} Saree</span>
            <span>{product.instagramPostDate}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-base font-semibold text-[#161616] group-hover:text-[#4A0E17] transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Fabric & Specs snippet */}
          <p className="text-xs text-neutral-600 line-clamp-1 mt-0.5 font-sans">
            {product.fabric} • {product.craft}
          </p>

          {/* Price Container */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-serif text-lg font-bold text-[#161616]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-neutral-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              {discountPercent}% OFF
            </span>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100">
          
          {/* Add to Inquiry Bag Button */}
          <button
            onClick={() => onToggleInquiry(product)}
            className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all flex items-center justify-center gap-1 ${
              isInInquiry
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-[#F7F6F0] text-[#161616] border-neutral-300 hover:bg-neutral-200'
            }`}
          >
            {isInInquiry ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>In Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add Inquiry</span>
              </>
            )}
          </button>

          {/* Instant WhatsApp Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-2 text-xs font-semibold rounded-lg bg-[#25D366] hover:bg-[#1ebc57] text-white transition-all flex items-center justify-center gap-1 shadow-sm text-decoration-none"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

        </div>

      </div>

    </div>
  );
};
