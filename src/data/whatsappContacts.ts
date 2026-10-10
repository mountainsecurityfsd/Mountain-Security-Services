export interface WhatsAppContact {
  id: string;
  phoneNumber: string;
  url: string;
  label: string;
  labelUrdu: string;
  description: string;
}

export const WHATSAPP_CONTACTS: WhatsAppContact[] = [
  {
    id: 'contact-1',
    phoneNumber: '0329-9200111',
    url: 'https://wa.me/923299200111',
    label: 'Operations & Duty Desk',
    labelUrdu: 'آپریشنز و ڈیوٹی ڈیسک',
    description: 'Direct operational supervision & site guard management'
  },
  {
    id: 'contact-2',
    phoneNumber: '0329-7200222',
    url: 'https://wa.me/923297200222',
    label: 'Deployment & Support',
    labelUrdu: 'تعیناتی و کسٹمر سپورٹ',
    description: 'Workforce deployment schedules & urgent replacement requests'
  },
  {
    id: 'contact-3',
    phoneNumber: '0300-0266204',
    url: 'https://wa.me/923000266204',
    label: 'Direct Command & Inquiries',
    labelUrdu: 'براہ راست کمانڈ و معلومات',
    description: 'Corporate contracts, employer requisitions & general inquiries'
  }
];
