import { describe, it, expect } from 'vitest';
import { COMPANY_OWNERS, COMPANY_PROFILE } from '../data/owners';

describe('Company Owners Specification & Assets Test Suite', () => {
  it('features exactly two company owners side by side', () => {
    expect(COMPANY_OWNERS).toHaveLength(2);
    expect(COMPANY_OWNERS[0].id).toBe('owner-1');
    expect(COMPANY_OWNERS[1].id).toBe('owner-2');
  });

  it('keeps exact editable text placeholders without inventing names or qualifications', () => {
    // Owner 1
    expect(COMPANY_OWNERS[0].name).toBe('[OWNER NAME]');
    expect(COMPANY_OWNERS[0].designation).toBe('[DESIGNATION]');

    // Owner 2
    expect(COMPANY_OWNERS[1].name).toBe('[OWNER NAME]');
    expect(COMPANY_OWNERS[1].designation).toBe('[DESIGNATION]');
  });

  it('uses two separate image assets for Owner 1 and Owner 2', () => {
    expect(COMPANY_OWNERS[0].imageSrc).toBeTruthy();
    expect(COMPANY_OWNERS[1].imageSrc).toBeTruthy();
    // Verify they are separate assets
    expect(COMPANY_OWNERS[0].imageSrc).not.toBe(COMPANY_OWNERS[1].imageSrc);
  });

  it('provides suitable accessible alt text for both owners', () => {
    expect(COMPANY_OWNERS[0].altText).toBe('Owner 1 — Mountain Security Services (Pvt) Ltd');
    expect(COMPANY_OWNERS[1].altText).toBe('Owner 2 — Mountain Security Services (Pvt) Ltd');
  });

  it('retains prominent company name and official tagline', () => {
    expect(COMPANY_PROFILE.legalName).toBe('Mountain Security Services (Pvt) Ltd');
    expect(COMPANY_PROFILE.tagline).toBe('Security You Can Trust');
  });
});
