export interface SocialLink {
  id: string;
  name: string;
  nameUrdu: string;
  url: string;
  handle: string;
  badge?: string;
  badgeUrdu?: string;
  description: string;
  descriptionUrdu: string;
  ariaLabel: string;
  ariaLabelUrdu: string;
  iconType: 'facebook' | 'linkedin' | 'instagram' | 'twitter' | 'youtube';
}

/**
 * Official Social Media channels for Mountain Security Services (Pvt) Ltd.
 * Add new channels to this array to automatically display them across the site
 * without modifying UI components.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    nameUrdu: 'فیس بک',
    url: 'https://www.facebook.com/apnarozagar/',
    handle: '@apnarozagar',
    badge: 'Official Page',
    badgeUrdu: 'آفیشل پیج',
    description: 'Official corporate announcements, verified job postings, and operational updates.',
    descriptionUrdu: 'سرکاری کارپوریٹ اعلانات، نوکریوں کی تفصیلات اور سیکیورٹی اپ ڈیٹس۔',
    ariaLabel: 'Follow Mountain Security Services (Pvt) Ltd on Facebook (opens in a new tab)',
    ariaLabelUrdu: 'ماؤنٹین سیکیورٹی سروسز کا آفیشل فیس بک پیج (نئی ونڈو میں کھلے گا)',
    iconType: 'facebook'
  }
];
