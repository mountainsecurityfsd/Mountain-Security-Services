export function isValidPakistaniPhone(phone: string): boolean {
  if (!phone) return false;
  // Cleans spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Matches: 03XXXXXXXXX (11 digits) or +923XXXXXXXXX or 923XXXXXXXXX (12/13 digits)
  const regex = /^((\+92|92|0)?3[0-9]{9})$/;
  return regex.test(cleaned);
}

export function isValidPakistaniCNIC(cnic: string): boolean {
  if (!cnic) return false;
  const cleaned = cnic.replace(/[\s\-]/g, '');
  // Exactly 13 digits
  const regex = /^[0-9]{13}$/;
  return regex.test(cleaned);
}

export function formatCNIC(cnic: string): string {
  const digits = cnic.replace(/\D/g, '').slice(0, 13);
  if (digits.length <= 5) return digits;
  if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`;
}

export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
}

export function isValidHeadcount(count: number): boolean {
  return Number.isInteger(count) && count >= 1 && count <= 500;
}
