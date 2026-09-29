import React from 'react';
import { Table, Sparkles, CheckCircle2 } from 'lucide-react';

export const SareeComparisonTable: React.FC = () => {
  const comparisonData = [
    {
      weave: 'Imperial Banarasi Silk',
      origin: 'Varanasi, UP',
      weight: 'Heavy (Structured)',
      occasion: 'Bridal & Grand Weddings',
      blouse: 'Brocade Zari Included',
      price: '₹18,999 - ₹28,900'
    },
    {
      weave: 'Heritage Bandhani Silk',
      origin: 'Rajasthan & Indore',
      weight: 'Medium (Fluid)',
      occasion: 'Festive & Pooja Celebrations',
      blouse: 'Gota Patti Border Piece',
      price: '₹12,499 - ₹16,000'
    },
    {
      weave: 'Kanjivaram Temple Silk',
      origin: 'Kanchipuram, TN',
      weight: 'Heavy (Pure Gold Zari)',
      occasion: 'Receptions & Heritage Galas',
      blouse: 'Contrast Silk Piece',
      price: '₹24,500 - ₹29,999'
    },
    {
      weave: 'Sheer Floral Organza',
      origin: 'Modern Contemporary',
      weight: 'Ultra Lightweight',
      occasion: 'Day Weddings & Cocktail Parties',
      blouse: 'Designer Satin/Organza',
      price: '₹8,999 - ₹11,500'
    },
    {
      weave: 'Lucknowi Chikankari',
      origin: 'Lucknow, UP',
      weight: 'Soft & Airy',
      occasion: 'Elegant Soirees & Anniversaries',
      blouse: 'Embroidered Silk Piece',
      price: '₹14,200 - ₹18,500'
    },
    {
      weave: 'Tissue Chanderi Silk',
      origin: 'Chanderi, MP',
      weight: 'Light Metallic Sheen',
      occasion: 'Festive Receptions & Sangeet',
      blouse: 'Tissue Zari Piece',
      price: '₹10,800 - ₹13,900'
    },
    {
      weave: 'Handloom Double Ikat',
      origin: 'Heritage Weave',
      weight: 'Medium Handloom',
      occasion: 'Formal Ethnic & Cultural Events',
      blouse: 'Contrast Ikat Piece',
      price: '₹9,750 - ₹12,500'
    }
  ];

  return (
    <section id="comparison" className="py-14 bg-white border-b border-neutral-200 font-sans">
      <div className="container-custom">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="token-badge-lime text-[11px] py-0.5 px-3 mb-2">
            <Table className="w-3.5 h-3.5 inline" /> Krackerz Comparison Guide
          </span>
          <h2 className="font-serif text-token-3xl font-bold text-[#161616] mt-1">
            Compare Saree Weaves & Fabrics
          </h2>
          <p className="text-token-xs text-[#646464] mt-1">
            Choose the perfect saree drape based on fabric weight, occasion, and budget.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm bg-white">
          <table className="w-full text-token-xs text-left border-collapse">
            <thead className="bg-[#161616] text-[#F7F6F0] font-sans">
              <tr>
                <th className="p-4 font-bold">Saree Weave</th>
                <th className="p-4 font-bold">Craft Origin</th>
                <th className="p-4 font-bold">Fabric Weight</th>
                <th className="p-4 font-bold">Ideal Occasion</th>
                <th className="p-4 font-bold">Blouse Piece</th>
                <th className="p-4 font-bold text-amber-300">Price Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-[#161616]">
              {comparisonData.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F7F6F0] transition-colors">
                  <td className="p-4 font-serif font-bold text-token-sm text-[#161616]">
                    {item.weave}
                  </td>
                  <td className="p-4 font-mono text-[11px] text-[#646464]">
                    {item.origin}
                  </td>
                  <td className="p-4 font-medium text-neutral-800">
                    {item.weight}
                  </td>
                  <td className="p-4 font-medium text-[#7C1A06]">
                    {item.occasion}
                  </td>
                  <td className="p-4 text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 inline text-emerald-600 mr-1" />
                    {item.blouse}
                  </td>
                  <td className="p-4 font-bold font-mono text-[#0000EE]">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
