import React from 'react';
import { COMPANY_OWNERS, COMPANY_PROFILE } from '../data/owners';
import { Language } from '../types';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface OwnersHeroShowcaseProps {
  language: Language;
  className?: string;
}

export const OwnersHeroShowcase: React.FC<OwnersHeroShowcaseProps> = ({
  language,
  className = ''
}) => {
  const isUrdu = language === 'ur';

  return (
    <div 
      className={`relative rounded-2xl bg-[#0f172a]/95 backdrop-blur-md border border-[#0077b6]/30 shadow-2xl p-5 sm:p-6 text-white ${className}`}
      aria-label="Company Owners Showcase"
    >
      {/* Top Corporate Header within Card */}
      <div className="flex flex-col gap-1.5 pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0077b6]/25 border border-[#00b4d8]/40 text-[#00b4d8] text-[11px] font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#00b4d8]" />
            <span>{isUrdu ? 'کمپنی مالکان و ایگزیکٹو ڈائریکٹرز' : 'Company Owners & Directorate'}</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-[#00b4d8]" />
            <span>{isUrdu ? 'تصدیق شدہ سیکیورٹی ایجنسی' : 'Govt. Registered'}</span>
          </span>
        </div>

        {/* Prominent Company Name & Official Tagline */}
        <div className="pt-1">
          <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
            {isUrdu ? COMPANY_PROFILE.legalNameUrdu : COMPANY_PROFILE.legalName}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-[#00b4d8] tracking-wide">
            {isUrdu ? COMPANY_PROFILE.taglineUrdu : COMPANY_PROFILE.tagline}
          </p>
        </div>
      </div>

      {/* Two Owners Side-by-Side (Desktop / Tablet) & Vertically Stacked (Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {COMPANY_OWNERS.map((owner) => {
          return (
            <div
              key={owner.id}
              className="group flex flex-col bg-[#0b132b]/80 rounded-xl overflow-hidden border border-white/10 hover:border-[#00b4d8]/50 transition-all duration-200 shadow-md"
            >
              {/* Separate Portrait Image Asset Frame with Consistent Dimensions */}
              <div className="relative aspect-[4/5] w-full bg-[#0b132b] overflow-hidden border-b border-white/10">
                <SafeImage
                  src={owner.imageSrc}
                  alt={owner.altText}
                  fallbackText={`${isUrdu ? owner.nameUrdu : owner.name} — ${isUrdu ? owner.designationUrdu : owner.designation}`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
                
                {/* Subtle Corporate Lighting Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Corner Owner Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#0b132b]/90 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm border border-white/15 shadow-sm">
                    <Award className="w-3 h-3 text-[#00b4d8]" />
                    <span>{isUrdu ? `مالک ${owner.ownerNumber}` : `Owner ${owner.ownerNumber}`}</span>
                  </span>
                </div>
              </div>

              {/* Exact Text Placeholders Required Under Each Photograph */}
              <div className="p-3.5 sm:p-4 flex flex-col gap-1.5 bg-[#0f172a]/90">
                {/* Placeholder Headline: [OWNER NAME] — [DESIGNATION] */}
                <div className="flex flex-col">
                  <div className="font-headline text-sm sm:text-base font-bold text-white tracking-wide">
                    {isUrdu ? owner.nameUrdu : owner.name}
                  </div>
                  <div className="text-xs font-semibold text-[#00b4d8] tracking-wider uppercase">
                    {isUrdu ? owner.designationUrdu : owner.designation}
                  </div>
                </div>

                {/* Explicit Combined Placeholder Format (Exact Prompt Match) */}
                <div className="pt-1.5 border-t border-white/10 text-[11px] text-slate-300 font-mono flex items-center justify-between">
                  <span className="text-slate-400">
                    {isUrdu ? `مالک ${owner.ownerNumber}:` : `Owner ${owner.ownerNumber}:`}
                  </span>
                  <span className="text-[#cde5ff] font-semibold">
                    {isUrdu 
                      ? `${owner.nameUrdu} — ${owner.designationUrdu}` 
                      : `${owner.name} — ${owner.designation}`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Authenticity & Operations Guarantee Note */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse" />
          <span className="font-medium text-slate-300">
            {isUrdu ? 'براہ راست نگران قیادت و آپریشنل کمانڈ' : 'Direct Leadership & Operational Command'}
          </span>
        </div>
        <span className="text-slate-400">
          {isUrdu ? 'ہیڈ کوارٹرز: فیصل آباد، پنجاب' : 'HQ: Faisalabad, Punjab'}
        </span>
      </div>
    </div>
  );
};
