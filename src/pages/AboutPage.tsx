import React from 'react';
import { PageRoute, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MSS_LOGO } from '../data/categories';
import { 
  Shield, 
  MapPin, 
  CheckCircle, 
  Award, 
  Clock, 
  Phone, 
  Users, 
  FileCheck, 
  Eye, 
  ArrowRight 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];

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
            <span className="text-[#00b4d8]">About Us & Verification Protocol</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077b6]/30 text-[#cde5ff] text-xs font-bold uppercase tracking-widest w-fit border border-[#0077b6]/40">
              <Shield className="w-4 h-4 text-[#00b4d8]" />
              Government Permitted Private Security Agency
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Security You Can Trust
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mountain Security Services (Pvt) Ltd is a premier licensed corporate security guarding and verified workforce placement enterprise headquartered in Faisalabad, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">
        {/* Core Credentials & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src={MSS_LOGO} alt="Emblem" className="h-10 w-auto" />
              <div>
                <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Disciplined Protection, Proven Integrity
                </h2>
                <span className="text-xs font-semibold text-[#0077b6] uppercase tracking-wider">
                  Operational Across Punjab Industrial Corridors
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Founded to eliminate the hazards of unverified informal labor pools and undisciplined security deployments, Mountain Security Services has established a benchmark of institutional trust across textile manufacturing hubs, corporate offices, banks, and private estates.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Operating strictly under the regulatory parameters of the Punjab Home Department and federal arms licensing authorities, we maintain full chain-of-custody documentation for every guard and skilled worker deployed to client premises.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-headline text-2xl font-extrabold text-[#0077b6]">24/7</span>
                <div className="text-xs font-bold text-slate-900 mt-1">Supervisory Command</div>
                <div className="text-[11px] text-slate-500">Unannounced night spot checks</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-headline text-2xl font-extrabold text-[#0077b6]">100%</span>
                <div className="text-xs font-bold text-slate-900 mt-1">Biometric Scrutiny</div>
                <div className="text-[11px] text-slate-500">NADRA verified before badge issuance</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVYEB9ui7lO7cCrUZf4DONu03h4kOWlhTv5oRwhfETOHAUK0FS1I5zio6BsGXk3jx14jwF9yeR3uJkaNC6ooFOXYMiJQEY_927oVSXNQMr_fPWTYzWdGNd8evUGuu_I71F-EKhC7VgYlUuD4s8dp1HDOLy44O1EnCzphW2SM-xjAK3aKInaQcCxAt5MX5OIevKNzD9t4y9VmpZ3ygFIIUc8fiItw6y5alwd1r-ZRjK2Tx50zcNM6yqPA"
                alt="Security Officer on Duty"
                className="w-full h-96 object-cover object-top"
              />
              <div className="p-5 bg-[#0b132b] text-white flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b4d8]">
                  Headquarters Command
                </span>
                <p className="text-xs text-slate-300">
                  2nd Floor, Arshad Center, near General Bus Stand, Faisalabad, Punjab, Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The 4-Layer Verification Protocol */}
        <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#0077b6] uppercase tracking-wider">
              Verification Standards
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900">
              The 4-Layer Security Protocol
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              How we protect client assets against absenteeism, negligence, and security breaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <FileCheck className="w-8 h-8 text-[#0077b6]" />
              <h4 className="font-headline text-base font-bold text-slate-900">1. NADRA Biometrics</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct biometric verification of national identity card records and family union council residential history.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <Shield className="w-8 h-8 text-[#0077b6]" />
              <h4 className="font-headline text-base font-bold text-slate-900">2. Police Clearance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local police station character certificates and Special Branch records cross-checking to confirm zero prior convictions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <Eye className="w-8 h-8 text-[#0077b6]" />
              <h4 className="font-headline text-base font-bold text-slate-900">3. Medical Fitness</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified screening for hepatitis, vision, toxicology drug panels, and cardiopulmonary stamina testing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <Award className="w-8 h-8 text-[#0077b6]" />
              <h4 className="font-headline text-base font-bold text-slate-900">4. Tactical Briefing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Refresher drill on threat de-escalation, firearms safety protocols, and perimeter gate control procedures.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#0b132b] text-white border border-slate-700 shadow-xl">
          <div>
            <h3 className="font-headline text-xl sm:text-2xl font-bold">
              Require an On-Site Security Assessment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our operations directors conduct confidential risk analyses for industrial and corporate premises.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('hire-staff')}
              className="px-6 py-3 rounded-xl bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006399] transition-all cursor-pointer shadow-md"
            >
              Hire Staff Portal
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#cde5ff] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/20"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
