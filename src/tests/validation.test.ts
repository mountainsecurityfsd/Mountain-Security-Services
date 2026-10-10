import { describe, it, expect } from 'vitest';
import { 
  isValidPakistaniPhone, 
  isValidPakistaniCNIC, 
  formatCNIC, 
  isValidEmail, 
  isValidHeadcount 
} from '../utils/validation';
import { WORKFORCE_CATEGORIES } from '../data/categories';
import { TRANSLATIONS } from '../data/translations';
import { submitCandidateRegistration } from '../services/candidateService';
import { WorkerRegistrationFormData } from '../types';

describe('Pakistani Phone Number Validation', () => {
  it('validates standard 11-digit mobile numbers', () => {
    expect(isValidPakistaniPhone('03001234567')).toBe(true);
    expect(isValidPakistaniPhone('0329-9200111')).toBe(true);
    expect(isValidPakistaniPhone('03297200222')).toBe(true);
    expect(isValidPakistaniPhone('0300-0266204')).toBe(true);
  });

  it('validates numbers with international country code +92', () => {
    expect(isValidPakistaniPhone('+923000266204')).toBe(true);
    expect(isValidPakistaniPhone('923299200111')).toBe(true);
    expect(isValidPakistaniPhone('+92 300 0266204')).toBe(true);
  });

  it('rejects invalid or incomplete phone numbers', () => {
    expect(isValidPakistaniPhone('')).toBe(false);
    expect(isValidPakistaniPhone('12345')).toBe(false);
    expect(isValidPakistaniPhone('02131234567')).toBe(false); // Landline without 3 prefix
    expect(isValidPakistaniPhone('abcdefghijk')).toBe(false);
  });
});

describe('Pakistani CNIC Validation & Formatting', () => {
  it('validates exact 13-digit CNIC numbers', () => {
    expect(isValidPakistaniCNIC('3310012345671')).toBe(true);
    expect(isValidPakistaniCNIC('33100-1234567-1')).toBe(true);
  });

  it('rejects invalid CNICs', () => {
    expect(isValidPakistaniCNIC('')).toBe(false);
    expect(isValidPakistaniCNIC('33100-123456-1')).toBe(false); // 12 digits
    expect(isValidPakistaniCNIC('33100-12345678-1')).toBe(false); // 14 digits
  });

  it('formats unhyphenated CNICs correctly', () => {
    expect(formatCNIC('3310012345671')).toBe('33100-1234567-1');
  });
});

describe('Email & Headcount Validation', () => {
  it('validates standard emails', () => {
    expect(isValidEmail('admin@company.com')).toBe(true);
    expect(isValidEmail('mountainsecurityserivces@gmail.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  it('validates headcounts between 1 and 500', () => {
    expect(isValidHeadcount(1)).toBe(true);
    expect(isValidHeadcount(50)).toBe(true);
    expect(isValidHeadcount(500)).toBe(true);
    expect(isValidHeadcount(0)).toBe(false);
    expect(isValidHeadcount(501)).toBe(false);
  });
});

describe('Workforce Categories & Data Integrity', () => {
  it('contains exactly 12 workforce categories matching project specifications', () => {
    expect(WORKFORCE_CATEGORIES.length).toBe(12);

    const requiredIds = [
      'security-guards',
      'drivers',
      'cooks-chefs',
      'gardeners',
      'office-boys',
      'receptionists',
      'cleaning-staff',
      'factory-workers',
      'warehouse-workers',
      'electricians',
      'masons',
      'waiters'
    ];

    const categoryIds = WORKFORCE_CATEGORIES.map(c => c.id);
    requiredIds.forEach(id => {
      expect(categoryIds).toContain(id);
    });
  });

  it('ensures each category has responsibilities and verification standards', () => {
    WORKFORCE_CATEGORIES.forEach(cat => {
      expect(cat.name).toBeTruthy();
      expect(cat.nameUrdu).toBeTruthy();
      expect(cat.responsibilities.length).toBeGreaterThan(0);
      expect(cat.verificationStandards.length).toBeGreaterThan(0);
      expect(cat.licensingSpec).toBeTruthy();
      expect(cat.imageUrl).toBeTruthy();
    });
  });

  it('verifies English and Urdu translations have matching structure', () => {
    expect(TRANSLATIONS.en.brandName).toBe('Mountain Security Services');
    expect(TRANSLATIONS.ur.brandName).toBe('ماؤنٹین سیکیورٹی سروسز');
    expect(TRANSLATIONS.en.address).toContain('Faisalabad');
    expect(TRANSLATIONS.ur.address).toContain('فیصل آباد');
  });
});

describe('Candidate Registration Pipeline & WhatsApp Cloud API Security', () => {
  const sampleCandidate: WorkerRegistrationFormData = {
    fullName: 'Tariq Mehmood',
    cnicNumber: '33100-1234567-1',
    phone: '0300-1234567',
    whatsappPhone: '0300-1234567',
    category: 'Security Guards',
    experienceYears: '3-5 years',
    cityDistrict: 'Faisalabad',
    hasPoliceClearance: true,
    hasWeaponLicense: true,
    medicalFitnessConfirmed: true,
    additionalSkills: 'Ex-military, fluent in Urdu and Punjabi'
  };

  it('generates a valid MSS-REG ticket ID format', async () => {
    const result = await submitCandidateRegistration(sampleCandidate);
    expect(result.success).toBe(true);
    expect(result.ticketId).toMatch(/^MSS-REG-[0-9]{4,5}$/);
  });

  it('does NOT pretend WhatsApp message was sent when API credentials are not configured', async () => {
    const result = await submitCandidateRegistration(sampleCandidate);
    expect(result.success).toBe(true);
    // Crucial requirement: Must never fake notification success
    expect(result.notificationSent).toBe(false);
    expect(result.notificationStatusMessage).toBeTruthy();
    expect(result.notificationStatusMessage).toContain('not yet configured');
  });
});
