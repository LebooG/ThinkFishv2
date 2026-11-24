import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CtaBand, Hero, NewsletterSection, ResultsStrip, SecHead, Steps, TestimonialCarousel, VideoBlock, WhySection } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, videoJsonLd, webPageJsonLd } from '@/lib/seo';

const TITLE = 'Startup Fundraising Services — Raise Capital';
const DESC =
  'ThinkFISH Raise helps founders secure capital from pre-seed to Series B. Over $200M raised for 200+ founders with strategic investor targeting.';

export const metadata = buildMetadata({ title: TITLE, description: DESC, path: '/raise' });

export default function RaisePage() {
  return (
    <>
      <Hero
        eyebrow="ThinkFISH Raise"
        title="Fuel your vision with smart capital."
        lead="ThinkFISH Raise fuels your go-to-market strategy by securing the capital you need to scale. From strategic positioning to investor relations, we connect ambitious founders with growth capital."
      >
        <Link className="btn btn-primary arrow" href="#book-consultation">
          Book Consultation
        </Link>
      </Hero>
      <section>
        <div className="wrap">
          <SecHead
            eyebrow="Process"
            title="Our Proven Fundraising Process"
            lead="A systematic done-for-you approach that has helped founders raise over $200M+ in funding. Each step is designed to maximize your chances of success while we handle the heavy lifting."
          />
          <Steps
            items={[
              { title: 'Consultation', text: 'Deep dive into your business, funding needs, and growth trajectory to create a tailored fundraising strategy.' },
              { title: 'Deck Strategy', text: 'Craft a compelling pitch deck that tells your story and highlights your unique value proposition.' },
              { title: 'Investor Persona Match', text: 'Identify and target investors who align with your industry, stage, and funding requirements.' },
              { title: 'Outreach', text: 'Execute strategic outreach campaigns to get in front of the right investors at the right time.' },
              { title: 'Meetings', text: 'Facilitate and optimize investor meetings to maximize your chances of securing funding.' },
              { title: 'Reviews', text: 'Continuous optimization based on investor feedback and market response to improve success rates.' },
            ]}
          />
        </div>
      </section>
      <ResultsStrip />
      <VideoBlock
        eyebrow="ThinkFISH Raise"
        title="See How We Help Founders Raise Capital"
        text="Discover the proven methodology that has helped 500+ campaigns raise over $200M in capital. Watch our founder explain the ThinkFISH approach to fundraising."
        id="1drFe_-7atk"
        label="Watch how we help startups raise capital"
      />
      <section>
        <div className="wrap">
          <SecHead eyebrow="Founders" title="What Our Founders Say" lead="Hear from successful founders who have raised millions with our proven process." />
          <TestimonialCarousel />
          <div style={{ marginTop: 32 }}>
            <h3>Ready to Get Started?</h3>
            <p className="muted" style={{ margin: '6px 0 16px' }}>
              Book a free consultation to discuss your goals and see how we can help.
            </p>
            <Link className="btn btn-dark arrow" href="#book-consultation">
              Book Your Strategy Call
            </Link>
          </div>
        </div>
      </section>
      <WhySection />
      <section style={{ paddingBottom: 0 }} />
      <CtaBand
        id="book-consultation"
        title="Ready to Start Your Fundraising Journey?"
        text="Book a consultation call to discuss your funding needs and learn how we can help you raise capital more efficiently and effectively."
        ticks={['Free 30-minute strategy session', 'Personalized fundraising roadmap', 'Industry-specific insights and recommendations']}
        button="Book a consultation"
      />
      <NewsletterSection />
      <JsonLd
        data={[
          webPageJsonLd({ path: '/raise', name: TITLE, description: DESC }),
          breadcrumbJsonLd([{ name: 'Fundraising for Startups', path: '/raise' }]),
          serviceJsonLd({ path: '/raise', name: 'ThinkFISH Raise — Startup Fundraising', description: DESC, audience: 'Startup founders' }),
          videoJsonLd({ id: '1drFe_-7atk', name: 'See How We Help Founders Raise Capital', description: 'The ThinkFISH approach to fundraising, explained by our founder.' }),
        ]}
      />
    </>
  );
}
