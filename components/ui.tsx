import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Newsletter from './Newsletter';

export function Hero({
  eyebrow,
  title,
  lead,
  children,
  stats,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
  stats?: ReactNode;
}) {
  return (
    <section className="hero">
      <div className="wrap hero-pad">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        {children ? <div className="hero-cta">{children}</div> : null}
      </div>
      {stats ? <div className="wrap hero-stats-wrap" style={{ paddingBottom: 88 }}>{stats}</div> : null}
    </section>
  );
}

export function SecHead({
  eyebrow,
  title,
  lead,
  center,
  as: Tag = 'h2',
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
  as?: 'h2' | 'h3';
}) {
  return (
    <div className={`sec-head${center ? ' center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <Tag>{title}</Tag>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

export type Stat = { label: string; value: string; note?: string };

export function Stats({ items, cols }: { items: Stat[]; cols?: 'three' | 'four' }) {
  return (
    <div className={`stats${cols ? ` ${cols}` : ''}`}>
      {items.map((s) => (
        <div className="stat" key={s.label + s.value}>
          <small>{s.label}</small>
          <b>{s.value}</b>
          {s.note ? <span>{s.note}</span> : null}
        </div>
      ))}
    </div>
  );
}

export type StepItem = { title: string; text: string; activities?: string[] };

export function Steps({ items, label = 'Step' }: { items: StepItem[]; label?: string }) {
  return (
    <ol className="steps" style={{ listStyle: 'none' }}>
      {items.map((s, i) => (
        <li className="step" key={s.title}>
          <span className="n">
            {label.toUpperCase()} {String(i + 1).padStart(2, '0')}
          </span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          {s.activities ? (
            <details>
              <summary>Key activities</summary>
              <ul>
                {s.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </details>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export type CardItem = { title: string; text: string; big?: string; tag?: string };

export function Cards({ items, cols = 'g3' }: { items: CardItem[]; cols?: 'g2' | 'g3' | 'g4' }) {
  return (
    <div className={`grid ${cols}`}>
      {items.map((c) => (
        <article className="card" key={c.title}>
          {c.tag ? <span className="tag">{c.tag}</span> : null}
          {c.big ? <span className="big">{c.big}</span> : null}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </article>
      ))}
    </div>
  );
}

export function Prim({
  num,
  title,
  text,
  ticks,
  chips,
  cta,
  href,
  art,
  flip,
}: {
  num: string;
  title: string;
  text: string;
  ticks: string[];
  chips: string[];
  cta: string;
  href: string;
  art: ReactNode;
  flip?: boolean;
}) {
  return (
    <div className={`prim${flip ? ' flip' : ''}`}>
      <div className="prim-text">
        <span className="num">{num}</span>
        <h3 style={{ fontSize: 32, letterSpacing: '-.025em' }}>{title}</h3>
        <p>{text}</p>
        <ul className="ticks">
          {ticks.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="chips">
          {chips.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
        <Link className="btn btn-ghost arrow" href={href}>
          {cta}
        </Link>
      </div>
      <div className="art" role="img" aria-label={`${title} illustration`}>
        {art}
      </div>
    </div>
  );
}

export function VideoBlock({
  eyebrow,
  title,
  text,
  id,
  label,
}: {
  eyebrow: string;
  title: string;
  text: string;
  id: string;
  label: string;
}) {
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <section className="sec-surface">
      <div className="wrap">
        <div className="video">
          <div className="vcard">
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p className="lead">{text}</p>
            <div>
              <a className="btn btn-dark arrow" href={url} rel="noopener" target="_blank">
                Watch · 5:42
              </a>
            </div>
          </div>
          <a className="thumb" href={url} rel="noopener" target="_blank" aria-label={label}>
            <Image
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              width={1280}
              height={720}
              sizes="(max-width: 980px) 100vw, 600px"
            />
            <div className="play">
              <span />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  id,
  title,
  text,
  ticks,
  button,
  href = '/contact',
}: {
  id: string;
  title: string;
  text: string;
  ticks?: string[];
  button: string;
  href?: string;
}) {
  return (
    <div className="band" id={id}>
      <div className="wrap">
        <div className="cta">
          <div style={{ position: 'relative' }}>
            <h2>{title}</h2>
            <p>{text}</p>
            {ticks ? (
              <ul className="ticks" style={{ marginTop: 20 }}>
                {ticks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="cta-actions">
            <Link className="btn btn-light arrow" href={href}>
              {button}
            </Link>
            <span style={{ color: '#737373', fontSize: 13.5 }}>Free 30-minute strategy session · No obligation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCarousel() {
  return (
    <div className="carousel">
      <figure>
        <Image
          src="https://www.thinkfish.co/images/testimonials/TF%20TESTIMONIALS1.webp"
          alt="Founder testimonial about working with ThinkFISH"
          width={680}
          height={480}
          sizes="340px"
        />
      </figure>
    </div>
  );
}

export function WhySection() {
  const items: CardItem[] = [
    { title: 'Proven Track Record', text: 'Over $200M+ raised by our clients with a systematic approach to fundraising and investor relations.', big: '$200M+', tag: 'Raised' },
    { title: 'Expert Network', text: 'Deep connections with VCs, angels, and decision-makers across industries and growth stages.', big: '500+', tag: 'Clients served' },
    { title: 'Precision Targeting', text: 'Data-driven approach to identify and connect with the right investors and customers for your business.', big: '87%', tag: 'Match rate' },
    { title: 'Accelerated Growth', text: 'Streamlined processes and proven methodologies that reduce time-to-close and maximize success rates.', big: '3x', tag: 'Faster results' },
  ];
  return (
    <section className="sec-surface">
      <div className="wrap">
        <SecHead
          eyebrow="Why ThinkFISH"
          title="Your Growth Partner of Choice"
          lead="ThinkFISH isn't just another service provider — we're your strategic growth partner. With deep expertise in both capital raising and customer acquisition, we fuel your business growth with proven methodologies and an extensive network of industry connections."
        />
        <Cards items={items} cols="g4" />
      </div>
    </section>
  );
}

export function ResultsStrip() {
  return (
    <section style={{ padding: '0 0 24px' }}>
      <div className="wrap">
        <Stats
          cols="three"
          items={[
            { label: 'Proven results', value: '$200M+', note: 'Total raised' },
            { label: 'Campaigns', value: '500+', note: 'Delivered' },
            { label: 'Meetings', value: '10K+', note: 'Investor & B2B' },
          ]}
        />
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="news">
          <div>
            <span className="eyebrow">Weekly Newsletter · Early access to live deals</span>
            <h2 style={{ marginTop: 14 }}>Join the ThinkFISH Newsletter</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Get exclusive insights, case studies, and growth strategies delivered every Tuesday.
            </p>
            <div className="mini">
              <div>
                <b>Weekly Insights</b>Actionable strategies, every Tuesday
              </div>
              <div>
                <b>Exclusive Content</b>Case studies and insider tips not shared elsewhere
              </div>
              <div>
                <b>No Spam</b>Unsubscribe anytime with one click
              </div>
            </div>
          </div>
          <Newsletter />
        </div>
      </div>
    </section>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
