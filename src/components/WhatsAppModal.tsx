import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { WHATSAPP_CONTACTS, WhatsAppContact } from '../data/whatsappContacts';
import { Language } from '../types';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  language = 'en'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectContact = (contact: WhatsAppContact) => {
    window.open(contact.url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      aria-describedby="whatsapp-modal-subtitle"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[#0b132b]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-2xl bg-[#0b132b] text-white shadow-2xl border border-white/15 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Header Glow */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#25d366] via-[#00b4d8] to-[#0077b6]" />

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#25d366]/15 border border-[#25d366]/30 flex items-center justify-center shrink-0 text-[#25d366]">
              {/* WhatsApp Official Vector Icon */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <h2
                id="whatsapp-modal-title"
                className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-white"
              >
                Contact Us on WhatsApp
              </h2>
              <p
                id="whatsapp-modal-subtitle"
                className="text-slate-300 text-xs sm:text-sm mt-1"
              >
                Please choose the number you would like to contact.
              </p>
            </div>
          </div>

          {/* Visible Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Numbers Selection List */}
        <div className="p-6 flex flex-col gap-3.5">
          {WHATSAPP_CONTACTS.map((contact) => (
            <button
              key={contact.id}
              type="button"
              onClick={() => handleSelectContact(contact)}
              className="group w-full p-4 rounded-xl bg-[#1c2541]/80 hover:bg-[#1c2541] border border-white/10 hover:border-[#25d366]/50 transition-all text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25d366]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#25d366]/10 group-hover:bg-[#25d366]/20 border border-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-headline font-bold text-lg text-white group-hover:text-[#00b4d8] transition-colors">
                      {contact.phoneNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-white/10 text-[#cde5ff]">
                      {language === 'ur' ? contact.labelUrdu : contact.label}
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 mt-0.5">
                    {contact.description}
                  </span>
                </div>
              </div>

              {/* Clickable Action Button */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25d366] group-hover:bg-[#20ba59] text-[#072410] font-bold text-xs uppercase tracking-wide shrink-0 transition-colors shadow-sm">
                <span>Open Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>

        {/* Modal Footer Security Note */}
        <div className="px-6 py-4 bg-[#0f172a] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#00b4d8]" />
            <span>Official Mountain Security Services (Pvt) Ltd Channels</span>
          </div>
          <span className="text-[11px] text-slate-400">24/7 Operations Duty</span>
        </div>
      </div>
    </div>
  );
};
