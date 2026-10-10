import React, { useState } from 'react';
import { PageRoute, Language, RequisitionFormData } from '../types';
import { WORKFORCE_CATEGORIES } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';
import { 
  Building2, 
  UserCheck, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Send, 
  Phone, 
  MessageSquare, 
  Shield, 
  AlertCircle,
  Loader2,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Truck
} from 'lucide-react';
import { isValidPakistaniPhone, isValidEmail } from '../utils/validation';

interface HireStaffPageProps {
  onNavigate: (route: PageRoute, categoryId?: string) => void;
  language: Language;
}

export const HireStaffPage: React.FC<HireStaffPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];

  // Form State
  const [formData, setFormData] = useState<RequisitionFormData>({
    companyName: '',
    ntnNumber: '',
    industrySector: '',
    contactName: '',
    officialDesignation: '',
    contactPhone: '',
    officialEmail: '',
    categories: ['Security Guards'],
    workerCount: 5,
    deploymentLocation: 'M-3 Industrial City, Sahianwala Faisalabad',
    shiftSchedule: 'Day Shift (12 hrs)',
    experienceLevel: 'Semi-Skilled / Experienced',
    operationalNotes: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const toggleCategory = (catName: string) => {
    setFormData(prev => {
      const exists = prev.categories.includes(catName);
      if (exists) {
        // Keep at least one if possible
        const next = prev.categories.filter(c => c !== catName);
        return { ...prev, categories: next.length > 0 ? next : [catName] };
      } else {
        return { ...prev, categories: [...prev.categories, catName] };
      }
    });
  };

  const selectSecurityRolesOnly = () => {
    setFormData(prev => ({
      ...prev,
      categories: ['Security Guards']
    }));
  };

  const adjustHeadcount = (delta: number) => {
    setFormData(prev => ({
      ...prev,
      workerCount: Math.max(1, Math.min(500, prev.workerCount + delta))
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.companyName.trim()) {
      setError('Please provide your registered Company or Organization Name.');
      return;
    }

    if (!formData.industrySector) {
      setError('Please select an Industry Sector.');
      return;
    }

    if (!formData.contactName.trim() || !formData.officialDesignation.trim()) {
      setError('Please provide the authorized contact representative and designation.');
      return;
    }

    if (!isValidPakistaniPhone(formData.contactPhone)) {
      setError('Please enter a valid Pakistani contact phone (e.g., 0300-1234567 or 03299200111).');
      return;
    }

    if (!isValidEmail(formData.officialEmail)) {
      setError('Please enter a valid official business email address.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const ticketId = `MSS-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(ticketId);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 700);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Decorative ambient background glows */}
      <div className="relative w-full overflow-hidden pb-16">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-[480px] -right-40 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {/* Breadcrumb Bar */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-semibold">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-[#0077b6] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#0077b6] font-bold">Hire Staff (Employer Portal)</span>
            <span className="ml-auto hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse"></span>
              <span>Verified Deployments Active: Faisalabad & Regional Corridors</span>
            </span>
          </nav>

          {/* Tactical Hero Requisition Banner */}
          <section className="relative rounded-3xl bg-[#0b132b] text-white p-6 sm:p-10 overflow-hidden shadow-2xl mb-12 border border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b] via-[#0b132b]/95 to-[#0077b6]/30 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077b6]/30 text-[#cde5ff] text-xs font-bold uppercase tracking-wider w-fit border border-[#0077b6]/40">
                  <Shield className="w-4 h-4 text-[#00b4d8]" />
                  <span>Corporate & Industrial Staff Requisition Portal</span>
                </div>

                <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Find the Right People for Your Business
                </h1>

                <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Request verified security personnel, skilled labor, and corporate staff in Faisalabad and across Pakistan with SLA-backed replacement guarantees and continuous supervisor oversight.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10">
                    <UserCheck className="w-4 h-4 text-[#00b4d8]" />
                    <span className="font-bold text-white">NADRA & Police Verified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10">
                    <Clock className="w-4 h-4 text-[#00b4d8]" />
                    <span className="font-bold text-white">Formal SLA Quote in 4 Hours</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10">
                    <Shield className="w-4 h-4 text-[#00b4d8]" />
                    <span className="font-bold text-white">Immediate Standby Replacements</span>
                  </div>
                </div>
              </div>

              {/* Quick Metrics & Tactical Readout */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 flex flex-col gap-3 shadow-lg">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#cde5ff]">
                    Deployment Readiness
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> LIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-[#0b132b]/60 p-3 rounded-xl border border-white/10">
                    <div className="font-headline text-2xl font-extrabold text-white">2,400+</div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider">Cleared Roster Pool</div>
                  </div>
                  <div className="bg-[#0b132b]/60 p-3 rounded-xl border border-white/10">
                    <div className="font-headline text-2xl font-extrabold text-white">100%</div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider">Biometric Audited</div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed pt-1">
                  Zero upfront deposit required. Our deployment desk contacts your procurement team directly upon submission.
                </p>
              </div>
            </div>
          </section>

          {/* Main Requisition Layout: Form with Sidebar Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Form Column */}
            <main className="lg:col-span-8 flex flex-col gap-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-200">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-700 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {submittedTicket && (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-slate-900 flex flex-col gap-2 shadow-sm animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span>Requisition Ticket Generated #{submittedTicket}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900 text-xs font-bold">
                        Logged in Operations Desk
                      </span>
                    </div>
                    <p className="text-xs text-slate-700">
                      Our Faisalabad Command Operations desk has received your request. An account manager is reviewing roster availability and will contact {formData.contactName} at {formData.contactPhone} within 4 hours.
                    </p>
                  </div>
                )}

                {/* Section 1: Enterprise Information */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-[#0077b6] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h2 className="font-headline text-lg font-bold text-slate-900">
                        Company & Enterprise Details
                      </h2>
                      <p className="text-xs text-slate-500">
                        Provide your registered enterprise credentials to structure customized service terms.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Crescent Textile Mills, Chenab Logistics"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        NTN / Registration Number <span className="text-slate-400 font-normal lowercase">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 1234567-8"
                        value={formData.ntnNumber}
                        onChange={(e) => setFormData({ ...formData, ntnNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-2">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Industry Sector *
                      </label>
                      <select
                        required
                        value={formData.industrySector}
                        onChange={(e) => setFormData({ ...formData, industrySector: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all cursor-pointer"
                      >
                        <option value="">Select Your Industry Type</option>
                        <option value="Textile & Apparel">Textile & Apparel (Spinning, Weaving, Garments)</option>
                        <option value="Industrial Manufacturing">Industrial Manufacturing & Engineering</option>
                        <option value="Healthcare & Hospitals">Healthcare, Clinics & Pharmaceuticals</option>
                        <option value="Corporate Offices & Banks">Corporate Headquarters & Financial Institutions</option>
                        <option value="Retail & Shopping Malls">Retail Outlets & Commercial Plazas</option>
                        <option value="Warehousing & Logistics">Warehousing, Cold Storage & Dry Ports</option>
                        <option value="Educational Institutions">Colleges, Universities & Schools</option>
                        <option value="Residential Estates">Residential Gated Communities & Villas</option>
                        <option value="Other">Other Specialized Sector</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Contact Authorized Personnel */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-[#0077b6] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h2 className="font-headline text-lg font-bold text-slate-900">
                        Authorized Point of Contact
                      </h2>
                      <p className="text-xs text-slate-500">
                        Designated decision-maker for deployment schedule and verification sign-off.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Representative Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Tariq Mehmood"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Official Designation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Head of Administration / HR Director"
                        value={formData.officialDesignation}
                        onChange={(e) => setFormData({ ...formData, officialDesignation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Official Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="03XX-XXXXXXX"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                      />
                      <span className="text-[11px] text-slate-500">Include active WhatsApp number for instant updates</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Official Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="admin@company.com"
                        value={formData.officialEmail}
                        onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Required Workforce Categories */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#0077b6] text-white font-bold text-xs flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <h2 className="font-headline text-lg font-bold text-slate-900">
                          Required Workforce Categories
                        </h2>
                        <p className="text-xs text-slate-500">
                          Tap one or multiple categories required for your facility.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={selectSecurityRolesOnly}
                      className="text-xs text-[#0077b6] hover:underline cursor-pointer font-bold"
                    >
                      Select Security Only
                    </button>
                  </div>

                  {/* 12 Selectable Category Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {WORKFORCE_CATEGORIES.map((cat) => {
                      const isSelected = formData.categories.includes(cat.name);
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleCategory(cat.name)}
                          className={`relative flex flex-col items-center justify-center text-center p-4 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50 border-[#0077b6] shadow-sm'
                              : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                            isSelected ? 'bg-[#0077b6] text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            <Shield className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold text-slate-900 leading-tight">
                            {cat.name}
                          </span>
                          <span className="text-[10px] text-slate-500 mt-1">
                            {cat.badge}
                          </span>

                          {isSelected && (
                            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#0077b6] text-white flex items-center justify-center text-[10px]">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 4: Operational Parameters & Scheduling */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-[#0077b6] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h2 className="font-headline text-lg font-bold text-slate-900">
                        Operational Parameters & Scheduling
                      </h2>
                      <p className="text-xs text-slate-500">
                        Calibrate headcount, site zone, shift cadence, and experience standards.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Headcount Counter */}
                    <div className="flex flex-col gap-1.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Total Personnel Needed *
                        </label>
                        <span className="text-[10px] font-bold text-[#0077b6] bg-blue-100 px-2 py-0.5 rounded">
                          Scaleable Units
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => adjustHeadcount(-1)}
                          className="w-12 h-12 rounded-xl bg-white text-slate-800 hover:bg-[#0077b6] hover:text-white flex items-center justify-center border border-slate-200 font-bold text-xl cursor-pointer transition-colors"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          max="500"
                          value={formData.workerCount}
                          onChange={(e) => setFormData({ ...formData, workerCount: parseInt(e.target.value) || 1 })}
                          className="w-full text-center py-2.5 rounded-xl bg-white font-headline text-2xl text-slate-900 font-extrabold border border-slate-200 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => adjustHeadcount(1)}
                          className="w-12 h-12 rounded-xl bg-white text-slate-800 hover:bg-[#0077b6] hover:text-white flex items-center justify-center border border-slate-200 font-bold text-xl cursor-pointer transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1">
                        For requirements exceeding 50 personnel, dedicated on-site supervisor is included.
                      </span>
                    </div>

                    {/* Deployment Location */}
                    <div className="flex flex-col gap-1.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Deployment Location / Industrial Area *
                      </label>
                      <select
                        value={formData.deploymentLocation}
                        onChange={(e) => setFormData({ ...formData, deploymentLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs border border-slate-200 focus:outline-none cursor-pointer mt-1"
                      >
                        <option value="Value Addition City (VAC) Faisalabad">Value Addition City (VAC) Faisalabad</option>
                        <option value="M-3 Industrial City, Sahianwala Faisalabad">M-3 Industrial City, Sahianwala</option>
                        <option value="Faisalabad Small Industrial Estate">Faisalabad Small Industrial Estate</option>
                        <option value="D-Ground / Peoples Colony Commercial Zone">D-Ground / Peoples Colony Commercial</option>
                        <option value="Canal Road / West Canal Commercial Zone">Canal Road Corridor, Faisalabad</option>
                        <option value="Sargodha Road Industrial Belt">Sargodha Road Industrial Belt</option>
                        <option value="Jhang Road / Millat Industrial Area">Jhang Road / Millat Industrial Area</option>
                        <option value="Regional Deployment (Lahore / Sheikhupura / Multan)">Regional (Lahore / Sheikhupura / Multan)</option>
                        <option value="Other Regional Location">Other City / Customized Site</option>
                      </select>
                      <span className="text-[11px] text-slate-500 mt-1">
                        Rapid dispatch units stationed across major Faisalabad industrial zones.
                      </span>
                    </div>

                    {/* Shift & Schedule Radios */}
                    <div className="flex flex-col gap-1 md:col-span-2">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                        Shift & Duty Schedule *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {[
                          { label: 'Day Shift', desc: '12-Hour Continuous', val: 'Day Shift (12 hrs)' },
                          { label: 'Night Shift', desc: '12-Hour High Vigilance', val: 'Night Shift (12 hrs)' },
                          { label: 'Standard Office', desc: '8-Hour Daytime', val: 'Standard Office (8 hrs)' },
                          { label: 'Rotational 24/7', desc: 'Continuous Round-Clock', val: 'Rotational 24/7 (2x12 or 3x8)' }
                        ].map((s) => (
                          <label
                            key={s.val}
                            className={`cursor-pointer flex items-center gap-2.5 p-3 rounded-xl border transition-colors ${
                              formData.shiftSchedule === s.val
                                ? 'bg-blue-50 border-[#0077b6]'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              name="shiftSchedule"
                              value={s.val}
                              checked={formData.shiftSchedule === s.val}
                              onChange={(e) => setFormData({ ...formData, shiftSchedule: e.target.value })}
                              className="accent-[#0077b6] w-4 h-4"
                            />
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-900">{s.label}</span>
                              <span className="text-[10px] text-slate-500">{s.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Experience Standard */}
                    <div className="flex flex-col gap-1 md:col-span-2">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                        Experience & Qualification Standard *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {[
                          { label: 'Entry / General', desc: 'Basic verified helpers', val: 'Unskilled / General Entry' },
                          { label: 'Semi-Skilled', desc: '2-4 Years Verified Work', val: 'Semi-Skilled / Experienced' },
                          { label: 'Ex-Military / Armed', desc: 'Weapon clearance & drills', val: 'Certified / Ex-Military (Armed)' },
                          { label: 'Senior / Supervisor', desc: 'Site lead & shift roster', val: 'Senior / Supervisory' }
                        ].map((exp) => (
                          <label
                            key={exp.val}
                            className={`cursor-pointer flex items-center gap-2.5 p-3 rounded-xl border transition-colors ${
                              formData.experienceLevel === exp.val
                                ? 'bg-blue-50 border-[#0077b6]'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              name="experienceLevel"
                              value={exp.val}
                              checked={formData.experienceLevel === exp.val}
                              onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                              className="accent-[#0077b6] w-4 h-4"
                            />
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-900">{exp.label}</span>
                              <span className="text-[10px] text-slate-500">{exp.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Operational Directives */}
                    <div className="flex flex-col gap-1 md:col-span-2">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Operational Directives & Uniform / Equipment Instructions
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Specify uniform preferences (Tactical Black / Navy Blue / High-Vis), metal detector needs, biometric punch clock protocols, bilingual communication requirements, or specialized tool requirements..."
                        value={formData.operationalNotes}
                        onChange={(e) => setFormData({ ...formData, operationalNotes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Action & SLA Disclaimers */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-start gap-2 max-w-md">
                    <Shield className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900">No Payment Required at Requisition:</strong> Submissions generate a formal, fully vetted service quote within <span className="font-bold text-[#0077b6]">4 business hours</span>. All placements comply with regional labor guidelines.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006399] transition-all shadow-lg shrink-0 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing Order...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Staff Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </main>

            {/* Sidebar Column: Real-time Requisition Summary & Trust Seals */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Dynamic Live Requisition Summary Card */}
              <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200 flex flex-col gap-4 sticky top-28">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="font-headline text-lg font-bold text-slate-900">
                    Requisition Summary
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0077b6] text-[10px] font-bold uppercase">
                    Live Draft
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Selected Personnel:</span>
                    <span className="font-extrabold text-slate-900">{formData.workerCount} Personnel</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Category Focus:</span>
                    <span className="font-bold text-[#0077b6] text-right truncate max-w-[180px]">
                      {formData.categories.join(', ')}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Deployment Territory:</span>
                    <span className="font-bold text-slate-900 text-right truncate max-w-[180px]">
                      {formData.deploymentLocation.split(',')[0]}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Shift Structure:</span>
                    <span className="font-bold text-slate-900">{formData.shiftSchedule}</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-500">Replacement Guarantee:</span>
                    <span className="font-bold text-[#0077b6] flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0077b6]" /> 24h SLA Active
                    </span>
                  </div>
                </div>

                {/* Visual Security Seal Box */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center gap-3">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZSvSmchMB7hL23pliHGXaEDjXN22jioBRa1EJ7RdzVmNahLG7kbv8IAjXwz9LtKm6u-7_sxbBeVvXWnFOTq262vQBVrCR5Ps8yQRklWGaBjb8oDjzvw3OJkKEa_tA11IeaMjuw_jTLhgyI6CpyDpQSeXHvvfVCkQ1uxPqeUIk1AbqsHsIkA-928u3akFbGH9DwEqQG_5Izgl1dmV4dhcXby6Q0SvKOZK7EJNfC2PWN-woTl6qj9jAoA"
                    alt="Official Metallic Security Badge"
                    className="w-12 h-12 rounded-lg object-cover shadow-sm shrink-0 border border-slate-200"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">100% Vetted Guarantee</span>
                    <span className="text-[11px] text-slate-500 leading-tight">
                      All personnel pass biometric NADRA checks & police station verification before site dispatch.
                    </span>
                  </div>
                </div>

                {/* Operational Readiness Indicator */}
                <div className="p-4 bg-[#0b132b] text-white rounded-2xl flex flex-col gap-2 shadow-sm border border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase text-[#00b4d8]">
                      Squad Readiness Index
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      98.4% Optimal
                    </span>
                  </div>

                  {/* Progress Sparkline */}
                  <div className="w-full h-7 flex items-end gap-1.5 pt-1">
                    <div className="h-4 w-full bg-[#00b4d8]/60 rounded-t"></div>
                    <div className="h-5 w-full bg-[#00b4d8]/70 rounded-t"></div>
                    <div className="h-6 w-full bg-[#0077b6] rounded-t"></div>
                    <div className="h-5 w-full bg-[#00b4d8]/60 rounded-t"></div>
                    <div className="h-7 w-full bg-emerald-400 rounded-t"></div>
                    <div className="h-6 w-full bg-[#0077b6] rounded-t"></div>
                    <div className="h-7 w-full bg-[#00b4d8] rounded-t"></div>
                  </div>
                  <span className="text-[10px] text-slate-300">
                    Instant surge capacity available for factories and distribution hubs.
                  </span>
                </div>
              </div>

              {/* Rapid Dispatch Helpdesk */}
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200 flex flex-col gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0077b6]">
                  Immediate Deployment Helpdesk
                </span>
                <h4 className="font-headline text-lg font-bold text-slate-900">
                  Need 50+ Guards by Tomorrow?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our rapid crisis and industrial deployment unit handles expedited industrial handovers round-the-clock.
                </p>
                <a
                  href="tel:03000266204"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#0077b6] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#006399] transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Direct Dispatch: 0300-0266204</span>
                </a>
              </div>
            </aside>
          </div>

          {/* 4-Step Deployment Protocol */}
          <section className="mt-16 pt-12 pb-8 border-t border-slate-200">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6] px-3 py-1 rounded-full bg-blue-100 mb-2">
                Seamless Onboarding Pipeline
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Happens Next: 4-Step Deployment Protocol
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                From the moment your staff requisition is logged, our tactical operational chain executes structured verification and client handover protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="font-headline text-2xl font-bold text-slate-300">01</span>
                </div>
                <h3 className="font-headline text-base font-bold text-slate-900 pt-1">
                  Requirement Assessment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Within 4 business hours, our industrial staffing desk analyzes site perimeter risks, shift requirements, and operational rosters to formulate tailored SLAs.
                </p>
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0077b6]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>4-Hour SLA Delivery</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="font-headline text-2xl font-bold text-slate-300">02</span>
                </div>
                <h3 className="font-headline text-base font-bold text-slate-900 pt-1">
                  NADRA & Police Screening
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every guard and technician completes strict biometric verification, criminal background vetting, medical fitness checks, and certified weapon clearance tests.
                </p>
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0077b6]">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Zero-Tolerance Vetting</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-headline text-2xl font-bold text-slate-300">03</span>
                </div>
                <h3 className="font-headline text-base font-bold text-slate-900 pt-1">
                  Supervisor On-Site Handover
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  MSS field supervisors personally accompany deployed personnel to your facility for post assignment, perimeter orientation, and duty roster briefing.
                </p>
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0077b6]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Physical Briefing Included</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#cde5ff] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-headline text-2xl font-bold text-slate-300">04</span>
                </div>
                <h3 className="font-headline text-base font-bold text-slate-900 pt-1">
                  Account Care & Standby SLA
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Benefit from dedicated corporate relationship managers, unannounced night surprise inspections, and guaranteed replacement within 24 hours if unsatisfied.
                </p>
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0077b6]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Guaranteed Continuous Cover</span>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Footprint & Context Gallery */}
          <section className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6]">
                  Regional Footprint
                </span>
                <h3 className="font-headline text-2xl font-extrabold text-slate-900">
                  Active Deployments in Premier Industrial Clusters
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mountain Security Services safeguards over 180 corporate plants, textile mills, and logistic hubs in Punjab. Our command office in Arshad Center, near the General Bus Stand Faisalabad, provides instantaneous tactical coordination.
                </p>

                <div className="flex flex-col gap-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0077b6]" />
                    <span>Faisalabad Industrial Estates & SEZs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#0077b6]" />
                    <span>Dry Ports & Warehousing Hubs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#0077b6]" />
                    <span>Corporate & Executive Security Patrols</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-slate-200 flex flex-col">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY1qG-kAOlSi-dtQ1aMteQs4a0D26dJjfltX003OojDeiUsq1Iv98h-RPBVyk4J0xqLkQ6RjeCw4-M3UG5AV6GtCMzSy2kMzxJkeT0jIHD6Hq-kB6ZLbhBhsJsst7fXUIYpBsrAzvm14OSm50btx646At6LEZdHXBW0ZzdwN-wzo4R3bcll7gKttBwaJ8wcF6bwAl_DNhYRTi0y-P-NRbjptXj9aBp__Mcz0VzC_od3P-jYrEcAwWMBA"
                    alt="Industrial Guard Squads at gate"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3.5">
                    <span className="text-xs font-bold text-slate-900 block">Industrial Guard Squads</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">Perimeter defense and access management for manufacturing facilities.</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-slate-200 flex flex-col">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPX3vJwzqjpMa_WETuFal_7E_AuqqdLR0XWm7D1cOHH98FcLsQGg1VZ2p6_95CXmUgQy8Olg71s-pQf_rhvuLwf4bQ546gMoWPmWDSYDLuBbIwB3UMj0gP6R3mc8f0JwUyDGaXNS3KfMgi-w9iWAyyjaDaoaU2JVqWDWuBeWDVhhrKEtv23I0AIU5xXOaK-jZWvrah3BcqimCgzc-2rjuoaLZO6GU_f160fBP9ufoVtMRj4ZJ0uQQEDg"
                    alt="Skilled Technical Crews"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3.5">
                    <span className="text-xs font-bold text-slate-900 block">Skilled Technical Crews</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">Electricians, facility cleaners, and office logistics personnel.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Direct Corporate Hotline Banner */}
          <section className="mt-12 bg-gradient-to-r from-[#0b132b] via-[#0b132b] to-[#0077b6] p-8 rounded-3xl text-white shadow-xl mb-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/40 text-red-200 text-xs font-bold uppercase tracking-wider w-fit border border-red-500/40">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Need Immediate Workforce Deployment?</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">
                  Call Our Faisalabad Operations Desk Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Immediate dispatch consultation available 24 hours a day, 7 days a week. Headquarters stationed at{' '}
                  <a
                    href="https://maps.app.goo.gl/dYzoczkhh3AJ6em18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00b4d8] hover:text-white underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
                    title="View headquarters on Google Maps (opens in new tab)"
                  >
                    <span>2nd Floor, Arshad Center, Near General Bus Stand, Faisalabad</span>
                  </a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <div className="flex flex-col gap-1.5 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                  <div className="flex items-center gap-2 text-[#cde5ff]">
                    <Phone className="w-4 h-4" />
                    <span className="text-[11px] uppercase font-bold">24/7 Corporate Hotlines</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 font-bold text-sm sm:text-base text-white">
                    <a href="tel:03299200111" className="hover:text-[#00b4d8] transition-colors">0329-9200111</a>
                    <span className="text-slate-400">|</span>
                    <a href="tel:03297200222" className="hover:text-[#00b4d8] transition-colors">0329-7200222</a>
                    <span className="text-slate-400">|</span>
                    <a href="tel:03000266204" className="hover:text-[#00b4d8] transition-colors">0300-0266204</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
