import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Fundraising or Go-to-Market | Done-for-you growth`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    'startup fundraising',
    'raise capital',
    'investor outreach',
    'B2B lead generation',
    'real estate fundraising',
    'fund capital raising',
    'done-for-you fundraising',
    'sales pipeline',
  ],
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: SITE.url },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_US', url: SITE.url },
  twitter: { card: 'summary_large_image', site: SITE.twitter, creator: SITE.twitter },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        <div className="announce">
          New: ThinkFISH Raise and Motion — one growth partner for capital and customers.
          <Link href="/contact">Book a call</Link>
        </div>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      </body>
    </html>
  );
}
