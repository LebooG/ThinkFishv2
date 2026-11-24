import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { Hero } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site';

const TITLE = 'Contact ThinkFISH — Book a Call';
const DESC =
  'Get in touch with ThinkFISH. Book a call to discuss fundraising or B2B lead generation. Based in Manhattan Beach, CA, serving clients globally.';

export const metadata = buildMetadata({ title: TITLE, description: DESC, path: '/contact' });

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact Us"
        title="Let's start a conversation."
        lead="Ready to accelerate your fundraising or scale your go-to-market strategy? Our team is here to help you achieve your goals."
      />
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact">
            <div className="info">
              <div>
                <h2 style={{ fontSize: 30 }}>Get in Touch</h2>
                <p className="muted" style={{ marginTop: 10 }}>
                  Whether you&apos;re looking to raise capital or accelerate growth, we&apos;re here to provide the expertise and support you need.
                </p>
              </div>
              <div className="card">
                <span className="tag">Email Us</span>
                <h3>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </h3>
                <p>We&apos;ll respond within 24 hours</p>
              </div>
              <div className="card">
                <span className="tag">Call Us</span>
                <h3>
                  <a href={`tel:${SITE.phone.replace(/-/g, '')}`}>{SITE.phoneDisplay}</a>
                </h3>
                <p>Mon-Fri, 9AM-6PM EST</p>
              </div>
              <address className="card" style={{ fontStyle: 'normal' }}>
                <span className="tag">Visit Us</span>
                <h3>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                </h3>
              </address>
              <div className="card">
                <span className="tag">Business Hours</span>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <JsonLd
        data={[
          webPageJsonLd({ path: '/contact', name: TITLE, description: DESC, type: 'ContactPage' }),
          breadcrumbJsonLd([{ name: 'Contact', path: '/contact' }]),
        ]}
      />
    </>
  );
}
