import React, { useState } from 'react';
import { PageRoute, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Mail, 
  Clock, 
  CheckCircle, 
  Send, 
  AlertCircle, 
  Loader2, 
  Shield 
} from 'lucide-react';
import { isValidPakistaniPhone, isValidEmail } from '../utils/validation';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
  onOpenWhatsAppModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  onNavigate, 
  language,
  onOpenWhatsAppModal 
}) => {
  const t = TRANSLATIONS[language];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Security Guard Deployment');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }

    if (!isValidPakistaniPhone(phone)) {
      setError('Please provide a valid Pakistani contact phone (e.g. 0300-1234567).');
      return;
    }

    if (email && !isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!message.trim()) {
      setError('Please provide details in your message.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 600);
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
            <span className="text-[#00b4d8]">Contact Us & Operations Command</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077b6]/30 text-[#cde5ff] text-xs font-bold uppercase tracking-widest w-fit border border-[#0077b6]/40">
              <Shield className="w-4 h-4 text-[#00b4d8]" />
              24/7 Operations Command & Immediate Dispatch
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Connect With Our Duty Officers
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our headquarters operations room at Arshad Center, near General Bus Stand Faisalabad is open 24 hours a day. Reach out for urgent deployments, site security audits, or workforce requisitions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-6">
              <h3 className="font-headline text-xl font-bold text-slate-900 pb-3 border-b border-slate-100">
                Operations Desk Information
              </h3>

              <div className="flex flex-col gap-5 text-xs text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-headline text-sm">Physical Headquarters:</strong>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      2nd Floor, Arshad Center, near General Bus Stand, Faisalabad, Punjab, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-headline text-sm">Direct Phone Hotlines:</strong>
                    <div className="flex flex-col gap-1 mt-1 font-semibold text-slate-900">
                      <a href="tel:03299200111" className="hover:text-[#0077b6]">0329-9200111</a>
                      <a href="tel:03297200222" className="hover:text-[#0077b6]">0329-7200222</a>
                      <a href="tel:03000266204" className="hover:text-[#0077b6]">0300-0266204</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-headline text-sm">WhatsApp Support Desk:</strong>
                    {onOpenWhatsAppModal ? (
                      <button 
                        type="button"
                        onClick={onOpenWhatsAppModal}
                        className="text-emerald-700 font-bold hover:underline block mt-0.5 cursor-pointer text-left text-sm"
                      >
                        Choose a WhatsApp Contact Number &rarr;
                      </button>
                    ) : (
                      <span className="text-slate-700 text-sm font-semibold block mt-0.5">
                        Hotline: 0300-0266204
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-headline text-sm">Email Correspondence:</strong>
                    <a 
                      href="mailto:mountainsecurityserivces@gmail.com" 
                      className="text-[#0077b6] font-semibold hover:underline block mt-0.5"
                    >
                      mountainsecurityserivces@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-headline text-sm">Operational Availability:</strong>
                    <p className="text-slate-600 mt-0.5">
                      24 Hours / 7 Days a Week (Continuous Roster Dispatch)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Landmark Box */}
            <div className="p-6 bg-[#0b132b] text-white rounded-3xl border border-slate-700 shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b4d8]">
                Location Guidance
              </span>
              <h4 className="font-headline text-base font-bold text-white mt-1">
                Directions to Arshad Center
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Situated directly opposite the main General Bus Stand commercial corridor on 2nd Floor, Arshad Center. Conveniently accessible from Railway Station, Millat Road, and Canal Expressway.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="font-headline text-2xl font-bold text-slate-900">
              Send an Official Inquiry
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Our dispatch officer will respond with an official quotation or site visit confirmation within 15 minutes.
            </p>

            {success ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center flex flex-col items-center gap-3">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
                <h4 className="font-headline text-lg font-bold text-slate-900">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm">
                  Thank you for reaching out to Mountain Security Services. Our duty supervisor is reviewing your requirements and will contact you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-2 px-5 py-2 rounded-xl bg-[#0077b6] text-white text-xs font-bold hover:bg-[#006399] transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Your Name / Enterprise *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Crescent Fabrics / Ahmad Raza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300-XXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Official Email <span className="text-slate-400 font-normal lowercase">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="office@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Subject / Service Required *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6] cursor-pointer"
                    >
                      <option value="Security Guard Deployment">Security Guard Deployment</option>
                      <option value="Executive Drivers & Fleet">Executive Drivers & Fleet</option>
                      <option value="Turnkey Industrial Manpower">Turnkey Industrial Manpower</option>
                      <option value="Corporate Office Staffing">Corporate Office Staffing</option>
                      <option value="Site Risk & Security Audit">Site Risk & Security Audit</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Message / Site Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your site location, headcount required, shift hours, and immediate deployment timeline..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 text-xs border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0077b6]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500">
                    24/7 Operations Duty Dispatcher on Standby
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3.5 rounded-xl bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006399] transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
