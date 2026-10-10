import React from 'react';
import { PageRoute, Language } from '../types';
import { WORKFORCE_CATEGORIES, MSS_LOGO } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onNavigate: (route: PageRoute, categoryId?: string) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface border-t border-outline-variant/30 pt-space-2xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-2xl border-b border-outline-variant/40">
          {/* Column 1: Identity & Registered Headquarters */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img 
                alt="Mountain MSS Security Emblem.png" 
                className="h-8 w-auto object-contain" 
                src={MSS_LOGO} 
              />
              <span className="font-headline-sm text-headline-sm text-on-surface">Mountain MSS</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Premier licensed corporate security guarding &amp; skilled workforce placement across Faisalabad and regional industrial corridors.
            </p>
            <div className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface-variant">
              <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Registered Headquarters</span>
              <span>2nd Floor, Arshad Center, near General Bus Stand, Faisalabad, Pakistan</span>
              <span>Hours: 24/7 Operations Command &amp; Dispatch</span>
            </div>
          </div>

          {/* Column 2: Workforce Categories (12 divisions) */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface border-l-2 border-secondary pl-2 font-bold">
              Workforce Categories
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
              {WORKFORCE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('service-detail', cat.id)}
                    className="hover:text-secondary text-left cursor-pointer truncate w-full"
                  >
                    {language === 'ur' ? cat.nameUrdu : cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portals & Access */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface border-l-2 border-secondary pl-2 font-bold">
              Portals &amp; Access
            </h4>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <button
                type="button"
                onClick={() => onNavigate('hire-staff')}
                className="hover:text-secondary flex items-center justify-between py-1 cursor-pointer text-left"
              >
                <span>Employer Staffing Portal</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('careers')}
                className="hover:text-secondary flex items-center justify-between py-1 cursor-pointer text-left"
              >
                <span>Worker Registration Hub</span>
                <span className="material-symbols-outlined text-[16px]">badge</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="hover:text-secondary flex items-center justify-between py-1 cursor-pointer text-left"
              >
                <span>Verification Protocol</span>
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="hover:text-secondary flex items-center justify-between py-1 cursor-pointer text-left"
              >
                <span>Emergency Dispatch 24/7</span>
                <span className="material-symbols-outlined text-[16px]">crisis_alert</span>
              </button>
            </div>
          </div>

          {/* Column 4: Direct Hotlines */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface border-l-2 border-secondary pl-2 font-bold">
              Direct Hotlines
            </h4>
            <div className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
              <a className="font-bold text-on-surface hover:text-secondary" href="tel:03299200111">
                +92 329 9200111
              </a>
              <a className="font-bold text-on-surface hover:text-secondary" href="tel:03297200222">
                +92 329 7200222
              </a>
              <a className="font-bold text-on-surface hover:text-secondary" href="tel:03000266204">
                +92 300 0266204
              </a>
              <p className="mt-2 text-label-sm font-label-sm text-on-surface-variant/80 bg-surface-container-low p-2 rounded-lg">
                Strict biometric background verification &amp; NADRA checks performed on all deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <p className="text-center md:text-left text-label-sm font-label-sm text-on-surface-variant/90">
            <strong className="text-error">Disclaimer:</strong> {t.footer.disclaimer}
          </p>

          <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
            <button
              type="button"
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-secondary cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-outline-variant">|</span>
            <span>{t.footer.rights}</span>
            <span className="text-outline-variant">|</span>
            <span>{t.footer.architecture}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
