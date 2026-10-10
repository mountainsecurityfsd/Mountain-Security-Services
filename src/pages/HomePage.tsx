import React, { useState } from 'react';
import { PageRoute, Language } from '../types';
import { WORKFORCE_CATEGORIES } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';
import { 
  Shield, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  UserPlus, 
  Briefcase, 
  Building2, 
  Landmark, 
  GraduationCap, 
  Sparkles, 
  Factory, 
  Truck, 
  Users, 
  Star,
  Send,
  Loader2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { isValidPakistaniPhone } from '../utils/validation';
import { OwnersHeroShowcase } from '../components/OwnersHeroShowcase';

interface HomePageProps {
  onNavigate: (route: PageRoute, categoryId?: string) => void;
  language: Language;
  onOpenRequisitionModal: (roleName: string) => void;
  onToggleLanguage: (lang: Language) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  language,
  onOpenRequisitionModal,
  onToggleLanguage
}) => {
  const t = TRANSLATIONS[language];

  // Callback form state
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackService, setCallbackService] = useState('Security Guards');
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [callbackSuccess, setCallbackSuccess] = useState(false);
  const [callbackError, setCallbackError] = useState<string | null>(null);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackError(null);

    if (!callbackName.trim()) {
      setCallbackError('Please provide your name or company.');
      return;
    }

    if (!isValidPakistaniPhone(callbackPhone)) {
      setCallbackError('Please provide a valid Pakistani contact number (e.g. 0300-1234567 or 03299200111).');
      return;
    }

    setCallbackLoading(true);
    setTimeout(() => {
      setCallbackLoading(false);
      setCallbackSuccess(true);
      setCallbackName('');
      setCallbackPhone('');
    }, 500);
  };

  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION (Deep Midnight Navy Corporate Command Zone) */}
      <section className="relative bg-[#0b132b] text-white overflow-hidden pt-10 pb-16 md:pb-24">
        {/* Subtle tactical grid backplane */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(103,186,253,0.15),rgba(19,26,51,0))] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Tactical Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#cde5ff] text-xs font-semibold backdrop-blur-sm border border-white/10">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse"></span>
              <span>{t.hero.regulatory}</span>
            </div>

            {/* Language Switch Pill */}
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-slate-300">
                Preview Language:
              </span>
              <button
                type="button"
                onClick={() => onToggleLanguage(language === 'en' ? 'ur' : 'en')}
                className="px-3 py-0.5 rounded-full bg-[#0077b6] text-white text-xs font-bold transition-all hover:bg-[#00b4d8] hover:text-[#001d32] cursor-pointer"
              >
                Switch to {language === 'en' ? 'اردو' : 'English'}
              </button>
            </div>
          </div>

          {/* Hero Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Main Typography & Action Column */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-[#00b4d8] text-xs font-bold tracking-widest uppercase">
                <Shield className="w-4 h-4 text-[#00b4d8]" />
                <span>Mountain Security Services (Pvt) Ltd</span>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {t.hero.title}
                </h1>
                <h2 className="font-headline text-xl sm:text-2xl text-[#cde5ff] font-semibold">
                  {t.hero.subtitle}
                </h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {t.hero.desc}
              </p>

              {/* 3 Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('services-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer border border-white/20"
                >
                  <span>{t.hero.exploreBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('hire-staff')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#0077b6] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#006399] shadow-[0_4px_16px_rgba(0,119,182,0.4)] transition-all cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{t.hero.hireBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('careers')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-transparent text-[#cde5ff] font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{t.hero.careerBtn}</span>
                </button>
              </div>

              {/* Telemetry Quick Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-[#cde5ff]">{t.hero.compliance}</div>
                  <div className="font-headline text-lg sm:text-xl text-white font-extrabold">100%</div>
                  <div className="text-[11px] text-slate-300">NADRA Verified</div>
                </div>
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-[#cde5ff]">{t.hero.dispatchTime}</div>
                  <div className="font-headline text-lg sm:text-xl text-white font-extrabold">&lt; 2 Hrs</div>
                  <div className="text-[11px] text-slate-300">Faisalabad Urban</div>
                </div>
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-[#cde5ff]">{t.hero.operations}</div>
                  <div className="font-headline text-lg sm:text-xl text-white font-extrabold">24 / 7</div>
                  <div className="text-[11px] text-slate-300">Tactical Supervision</div>
                </div>
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-[#cde5ff]">{t.hero.replacement}</div>
                  <div className="font-headline text-lg sm:text-xl text-white font-extrabold">Guaranteed</div>
                  <div className="text-[11px] text-slate-300">Corporate SLA</div>
                </div>
              </div>
            </div>

            {/* Prominent Company Owners Hero Showcase (Visible Immediately on First Screen) */}
            <div className="lg:col-span-6 relative">
              <OwnersHeroShowcase language={language} />
            </div>
          </div>

          {/* Floating Trust Ticker */}
          <div className="mt-12 bg-white/10 rounded-xl p-3 backdrop-blur-sm overflow-hidden border border-white/10 shadow-sm">
            <div className="flex items-center gap-4 text-xs text-[#cde5ff]">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0077b6] text-white font-bold uppercase tracking-wider shrink-0 text-[11px]">
                <Sparkles className="w-3.5 h-3.5" /> {t.ticker.status}
              </span>
              <div className="overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-8 text-slate-300 text-xs">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]"></span>
                  <span>{t.ticker.item1}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]"></span>
                  <span>{t.ticker.item2}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]"></span>
                  <span>{t.ticker.item3}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]"></span>
                  <span>{t.ticker.item4}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTION BAR (Fast-track deployment triggers) */}
      <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Fast Action 1: Security */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0077b6]">
                Immediate Request
              </span>
              <h3 className="font-headline text-base font-bold text-slate-900">
                {t.quickActions.action1Title}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t.quickActions.action1Sub}
              </p>
              <button
                type="button"
                onClick={() => onOpenRequisitionModal('Armed & Unarmed Security Guards')}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0077b6] hover:underline cursor-pointer"
              >
                <span>{t.quickActions.action1Link}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Fast Action 2: Workforce Placement */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0077b6]">
                Workforce Sourcing
              </span>
              <h3 className="font-headline text-base font-bold text-slate-900">
                {t.quickActions.action2Title}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t.quickActions.action2Sub}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('hire-staff')}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0077b6] hover:underline cursor-pointer"
              >
                <span>{t.quickActions.action2Link}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Fast Action 3: Direct Emergency Phone Hotlines */}
          <div className="bg-[#0b132b] text-white p-6 rounded-2xl shadow-xl flex items-start gap-4 hover:-translate-y-1 transition-all border border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-[#0077b6] text-white flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b4d8]">
                Direct Operations Desk
              </span>
              <h3 className="font-headline text-base font-bold text-white">
                {t.quickActions.action3Title}
              </h3>
              <div className="flex flex-col mt-1 text-sm font-bold text-[#cde5ff]">
                <a href="tel:03299200111" className="hover:text-white transition-colors">
                  0329-9200111
                </a>
                <a href="tel:03000266204" className="hover:text-white transition-colors">
                  0300-0266204 (WhatsApp)
                </a>
              </div>
              <span className="text-[11px] text-slate-300 mt-2">
                {t.quickActions.action3Sub}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES 4-DIVISION GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="services-grid">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0077b6] text-xs font-bold uppercase tracking-wider mb-2">
            {t.servicesOverview.badge}
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.servicesOverview.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.servicesOverview.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Division 1: Manned Guarding */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase text-[#0077b6]">
                Security Division
              </span>
              <h3 className="font-headline text-lg font-bold text-slate-900 mt-1 mb-2">
                Manned Guarding
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Static uniformed guards, gatehouse access control, perimeter patrols, weapon handlers, and command-room CCTV observers.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Armed & Unarmed Guards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Daily Patrol Check-ins</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Metal Detectors & Scanners</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('service-detail', 'security-guards')}
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#0077b6] hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>View Guarding Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Division 2: Executive Transport */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase text-[#0077b6]">
                Logistics Division
              </span>
              <h3 className="font-headline text-lg font-bold text-slate-900 mt-1 mb-2">
                Executive Transport
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Licensed corporate drivers, heavy vehicle operators, pick-and-drop fleet chauffeurs with clean driving records and route expertise.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Executive Chauffeurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>HTV / LTV Licensed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Route & VIP Protocol</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('service-detail', 'drivers')}
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#0077b6] hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>View Fleet Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Division 3: Office & Facilities */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase text-[#0077b6]">
                Workforce Division
              </span>
              <h3 className="font-headline text-lg font-bold text-slate-900 mt-1 mb-2">
                Office & Facilities
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Professional receptionists, office assistants, mess staff, cleaning teams, and certified administrative support personnel.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Front Desk Executives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Office Boys & Helpers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Janitorial & Housekeeping</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('service-detail', 'office-boys')}
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#0077b6] hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>View Office Roles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Division 4: Industrial Operations */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase text-[#0077b6]">
                Industrial Division
              </span>
              <h3 className="font-headline text-lg font-bold text-slate-900 mt-1 mb-2">
                Factory Operations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Skilled industrial crews: textile unit laborers, warehouse inventory sorters, certified electricians, and construction masons.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Textile & Mills Labor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Certified Electricians</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                  <span>Warehouse Handlers</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('service-detail', 'factory-workers')}
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#0077b6] hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>View Industrial Labor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 12 WORKER CATEGORIES PREVIEW SHOWCASE */}
      <section className="bg-slate-50 py-16 w-full border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6]">
                {t.catalog.badge}
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                {t.catalog.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                {t.catalog.subtitle}
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('hire-staff')}
                className="px-5 py-2.5 rounded-lg bg-[#0b132b] text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              >
                {t.catalog.bulkBtn}
              </button>
            </div>
          </div>

          {/* Grid of All 12 Workforce Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {WORKFORCE_CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#0b132b]/90 text-white font-bold text-[10px] uppercase backdrop-blur-sm">
                      Category {cat.categoryNumber}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-headline text-base font-bold text-slate-900">
                        {language === 'ur' ? cat.nameUrdu : cat.name}
                      </h4>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#0077b6] shrink-0">
                        {cat.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {language === 'ur' ? cat.descriptionUrdu : cat.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {cat.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    type="button"
                    onClick={() => onNavigate('service-detail', cat.id)}
                    className="w-full py-2 rounded-lg bg-slate-100 hover:bg-[#0077b6] hover:text-white transition-colors text-center text-xs font-bold text-slate-800 block cursor-pointer"
                  >
                    {t.catalog.viewProfile}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MOUNTAIN SECURITY SERVICES (Enterprise Trust Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6]">
              {t.whyChoose.badge}
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.whyChoose.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.whyChoose.desc}
            </p>

            {/* Replacement SLA highlight banner */}
            <div className="bg-slate-100 p-4 rounded-xl flex items-center gap-4 border border-slate-200">
              <Shield className="w-8 h-8 text-[#0077b6] shrink-0" />
              <div>
                <h4 className="font-headline text-sm font-bold text-slate-900">
                  {t.whyChoose.guaranteeTitle}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {t.whyChoose.guaranteeDesc}
                </p>
              </div>
            </div>

            {/* Field Guard Deployment Showcase */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#0b132b] text-white border border-slate-700 mt-2">
              <div className="relative h-52 w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVYEB9ui7lO7cCrUZf4DONu03h4kOWlhTv5oRwhfETOHAUK0FS1I5zio6BsGXk3jx14jwF9yeR3uJkaNC6ooFOXYMiJQEY_927oVSXNQMr_fPWTYzWdGNd8evUGuu_I71F-EKhC7VgYlUuD4s8dp1HDOLy44O1EnCzphW2SM-xjAK3aKInaQcCxAt5MX5OIevKNzD9t4y9VmpZ3ygFIIUc8fiItw6y5alwd1r-ZRjK2Tx50zcNM6yqPA"
                  alt="Mountain Security Guard in Formal Navy Uniform at Corporate Entrance"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b132b]/90 text-[#00b4d8] text-[10px] font-bold uppercase backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] animate-pulse"></span>
                    Active Field Guard Deployment
                  </span>
                </div>
              </div>
              <div className="p-3 bg-[#0b132b] border-t border-slate-700 flex items-center justify-between text-xs text-slate-300">
                <span>Station: Faisalabad Corporate Sector</span>
                <span className="text-[#00b4d8] font-semibold">Biometrically Cleared</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0077b6] mb-3">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.whyChoose.pillar1Title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t.whyChoose.pillar1Desc}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0077b6] mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.whyChoose.pillar2Title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t.whyChoose.pillar2Desc}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0077b6] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.whyChoose.pillar3Title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t.whyChoose.pillar3Desc}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0077b6] mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.whyChoose.pillar4Title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t.whyChoose.pillar4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT PORTAL CTA BANNERS (Employers vs Job Seekers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Portal Card A: Employers */}
          <div className="bg-[#0b132b] text-white rounded-3xl p-8 relative overflow-hidden shadow-xl flex flex-col justify-between border border-slate-700">
            <div className="relative z-10 flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0077b6] text-white text-[11px] font-bold uppercase tracking-wider w-max">
                {t.portals.employerTag}
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.portals.employerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                {t.portals.employerDesc}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#cde5ff] pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00b4d8]" /> Custom SLA Agreements
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00b4d8]" /> Pre-Audited Backgrounds
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('hire-staff')}
                className="px-6 py-3 rounded-xl bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#006399] transition-colors shadow-md cursor-pointer"
              >
                {t.portals.employerBtn}
              </button>
              <a
                href="tel:03299200111"
                className="text-[#cde5ff] hover:text-white font-bold text-xs flex items-center gap-1"
              >
                {t.portals.employerCall} <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Portal Card B: Job Seekers */}
          <div className="bg-[#ebedff] text-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-md flex flex-col justify-between border border-slate-300">
            <div className="relative z-10 flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-slate-800 text-[11px] font-bold uppercase tracking-wider w-max shadow-sm">
                {t.portals.workerTag}
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.portals.workerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                {t.portals.workerDesc}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Uniform & Gear Provided
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Fair & Transparent Pay
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('careers')}
                className="px-6 py-3 rounded-xl bg-[#0b132b] text-white font-bold text-xs uppercase tracking-wide hover:bg-slate-800 transition-colors shadow-md cursor-pointer"
              >
                {t.portals.workerBtn}
              </button>
              <a
                href="https://maps.app.goo.gl/dYzoczkhh3AJ6em18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-[#0077b6] inline-flex items-center gap-1 transition-colors group cursor-pointer"
                title="View office location on Google Maps (opens in new tab)"
                aria-label="View Walk-in office at Arshad Center on Google Maps (opens in new tab)"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0077b6] group-hover:scale-110 transition-transform shrink-0" />
                <span>Walk-ins: <span className="underline decoration-slate-300 group-hover:decoration-[#0077b6]">Arshad Center, Faisalabad</span></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="bg-slate-50 py-16 w-full border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6]">
              Client Verticals
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Specialized Deployments by Industry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Each commercial environment demands tailored protocols. We customize training modules specifically for your industry standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-all">
              <Factory className="w-8 h-8 text-[#0077b6] mx-auto mb-2" />
              <h4 className="font-headline text-xs font-bold text-slate-900">Textile & Mfg</h4>
              <p className="text-[11px] text-slate-500 mt-1">Shift guards & plant labor</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-all">
              <Landmark className="w-8 h-8 text-[#0077b6] mx-auto mb-2" />
              <h4 className="font-headline text-xs font-bold text-slate-900">Banks & Finance</h4>
              <p className="text-[11px] text-slate-500 mt-1">Armed bank security & cash transit</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-all">
              <Building2 className="w-8 h-8 text-[#0077b6] mx-auto mb-2" />
              <h4 className="font-headline text-xs font-bold text-slate-900">Corporate Towers</h4>
              <p className="text-[11px] text-slate-500 mt-1">Concierge & access control</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-all">
              <Sparkles className="w-8 h-8 text-[#0077b6] mx-auto mb-2" />
              <h4 className="font-headline text-xs font-bold text-slate-900">Hospitals & Health</h4>
              <p className="text-[11px] text-slate-500 mt-1">Emergency room order & hygiene</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-all">
              <GraduationCap className="w-8 h-8 text-[#0077b6] mx-auto mb-2" />
              <h4 className="font-headline text-xs font-bold text-slate-900">Campuses</h4>
              <p className="text-[11px] text-slate-500 mt-1">Perimeter gate & student safety</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-all">
              <Building2 className="w-8 h-8 text-[#0077b6] mx-auto mb-2" />
              <h4 className="font-headline text-xs font-bold text-slate-900">Luxury Estates</h4>
              <p className="text-[11px] text-slate-500 mt-1">Domestic staff & residential guards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT ACCOUNTABILITY & VERIFICATION NOTICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6]">
            Quality Assurance
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Client Verifications & Accountability
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            We adhere strictly to Pakistani regulatory standards, maintaining clear audit trails for each deployed guard and workforce contract.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                &ldquo;[Enterprise Testimonial Placeholder — Verification in progress under ISO/Client SLA]&rdquo;
              </p>
            </div>
            <div className="pt-3 mt-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="text-xs font-bold text-slate-900">Textile Processing Unit</div>
              <div className="text-[11px] text-slate-500">Khurrianwala Industrial Corridor, Faisalabad</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                &ldquo;[Enterprise Testimonial Placeholder — Verification in progress under ISO/Client SLA]&rdquo;
              </p>
            </div>
            <div className="pt-3 mt-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="text-xs font-bold text-slate-900">Commercial Plaza Management</div>
              <div className="text-[11px] text-slate-500">D-Ground Commercial Area, Faisalabad</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                &ldquo;[Enterprise Testimonial Placeholder — Verification in progress under ISO/Client SLA]&rdquo;
              </p>
            </div>
            <div className="pt-3 mt-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="text-xs font-bold text-slate-900">Private Distribution Warehouse</div>
              <div className="text-[11px] text-slate-500">Sargodha Road Hub, Faisalabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CENTRAL DISPATCH OFFICE & RAPID CALLBACK SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="bg-[#0b132b] text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0077b6] text-white text-[11px] font-bold uppercase tracking-wider w-max">
                Central Dispatch & Physical Office
              </div>
              <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Connect With Our Duty Officers Now
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you require an immediate guard replacement or want to schedule a site security assessment, our dispatch supervisors are reachable 24 hours a day.
              </p>

              <div className="flex flex-col gap-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00b4d8] shrink-0 mt-0.5" />
                  <a
                    href="https://maps.app.goo.gl/dYzoczkhh3AJ6em18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#00b4d8] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                    title="Open office address on Google Maps (opens in new tab)"
                    aria-label="View Mountain Security Services headquarters on Google Maps (opens in new tab)"
                  >
                    <span className="group-hover:underline underline-offset-2">
                      2nd Floor, Arshad Center, Near General Bus Stand, Faisalabad, Pakistan
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00b4d8] shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00b4d8] shrink-0" />
                  <span className="text-slate-200">
                    Hotlines: <a href="tel:03299200111" className="text-[#cde5ff] font-bold hover:underline">0329-9200111</a> | <a href="tel:03297200222" className="text-[#cde5ff] font-bold hover:underline">0329-7200222</a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00b4d8] shrink-0" />
                  <span className="text-slate-200">
                    Operations Room: <a href="tel:03000266204" className="text-[#cde5ff] font-bold hover:underline">0300-0266204</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Quick Callback Form */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="font-headline text-lg font-bold text-slate-900">
                Request a Rapid Callback
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Our duty supervisor will call back within 15 minutes.
              </p>

              {callbackSuccess ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center flex flex-col items-center gap-2">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Callback Logged Successfully!
                  </h4>
                  <p className="text-xs text-slate-600">
                    A duty supervisor is assigning your inquiry to the Faisalabad dispatch unit.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCallbackSuccess(false)}
                    className="mt-2 text-xs font-bold text-[#0077b6] underline cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="flex flex-col gap-3">
                  {callbackError && (
                    <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{callbackError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Textiles / Muhammad Usman"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-100 text-slate-900 text-xs border border-slate-200 focus:outline-none focus:bg-white focus:border-[#0077b6]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="03XX-XXXXXXX"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-100 text-slate-900 text-xs border border-slate-200 focus:outline-none focus:bg-white focus:border-[#0077b6]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Required Workforce or Guard Service
                    </label>
                    <select
                      value={callbackService}
                      onChange={(e) => setCallbackService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-100 text-slate-900 text-xs border border-slate-200 focus:outline-none focus:bg-white focus:border-[#0077b6]"
                    >
                      <option value="Security Guards">Security Guards (Armed / Unarmed)</option>
                      <option value="Executive Drivers">Executive Drivers & Chauffeurs</option>
                      <option value="Factory Workers">Industrial & Factory Workers</option>
                      <option value="Office & Facilities">Office Assistants & Receptionists</option>
                      <option value="Domestic Staff">Cooks, Gardeners & Domestic Helpers</option>
                      <option value="Warehouse Workers">Warehouse & Logistics Staff</option>
                      <option value="Electricians & Masons">Skilled Trades (Electricians/Masons)</option>
                      <option value="Other">Other Specialist Staffing</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={callbackLoading}
                    className="mt-2 w-full py-3 rounded-lg bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006399] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {callbackLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Callback Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
