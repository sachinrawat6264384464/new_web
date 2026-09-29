import React from 'react';
import { Star, Instagram, Quote, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/sareesData';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Priyanka Sharma',
      location: 'Indore',
      handle: '@priyanka_sharma',
      rating: 5,
      comment: 'Ordered the Imperial Crimson Banarasi saree via Instagram WhatsApp line! The video call showed every single zari thread. Received in 2 days in Indore! Incredible quality!',
      sareeBought: 'Imperial Crimson Banarasi (#ITH-BAN-01)'
    },
    {
      name: 'Ananya Deshmukh',
      location: 'Mumbai',
      handle: '@ananya_d',
      rating: 5,
      comment: 'I was hesitant to buy Bandhani online from Instagram, but Ithlaati Sarees exceeded my expectations! Pure tie-dye with heavy gota patti border. Highly recommended!',
      sareeBought: 'Royal Bandhani Silk (#ITH-BDN-02)'
    },
    {
      name: 'Dr. Meenakshi Iyer',
      location: 'Bengaluru',
      handle: '@dr_meenakshi',
      rating: 5,
      comment: 'The Kanjivaram purple silk saree pallu shimmered so gorgeously at my daughter’s wedding! 100% genuine Silk Mark certified quality.',
      sareeBought: 'Kanjivaram Temple Silk (#ITH-KNJ-03)'
    }
  ];

  return (
    <section className="py-16 bg-[#F7F6F0] border-t border-neutral-200">
      <div className="container-custom">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="token-badge-lime text-[11px] py-0.5 px-3 mb-2">
            <Instagram className="w-3 h-3 text-pink-600 inline" /> Customer Stories
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#161616] mt-2">
            Loved by Saree Connoisseurs Worldwide
          </h2>
          <p className="text-xs text-neutral-600 font-sans mt-2">
            Read real feedback from customers who discovered us on Instagram @ithlaatisarees.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {"★".repeat(r.rating)}
                  </div>
                  <span className="text-[11px] font-mono text-pink-600 flex items-center gap-1">
                    <Instagram className="w-3 h-3" /> {r.handle}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-amber-200/60" />

                <p className="text-xs text-neutral-700 font-sans leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#161616]">{r.name}</span>
                  <span className="text-[11px] text-neutral-400">{r.location}</span>
                </div>
                <div className="text-[11px] text-amber-900 font-medium truncate">
                  Purchased: {r.sareeBought}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
