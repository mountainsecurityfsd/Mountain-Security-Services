import owner1Photo from '../assets/owners/owner-1.jpg';
import owner2Photo from '../assets/owners/owner-2.jpg';

export interface CompanyOwner {
  id: string;
  ownerNumber: number;
  /**
   * Editable text placeholder: [OWNER NAME]
   * Replace with actual name once provided.
   */
  name: string;
  /**
   * Editable text placeholder: [DESIGNATION]
   * Replace with actual designation (e.g. Chief Executive Officer, Managing Director, Director) once provided.
   */
  designation: string;
  nameUrdu: string;
  designationUrdu: string;
  imageSrc: string;
  altText: string;
  badge: string;
  badgeUrdu: string;
  bioNote?: string;
  bioNoteUrdu?: string;
}

export const COMPANY_OWNERS: CompanyOwner[] = [
  {
    id: 'owner-1',
    ownerNumber: 1,
    name: '[OWNER NAME]',
    designation: '[DESIGNATION]',
    nameUrdu: '[مالک کا نام 1]',
    designationUrdu: '[عہدہ]',
    imageSrc: owner1Photo,
    altText: 'Owner 1 — Mountain Security Services (Pvt) Ltd',
    badge: 'Company Owner / Director',
    badgeUrdu: 'کمپنی ڈائریکٹر / مالک',
    bioNote: 'Executive Leadership & Strategic Operations',
    bioNoteUrdu: 'ایگزیکٹو لیڈرشپ و اسٹریٹجک آپریشنز'
  },
  {
    id: 'owner-2',
    ownerNumber: 2,
    name: '[OWNER NAME]',
    designation: '[DESIGNATION]',
    nameUrdu: '[مالک کا نام 2]',
    designationUrdu: '[عہدہ]',
    imageSrc: owner2Photo,
    altText: 'Owner 2 — Mountain Security Services (Pvt) Ltd',
    badge: 'Company Owner / Director',
    badgeUrdu: 'کمپنی ڈائریکٹر / مالک',
    bioNote: 'Corporate Administration & Client Relations',
    bioNoteUrdu: 'انتظامی امور و کلائنٹ ریلیشنز'
  }
];

export const COMPANY_PROFILE = {
  legalName: 'Mountain Security Services (Pvt) Ltd',
  legalNameUrdu: 'ماؤنٹین سیکیورٹی سروسز (پرائیویٹ) لمیٹڈ',
  tagline: 'Security You Can Trust',
  taglineUrdu: 'سیکیورٹی جس پر آپ بھروسہ کر سکتے ہیں',
  headquarters: 'Faisalabad, Punjab, Pakistan',
  headquartersUrdu: 'فیصل آباد، پنجاب، پاکستان'
};
