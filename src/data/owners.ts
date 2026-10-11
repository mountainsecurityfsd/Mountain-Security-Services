import owner1Photo from '../assets/owners/owner-1.jpg';
import { OWNER_PHOTO_BASE64 } from './ownerImageBase64';

export interface CompanyOwner {
  id: string;
  name: string;
  designation: string;
  nameUrdu: string;
  designationUrdu: string;
  imageSrc: string;
  imagePath: string;
  altText: string;
  badge?: string;
  badgeUrdu?: string;
  bioNote?: string;
  bioNoteUrdu?: string;
}

/**
 * ============================================================================
 * COMPANY OWNER CONFIGURATION (SINGLE CLEARLY EDITABLE LOCATION)
 * ============================================================================
 * Edit the owner name and designation here:
 */
export const OWNER_DETAILS = {
  name: 'Colonel Retd. Muhammad Rafiq Jam',
  designation: 'Company Owner',
  nameUrdu: 'کرنل (ریٹائرڈ) محمد رفیق جام',
  designationUrdu: 'کمپنی کے مالک',
  /**
   * Verified GitHub Pages and production asset path for Owner 1:
   */
  imagePath: '/Mountain-Security-Services/assets/owner-1-Cv64p7Lg.jpg',
  base64Image: OWNER_PHOTO_BASE64
};

/**
 * Active company owners list — single company owner
 */
export const COMPANY_OWNERS: CompanyOwner[] = [
  {
    id: 'owner-1',
    name: OWNER_DETAILS.name,
    designation: OWNER_DETAILS.designation,
    nameUrdu: OWNER_DETAILS.nameUrdu,
    designationUrdu: OWNER_DETAILS.designationUrdu,
    // Embedded photo data URL ensures instant display on dev, preview, and GitHub Pages without 404s
    imageSrc: OWNER_PHOTO_BASE64,
    imagePath: OWNER_DETAILS.imagePath,
    altText: 'Colonel Retd. Muhammad Rafiq Jam — Company Owner, Mountain Security Services (Pvt) Ltd',
    badge: 'Company Owner',
    badgeUrdu: 'کمپنی کے مالک',
    bioNote: 'Executive Command & Operational Leadership',
    bioNoteUrdu: 'ایگزیکٹو کمانڈ و اسٹریٹجک لیڈرشپ'
  }
];

/**
 * Official Google Maps location for Mountain Security Services (Pvt) Ltd
 * Link: https://maps.app.goo.gl/dYzoczkhh3AJ6em18
 */
export const GOOGLE_MAPS_OFFICE_URL = 'https://maps.app.goo.gl/dYzoczkhh3AJ6em18';

export const OFFICIAL_OFFICE_ADDRESS = '2nd Floor, Arshad Center, Near General Bus Stand, Faisalabad, Pakistan';
export const OFFICIAL_OFFICE_ADDRESS_URDU = 'دوسری منزل، ارشد سینٹر، نزد جنرل بس اسٹینڈ، فیصل آباد، پاکستان';

export const COMPANY_PROFILE = {
  legalName: 'Mountain Security Services (Pvt) Ltd',
  legalNameUrdu: 'ماؤنٹین سیکیورٹی سروسز (پرائیویٹ) لمیٹڈ',
  tagline: 'Security You Can Trust',
  taglineUrdu: 'سیکیورٹی جس پر آپ بھروسہ کر سکتے ہیں',
  headquarters: 'Faisalabad, Punjab, Pakistan',
  headquartersUrdu: 'فیصل آباد، پنجاب، پاکستان',
  address: OFFICIAL_OFFICE_ADDRESS,
  addressUrdu: OFFICIAL_OFFICE_ADDRESS_URDU,
  googleMapsUrl: GOOGLE_MAPS_OFFICE_URL
};
