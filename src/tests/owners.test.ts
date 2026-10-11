import { describe, it, expect } from 'vitest';
import { COMPANY_OWNERS, COMPANY_PROFILE, OWNER_DETAILS } from '../data/owners';

describe('Company Owners Specification & Directorate Test Suite', () => {
  it('features exactly one company owner with Owner 2 completely removed', () => {
    expect(COMPANY_OWNERS).toHaveLength(1);
    expect(COMPANY_OWNERS[0].id).toBe('owner-1');
    expect(COMPANY_OWNERS.find(o => o.id === 'owner-2')).toBeUndefined();
  });

  it('stores owner name and designation in one clearly editable location', () => {
    expect(OWNER_DETAILS).toBeDefined();
    expect(OWNER_DETAILS.name).toBe('Colonel Retd. Muhammad Rafiq Jam');
    expect(OWNER_DETAILS.designation).toBe('Company Owner');
  });

  it('displays the exact required owner name and designation', () => {
    const owner = COMPANY_OWNERS[0];
    expect(owner.name).toBe('Colonel Retd. Muhammad Rafiq Jam');
    expect(owner.designation).toBe('Company Owner');
  });

  it('uses the existing Owner 1 photo asset and verified path', () => {
    const owner = COMPANY_OWNERS[0];
    expect(owner.imageSrc).toBeTruthy();
    expect(owner.imagePath).toBe('/Mountain-Security-Services/assets/owner-1-Cv64p7Lg.jpg');
  });

  it('provides suitable accessible alt text for the single owner', () => {
    expect(COMPANY_OWNERS[0].altText).toContain('Colonel Retd. Muhammad Rafiq Jam');
    expect(COMPANY_OWNERS[0].altText).toContain('Company Owner');
  });

  it('retains prominent company name and official tagline', () => {
    expect(COMPANY_PROFILE.legalName).toBe('Mountain Security Services (Pvt) Ltd');
    expect(COMPANY_PROFILE.tagline).toBe('Security You Can Trust');
  });
});
