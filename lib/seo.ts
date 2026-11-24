import type { Metadata } from 'next';
import { SITE } from './site';

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Set true for pages that should stay out of search results. */
  noindex?: boolean;
};

const OG_IMAGE = `${SITE.url}/opengraph-image`;

export function buildMetadata({ title, description, path, noindex }: PageSeo): Metadata {
  const url = path === '/' ? SITE.url : `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      title,
      description,
      locale: 'en_US',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'ThinkFISH — Fundraising or Go-to-Market' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.twitter,
      creator: SITE.twitter,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

const abs = (path: string) => (path === '/' ? SITE.url : `${SITE.url}${path}`);

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: SITE.logo,
  description: SITE.description,
  foundingDate: SITE.foundingDate,
  email: SITE.email,
  telephone: SITE.phone,
  sameAs: SITE.sameAs,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      telephone: SITE.phone,
      availableLanguage: 'English',
    },
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: 'en-US',
};

export function webPageJsonLd(opts: { path: string; name: string; description: string; type?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-US',
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function serviceJsonLd(opts: { path: string; name: string; description: string; audience: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: 'Worldwide',
    audience: { '@type': 'Audience', audienceType: opts.audience },
  };
}

export function videoJsonLd(opts: { id: string; name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: opts.name,
    description: opts.description,
    thumbnailUrl: `https://img.youtube.com/vi/${opts.id}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${opts.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${opts.id}`,
    uploadDate: '2024-01-01',
  };
}
