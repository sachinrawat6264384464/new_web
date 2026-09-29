import React from 'react';
import { Camera, Video, ShieldCheck, Truck, Sparkles, CheckCircle } from 'lucide-react';

export const KrackerzFeatures: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'Zero Photo Deception',
      badge: '100% Real Instagram Posts',
      description: 'What you see on @ithlaatisarees is exactly what arrives at your door. No edited catalog pictures or fake stock photos.'
    },
    {
      icon: Video,
      title: 'WhatsApp Live Video Call',
      badge: 'Real-Time Inspection',
      description: 'Request a 1-on-1 WhatsApp video call before purchasing. Inspect true zari shimmer, pallu details, and drape in natural light.'
    },
    {
      icon: ShieldCheck,
      title: 'Silk Mark Certified Weaves',
      badge: 'Guaranteed Pure Handloom',
      description: 'Every Banarasi, Bandhani, and Kanjivaram saree carries authentic Silk Mark certification by master weavers.'
    },
    {
      icon: Truck,
      title: 'Doorstep Express Shipping',
      badge: 'Fully Insured Delivery',
      description: 'Fast, trackable shipping across India and worldwide. Safely packed in tamper-proof custom Ithlaati saree boxes.'
    }
  ];

  return (
    <section className="py-14 bg-[#F7F6F0] border-b border-neutral-200 font-sans">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="token-badge-lime text-[11px] py-0.5 px-3 mb-2">
            <Sparkles className="w-3.5 h-3.5 inline" /> Krackerz Value Guarantee
          </span>
          <h2 className="font-serif text-token-3xl font-bold text-[#161616] mt-1">
            Why Saree Buyers Trust Ithlaati Sarees
          </h2>
          <p className="text-token-xs text-[#646464] mt-1">
            Combining traditional Indian craftsmanship with transparent digital shopping via Instagram & WhatsApp.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#7C1A06] text-[#C8FF2E] flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                    {feat.badge}
                  </span>

                  <h3 className="font-serif text-token-xl font-bold text-[#161616]">
                    {feat.title}
                  </h3>

                  <p className="text-token-xs text-[#646464] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
