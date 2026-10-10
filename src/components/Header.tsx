import React, { useState } from 'react';
import { PageRoute, Language } from '../types';
import { WORKFORCE_CATEGORIES, MSS_LOGO } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, categoryId?: string) => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onOpenWhatsAppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  language,
  onToggleLanguage,
  onOpenWhatsAppModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const handleNavClick = (route: PageRoute, catId?: string) => {
    onNavigate(route, catId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 shadow-[0_4px_20px_rgba(11,19,43,0.12)]">
      {/* Top Operations Information Ribbon */}
      <div className="bg-primary-container text-on-primary border-b border-outline/20">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-10 flex items-center justify-between font-label-md text-label-md">
          <div className="flex items-center gap-space-lg overflow-x-auto py-1">
            <div className="hidden md:flex items-center gap-space-xs text-on-primary-container">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">location_on</span>
              <span>2nd Floor, Arshad Center, near General Bus Stand, Faisalabad</span>
            </div>

            <div className="flex items-center gap-space-md text-on-primary">
              <span className="text-on-primary-container hidden sm:inline">Hotlines:</span>
              <a className="hover:text-secondary-fixed transition-colors" href="tel:03299200111">
                0329-9200111
              </a>
              <span className="text-outline-variant/40 hidden sm:inline">|</span>
              <a className="hover:text-secondary-fixed transition-colors hidden sm:inline" href="tel:03297200222">
                0329-7200222
              </a>
              <span className="text-outline-variant/40 hidden md:inline">|</span>
              <a className="hover:text-secondary-fixed transition-colors hidden md:inline" href="tel:03000266204">
                0300-0266204
              </a>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            {/* Language Switcher */}
            <div className="flex items-center bg-surface-container-high/20 rounded-lg p-0.5 border border-outline/30">
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-0.5 rounded-lg text-label-sm font-label-sm transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-secondary text-on-secondary hover:bg-secondary/90'
                    : 'text-on-primary-container hover:text-on-primary'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLanguage('ur')}
                className={`px-2 py-0.5 rounded-lg text-label-sm font-label-sm transition-all cursor-pointer ${
                  language === 'ur'
                    ? 'bg-secondary text-on-secondary hover:bg-secondary/90'
                    : 'text-on-primary-container hover:text-on-primary'
                }`}
              >
                اردو
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-20 flex items-center justify-between gap-space-md">
          {/* Logo & Identity */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-space-md shrink-0 text-left cursor-pointer group"
          >
            <img 
              alt="Mountain MSS Security Emblem.png" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
              src={MSS_LOGO} 
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">
                {language === 'ur' ? 'ماؤنٹین سیکیورٹی سروسز' : 'Mountain Security Services'}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                {language === 'ur' ? '(پرائیویٹ) لمیٹڈ • ایسا تحفظ جس پر آپ بھروسہ کریں' : '(Pvt) Ltd • Security You Can Trust'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-space-lg font-label-lg text-label-lg">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-2 cursor-pointer ${
                currentRoute === 'home' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t.nav.home}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`transition-colors py-2 cursor-pointer ${
                currentRoute === 'about' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t.nav.about}
            </button>

            {/* 12-Category Flyout Menu */}
            <div className="relative group py-2">
              <button
                type="button"
                onClick={() => handleNavClick('directory')}
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  currentRoute === 'directory' || currentRoute === 'service-detail'
                    ? 'text-secondary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span>{t.nav.services}</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>

              <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-2 gap-space-xs w-96 p-space-md bg-surface-container-lowest rounded-xl shadow-[0_12px_24px_-4px_rgba(11,19,43,0.14)] border border-outline-variant/40 mt-1 z-50">
                {WORKFORCE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleNavClick('service-detail', cat.id)}
                    className="p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left text-body-sm font-body-sm text-on-surface hover:text-secondary cursor-pointer"
                  >
                    {language === 'ur' ? cat.nameUrdu : cat.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('hire-staff')}
              className={`transition-colors py-2 cursor-pointer ${
                currentRoute === 'hire-staff' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t.nav.hireStaff}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('careers')}
              className={`transition-colors py-2 cursor-pointer ${
                currentRoute === 'careers' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t.nav.careers}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`transition-colors py-2 cursor-pointer ${
                currentRoute === 'contact' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-space-sm">
            <button
              type="button"
              onClick={() => handleNavClick('hire-staff')}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all shadow-[0_2px_8px_rgba(0,99,153,0.3)] cursor-pointer"
            >
              Hire Staff
            </button>

            {/* The One Prominent WhatsApp Header Button */}
            <button
              type="button"
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#25d366] border border-[#25d366]/30 font-label-md text-label-md transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Contact Us on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden md:inline font-bold">WhatsApp</span>
            </button>

            <div 
              title="Duty Officer Portal" 
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-default"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-outline-variant/30 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="p-4 flex flex-col gap-2 font-label-md text-label-md">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`p-3 rounded-lg text-left transition-colors ${
                currentRoute === 'home' ? 'bg-secondary text-on-secondary' : 'hover:bg-surface-container-low text-on-surface'
              }`}
            >
              {t.nav.home}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`p-3 rounded-lg text-left transition-colors ${
                currentRoute === 'about' ? 'bg-secondary text-on-secondary' : 'hover:bg-surface-container-low text-on-surface'
              }`}
            >
              {t.nav.about}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('directory')}
              className={`p-3 rounded-lg text-left transition-colors ${
                currentRoute === 'directory' ? 'bg-secondary text-on-secondary' : 'hover:bg-surface-container-low text-on-surface'
              }`}
            >
              {t.nav.services} (12 Divisions)
            </button>

            <div className="grid grid-cols-2 gap-1 p-2 bg-surface-container-low rounded-lg text-body-sm font-body-sm">
              {WORKFORCE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleNavClick('service-detail', cat.id)}
                  className="p-2 text-left hover:bg-surface-container-lowest rounded truncate text-on-surface-variant hover:text-secondary"
                >
                  • {language === 'ur' ? cat.nameUrdu : cat.name}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('hire-staff')}
              className={`p-3 rounded-lg text-left transition-colors ${
                currentRoute === 'hire-staff' ? 'bg-secondary text-on-secondary' : 'hover:bg-surface-container-low text-on-surface'
              }`}
            >
              {t.nav.hireStaff}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('careers')}
              className={`p-3 rounded-lg text-left transition-colors ${
                currentRoute === 'careers' ? 'bg-secondary text-on-secondary' : 'hover:bg-surface-container-low text-on-surface'
              }`}
            >
              {t.nav.careers}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`p-3 rounded-lg text-left transition-colors ${
                currentRoute === 'contact' ? 'bg-secondary text-on-secondary' : 'hover:bg-surface-container-low text-on-surface'
              }`}
            >
              {t.nav.contact}
            </button>

            <div className="pt-2 flex flex-col gap-2 border-t border-outline-variant/30">
              <a
                href="tel:03299200111"
                className="w-full py-3 bg-primary-container text-on-primary text-center rounded-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">phone</span>
                <span>Call Hotline: 0329-9200111</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full py-3 bg-[#25d366] text-[#072410] font-bold text-center rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Contact Us on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
