import React from 'react';
import { INSTAGRAM_REELS, STORE_DETAILS } from '../data/sareesData';
import { Instagram, Play, Eye, Heart, Music, ExternalLink, Sparkles } from 'lucide-react';

export const InstagramReelsSection: React.FC = () => {
  return (
    <section id="reels" className="py-16 bg-[#161616] text-white border-t border-neutral-800">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="token-badge-lime text-[10px] py-0.5 px-2">
                <Instagram className="w-3 h-3 text-pink-600 inline" /> Trending Reels
              </span>
              <span className="text-xs font-mono text-neutral-400">@ithlaatisarees Video Feed</span>
            </div>
            <h2 className="font-serif text-2xl md:text-xl font-bold text-white">
              Sarees in Motion • Instagram Video Showcase
            </h2>
            <p className="text-xs text-neutral-400 font-sans mt-1 max-w-xl">
              Watch live fabric movement, zari shimmer, and drape demonstrations recorded directly at our Indore flagship store.
            </p>
          </div>

          <a
            href={STORE_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="token-btn-outline text-xs text-white border-white/30 hover:border-pink-500 hover:text-pink-400 py-2.5 px-5 shrink-0"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>Follow @ithlaatisarees on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reels Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_REELS.map((reel) => (
            <div 
              key={reel.id}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl hover:border-pink-500/50 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={reel.sareeName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/10 transition-colors"></div>

                {/* Center Play Button Overlay */}
                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-pink-600 group-hover:border-pink-400 transition-all shadow-xl">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </a>

                {/* Top Metrics Pill */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-sans">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center gap-1">
                    <Eye className="w-3 h-3 text-cyan-400" /> {reel.viewsCount} views
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center gap-1">
                    <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> {reel.likesCount}
                  </span>
                </div>

                {/* Bottom Saree Reel Title & Audio Details */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-serif text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-pink-300 transition-colors">
                    {reel.sareeName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 mt-2 font-sans truncate">
                    <Music className="w-3 h-3 text-amber-400 animate-spin" />
                    <span className="truncate">{reel.audioTitle}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
