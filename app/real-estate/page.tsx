import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { Cards, CtaBand, Hero, NewsletterSection, ResultsStrip, SecHead, Steps, TestimonialCarousel, VideoBlock, WhySection } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, videoJsonLd, webPageJsonLd } from '@/lib/seo';

const TITLE = 'Real Estate Fundraising for Sponsors';
const DESC =
  'Raise capital for real estate without brokers or equity dilution. ThinkFISH connects operators and sponsors with investors and family offices.';

export const metadata = buildMetadata({ title: TITLE, description: DESC, path: '/real-estate' });

export default function RealEstatePage() {
  return (
    <>
      <Hero
        eyebrow="ThinkFISH Real Estate"
        title="Build your real estate portfolio with strategic capital."
        lead="Over a decade of connecting founders, operators, and sponsors with the capital they need - no broker hassle, no equity required."
      >
        <Link className="btn btn-primary arrow" href="#booking">
          Book Consultation
        </Link>
      </Hero>
      <section>
        <div className="wrap">
          <SecHead eyebrow="How we help" title="How We Help You Raise Capital" lead="Our proven methodology connects real estate professionals with the right investors, streamlining your fundraising process from strategy to close." />
          <Cards
            items={[
              { tag: '01', title: 'Strategic Positioning', text: 'We help you craft a compelling investment narrative that highlights your track record, market opportunity, and competitive advantages to attract the right capital partners.' },
              { tag: '02', title: 'Investor Network Access', text: 'Leverage our extensive network of real estate investors, family offices, and institutional capital sources who are actively seeking quality investment opportunities.' },
              { tag: '03', title: 'End-to-End Support', text: 'From initial strategy development to deal closing, we provide comprehensive support throughout your entire fundraising journey, ensuring maximum efficiency and success.' },
            ]}
          />
          <h3 style={{ marginTop: 36 }}>Ready to accelerate your real estate fundraising?</h3>
          <p className="muted" style={{ margin: '6px 0 16px' }}>
            Join hundreds of successful real estate professionals who have raised capital with our proven methodology.
          </p>
          <Link className="btn btn-dark arrow" href="#booking">
            Start Your Fundraising Journey
          </Link>
        </div>
      </section>
      <section className="sec-surface">
        <div className="wrap">
          <SecHead eyebrow="Process" title="Our Proven Real Estate Process" lead="A systematic approach specifically designed for real estate fundraising. Each step maximizes your chances of securing the right capital partners." />
          <Steps
            items={[
              { title: 'Discovery & Strategy', text: 'We align your goals, capital needs, and investor targets for real estate ventures.' },
              { title: 'Story & Pitch Development', text: 'Position your deal with storytelling and complete deck optimization.' },
              { title: 'Targeted Investor Outreach', text: 'Multi-channel campaigns to a curated investor list.' },
              { title: 'Meetings & Momentum', text: 'We book introductions to leads who match your raise criteria.' },
              { title: 'Ongoing Support', text: 'Post-close amplification, community access, and capital strategy guidance.' },
            ]}
          />
        </div>
      </section>
      <ResultsStrip />
      <VideoBlock eyebrow="ThinkFISH Real Estate" title="Real Estate Capital Made Simple" text="Discover our specialized approach to real estate fundraising and investor relations. Watch how we connect real estate professionals with the right investors." id="1drFe_-7atk" label="Watch how we raise capital for real estate" />
      <section>
        <div className="wrap">
          <SecHead eyebrow="Clients" title="What Our Clients Say" lead="Hear from successful real estate professionals who have raised millions with our proven process." />
          <TestimonialCarousel />
        </div>
      </section>
      <WhySection />
      <section style={{ paddingBottom: 0 }} />
      <CtaBand
        id="booking"
        title="Ready to Start Your Real Estate Fundraising Journey?"
        text="Book a consultation call to discuss your real estate funding needs and learn how we can help you raise capital for your ventures."
        ticks={['Free 30-minute strategy session', 'Personalized real estate roadmap', 'Property-specific insights and recommendations']}
        button="Book a consultation"
      />
      <NewsletterSection />
      <JsonLd
        data={[
          webPageJsonLd({ path: '/real-estate', name: TITLE, description: DESC }),
          breadcrumbJsonLd([{ name: 'Real Estate Fundraising', path: '/real-estate' }]),
          serviceJsonLd({ path: '/real-estate', name: 'ThinkFISH Real Estate Fundraising', description: DESC, audience: 'Real estate operators and sponsors' }),
          videoJsonLd({ id: '1drFe_-7atk', name: 'Real Estate Capital Made Simple', description: 'How ThinkFISH connects real estate professionals with investors.' }),
        ]}
      />
    </>
  );
}
