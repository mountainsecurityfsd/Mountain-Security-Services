import React, { useState } from 'react';
import { PageRoute, Language, WorkerRegistrationFormData } from '../types';
import { WORKFORCE_CATEGORIES } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';
import { 
  BadgeCheck, 
  UserCheck, 
  Phone, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Shield, 
  Briefcase,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { isValidPakistaniPhone, isValidPakistaniCNIC, formatCNIC } from '../utils/validation';
import { submitCandidateRegistration, CandidateSubmissionResult } from '../services/candidateService';

interface WorkerCareersPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const WorkerCareersPage: React.FC<WorkerCareersPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<WorkerRegistrationFormData>({
    fullName: '',
    cnicNumber: '',
    phone: '',
    whatsappPhone: '',
    category: 'Security Guards',
    experienceYears: '1-3 years',
    cityDistrict: 'Faisalabad',
    hasPoliceClearance: true,
    hasWeaponLicense: false,
    medicalFitnessConfirmed: true,
    additionalSkills: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registrationSlip, setRegistrationSlip] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<CandidateSubmissionResult | null>(null);

  const handleCnicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNIC(e.target.value);
    setFormData({ ...formData, cnicNumber: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      setError('Please provide your full legal name as printed on your CNIC.');
      return;
    }

    if (!isValidPakistaniCNIC(formData.cnicNumber)) {
      setError('Please enter a valid 13-digit Pakistani CNIC number (e.g. 33100-1234567-1).');
      return;
    }

    if (!isValidPakistaniPhone(formData.phone)) {
      setError('Please enter a valid Pakistani contact number (e.g. 0300-1234567).');
      return;
    }

    if (!formData.medicalFitnessConfirmed) {
      setError('You must confirm that you are medically fit for daily deployment duty.');
      return;
    }

    setLoading(true);

    try {
      const result = await submitCandidateRegistration(formData);
      setLoading(false);

      if (!result.success && result.error) {
        setError(result.error);
        return;
      }

      setSubmissionResult(result);
      setRegistrationSlip(result.ticketId);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    } catch (submitErr) {
      setLoading(false);
      setError('Registration submission encountered an unexpected issue. Please verify your information and retry.');
    }
  };

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
            <span className="text-[#00b4d8]">Worker Registration Hub [Careers]</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077b6]/30 text-[#cde5ff] text-xs font-bold uppercase tracking-widest w-fit border border-[#0077b6]/40">
              <BadgeCheck className="w-4 h-4 text-[#00b4d8]" />
              Respectful Corporate Employment & Guaranteed Pay
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Looking for Respectful Employment?
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Register your profile with Mountain Security Services. Free registration, guaranteed on-time monthly salary, official uniforms, and professional career development across Faisalabad and Punjab industrial corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Registration Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form Column */}
          <main className="lg:col-span-8 flex flex-col gap-6">
            {registrationSlip ? (
              <div className="bg-white p-8 rounded-3xl shadow-md border border-emerald-200 flex flex-col gap-5 items-center text-center animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Application Logged Successfully
                  </span>
                  <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    Registration Ticket #{registrationSlip}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-lg mt-1">
                    Your candidate record for <strong>{formData.category}</strong> has been created in the Mountain MSS vetting registry.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full text-left text-xs space-y-2 text-slate-700">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Applicant Name:</span>
                    <strong className="text-slate-900">{formData.fullName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>CNIC Number:</span>
                    <strong className="text-slate-900">{formData.cnicNumber}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Target Trade:</span>
                    <strong className="text-[#0077b6]">{formData.category}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Contact Line:</span>
                    <strong className="text-slate-900">{formData.phone}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Recruitment Station:</span>
                    <strong className="text-slate-900">2nd Floor, Arshad Center, near General Bus Stand, Faisalabad</strong>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Operations Dispatch Alert:</span>
                    <span className="font-semibold text-right">
                      {submissionResult?.notificationSent ? (
                        <span className="text-emerald-700 flex items-center gap-1 font-bold">
                          <CheckCircle className="w-3.5 h-3.5" /> Dispatched via WhatsApp Cloud API
                        </span>
                      ) : submissionResult?.savedToDatabase ? (
                        <span className="text-amber-700 font-medium">
                          Saved in Database (WhatsApp pending API credentials)
                        </span>
                      ) : (
                        <span className="text-slate-500 font-medium">
                          Session Slip Generated (Pending Supabase &amp; WhatsApp setup)
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 text-xs text-blue-900 text-left w-full flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
                  <div>
                    <strong>Next Steps for Verification:</strong>
                    <p className="text-slate-600 mt-0.5">
                      Please bring your original CNIC, 2 passport-sized photographs, and local police character certificate to our recruitment office between 9:00 AM and 5:00 PM (Monday through Saturday).
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setRegistrationSlip(null)}
                  className="px-6 py-3 rounded-xl bg-[#0077b6] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#006399] transition-all cursor-pointer shadow-md"
                >
                  Register Another Candidate
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-200 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6]">
                    Candidate Onboarding
                  </span>
                  <h2 className="font-headline text-2xl font-bold text-slate-900 mt-1">
                    Worker & Security Candidate Profile
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Registration is 100% free. No agents or middlemen. Direct placement with authorized corporate employers.
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-700 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Asif"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      CNIC Number (13 Digits) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="33100-XXXXXXX-X"
                      value={formData.cnicNumber}
                      onChange={handleCnicChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Active Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      WhatsApp Number <span className="text-slate-400 font-normal lowercase">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0300-XXXXXXX"
                      value={formData.whatsappPhone}
                      onChange={(e) => setFormData({ ...formData, whatsappPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Trade / Workforce Cadre Applying For *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all cursor-pointer"
                    >
                      {WORKFORCE_CATEGORIES.map(c => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.nameUrdu})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Prior Experience Duration *
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all cursor-pointer"
                    >
                      <option value="Fresh / Less than 1 Year">Fresh / Less than 1 Year</option>
                      <option value="1-3 years">1 to 3 Years</option>
                      <option value="3-5 years">3 to 5 Years</option>
                      <option value="5+ years">5+ Years (Senior / Ex-Forces)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Home District / City *
                    </label>
                    <select
                      value={formData.cityDistrict}
                      onChange={(e) => setFormData({ ...formData, cityDistrict: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all cursor-pointer"
                    >
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Jhang">Jhang</option>
                      <option value="Toba Tek Singh">Toba Tek Singh</option>
                      <option value="Chiniot">Chiniot</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Sheikhupura">Sheikhupura</option>
                      <option value="Sargodha">Sargodha</option>
                      <option value="Other Punjab District">Other Punjab District</option>
                      <option value="KPK / Sindh / Balochistan / AJK">Other Province / AJK</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Compliance Certifications
                    </span>
                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasPoliceClearance}
                        onChange={(e) => setFormData({ ...formData, hasPoliceClearance: e.target.checked })}
                        className="w-4 h-4 accent-[#0077b6] rounded"
                      />
                      <span>I have or can obtain a Police Character Certificate</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasWeaponLicense}
                        onChange={(e) => setFormData({ ...formData, hasWeaponLicense: e.target.checked })}
                        className="w-4 h-4 accent-[#0077b6] rounded"
                      />
                      <span>I hold a valid Punjab/Federal Arms Permit (for Armed Guards only)</span>
                    </label>
                  </div>

                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Previous Employers or Specific Skills
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 2 years as gate guard at Sitara Textile, or 3 years executive chauffeur on Honda Civic..."
                      value={formData.additionalSkills}
                      onChange={(e) => setFormData({ ...formData, additionalSkills: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] transition-all"
                    />
                  </div>

                  <div className="md:col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.medicalFitnessConfirmed}
                        onChange={(e) => setFormData({ ...formData, medicalFitnessConfirmed: e.target.checked })}
                        className="w-4 h-4 accent-[#0077b6] rounded mt-0.5 shrink-0"
                      />
                      <span>
                        I declare that I am physically and mentally fit for duty, have no criminal record, and agree to undergo mandatory NADRA biometric and medical laboratory vetting.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500">
                    Zero recruitment fees. Direct registration.
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3.5 rounded-xl bg-[#0b132b] text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Profile...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Registration</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </main>

          {/* Sidebar Guidelines */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-slate-900">
                What Candidates Receive
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed on-time monthly salary disbursement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free professional uniform, duty beret & badges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>EOBI & Social Security (SESSI) registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Respectful treatment and supervisor support</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0b132b] text-white p-6 rounded-3xl shadow-md border border-slate-700 flex flex-col gap-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b4d8]">
                Walk-in Recruitment Desk
              </span>
              <h4 className="font-headline text-base font-bold text-white">
                Faisalabad Physical Office
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                You can also visit our physical desk with your documents:
              </p>
              <a
                href="https://maps.app.goo.gl/dYzoczkhh3AJ6em18"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#cde5ff] hover:text-white bg-white/10 hover:bg-white/15 p-3 rounded-xl border border-white/10 space-y-1 transition-all group cursor-pointer"
                title="View recruitment desk location on Google Maps (opens in new tab)"
                aria-label="View recruitment desk on Google Maps (opens in new tab)"
              >
                <div className="flex items-center justify-between font-semibold">
                  <span className="group-hover:underline underline-offset-2">2nd Floor, Arshad Center</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00b4d8] opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>Near General Bus Stand, Faisalabad</div>
                <div className="text-[11px] text-slate-300 pt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#00b4d8] shrink-0" />
                  <span>Desk Hours: Mon-Sat, 9AM to 6PM • Open Map</span>
                </div>
              </a>
              <a
                href="tel:03299200111"
                className="mt-2 text-xs font-bold text-[#00b4d8] hover:text-white flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> Call: 0329-9200111
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
