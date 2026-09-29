import React from 'react';

interface TokenBadgeProps {
  tokenName: string;
  value: string;
  role?: string;
}

export const TokenBadge: React.FC<TokenBadgeProps> = ({ tokenName, value, role }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-amber-200 bg-amber-50/80 text-amber-900 shadow-sm">
      <span className="font-bold text-amber-950">{tokenName}</span>
      <span className="px-1.5 py-0.5 rounded bg-white font-semibold text-amber-800 border border-amber-200">{value}</span>
      {role && <span className="text-[11px] text-amber-700 italic">({role})</span>}
    </div>
  );
};
