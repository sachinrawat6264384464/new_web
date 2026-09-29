import React from 'react';
import { InquiryItem, SareeProduct } from '../types';
import { X, MessageCircle, Trash2, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_DETAILS } from '../data/sareesData';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onRemoveItem: (productId: string) => void;
  onClearInquiry: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearInquiry
}) => {
  if (!isOpen) return null;

  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSendAllWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });

    let messageText = `Namaste Ithlaati Sarees! I would like to inquire about the following ${items.length} sarees from your website:\n\n`;

    items.forEach((item, index) => {
      messageText += `${index + 1}. *${item.product.name}*\n`;
      messageText += `   - Code: ${item.product.code}\n`;
      messageText += `   - Price: ₹${item.product.price.toLocaleString('en-IN')}\n`;
      messageText += `   - Fabric: ${item.product.fabric}\n\n`;
    });

    messageText += `💰 *Estimated Total:* ₹${totalPrice.toLocaleString('en-IN')}\n\n`;
    messageText += `Please check availability for these items and advise on payment & shipping to my address!`;

    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in flex justify-end">
      
      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-neutral-200">
        
        {/* Drawer Header */}
        <div className="p-6 bg-[#161616] text-white flex items-center justify-between border-b border-amber-900/40">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="font-serif text-lg font-bold text-white leading-none">
                Inquiry Bag
              </h2>
              <span className="text-[11px] text-neutral-400 font-sans">
                {items.length} Saree{items.length === 1 ? '' : 's'} Selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-800 text-neutral-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-neutral-800">
                Your Inquiry Bag is Empty
              </h3>
              <p className="text-xs text-neutral-500 font-sans max-w-xs mx-auto">
                Browse our Instagram post catalog and tap "Add Inquiry" to assemble your saree list.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div 
                key={item.product.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F6F0] border border-neutral-200 relative group"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-20 rounded-lg object-cover border border-neutral-300 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">
                    {item.product.code}
                  </span>
                  <h4 className="font-serif text-xs font-semibold text-[#161616] truncate mt-0.5">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-sans truncate">
                    {item.product.fabric}
                  </p>
                  <span className="font-serif text-sm font-bold text-[#161616] block mt-1">
                    ₹{item.product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-2 text-neutral-400 hover:text-red-600 transition-colors"
                  title="Remove Saree"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-neutral-200 space-y-4">
            
            <div className="flex items-center justify-between font-sans">
              <span className="text-xs text-neutral-500">Subtotal ({items.length} Items):</span>
              <span className="font-serif text-xl font-bold text-[#161616]">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleSendAllWhatsApp}
              className="w-full token-btn-whatsapp py-3.5 text-sm font-bold shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Send All {items.length} Sarees to WhatsApp Hotline</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-neutral-500">
              <button
                onClick={onClearInquiry}
                className="text-neutral-400 hover:text-red-600 underline"
              >
                Clear Inquiry Bag
              </button>
              <span>Instant WhatsApp Demo Available</span>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
