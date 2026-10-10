import React from 'react';
import { PageRoute, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Shield, Lock, FileText, CheckCircle, Phone, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate, language }) => {
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
              className="hover:text-[#cde5ff] transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-[#00b4d8]">Privacy Policy & Terms of Service</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077b6]/30 text-[#cde5ff] text-xs font-bold uppercase tracking-widest w-fit border border-[#0077b6]/40">
              <Lock className="w-4 h-4 text-[#00b4d8]" />
              Regulatory Compliance & Data Protection
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Privacy Policy & Terms of Service
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mountain Security Services (Pvt) Ltd is committed to transparent governance, strict candidate privacy, and client confidentiality across all security guarding and workforce operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-12 text-slate-800 text-sm leading-relaxed">
        {/* Section 1: Overview */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <Shield className="w-6 h-6 text-[#0077b6]" />
            <h2 className="font-headline text-xl font-bold text-slate-900">
              1. Institutional Overview & Regulatory Status
            </h2>
          </div>
          <p>
            Mountain Security Services (Pvt) Ltd (referred to herein as &ldquo;MSS&rdquo;, &ldquo;we&rdquo;, or &ldquo;the Company&rdquo;) operates as a privately incorporated corporate security guarding and workforce provision agency under Pakistani corporate regulations, licensed to operate under the Punjab Home Department regulatory framework for private security agencies.
          </p>
          <p>
            Our registered command headquarters is located at:
            <br />
            <strong>Second Floor, Arshad Center, near General Bus Stand, Faisalabad, Pakistan.</strong>
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700">
            <strong>Legal Notice:</strong> Mountain Security Services (Pvt) Ltd is a private contractor and is not an agency of the federal government or municipal police. We collaborate with law enforcement through formal clearance channels as mandated by private security regulations.
          </div>
        </div>

        {/* Section 2: Privacy Policy */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <Lock className="w-6 h-6 text-[#0077b6]" />
            <h2 className="font-headline text-xl font-bold text-slate-900">
              2. Privacy Policy & Information Collection
            </h2>
          </div>

          <h3 className="font-headline text-base font-bold text-slate-900 mt-2">
            A. Corporate Employer Requisition Data
          </h3>
          <p>
            When employers submit a staff requisition, we collect organizational details (Company Name, NTN, industrial facility location, designated point of contact, official phone number, and email). This information is utilized exclusively to structure legal service level agreements (SLAs), post risk assessments, and schedule deployments.
          </p>

          <h3 className="font-headline text-base font-bold text-slate-900 mt-2">
            B. Job Applicant & Candidate Data
          </h3>
          <p>
            When prospective security personnel or skilled tradesmen register through our portal, we collect legal names, 13-digit Pakistani CNIC numbers, residential addresses, contact phones, previous service history, and health declarations.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 pl-4 list-disc">
            <li>CNIC data is transmitted solely for identity authentication through authorized NADRA verification procedures.</li>
            <li>Police character certificates and background checks are submitted exclusively to local police registries (SSP Office/Special Branch) for official character clearance.</li>
            <li>We do not sell, rent, or monetize candidate or employer data to third-party marketing companies.</li>
          </ul>
        </div>

        {/* Section 3: Worker Protection & Anti-Exploitation Policy */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
            <h2 className="font-headline text-xl font-bold text-slate-900">
              3. Worker Welfare & Ethical Recruitment Terms
            </h2>
          </div>
          <p>
            Mountain Security Services enforces strict anti-exploitation recruitment policies across all divisions:
          </p>
          <ul className="space-y-2 text-xs text-slate-700 pl-4 list-disc">
            <li><strong>Zero Registration Fee:</strong> Candidate registration is 100% free of charge. No agents, job brokers, or recruiters are authorized to solicit fees from job applicants on our behalf.</li>
            <li><strong>Punctual Wage Disbursement:</strong> Deployed personnel are compensated on predetermined monthly cycles in accordance with Punjab provincial labor standards and wage statutes.</li>
            <li><strong>Safety & Uniforms:</strong> Approved uniform sets, tactical accoutrements, and security badges are issued to qualified personnel without exploitative payroll deductions.</li>
          </ul>
        </div>

        {/* Section 4: Terms of Engagement */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <FileText className="w-6 h-6 text-[#0077b6]" />
            <h2 className="font-headline text-xl font-bold text-slate-900">
              4. Terms of Commercial Staffing Engagement
            </h2>
          </div>
          <p>
            All staffing and guarding contracts executed between Mountain Security Services and corporate clients are governed by explicit Service Level Agreements (SLAs).
          </p>
          <ul className="space-y-2 text-xs text-slate-700 pl-4 list-disc">
            <li><strong>Pre-Deployment Vetting:</strong> Deployment occurs only after verified biometric identity checks, medical clearance, and site assignment orientation.</li>
            <li><strong>Replacement SLA:</strong> In case of absenteeism, illness, or client dissatisfaction with a placed guard or technician, MSS operations command provides an audited substitute within agreed SLA timeframes (typically within 24 to 48 hours for general cadres, and within 60 minutes for standby emergency posts in urban Faisalabad).</li>
            <li><strong>Arms Licensing Compliance:</strong> All armed guard allocations comply strictly with Punjab Home Department and federal weapons permits. Unauthorized or unregistered arms are strictly prohibited.</li>
          </ul>
        </div>

        {/* Section 5: Inquiries & Contact */}
        <div className="p-8 rounded-3xl bg-[#0b132b] text-white flex flex-col gap-4">
          <h2 className="font-headline text-xl font-bold text-white">
            5. Inquiries Regarding Compliance & Privacy
          </h2>
          <p className="text-xs text-slate-300">
            For questions concerning candidate records, enterprise SLAs, or regulatory vetting disclosures, please contact our administrative desk:
          </p>
          <div className="text-xs text-[#cde5ff] space-y-1 bg-white/10 p-4 rounded-2xl border border-white/10">
            <div><strong>Operations Command & Compliance Desk:</strong> Mountain Security Services (Pvt) Ltd</div>
            <div><strong>Address:</strong> 2nd Floor, Arshad Center, near General Bus Stand, Faisalabad, Pakistan</div>
            <div><strong>Hotlines:</strong> 0329-9200111 | 0329-7200222 | 0300-0266204</div>
            <div><strong>Email:</strong> mountainsecurityserivces@gmail.com</div>
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-xl bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006399] transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Contact Compliance Officer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
