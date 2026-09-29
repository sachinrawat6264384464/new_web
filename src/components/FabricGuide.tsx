import React from 'react';
import { Award, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export const FabricGuide: React.FC = () => {
  const fabrics = [
    {
      title: 'Pure Katan Banarasi Silk',
      origin: 'Varanasi, UP',
      badge: 'Royal Heritage',
      description: 'Handwoven using twin silk threads for rich body and crisp structure. Embellished with kadwa zari jaals passed down generations.'
    },
    {
      title: 'Hand Tie-Dye Bandhani',
      origin: 'Rajasthan & Indore',
      badge: 'Artisanal Craft',
      description: 'Crafted by manual knotting of thousands of tiny silk ties before dyeing. Adorned with authentic hand-stitched gota patti.'
    },
    {
      title: 'Mulberry Kanjivaram Silk',
      origin: 'Kanchipuram, TN',
      badge: 'Silk Mark Certified',
      description: 'Woven with 3-ply heavy mulberry silk and pure silver-gold electroplated zari for heirloom durability and temple border elegance.'
    },
    {
      title: 'Lucknowi Chikankari',
      origin: 'Lucknow, UP',
      badge: '90-Day Handwork',
      description: 'Intricate needle embroidery featuring 32 traditional stitch styles including bakhiya, phanda, and tepchi with subtle pearl accents.'
    },
    {
      title: 'Hand-painted Organza',
      origin: 'Contemporary Luxury',
      badge: 'Lightweight Drape',
      description: 'Ultra-sheer premium organza fabric rendered with botanical watercolor art and scalloped zari borders for modern royal elegance.'
    },
    {
      title: 'Tissue Chanderi Silk',
      origin: 'Chanderi, MP',
      badge: 'State Handloom',
      description: 'Distinctive metallic tissue sheen handwoven in Madhya Pradesh. Combines silk warp with zari weave for luminous festive radiance.'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-neutral-200">
      <div className="container-custom">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="token-badge-lime text-[11px] py-0.5 px-3 mb-2">
            <Feather className="w-3 h-3 inline" /> Artisan Knowledge
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#161616] mt-2">
            The Weaves & Fabrics of Ithlaati Sarees
          </h2>
          <p className="text-xs text-neutral-600 font-sans mt-2">
            Every saree in our Instagram feed represents authentic Indian heritage handloom artistry.
          </p>
        </div>

        {/* Fabrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fabrics.map((f, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl bg-[#F7F6F0] border border-neutral-200 hover:border-amber-400 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  {f.badge}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {f.origin}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-[#161616]">
                {f.title}
              </h3>

              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
