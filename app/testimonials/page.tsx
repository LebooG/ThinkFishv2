import { CaseDetails } from '@/components/CaseStudies';
import JsonLd from '@/components/JsonLd';
import TestimonialFilter, { type VideoItem } from '@/components/TestimonialFilter';
import { CtaBand, Hero, NewsletterSection, SecHead, Stats, TestimonialCarousel } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata, videoJsonLd, webPageJsonLd } from '@/lib/seo';

const TITLE = 'Case Studies & Client Testimonials';
const DESC =
  'Hear from founders who raised capital and built sales pipelines with ThinkFISH. Real results from 500+ campaigns across fundraising and B2B lead generation.';

export const metadata = buildMetadata({ title: TITLE, description: DESC, path: '/testimonials' });

const VIDEOS: VideoItem[] = [
  { title: 'Stephen Wu - Carthage Capital', text: 'Client testimonial showcasing successful fundraising results', id: 'G4hxbuDQs3Y', kind: 'Raise' },
  { title: 'Matthew Pelo - Fore Genomics', text: 'How ThinkFISH helped accelerate their funding process', id: 'C7bApQmfLW4', kind: 'Raise' },
  { title: 'Tim Foley - Lightwell Development', text: "Quick testimonial on ThinkFISH's impact", id: 'JPd3kzpQa-Q', kind: 'Raise' },
  { title: 'Behind the Venture with ThinkFISH', text: 'In-depth look at our fundraising methodology and approach', id: 'phutsPfqUSg', kind: 'Raise' },
  { title: 'Matt Shih - PaintBox Labs', text: "Client shares their experience with ThinkFISH's process", id: 'tJqj2mMyn38', kind: 'Motion' },
  { title: 'Adam Boggs - MEAHANA Interview', text: 'Detailed interview about growth and fundraising success', id: '4EC1WMr_ec4', kind: 'Motion' },
];

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        eyebrow="Case studies & testimonials"
        title="Proof, in our clients' own words."
        lead="See how ThinkFISH has helped 500+ campaigns raise $200M+ in capital and generate thousands of qualified leads. These are their stories."
      />
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Stats
            cols="four"
            items={[
              { label: 'Clients served', value: '500+' },
              { label: 'Capital raised', value: '$200M+' },
              { label: 'Success rate', value: '95%' },
              { label: 'Qualified meetings', value: '10,000+' },
            ]}
          />
        </div>
      </section>
      <section id="case-studies">
        <div className="wrap">
          <SecHead eyebrow="Case studies" title="How the work turns into results" lead="Program-wide outcomes across fundraising and B2B lead generation. Each engagement follows the same Problem → Approach → Outcome discipline." />
          <CaseDetails />
        </div>
      </section>
      <section className="sec-surface" id="videos">
        <div className="wrap">
          <SecHead eyebrow="Video" title="Video Success Stories" lead="Hear directly from founders who've achieved remarkable results with ThinkFISH" />
          <TestimonialFilter videos={VIDEOS} />
        </div>
      </section>
      <section id="feedback">
        <div className="wrap">
          <SecHead eyebrow="Feedback" title="Real Client Feedback" lead="Authentic testimonials and messages from our satisfied clients" />
          <TestimonialCarousel />
        </div>
      </section>
      <CtaBand
        id="book-a-call"
        title="Want results like these?"
        text="Book a free strategy session and we'll map out how ThinkFISH can raise your capital or fill your pipeline."
        button="Book a strategy call"
      />
      <NewsletterSection />
      <JsonLd
        data={[
          webPageJsonLd({ path: '/testimonials', name: TITLE, description: DESC, type: 'CollectionPage' }),
          breadcrumbJsonLd([{ name: 'Testimonials', path: '/testimonials' }]),
          ...VIDEOS.map((v) => videoJsonLd({ id: v.id, name: v.title, description: v.text })),
        ]}
      />
    </>
  );
}
