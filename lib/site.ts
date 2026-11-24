export const SITE = {
  name: 'ThinkFISH',
  legalName: 'FISH LLC',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thinkfish.co').replace(/\/$/, ''),
  tagline: 'Fundraising or Go-to-Market',
  description:
    'ThinkFISH is a done-for-you growth partner: Raise (fundraising for startups, real estate and funds) and Motion (B2B lead generation).',
  email: 'hello@thinkfish.co',
  phone: '+1-848-305-2459',
  phoneDisplay: '(848) 305-2459',
  address: {
    street: 'PO Box 1993',
    city: 'Manhattan Beach',
    region: 'CA',
    postalCode: '90267',
    country: 'US',
  },
  twitter: '@ThinkFISHLLC',
  sameAs: [
    'https://x.com/ThinkFISHLLC',
    'https://www.linkedin.com/company/fishagency/',
    'https://startupdealdesk.substack.com/',
  ],
  logo: 'https://www.thinkfish.co/images/thinkfish-logo.png',
  foundingDate: '2020',
} as const;

export type NavItem = { label: string; href: string; sub?: string };

export const FUNDRAISING_LINKS: NavItem[] = [
  { label: 'Startups', href: '/raise', sub: 'Pre-seed to Series B' },
  { label: 'Real Estate', href: '/real-estate', sub: 'Operators & sponsors' },
  { label: 'Funds', href: '/funds', sub: 'PE, VC & hedge funds' },
];

export const RESOURCE_LINKS: NavItem[] = [
  { label: 'Testimonials', href: '/testimonials', sub: 'Founder success stories' },
  { label: 'Newsletter', href: 'https://startupdealdesk.substack.com/', sub: 'Weekly, every Tuesday' },
  { label: 'Contact', href: '/contact', sub: 'Book a call' },
];

export const DISCLAIMER =
  'DISCLAIMER: ThinkFISH is a digital marketing firm that specializes in investor outreach. It is not a registered broker-dealer or placement agent and does not offer investment advice or advise on the raising of capital through securities offerings. ThinkFISH does not recommend or otherwise suggest that any investor make an investment in a specific company, or that any company offer securities to a particular investor. ThinkFISH takes no part in the negotiation or execution of transactions for the purchase or sale of securities, and at no time has possession of funds or securities. No securities transactions are executed or negotiated on or through the ThinkFISH program(s). ThinkFISH receives no compensation in connection with the purchase or sale of securities.';

export const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/raise', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/motion', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/real-estate', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/funds', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/company', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' },
];

export type MegaLink = { label: string; href: string; desc: string; icon: string };
export type MegaMenu = {
  label: string;
  columns: { title: string; links: MegaLink[] }[];
  feature: { eyebrow: string; title: string; text: string; href: string; cta: string };
};

/** Tazapay-style mega menus: titled columns of icon + label + description, plus a featured card. */
export const MEGA: MegaMenu[] = [
  {
    label: 'Fundraising',
    columns: [
      {
        title: 'Raise capital',
        links: [
          { label: 'Startups', href: '/raise', desc: 'Pre-seed to Series B investor outreach', icon: 'S' },
          { label: 'Real Estate', href: '/real-estate', desc: 'Capital for operators and sponsors', icon: 'R' },
          { label: 'Funds', href: '/funds', desc: 'LP identification for PE, VC and hedge funds', icon: 'F' },
        ],
      },
    ],
    feature: {
      eyebrow: 'ThinkFISH Raise',
      title: '$200M+ raised for clients',
      text: 'A done-for-you fundraising process, from deck strategy to investor meetings.',
      href: '/raise#book-consultation',
      cta: 'Book a consultation',
    },
  },
  {
    label: 'Go-To-Market',
    columns: [
      {
        title: 'Generate pipeline',
        links: [
          { label: 'B2B Lead Generation', href: '/motion', desc: 'Qualified meetings with your ideal customers', icon: 'M' },
          { label: 'ROI Calculator', href: '/motion#roi-calculator', desc: 'Model the return on outbound', icon: '%' },
        ],
      },
    ],
    feature: {
      eyebrow: 'ThinkFISH Motion',
      title: '10,000+ qualified meetings',
      text: 'Precision targeting and multichannel outreach, run end-to-end by our team.',
      href: '/motion#motion-booking',
      cta: 'Book a strategy call',
    },
  },
  {
    label: 'Company',
    columns: [
      {
        title: 'ThinkFISH',
        links: [
          { label: 'About us', href: '/company', desc: 'Our mission, vision and team', icon: 'A' },
          { label: 'Case studies', href: '/#case-studies', desc: 'Proven results across our programs', icon: 'C' },
          { label: 'Testimonials', href: '/testimonials', desc: 'Founders on working with us', icon: 'T' },
        ],
      },
    ],
    feature: {
      eyebrow: 'Our story',
      title: 'Built by founders, for founders',
      text: 'Founded in 2020 to make capital and customers a solved problem.',
      href: '/company',
      cta: 'Meet the team',
    },
  },
  {
    label: 'Resources',
    columns: [
      {
        title: 'Learn',
        links: [
          { label: 'Newsletter', href: 'https://startupdealdesk.substack.com/', desc: 'Weekly deal insights, every Tuesday', icon: 'N' },
          { label: 'Contact', href: '/contact', desc: 'Talk to our team', icon: '@' },
        ],
      },
    ],
    feature: {
      eyebrow: 'Weekly newsletter',
      title: '80,000+ subscribers',
      text: 'Case studies, growth strategies and early access to live deals.',
      href: 'https://startupdealdesk.substack.com/',
      cta: 'Subscribe',
    },
  },
];

/**
 * Scheduling link (Calendly) used by every "Book a call" CTA — the original site books calls
 * through Calendly rather than a form. Set NEXT_PUBLIC_CALENDLY_URL, e.g. https://calendly.com/<handle>/<event>.
 * When unset, CTAs fall back to the /contact page.
 */
export const BOOKING_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '';
