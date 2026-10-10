import React from 'react';
import { PageRoute, Language, WorkforceCategory } from '../types';
import { WORKFORCE_CATEGORIES } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';
import { 
  Shield, 
  MapPin, 
  Clock, 
  BadgeCheck, 
  CheckCircle, 
  Phone, 
  MessageSquare, 
  HelpCircle, 
  ArrowRight,
  ArrowLeft,
  Award
} from 'lucide-react';

interface ServiceDetailPageProps {
  categoryId: string;
  onNavigate: (route: PageRoute, categoryId?: string) => void;
  language: Language;
  onOpenRequisitionModal: (roleName: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  categoryId,
  onNavigate,
  language,
  onOpenRequisitionModal
}) => {
  const t = TRANSLATIONS[language];
  const category = WORKFORCE_CATEGORIES.find(c => c.id === categoryId) || WORKFORCE_CATEGORIES[0];

  const otherCategories = WORKFORCE_CATEGORIES.filter(c => c.id !== category.id);

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#0b132b] text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300 mb-4 font-semibold">
            <button 
              type="button" 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#cde5ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-500">/</span>
            <button 
              type="button" 
              onClick={() => onNavigate('directory')} 
              className="hover:text-[#cde5ff] transition-colors cursor-pointer"
            >
              Workforce Services
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-[#00b4d8]">Cat {category.categoryNumber}: {category.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0077b6]/30 text-[#cde5ff] text-xs font-bold uppercase tracking-wider border border-[#0077b6]/40">
                  Division: {category.division}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                  {category.nameUrdu}
                </span>
              </div>
              <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {category.name}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {category.fullOverview}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenRequisitionModal(category.name)}
                className="px-6 py-3.5 rounded-xl bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#006399] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Shield className="w-4 h-4" />
                <span>Deploy {category.name}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">
        {/* Visual Spec Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold text-[#0077b6] uppercase tracking-wider">
                Deployment Specification
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Role Profile & Verification Benchmarks
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5">
                <Award className="w-5 h-5 text-[#0077b6]" />
                <span className="text-xs font-bold text-slate-900">Licensing / Trade</span>
                <span className="text-[11px] text-slate-600 leading-tight">{category.licensingSpec}</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5">
                <BadgeCheck className="w-5 h-5 text-[#0077b6]" />
                <span className="text-xs font-bold text-slate-900">Background Vetting</span>
                <span className="text-[11px] text-slate-600 leading-tight">{category.vettingSpec}</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5">
                <Clock className="w-5 h-5 text-[#0077b6]" />
                <span className="text-xs font-bold text-slate-900">Duty Shifts</span>
                <span className="text-[11px] text-slate-600 leading-tight">{category.deploymentRounds}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-headline text-lg font-bold text-slate-900">
                Core Responsibilities & Scope
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 text-xs text-slate-600">
                {category.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenRequisitionModal(category.name)}
                className="px-6 py-3 rounded-xl bg-[#0b132b] text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Staff Quota</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:03299200111"
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 transition-colors border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#0077b6]" />
                <span>Call Hotline: 0329-9200111</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-85"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0b132b]/90 backdrop-blur-md text-white border border-white/15">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b4d8]">
                    Cadre Specification {category.categoryNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#0077b6] text-white text-[10px] font-bold">
                    100% Vetted
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Screened through biometric NADRA systems and city police clearance registers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ideal Environments & Verification Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-200 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-slate-900">
                Ideal Deployment Environments
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              {category.idealEnvironments.map((env, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{env}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-200 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-slate-900">
                Mandatory Verification Benchmarks
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              {category.verificationStandards.map((std, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{std}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        {category.faqs && (
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
            <h3 className="font-headline text-lg font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0077b6]" />
              <span>Frequently Asked Questions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-1.5">
                  <strong className="text-xs text-slate-900">{faq.question}</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Categories Carousel / Links */}
        <div className="flex flex-col gap-4 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-bold text-slate-900">
              Explore Other Workforce Cadres
            </h3>
            <button
              type="button"
              onClick={() => onNavigate('directory')}
              className="text-xs font-bold text-[#0077b6] hover:underline cursor-pointer"
            >
              View All 12 Divisions
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {otherCategories.slice(0, 6).map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  onNavigate('service-detail', c.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#0077b6] hover:shadow-sm text-left transition-all cursor-pointer flex flex-col gap-1"
              >
                <span className="text-[10px] font-bold text-[#0077b6]">Cat {c.categoryNumber}</span>
                <span className="text-xs font-bold text-slate-900 truncate">{c.name}</span>
                <span className="text-[10px] text-slate-500">{c.badge}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
