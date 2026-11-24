import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import RoiCalculator from '@/components/RoiCalculator';
import { CtaBand, Hero, NewsletterSection, SecHead, Steps, VideoBlock } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, videoJsonLd, webPageJsonLd } from '@/lib/seo';

const TITLE = 'B2B Lead Generation — Build Your Sales Pipeline';
const DESC =
  'ThinkFISH Motion delivers qualified B2B leads and sales-ready meetings through data-driven prospecting and multi-channel outbound campaigns.';

export const metadata = buildMetadata({ title: TITLE, description: DESC, path: '/motion' });

export default function MotionPage() {
  return (
    <>
      <Hero
        eyebrow="ThinkFISH Motion"
        title="Your GTM customer engine."
        lead="ThinkFISH Motion powers your go-to-market strategy with precision B2B outreach, multi-channel customer acquisition, and qualified pipeline generation that accelerates revenue growth."
      >
        <Link className="btn btn-primary arrow" href="#motion-booking">
          Book Consultation
        </Link>
      </Hero>
      <section>
        <div className="wrap">
          <SecHead
            eyebrow="Process"
            title="Our Proven Lead Generation Process"
            lead="A systematic done-for-you approach that has generated 10,000+ qualified meetings for our clients. Each step is designed to maximize your conversion rates while we handle everything."
          />
          <Steps
            items={[
              { title: 'Discovery', text: 'Deep dive into your business, target market, and ideal customer profile to create a tailored outreach strategy.', activities: ['Business model and value proposition analysis', 'Target market research and segmentation', 'Competitor analysis and positioning', 'Goals and KPI definition'] },
              { title: 'ICP Targeting', text: 'Identify and profile your ideal customer personas with precision targeting and data-driven insights.', activities: ['Ideal Customer Profile (ICP) development', 'Buyer persona creation and validation', 'Decision-maker identification', 'Contact database building and verification'] },
              { title: 'Campaign Build', text: 'Craft compelling messaging and create multi-touch campaigns that resonate with your target audience.', activities: ['Messaging framework development', 'Email sequence creation and optimization', 'LinkedIn outreach templates', 'Call scripts and voicemail strategies'] },
              { title: 'Multichannel Outreach', text: 'Execute coordinated campaigns across email, LinkedIn, phone, and other channels for maximum reach.', activities: ['Email campaign execution and automation', 'LinkedIn connection requests and messaging', 'Cold calling and warm follow-ups', 'Social media engagement and content sharing'] },
              { title: 'Filtering & Replies', text: 'Manage responses, qualify leads, and schedule meetings with the most promising prospects.', activities: ['Response management and categorization', 'Lead qualification and scoring', 'Meeting scheduling and coordination', 'CRM integration and data management'] },
              { title: 'Iteration', text: 'Continuously optimize campaigns based on performance data and feedback to improve results.', activities: ['Performance analysis and reporting', 'A/B testing of messaging and timing', 'Campaign optimization and refinement', 'Strategy adjustment based on results'] },
            ]}
          />
        </div>
      </section>
      <VideoBlock
        eyebrow="ThinkFISH Motion"
        title="Transform Your Go-To-Market Strategy"
        text="Learn how we accelerate customer acquisition and revenue growth. See how our systematic approach helps companies connect with their ideal customers faster."
        id="vFvto1uoBYY"
        label="Watch how we accelerate customer acquisition"
      />
      <section id="roi-calculator">
        <div className="wrap">
          <SecHead
            eyebrow="ROI Calculator"
            title="Calculate Your Lead Generation ROI"
            lead="See how ThinkFISH Motion can transform your sales pipeline. Enter your current metrics below to discover your potential return on investment."
          />
          <RoiCalculator />
        </div>
      </section>
      <CtaBand
        id="motion-booking"
        title="Ready to Scale Your Sales Pipeline?"
        text="Book a strategy call to discuss your lead generation goals and learn how we can help you connect with your ideal customers."
        button="Book a strategy call"
      />
      <NewsletterSection />
      <JsonLd
        data={[
          webPageJsonLd({ path: '/motion', name: TITLE, description: DESC }),
          breadcrumbJsonLd([{ name: 'B2B Lead Generation', path: '/motion' }]),
          serviceJsonLd({ path: '/motion', name: 'ThinkFISH Motion — B2B Lead Generation', description: DESC, audience: 'B2B companies' }),
          videoJsonLd({ id: 'vFvto1uoBYY', name: 'Transform Your Go-To-Market Strategy', description: 'How ThinkFISH Motion accelerates customer acquisition.' }),
        ]}
      />
    </>
  );
}
