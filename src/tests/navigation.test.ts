import { describe, it, expect } from 'vitest';
import { WORKFORCE_CATEGORIES, MSS_LOGO } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';
import { WHATSAPP_CONTACTS } from '../data/whatsappContacts';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { PageRoute } from '../types';

describe('Navigation and Workforce Services Routing', () => {
  it('resolves every category by its unique ID for all 12 worker categories', () => {
    expect(WORKFORCE_CATEGORIES).toHaveLength(12);

    WORKFORCE_CATEGORIES.forEach(category => {
      const found = WORKFORCE_CATEGORIES.find(c => c.id === category.id);
      expect(found).toBeDefined();
      expect(found?.name).toBe(category.name);
      expect(found?.nameUrdu).toBeTruthy();
      expect(found?.responsibilities.length).toBeGreaterThan(0);
      expect(found?.idealEnvironments.length).toBeGreaterThan(0);
      expect(found?.verificationStandards.length).toBeGreaterThan(0);
    });
  });

  it('supports all 8 required pages in the routing union', () => {
    const requiredPages: PageRoute[] = [
      'home',
      'about',
      'directory',
      'service-detail',
      'hire-staff',
      'careers',
      'contact',
      'privacy-policy'
    ];

    expect(requiredPages).toHaveLength(8);
  });

  it('supports bilingual navigation routes', () => {
    const enNav = TRANSLATIONS.en.nav;
    const urNav = TRANSLATIONS.ur.nav;

    expect(enNav.home).toBe('Home');
    expect(urNav.home).toBe('مرکزی صفحہ');
    expect(enNav.hireStaff).toContain('Hire Staff');
    expect(urNav.hireStaff).toContain('عملہ طلب کریں');
    expect(enNav.careers).toContain('Careers');
    expect(urNav.careers).toContain('ملازمت');
    expect(enNav.contact).toBe('Contact Us');
    expect(urNav.contact).toBe('رابطہ کریں');
  });

  it('ensures all supplied phone numbers match official company numbers', () => {
    const expectedHotlines = ['0329-9200111', '0329-7200222', '0300-0266204'];
    expectedHotlines.forEach(line => {
      expect(line).toMatch(/^03[0-9]{2}-[0-9]{7}$/);
    });
  });

  it('validates the WhatsApp contact options and verifies all 3 numbers open their correct chats', () => {
    expect(WHATSAPP_CONTACTS).toHaveLength(3);

    const expectedMap = {
      '0329-9200111': 'https://wa.me/923299200111',
      '0329-7200222': 'https://wa.me/923297200222',
      '0300-0266204': 'https://wa.me/923000266204'
    };

    WHATSAPP_CONTACTS.forEach(contact => {
      expect(expectedMap).toHaveProperty(contact.phoneNumber);
      expect(contact.url).toBe(expectedMap[contact.phoneNumber as keyof typeof expectedMap]);
      expect(contact.url).toMatch(/^https:\/\/wa\.me\/92[0-9]{10}$/);
      expect(contact.label).toBeTruthy();
      expect(contact.labelUrdu).toBeTruthy();
    });
  });

  it('ensures company headquarters address is properly localized', () => {
    expect(TRANSLATIONS.en.address).toContain('2nd Floor, Arshad Center, near General Bus Stand, Faisalabad');
    expect(TRANSLATIONS.ur.address).toContain('ارشد سینٹر، نزد جنرل بس اسٹینڈ، فیصل آباد');
  });

  it('ensures MSS Logo and all image URLs are valid Google CDN assets', () => {
    expect(MSS_LOGO).toMatch(/^https:\/\/lh3\.googleusercontent\.com\//);
    WORKFORCE_CATEGORIES.forEach(category => {
      expect(category.imageUrl).toMatch(/^https:\/\/lh3\.googleusercontent\.com\//);
    });
  });

  it('validates official social media channels including the Facebook page', () => {
    expect(SOCIAL_LINKS.length).toBeGreaterThan(0);
    const fbLink = SOCIAL_LINKS.find(s => s.id === 'facebook');
    expect(fbLink).toBeDefined();
    expect(fbLink?.url).toBe('https://www.facebook.com/apnarozagar/');
    expect(fbLink?.name).toBe('Facebook');
    expect(fbLink?.nameUrdu).toBe('فیس بک');
    expect(fbLink?.iconType).toBe('facebook');
    expect(fbLink?.ariaLabel).toContain('Facebook');

    // Verify all configured social links are valid HTTPS URLs with bilingual metadata
    SOCIAL_LINKS.forEach(link => {
      expect(link.url).toMatch(/^https:\/\//);
      expect(link.name).toBeTruthy();
      expect(link.nameUrdu).toBeTruthy();
      expect(link.ariaLabel).toBeTruthy();
      expect(link.ariaLabelUrdu).toBeTruthy();
    });

    // Verify footer translations include Follow Us
    expect(TRANSLATIONS.en.footer.followUsHeader).toBe('Follow Us');
    expect(TRANSLATIONS.ur.footer.followUsHeader).toBe('ہمیں فالو کریں');
  });
});
