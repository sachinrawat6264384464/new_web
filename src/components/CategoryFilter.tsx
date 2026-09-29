import React from 'react';
import { CategoryFilterType } from '../types';
import { Sparkles, Grid, Film } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: CategoryFilterType;
  onSelectCategory: (category: CategoryFilterType) => void;
  totalCount: number;
  viewMode: 'grid' | 'reels';
  onToggleViewMode: (mode: 'grid' | 'reels') => void;
}

const CATEGORIES: CategoryFilterType[] = [
  'All',
  'Banarasi',
  'Bandhani',
  'Kanjivaram',
  'Organza',
  'Chikankari',
  'Chanderi',
  'Ikat'
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  totalCount,
  viewMode,
  onToggleViewMode
}) => {
  return (
    <div className="bg-[#F7F6F0] border-y border-neutral-200 py-6 mb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left Title & Counter */}
          <div>
            <div className="flex items-center gap-2">
              <span className="token-badge-lime text-[11px] py-0.5 px-2">
                <Sparkles className="w-3 h-3 inline" /> Instagram Featured
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Showing {totalCount} Saree Posts
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#161616] mt-1">
              Explore Saree Collections
            </h2>
          </div>

          {/* View Mode Switcher (Grid vs Reels View) */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-neutral-300 shadow-sm shrink-0">
            <button
              onClick={() => onToggleViewMode('grid')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#161616] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Posts Grid</span>
            </button>
            <button
              onClick={() => onToggleViewMode('reels')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                viewMode === 'reels'
                  ? 'bg-[#0000EE] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Reels Video View</span>
            </button>
          </div>

        </div>

        {/* Category Pills List */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#161616] text-[#C8FF2E] border-[#161616] font-semibold shadow-md'
                    : 'bg-white text-neutral-800 border-neutral-300 hover:border-amber-400 hover:bg-amber-50/50'
                }`}
              >
                {cat === 'All' ? '✨ All Saree Posts' : `${cat} Sarees`}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
