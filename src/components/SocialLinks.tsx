import React from 'react';
import { SOCIAL_LINKS, SocialLink } from '../data/socialLinks';
import { Language } from '../types';

interface SocialLinksProps {
  language: Language;
  className?: string;
  variant?: 'compact' | 'card' | 'icons-only';
}

/**
 * Renders recognizable brand icon for each supported social network.
 */
const renderSocialIcon = (iconType: SocialLink['iconType'], className = 'w-5 h-5') => {
  switch (iconType) {
    case 'facebook':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Official Facebook silhouette glyph */}
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.92H5.06v8.58h2.8z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  language,
  className = '',
  variant = 'card'
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const displayName = language === 'ur' ? link.nameUrdu : link.name;
        const ariaLabel = language === 'ur' ? link.ariaLabelUrdu : link.ariaLabel;
        const badgeText = language === 'ur' ? link.badgeUrdu : link.badge;

        if (variant === 'icons-only') {
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              title={`${displayName}: ${link.handle}`}
              className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant/40 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              {renderSocialIcon(link.iconType, 'w-5 h-5')}
            </a>
          );
        }

        // Default 'card' / 'compact' professional corporate link styling
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="group flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-[#1877F2]/10 border border-outline-variant/40 hover:border-[#1877F2]/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-8 h-8 shrink-0 rounded-md bg-[#1877F2] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                {renderSocialIcon(link.iconType, 'w-4.5 h-4.5')}
              </span>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-label-md text-label-md font-bold text-on-surface group-hover:text-secondary truncate">
                    {displayName}
                  </span>
                  {badgeText && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-surface-container-high text-secondary border border-secondary/20">
                      {badgeText}
                    </span>
                  )}
                </div>
                <span className="text-xs text-on-surface-variant group-hover:text-on-surface truncate">
                  {link.handle}
                </span>
              </div>
            </div>

            <span
              className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary group-hover:translate-x-0.5 transition-transform text-[18px] shrink-0 ml-2"
              aria-hidden="true"
            >
              arrow_outward
            </span>
          </a>
        );
      })}
    </div>
  );
};
