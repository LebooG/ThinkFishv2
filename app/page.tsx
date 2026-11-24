import Link from 'next/link';
import CaseStudies from '@/components/CaseStudies';
import JsonLd from '@/components/JsonLd';
import { ArtDfy, ArtMotion, ArtRaise } from '@/components/art';
import { Cards, Hero, NewsletterSection, Prim, SecHead, Stats } from '@/components/ui';
import { buildMetadata, webPageJsonLd } from '@/lib/seo';

const HOME_TITLE = 'ThinkFISH — Fundraising or Go-to-Market | Done-for-you growth';
const DESC =
  'ThinkFISH is a done-for-you growth partner. Raise helps startups, real estate sponsors and funds secure capital; Motion books qualified B2B meetings.';

export const metadata = {
  ...buildMetadata({ title: HOME_TITLE, description: DESC, path: '/' }),
  title: { absolute: HOME_TITLE },
};

const CLIENTS = ['Carthage Capital', 'Fore Genomics', 'Lightwell Development', 'PaintBox Labs', 'MEAHANA'];
const SECTORS = [
  ['Startups', 'Investors'],
  ['Real Estate', 'Family Offices'],
  ['Funds', 'LPs'],
  ['SaaS', 'Buyers'],
  ['Fintech', 'Enterprise'],
  ['Healthcare', 'Decision-makers'],
  ['Sponsors', 'Capital'],
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Done-for-you growth"
        title="Growth infrastructure for ambitious companies in motion."
        lead="Whether you're raising capital or generating customers, ThinkFISH has the expertise to accelerate your growth. Two specialized done-for-you services, one growth partner."
        stats={
          <Stats
            items={[
              { label: 'Capital raised', value: '$200M+', note: 'By our clients' },
              { label: 'Qualified meetings', value: '10,000+', note: 'Booked for clients' },
              { label: 'Client satisfaction', value: '95%', note: 'Across engagements' },
              { label: 'Clients served', value: '500+', note: 'Startups, funds & sponsors' },
              { label: 'Newsletter', value: '80,000+', note: 'Subscribers' },
            ]}
          />
        }
      >
        <Link className="btn btn-primary arrow" href="/raise#book-consultation">
          Get Funding
        </Link>
        <Link className="btn btn-ghost arrow" href="/motion#motion-booking">
          Get Customers
        </Link>
      </Hero>

      <section id="choose-your-growth-path">
        <div className="wrap">
          <SecHead
            eyebrow="What we do"
            title="Fundraising or Go-to-Market. What's your next move?"
            lead="We accelerate growth for ambitious companies through two specialized done-for-you services: strategic fundraising for capital needs and precision B2B lead generation for customer acquisition."
          />
          <Prim
            num="01 · ThinkFISH Raise"
            title="Done-For-You Fundraising"
            text="Raise smarter. Close faster. Our done-for-you service connects you with the right investors and accelerates your funding journey."
            ticks={[
              'AI Investor Matching — connect with the right investors based on your industry, stage, and funding needs',
              'Pitch Optimization — AI-powered feedback to perfect your pitch deck and presentation',
              'Due Diligence Hub — secure document management and investor communication portal',
            ]}
            chips={['Startups', 'Real Estate', 'Funds']}
            cta="See how we raise capital"
            href="/raise"
            art={<ArtRaise />}
          />
          <Prim
            flip
            num="02 · ThinkFISH Motion"
            title="Done-For-You Lead Generation"
            text="Book qualified meetings with your dream clients. Our done-for-you service scales your sales pipeline with precision targeting."
            ticks={[
              'Smart Lead Generation — AI-powered prospecting to identify and qualify high-value B2B leads',
              'Automated Outreach — personalized email sequences and multi-channel engagement campaigns',
              'Conversion Analytics — track performance and optimize your sales funnel with detailed insights',
            ]}
            chips={['B2B', 'Multi-channel', 'Pipeline']}
            cta="See how we fill your pipeline"
            href="/motion"
            art={<ArtMotion />}
          />
        </div>
      </section>

      <section className="sec-surface" id="why-thinkfish">
        <div className="wrap">
          <SecHead
            eyebrow="Why ThinkFISH"
            title="Accelerate Your Growth"
            lead="ThinkFISH delivers proven results through specialized expertise in fundraising and customer acquisition. Our systematic approach and extensive network help ambitious companies achieve their growth goals faster."
          />
          <Cards
            cols="g4"
            items={[
              { title: 'Fundraising', text: 'Over $200M+ raised by our clients with a systematic approach to fundraising and investor relations.', big: '$200M+', tag: 'Capital raised' },
              { title: 'Lead Generation', text: 'Precision outreach that consistently delivers qualified meetings with your ideal investors or customers.', big: '10,000+', tag: 'Qualified meetings' },
              { title: 'Strategic Growth', text: 'End-to-end growth solutions that scale your business through capital and customer acquisition.', big: '95%', tag: 'Client satisfaction' },
              { title: 'Proven Results', text: 'Track record of accelerating growth for startups, fund managers, real estate sponsors, and established businesses.', big: '500+', tag: 'Clients served' },
            ]}
          />
        </div>
      </section>

      <CaseStudies />

      <section>
        <div className="wrap">
          <SecHead eyebrow="Trusted by Founders & Businesses" title="Join hundreds of successful companies who have accelerated their growth with ThinkFISH." />
          <Stats
            cols="four"
            items={[
              { label: 'Helped raise', value: '$200M+', note: 'Capital' },
              { label: 'Facilitated', value: '10,000+', note: 'Investor & B2B meetings' },
              { label: 'Delivered', value: '500+', note: 'Successful campaigns' },
              { label: 'Built', value: '80,000+', note: 'Newsletter subscribers' },
            ]}
          />
          <p style={{ marginTop: 40, fontSize: 18, color: 'var(--ink-2)' }}>
            Ready to join our community of successful founders and businesses?
          </p>
          <div className="hero-cta" style={{ marginTop: 18 }}>
            <Link className="btn btn-primary arrow" href="/raise">
              Raise capital with us
            </Link>
            <Link className="btn btn-ghost arrow" href="/motion">
              Fill your pipeline
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0' }} aria-label="Clients">
        <div className="wrap">
          <p className="muted" style={{ textAlign: 'center', fontSize: 14, marginBottom: 24 }}>
            Trusted by founders and operators at
          </p>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="logos" style={{ animationDuration: '38s' }}>
            {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={c + i}>{c}</span>
            ))}
          </div>
        </div>
        <ul className="sr-only" style={{ position: 'absolute', left: -9999 }}>
          {CLIENTS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="sec-surface">
        <div className="wrap">
          <SecHead eyebrow="Programs" title="Same foundation. New audiences." lead="Each program extends the core Raise or Motion engine you already use." />
          <div className="grid g3">
            {[
              { k: 'Startups', t: 'Pre-seed to Series B', d: 'Investor targeting, deck strategy and outreach for founders.', h: '/raise', c: ['Raise'] },
              { k: 'Real Estate', t: 'Operators & sponsors', d: 'Capital for portfolios — no broker hassle, no equity required.', h: '/real-estate', c: ['Raise'] },
              { k: 'Funds', t: 'PE, VC & hedge funds', d: 'LP identification, materials and outreach for fund managers.', h: '/funds', c: ['Raise', 'Motion'] },
            ].map((r) => (
              <Link className="road" href={r.h} key={r.k}>
                <span className="ext">{r.k}</span>
                <h3>{r.t}</h3>
                <p className="muted">{r.d}</p>
                <span className="ext">Extends</span>
                <div className="chips">
                  {r.c.map((x) => (
                    <span className="chip" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SecHead eyebrow="Sectors" title="Effortlessly reach the right audience." lead="Precision targeting for investors and customers, across every sector." />
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...SECTORS, ...SECTORS, ...SECTORS].map(([a, b], i) => (
              <span className="pill" key={a + i}>
                {a}
                <i>→</i>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-surface">
        <div className="wrap">
          <SecHead eyebrow="Done for you" title="We handle the heavy lifting." lead="One engagement replaces a stack of agencies. You share the brief; our team runs the work and hands you qualified meetings." />
          <div className="dfy">
            <div className="dfy-text">
              <span className="chip">Done-For-You</span>
              <h3 style={{ fontSize: 30, letterSpacing: '-.025em' }}>Brief in. Meetings out.</h3>
              <ul className="ticks">
                <li>Strategy, messaging and targeting built for you</li>
                <li>Outreach run end-to-end by our team</li>
                <li>Replies filtered and meetings booked on your calendar</li>
              </ul>
              <Link className="btn btn-dark arrow" href="/contact">
                Start your engagement
              </Link>
            </div>
            <div className="dfy-art">
              <ArtDfy />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SecHead eyebrow="Compliance" title="Clear about what we are." lead="ThinkFISH is a digital marketing firm specializing in investor outreach." />
          <div className="lic">
            {[
              ['Not a broker-dealer', 'Not a registered broker-dealer or placement agent.'],
              ['No investment advice', 'We do not advise on raising capital through securities offerings.'],
              ['No transactions', 'We take no part in negotiating or executing securities transactions.'],
              ['No custody', 'At no time do we possess funds or securities.'],
              ['No compensation', 'No compensation tied to the purchase or sale of securities.'],
              ['No recommendations', "We don't suggest any investor invest in a specific company."],
            ].map(([b, s]) => (
              <div key={b}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <JsonLd data={webPageJsonLd({ path: '/', name: HOME_TITLE, description: DESC })} />
    </>
  );
}
