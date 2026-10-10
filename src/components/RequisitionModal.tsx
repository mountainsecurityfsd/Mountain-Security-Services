import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield, Send, AlertCircle, Loader2 } from 'lucide-react';
import { isValidPakistaniPhone } from '../utils/validation';

interface RequisitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const RequisitionModal: React.FC<RequisitionModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'Armed & Unarmed Security Guards'
}) => {
  const [role, setRole] = useState(defaultRole);
  const [headcount, setHeadcount] = useState('2-5');
  const [orgName, setOrgName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successTicket, setSuccessTicket] = useState<string | null>(null);

  useEffect(() => {
    if (defaultRole) {
      setRole(defaultRole);
    }
  }, [defaultRole]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!orgName.trim()) {
      setError('Please provide your organization or company name.');
      return;
    }

    if (!isValidPakistaniPhone(phone)) {
      setError('Please provide a valid Pakistani contact number (e.g. 0300-1234567 or 03299200111).');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const ticketId = `MSS-ORD-${Math.floor(1000 + Math.random() * 9000)}`;
      setSuccessTicket(ticketId);
    }, 600);
  };

  const handleReset = () => {
    setSuccessTicket(null);
    setOrgName('');
    setPhone('');
    setLocation('');
    setError(null);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b132b]/80 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl p-6 md:p-8 bg-white rounded-2xl shadow-2xl flex flex-col gap-5 border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 bg-slate-50 -mx-6 md:-mx-8 -mt-6 md:-mt-8 p-6 md:p-8 rounded-t-2xl border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0077b6] text-white flex items-center justify-center shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0077b6]">
                Mountain MSS Deployment Hub
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-slate-900">
                Staff Requisition Order
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {successTicket ? (
          <div className="p-6 text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-headline text-xl font-bold text-slate-900">
                Requisition Order Generated!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm">
                Your slip has been logged under priority ticket <strong className="text-[#0077b6] font-bold">#{successTicket}</strong>.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 w-full text-xs text-slate-700 text-left space-y-1">
              <div><strong>Cadre:</strong> {role}</div>
              <div><strong>Headcount:</strong> {headcount} Personnel</div>
              <div><strong>Organization:</strong> {orgName}</div>
              <div><strong>Hotline:</strong> {phone}</div>
              <div className="text-[11px] text-emerald-700 font-semibold pt-1">
                SLA: A Faisalabad Operations Supervisor will call within 15 minutes.
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-[#0077b6] text-white text-xs font-bold hover:bg-[#006399] transition-all shadow-md cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deploy vetted personnel across Faisalabad, Khurrianwala, M-3 Industrial City, and nationwide. Every candidate is verified through NADRA biometric databases and police clearance registers.
            </p>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-800">Target Cadre / Role</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-100 text-xs rounded-lg text-slate-900 border border-slate-200 outline-none focus:border-[#0077b6]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-800">Required Headcount</label>
                  <select
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-100 text-xs rounded-lg text-slate-900 border border-slate-200 outline-none focus:border-[#0077b6]"
                  >
                    <option value="1">1 Person (Dedicated Post)</option>
                    <option value="2-5">2 to 5 Personnel (Unit Squad)</option>
                    <option value="6-15">6 to 15 (Shift Team)</option>
                    <option value="16+">16+ (Turnkey Industrial Contingent)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-800">Organization / Employer Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Crescent Textile Mills"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-100 text-xs rounded-lg text-slate-900 border border-slate-200 outline-none focus:bg-white focus:border-[#0077b6]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-800">Official Contact Hotline *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-XXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-100 text-xs rounded-lg text-slate-900 border border-slate-200 outline-none focus:bg-white focus:border-[#0077b6]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-800">Deployment Location / Facility Sector</label>
                <input
                  type="text"
                  placeholder="e.g. M-3 Industrial City, Sahianwala / Kohinoor City"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-100 text-xs rounded-lg text-slate-900 border border-slate-200 outline-none focus:bg-white focus:border-[#0077b6]"
                />
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-600">
                  Instant mobilization SLA: 24 to 48 hours following document clearance and duty post risk assessment.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 text-xs font-bold rounded-lg bg-[#0077b6] text-white shadow-md hover:bg-[#006399] transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Issue Requisition Slip</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
