import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { Hero, NewsletterSection, SecHead } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from '@/lib/seo';

const TITLE = 'About ThinkFISH — Our Team & Mission';
const DESC =
  'Meet the ThinkFISH team. Founded in 2020, we help founders raise capital and build sales pipelines. $200M+ raised for clients from Manhattan Beach, CA.';

export const metadata = buildMetadata({ title: TITLE, description: DESC, path: '/company' });

const TEAM = [
  { name: 'Ben Padnos', role: 'Chief Executive Officer', img: 'Ben-Padnos.webp' },
  { name: 'Freizle Abarrientos', role: 'Chief Operating Officer', img: 'freizle.png' },
  { name: 'Connor Nolan', role: 'VP Sales & Partnerships', img: 'Connor-Nolan.webp' },
  { name: 'Subin Joshua', role: 'Director Of Technology', img: 'Subin.png' },
  { name: 'Ayana Tolentino', role: 'Onboarding Manager', img: 'ananya.png' },
  { name: 'Trent', role: 'Director of Client Success', img: 'Trent.png' },
  { name: 'Myra Grama', role: 'Director of Client Success', img: 'myra.png' },
  { name: 'Brittany Hunter', role: 'Head of PR', img: 'britt_2022_headshot_1_720.jpg' },
];

export default function CompanyPage() {
  return (
    <>
      <Hero
        eyebrow="About ThinkFISH"
        title="Building the future of growth and connection."
        lead="ThinkFISH is more than a platform — we're your strategic partner in scaling businesses through intelligent capital raising and customer acquisition."
      >
        <Link className="btn btn-primary arrow" href="/contact">
          Talk to our team
        </Link>
      </Hero>
      <section>
        <div className="wrap">
          <SecHead
            eyebrow="Our Mission"
            title="We're building a world where capital — and customers — are never a limiting factor for value creation"
            lead="Every great business deserves the resources to thrive. We bridge the gap between ambitious founders and the capital, customers, and connections they need to transform their vision into reality."
          />
          <div className="grid g2">
            <article className="card">
              <h3>Our Vision</h3>
              <p>We envision a future where every innovative business has immediate access to the resources they need to scale. No more months of fundraising uncertainty or endless cold outreach campaigns.</p>
              <p>Through intelligent automation, strategic partnerships, and deep industry expertise, we&apos;re creating a world where growth is limited only by imagination, not resources.</p>
              <p>Our platform represents the evolution of business development — where technology meets human insight to deliver unprecedented results for ambitious founders.</p>
            </article>
            <article className="card">
              <h3>Our Experience</h3>
              <p>Built by founders, for founders. Our team combines decades of experience in venture capital, sales automation, and startup operations to deliver results that matter.</p>
              <p>We&apos;ve been in your shoes — navigating the challenges of fundraising, building sales pipelines, and scaling operations. This firsthand experience drives our commitment to solving real problems with practical solutions.</p>
              <p>From seed-stage startups to growth companies, we&apos;ve helped businesses across industries achieve their most ambitious goals through strategic capital and customer acquisition.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="sec-surface">
        <div className="wrap">
          <SecHead eyebrow="Our Team" title="Meet the minds behind ThinkFISH" lead="Our diverse team of experts brings together decades of experience in venture capital, technology, and business development to help you achieve your growth goals." />
          <ul className="team" style={{ listStyle: 'none' }}>
            {TEAM.map((p) => (
              <li className="person" key={p.name}>
                <div className="ph">
                  <Image src={`https://www.thinkfish.co/images/team/${p.img}`} alt={`${p.name}, ${p.role} at ThinkFISH`} width={400} height={400} sizes="(max-width: 620px) 100vw, 280px" />
                </div>
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <NewsletterSection />
      <JsonLd
        data={[
          webPageJsonLd({ path: '/company', name: TITLE, description: DESC, type: 'AboutPage' }),
          breadcrumbJsonLd([{ name: 'About us', path: '/company' }]),
          TEAM.map((p) => ({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: p.name,
            jobTitle: p.role,
            worksFor: { '@type': 'Organization', name: 'ThinkFISH' },
          })),
        ].flat()}
      />
    </>
  );
}
