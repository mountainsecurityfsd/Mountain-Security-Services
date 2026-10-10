import React, { useState } from 'react';
import { PageRoute, Language } from '../types';
import { WORKFORCE_CATEGORIES } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';
import { 
  Shield, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  MapPin, 
  Clock, 
  BadgeCheck, 
  FileText, 
  Users, 
  HelpCircle,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

interface WorkforceDirectoryPageProps {
  onNavigate: (route: PageRoute, categoryId?: string) => void;
  language: Language;
  onOpenRequisitionModal: (roleName: string) => void;
  initialTab?: string;
}

export const WorkforceDirectoryPage: React.FC<WorkforceDirectoryPageProps> = ({
  onNavigate,
  language,
  onOpenRequisitionModal,
  initialTab = 'security-guards'
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const t = TRANSLATIONS[language];

  // Map tabs
  const tabs = [
    { id: 'security-guards', name: 'Security Guards', urdu: '(سیکیورٹی گارڈز)' },
    { id: 'drivers', name: 'Drivers', urdu: '(ڈرائیورز)' },
    { id: 'receptionists', name: 'Receptionists', urdu: '(ریسیپشنسٹ)' },
    { id: 'cooks-chefs', name: 'Cooks & Chefs', urdu: '(باورچی)' },
    { id: 'office-boys', name: 'Office Support', urdu: '(آفس بوائے)' },
    { id: 'cleaning-staff', name: 'Cleaning Staff', urdu: '(صفائی عملہ)' },
    { id: 'industrial-trades', name: 'Industrial & Technical', urdu: '(فیکٹری و ہنر مند)' }
  ];

  const currentCategory = WORKFORCE_CATEGORIES.find(c => c.id === activeTab) || WORKFORCE_CATEGORIES[0];

  return (
    <div className="w-full flex flex-col">
      {/* Tactical Command Banner */}
      <section className="bg-[#0b132b] text-white py-12 relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#0077b6]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Operational Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300 mb-4 font-semibold">
            <button 
              type="button" 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#cde5ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300">Workforce Services</span>
            <span className="text-slate-500">/</span>
            <span className="text-[#00b4d8]">Category Directory (12 Divisions)</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077b6]/30 text-[#cde5ff] text-xs font-bold uppercase tracking-widest w-fit border border-[#0077b6]/40">
                <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse"></span>
                Operational Staffing & Tactical Security Cadres
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Verified Workforce & Guard Deployment Directory
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Centrally supervised, biometrically cleared, and insured personnel rosters tailored for Faisalabad industrial zones, regional corporations, commercial centers, and private residences.
              </p>
            </div>

            {/* Telemetry Highlights */}
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/15 shrink-0 shadow-lg">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  NADRA & Police Vetted
                </span>
                <span className="font-headline text-xl font-extrabold text-[#00b4d8]">
                  100% Cleared
                </span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  Field Response Units
                </span>
                <span className="font-headline text-xl font-extrabold text-white">
                  24/7 Monitored
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Category Switcher Navigation (Sticky) */}
      <section className="sticky top-20 z-40 bg-white shadow-md py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0b132b] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{tab.name}</span>
                <span className="text-[10px] opacity-80">{tab.urdu}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-500 uppercase font-semibold hidden xl:inline">
              Directory Protocol:
            </span>
            <div className="px-3 py-1 rounded-full bg-blue-50 text-[#0077b6] text-xs font-bold flex items-center gap-1.5 border border-blue-200">
              <BadgeCheck className="w-4 h-4" />
              <span>12 Categories Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Deep Dive Panes Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
        {/* If Active Tab is Industrial & Technical (6 Trades Matrix) */}
        {activeTab === 'industrial-trades' ? (
          <section className="flex flex-col gap-8 animate-in fade-in duration-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0b132b] text-white text-[11px] font-bold uppercase tracking-wider">
                  Categories 07 through 12
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-semibold">
                  صنعتی، ہنر مند و ضیافت عملہ
                </span>
              </div>
              <h2 className="font-headline text-3xl font-extrabold text-slate-900 tracking-tight">
                Specialized Industrial, Skilled Trades & Hospitality Cadres
              </h2>
              <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                Complete turnkey human resource solutions for manufacturing lines, logistics depots, MEP infrastructure maintenance, facility landscaping, and executive banquet services.
              </p>
            </div>

            {/* 6-Grid Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKFORCE_CATEGORIES.filter(c => ['factory-workers', 'warehouse-workers', 'electricians', 'masons', 'gardeners', 'waiters'].includes(c.id)).map((trade) => (
                <div key={trade.id} className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 flex flex-col justify-between gap-5 hover:shadow-md transition-all">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                        Cat {trade.categoryNumber}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <h3 className="font-headline text-lg font-bold text-slate-900">
                        {trade.name}
                      </h3>
                      <span className="text-xs text-slate-500 font-urdu">
                        {trade.nameUrdu}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {trade.description}
                    </p>

                    <div className="text-[11px] font-bold text-[#0077b6] flex items-center gap-1.5 pt-1">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      <span>{trade.licensingSpec}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onOpenRequisitionModal(trade.name)}
                      className="w-full py-2.5 rounded-xl bg-[#0077b6] hover:bg-[#006399] text-white transition-all text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Deploy {trade.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('service-detail', trade.id)}
                      className="w-full py-1.5 text-center text-xs text-slate-600 hover:text-[#0077b6] font-semibold cursor-pointer"
                    >
                      View Complete Specification
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          /* Single Dedicated Category Deep Dive */
          <section className="flex flex-col gap-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0b132b] text-white text-[11px] font-bold uppercase tracking-wider">
                    Category Alpha {currentCategory.categoryNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-semibold">
                    {currentCategory.nameUrdu}
                  </span>
                </div>

                <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {currentCategory.name}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentCategory.fullOverview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                    <Shield className="w-5 h-5 text-[#0077b6]" />
                    <span className="text-xs font-bold text-slate-900">Licensing</span>
                    <span className="text-[11px] text-slate-600">{currentCategory.licensingSpec}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                    <FileText className="w-5 h-5 text-[#0077b6]" />
                    <span className="text-xs font-bold text-slate-900">Vetting</span>
                    <span className="text-[11px] text-slate-600">{currentCategory.vettingSpec}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                    <Clock className="w-5 h-5 text-[#0077b6]" />
                    <span className="text-xs font-bold text-slate-900">Deployments</span>
                    <span className="text-[11px] text-slate-600">{currentCategory.deploymentRounds}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => onOpenRequisitionModal(currentCategory.name)}
                    className="px-6 py-3 rounded-xl bg-[#0b132b] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Request {currentCategory.name}</span>
                  </button>

                  <a
                    href="tel:03299200111"
                    className="px-5 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center gap-2 border border-slate-200"
                  >
                    <Phone className="w-4 h-4 text-[#0077b6]" />
                    <span>Call Hotlines: 0329-9200111</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onNavigate('service-detail', currentCategory.id)}
                    className="px-5 py-3 rounded-xl text-[#0077b6] hover:bg-blue-50 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Full Spec Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Photo Card with Tactical Overlap */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200">
                  <img
                    src={currentCategory.imageUrl}
                    alt={currentCategory.name}
                    className="w-full h-[440px] sm:h-[480px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-90"></div>

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0b132b]/90 backdrop-blur-md text-white flex flex-col gap-1.5 border border-white/15">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b4d8]">
                        Tactical Division Spec
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#0077b6] text-white text-[10px] font-bold">
                        Active Field Duty
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Equipped with certified communications telemetry, emergency whistle units, baton/firearm loadouts, and digital gate check logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail Matrix: Responsibilities, Ideal Environments, Verification Standards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0077b6] flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-base font-bold text-slate-900">
                    Core Responsibilities
                  </h4>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs text-slate-600 leading-relaxed">
                  {currentCategory.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0077b6] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-base font-bold text-slate-900">
                    Ideal Environments
                  </h4>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs text-slate-600 leading-relaxed">
                  {currentCategory.idealEnvironments.map((env, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#0077b6] mt-0.5 shrink-0" />
                      <span>{env}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0077b6] flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-base font-bold text-slate-900">
                    Verification Standards
                  </h4>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs text-slate-600 leading-relaxed">
                  {currentCategory.verificationStandards.map((std, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-[#0077b6] mt-0.5 shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs if present */}
            {currentCategory.faqs && (
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
                <h4 className="font-headline text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#0077b6]" />
                  <span>Deployment FAQs: {currentCategory.name}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCategory.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col gap-1.5 shadow-sm">
                      <span className="text-xs font-bold text-slate-900">
                        {faq.question}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Verification & Deployment Protocol Workflow (Screening Standard) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#0077b6] uppercase tracking-widest">
              {t.screening.badge}
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.screening.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
              {t.screening.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.screening.step1}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.screening.step1Desc}
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.screening.step2}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.screening.step2Desc}
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.screening.step3}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.screening.step3Desc}
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h4 className="font-headline text-base font-bold text-slate-900">
                {t.screening.step4}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.screening.step4Desc}
              </p>
            </div>
          </div>
        </section>

        {/* Turnkey Regional Callout Banner */}
        <section className="bg-[#0b132b] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700 shadow-xl">
          <div className="max-w-2xl flex flex-col gap-3 z-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#00b4d8]">
              Turnkey Industrial Staffing Agreements
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white">
              Need Bulk Manpower for an Industrial Plant or Corporate Tower?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Speak with our Faisalabad Operations Command for custom shift scheduling, EOBI/SESSI compliance coverage, and immediate mobilization contracts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <a
              href="tel:03299200111"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#006399] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0329-9200111</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('hire-staff')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#cde5ff] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>Hire Workforce Now</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
