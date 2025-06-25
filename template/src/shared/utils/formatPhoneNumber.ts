import { parsePhoneNumber } from 'libphonenumber-js';

export function formatPhoneNumber(phoneNumber: string): string {
  try {
    const parsed = parsePhoneNumber(phoneNumber, 'AU');
    return parsed.country === 'AU' ? parsed.formatNational() : parsed.number;
  } catch (e) {
    return phoneNumber;
  }
}
