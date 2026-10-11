import React from 'react';
import { COMPANY_OWNERS, COMPANY_PROFILE, OWNER_DETAILS } from '../data/owners';
import { Language } from '../types';
import { Shield, CheckCircle, Award, Check } from 'lucide-react';
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
  const owner = COMPANY_OWNERS[0];

  // Candidates for GitHub Pages, local dev, and production builds
  const fallbackImages = [
    owner.imageSrc,
    OWNER_DETAILS.base64Image,
    OWNER_DETAILS.imagePath,
    `${import.meta.env.BASE_URL}assets/owner-1-Cv64p7Lg.jpg`,
    './assets/owner-1-Cv64p7Lg.jpg',
    '/assets/owner-1-Cv64p7Lg.jpg'
  ];

  return (
    <div 
      className={`relative rounded-2xl bg-[#0f172a]/95 backdrop-blur-md border border-[#0077b6]/30 shadow-2xl p-5 sm:p-6 text-white ${className}`}
      aria-label="Company Owners & Directorate"
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

      {/* Single Professional Profile Card for Colonel Retd. Muhammad Rafiq Jam */}
      <div className="bg-[#0b132b]/85 rounded-xl border border-white/10 hover:border-[#00b4d8]/50 transition-all duration-200 shadow-md p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-stretch">
          {/* Portrait Image Frame with Consistent Dimensions & Subtle Corporate Gradient */}
          <div className="relative w-44 sm:w-48 shrink-0 aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#0b132b] shadow-inner group">
            <SafeImage
              src={owner.imageSrc}
              fallbackSrcs={fallbackImages}
              alt={owner.altText}
              fallbackText={`${isUrdu ? owner.nameUrdu : owner.name} — ${isUrdu ? owner.designationUrdu : owner.designation}`}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {/* Subtle Corporate Lighting Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Professional Details Section (Clean, Non-repetitive) */}
          <div className="flex-1 flex flex-col justify-between text-center sm:text-left pt-1">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0077b6]/20 border border-[#00b4d8]/30 text-[#00b4d8] text-[11px] font-bold tracking-wider uppercase mb-2.5">
                <Award className="w-3.5 h-3.5 text-[#00b4d8]" />
                <span>{isUrdu ? 'قیادت و سرپرستی' : 'Executive Leadership'}</span>
              </div>

              {/* Owner Name: Colonel Retd. Muhammad Rafiq Jam */}
              <h4 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                {isUrdu ? owner.nameUrdu : owner.name}
              </h4>

              {/* Designation: Company Owner */}
              <p className="text-xs sm:text-sm font-semibold text-[#00b4d8] tracking-wider uppercase mt-1">
                {isUrdu ? owner.designationUrdu : owner.designation}
              </p>

              {/* Bio & Strategic Command Note */}
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                {isUrdu 
                  ? 'ایگزیکٹو کمانڈ، اسٹریٹجک پالیسی اور سیکیورٹی آپریشنز کی براہ راست نگرانی۔'
                  : 'Executive Command, strategic policy governance, and direct tactical supervision over corporate security operations.'}
              </p>
            </div>

            {/* Credential Indicators */}
            <div className="pt-3 mt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
                <span>{isUrdu ? 'آپریشنل کمانڈ' : 'Operational Command'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
                <span>{isUrdu ? 'کارپوریٹ گورننس' : 'Corporate Governance'}</span>
              </div>
            </div>
          </div>
        </div>
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
