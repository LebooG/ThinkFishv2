import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { Cards, CtaBand, Hero, NewsletterSection, ResultsStrip, SecHead, Steps, TestimonialCarousel, VideoBlock } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, videoJsonLd, webPageJsonLd } from '@/lib/seo';

const TITLE = 'Fund Capital Raising for PE, VC & Hedge Funds';
const DESC =
  'ThinkFISH helps fund managers raise capital for venture, private equity, real estate and hedge funds with strategic LP targeting and outreach.';

export const metadata = buildMetadata({ title: TITLE, description: DESC, path: '/funds' });

export default function FundsPage() {
  return (
    <>
      <Hero
        eyebrow="Professional Fund Fundraising"
        title="Raise capital for your investment fund."
        lead="Professional fundraising services for investment funds, private equity, and institutional capital. Connect with qualified LPs and institutional investors to scale your fund."
      >
        <Link className="btn btn-primary arrow" href="#book-consultation">
          Book Consultation
        </Link>
      </Hero>
      <section>
        <div className="wrap">
          <SecHead eyebrow="Fund types" title="Choose Your Fund Type" lead="We specialize in fundraising for different types of investment funds, each with tailored strategies and LP networks." />
          <Cards
            items={[
              { tag: 'Institutional Capital', title: 'Private Equity Funds', text: 'Raise capital from institutional investors and high-net-worth individuals for private equity opportunities with proven track records.' },
              { tag: 'Growth Capital', title: 'Venture Capital Funds', text: 'Connect with LPs and institutional investors to fund your venture capital initiatives and startup investment strategies.' },
              { tag: 'Alternative Investments', title: 'Hedge Funds', text: 'Secure capital from sophisticated investors for hedge fund strategies and alternative investment opportunities.' },
            ]}
          />
        </div>
      </section>
      <section className="sec-surface">
        <div className="wrap">
          <SecHead eyebrow="Process" title="Our Proven Fund Raising Process" lead="A systematic approach to fund fundraising that has helped our clients raise capital from institutional investors and LPs." />
          <Steps
            items={[
              { title: 'Fund Strategy & Positioning', text: 'Analyze your fund strategy, track record, and market positioning to create a compelling investment thesis for LPs.' },
              { title: 'LP Materials Development', text: 'Create professional pitch decks, offering memorandums, and due diligence materials that resonate with institutional investors.' },
              { title: 'LP Identification & Outreach', text: 'Identify and connect with qualified limited partners and institutional investors aligned with your fund strategy.' },
              { title: 'Fund Closing & Execution', text: 'Navigate the fund closing process, legal documentation, and investor onboarding to successfully launch your fund.' },
            ]}
          />
        </div>
      </section>
      <ResultsStrip />
      <VideoBlock eyebrow="ThinkFISH Raise" title="See How We Help Founders Raise Capital" text="Discover the proven methodology that has helped 500+ campaigns raise over $200M in capital. Watch our founder explain the ThinkFISH approach to fundraising." id="1drFe_-7atk" label="Watch how we help raise capital" />
      <section>
        <div className="wrap">
          <SecHead eyebrow="Success stories" title="Success Stories" lead="Hear from fund managers who have successfully raised capital with ThinkFISH." />
          <TestimonialCarousel />
        </div>
      </section>
      <CtaBand
        id="book-consultation"
        title="Ready to Start Your Fund Raising Journey?"
        text="Book a consultation call to discuss your fund strategy and learn how we can help you raise capital from institutional investors."
        ticks={['Free 30-minute strategy session', 'Personalized fund strategy', 'LP network insights and recommendations']}
        button="Book a consultation"
      />
      <NewsletterSection />
      <JsonLd
        data={[
          webPageJsonLd({ path: '/funds', name: TITLE, description: DESC }),
          breadcrumbJsonLd([{ name: 'Fund Fundraising', path: '/funds' }]),
          serviceJsonLd({ path: '/funds', name: 'ThinkFISH Fund Capital Raising', description: DESC, audience: 'Fund managers' }),
          videoJsonLd({ id: '1drFe_-7atk', name: 'See How We Help Founders Raise Capital', description: 'The ThinkFISH approach to fundraising.' }),
        ]}
      />
    </>
  );
}
