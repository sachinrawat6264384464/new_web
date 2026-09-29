import React from 'react';
import { Camera, MessageCircle, Video, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/sareesData';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Pick or Screenshot Saree',
      description: 'Explore our Instagram posts or website collection. Take a screenshot of the design or copy the saree code (e.g. #ITH-BAN-01).'
    },
    {
      number: '02',
      icon: MessageCircle,
      title: 'Tap WhatsApp Inquiry',
      description: 'Click the green "WhatsApp Order" button on any saree. It instantly connects you with our saree specialist in Indore.'
    },
    {
      number: '03',
      icon: Video,
      title: 'Live Video Demo & Stitching',
      description: 'Request a live WhatsApp video call to see true fabric color in natural light, pallu details, and blouse stitching customization.'
    },
    {
      number: '04',
      icon: Truck,
      title: 'Worldwide Doorstep Delivery',
      description: 'Once satisfied, complete payment via UPI, Card, or NetBanking. Receive tracking link with insured express delivery.'
    }
  ];

  return (
    <section id="how-to-order" className="py-16 bg-[#F7F6F0] border-t border-neutral-200">
      <div className="container-custom">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="token-badge-lime text-[11px] py-0.5 px-3 mb-2">
            <Sparkles className="w-3 h-3 inline" /> Instagram Direct Shopping Process
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#161616] mt-2">
            How to Order Your Dream Saree
          </h2>
          <p className="text-xs text-neutral-600 font-sans mt-2">
            Shopping from Instagram is seamless with Ithlaati Sarees. Follow these 4 easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#4A0E17] text-[#F3E5AB] flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-bold text-amber-900/30">
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#161616]">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Personal Care</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-12 bg-[#161616] text-white p-8 rounded-3xl border border-amber-400/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#C8FF2E] font-semibold tracking-wider uppercase">
              HAVE A CUSTOM SAREE REQUIREMENT OR BRIDAL TROUSSEAU?
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1">
              Talk directly with our Master Saree Stylist
            </h3>
            <p className="text-xs text-neutral-300 font-sans mt-1">
              Send us any screenshot from Instagram or Pinterest to check custom weave possibilities!
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_DETAILS.whatsappRawPrimary}?text=${encodeURIComponent('Hello Ithlaati Sarees! I have a custom saree screenshot from Instagram that I would like to inquire about.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="token-btn-whatsapp py-3.5 px-6 text-sm font-bold shrink-0 text-decoration-none"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send Instagram Screenshot on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
