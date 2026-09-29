import React from 'react';
import { X, CheckCircle, Code, Palette, Type, ShieldAlert } from 'lucide-react';

interface TokensModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TokensModal: React.FC<TokensModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-300 my-8 font-sans">
        
        {/* Header */}
        <div className="p-6 bg-[#161616] text-white flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/40">
              <Code className="w-5 h-5 text-[#C8FF2E]" />
            </div>
            <div>
              <h2 className="font-serif text-token-xl font-bold text-white leading-none">
                Krackerz Design Tokens Inspector
              </h2>
              <span className="text-token-xs text-amber-200 font-mono">
                Extracted from krackerz DESIGN.md & krackerz SKILL (1).md
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

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8 max-h-[75vh] overflow-y-auto text-token-xs">
          
          {/* Colors */}
          <div className="space-y-3">
            <h3 className="font-serif text-token-lg font-bold text-[#161616] flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#CF2B09]" />
              <span>Extracted Color Palette Tokens (10 Tokens)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#161616]"></div>
                <div>
                  <span className="font-bold font-mono block">color-1</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#161616</span>
                  <span className="text-[10px] block text-amber-900">Text Primary</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#0000EE]"></div>
                <div>
                  <span className="font-bold font-mono block">color-3</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#0000EE</span>
                  <span className="text-[10px] block text-amber-900">Text Accent</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#646464]"></div>
                <div>
                  <span className="font-bold font-mono block">color-5</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#646464</span>
                  <span className="text-[10px] block text-amber-900">Text Secondary</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#CF2B09]"></div>
                <div>
                  <span className="font-bold font-mono block">color-6</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#CF2B09</span>
                  <span className="text-[10px] block text-amber-900">Accent Red</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#F8330B]"></div>
                <div>
                  <span className="font-bold font-mono block">color-7</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#F8330B</span>
                  <span className="text-[10px] block text-amber-900">Vibrant Red Accent</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#7C1A06]"></div>
                <div>
                  <span className="font-bold font-mono block">color-2</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#7C1A06</span>
                  <span className="text-[10px] block text-amber-900">Background Dark</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#A52207]"></div>
                <div>
                  <span className="font-bold font-mono block">color-4</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#A52207</span>
                  <span className="text-[10px] block text-amber-900">Vivid Dark Rust</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#C8FF2E] border border-neutral-300"></div>
                <div>
                  <span className="font-bold font-mono block">color-8</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#C8FF2E</span>
                  <span className="text-[10px] block text-amber-900">Text Light Lime</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#F7F6F0] border border-neutral-300"></div>
                <div>
                  <span className="font-bold font-mono block">color-9</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#F7F6F0</span>
                  <span className="text-[10px] block text-amber-900">Text Light Surface</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-neutral-300 bg-white shadow-sm space-y-1.5">
                <div className="h-8 rounded bg-[#FFFFFF] border border-neutral-300"></div>
                <div>
                  <span className="font-bold font-mono block">color-10</span>
                  <span className="text-neutral-500 font-mono text-[10px]">#FFFFFF</span>
                  <span className="text-[10px] block text-amber-900">Text Light White</span>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-3">
            <h3 className="font-serif text-token-lg font-bold text-[#161616] flex items-center gap-2">
              <Type className="w-5 h-5 text-[#0000EE]" />
              <span>Typography Scale Tokens</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-token-xs text-left border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-[#161616] text-white font-mono">
                  <tr>
                    <th className="p-2.5">Level Token</th>
                    <th className="p-2.5">Size</th>
                    <th className="p-2.5">Usage</th>
                    <th className="p-2.5">Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="p-2 font-mono font-bold">text-xs</td>
                    <td className="p-2 font-mono">12px</td>
                    <td className="p-2">Captions, metadata</td>
                    <td className="p-2 text-xs">Sample metadata</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-sm</td>
                    <td className="p-2 font-mono">14px</td>
                    <td className="p-2">Labels, secondary text</td>
                    <td className="p-2 text-sm">Sample label</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-base</td>
                    <td className="p-2 font-mono">16px</td>
                    <td className="p-2">Body text (default)</td>
                    <td className="p-2 text-base">Sample body content</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-lg</td>
                    <td className="p-2 font-mono">18px</td>
                    <td className="p-2">Subheadings, emphasis</td>
                    <td className="p-2 text-lg font-serif">Subheading Preview</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-xl</td>
                    <td className="p-2 font-mono">20px</td>
                    <td className="p-2">Section headings</td>
                    <td className="p-2 text-xl font-serif">Section Title</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-2xl</td>
                    <td className="p-2 font-mono">24px</td>
                    <td className="p-2">Section headings</td>
                    <td className="p-2 text-2xl font-serif">Medium Header</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-3xl</td>
                    <td className="p-2 font-mono">48px</td>
                    <td className="p-2">Section headings</td>
                    <td className="p-2 text-2xl font-serif font-bold text-[#CF2B09]">Big Header</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-4xl</td>
                    <td className="p-2 font-mono">56px</td>
                    <td className="p-2">Section headings</td>
                    <td className="p-2 text-2xl font-serif font-bold text-[#7C1A06]">Display Header</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono font-bold">text-9</td>
                    <td className="p-2 font-mono">72px</td>
                    <td className="p-2">General use / Hero display</td>
                    <td className="p-2 text-2xl font-serif font-bold text-[#0000EE]">Krackerz Title</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Spacing & Radii */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-serif text-token-lg font-bold text-[#161616]">
                4px Base Unit Spacing Grid
              </h3>
              <p className="text-token-xs font-mono bg-neutral-100 p-3 rounded-xl border border-neutral-200">
                space-1: 1px · space-2: 4px · space-3: 6px · space-4: 8px · space-5: 10px · space-6: 12px · space-7: 14px · space-8: 16px · space-9: 20px · space-10: 21px · space-11: 24px · space-12: 28px · space-13: 40px · space-14: 48px · space-15: 160px
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-token-lg font-bold text-[#161616]">
                Border Radii Scale
              </h3>
              <div className="flex flex-wrap gap-2 text-token-xs font-mono">
                <span className="px-2.5 py-1 rounded-sm bg-amber-100 border border-amber-300 text-amber-900">radius-sm: 4px</span>
                <span className="px-2.5 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-900">radius-md: 8px</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-900">radius-lg: 12px</span>
                <span className="px-2.5 py-1 rounded-xl bg-amber-100 border border-amber-300 text-amber-900">radius-xl: 16px</span>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">radius-full: 40px</span>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">radius-6: 62px</span>
              </div>
            </div>
          </div>

          {/* Do's & Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-1.5 text-token-xs text-emerald-900">
              <h4 className="font-bold flex items-center gap-1.5 text-emerald-950">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> System Do's
              </h4>
              <ul className="space-y-1 list-disc list-inside text-[11px]">
                <li>Reference tokens by name, not raw values (e.g. `color.text.primary`).</li>
                <li>Define all interactive states: default, hover, focus-visible, active.</li>
                <li>Follow the 4px spacing grid scale.</li>
                <li>Meet WCAG 2.2 AA contrast minimums.</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-xl border border-red-200 space-y-1.5 text-token-xs text-red-900">
              <h4 className="font-bold flex items-center gap-1.5 text-red-950">
                <ShieldAlert className="w-4 h-4 text-red-600" /> System Don'ts
              </h4>
              <ul className="space-y-1 list-disc list-inside text-[11px]">
                <li>Do not introduce colors outside the 10 extracted tokens.</li>
                <li>Do not use arbitrary spacing values outside the scale.</li>
                <li>Do not mix border-radius values outside the detected set.</li>
                <li>Do not use full-uppercase text for body or paragraph content.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
