import JsonLd from './JsonLd';
import { NewsletterSection, Hero } from './ui';
import { loadLegal } from '@/lib/legal';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo';

export default function LegalPage({
  file,
  title,
  lead,
  path,
  caps,
}: {
  file: string;
  title: string;
  lead: string;
  path: string;
  caps?: boolean;
}) {
  const { toc, nodes } = loadLegal(file, caps);
  return (
    <>
      <Hero eyebrow="Legal" title={title} lead={lead} />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="legal">
            <nav className="toc" aria-label="On this page">
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`}>
                  {t.title}
                </a>
              ))}
            </nav>
            <article className="prose">{nodes}</article>
          </div>
        </div>
      </section>
      <NewsletterSection />
      <JsonLd
        data={[
          webPageJsonLd({ path, name: title, description: lead }),
          breadcrumbJsonLd([{ name: title, path }]),
        ]}
      />
    </>
  );
}
