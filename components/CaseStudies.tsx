import Link from 'next/link';
import CountUp from './CountUp';
import { SecHead } from './ui';

type Case = {
  n: string;
  program: string;
  sector: string;
  title: string;
  prefix?: string;
  end: number;
  suffix?: string;
  metric: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  href: string;
};

/**
 * Program-level proof. Metrics are ThinkFISH's published, program-wide figures — not per-client
 * claims. Replace problem/approach/outcome copy with real client results as they are approved.
 */
const CASES: Case[] = [
  {
    n: '01',
    program: 'Raise',
    sector: 'Startups',
    title: 'Founder fundraising, end to end',
    prefix: '$',
    end: 200,
    suffix: 'M+',
    metric: 'raised by our clients',
    summary: 'Deck strategy, investor matching and outreach.',
    problem: 'Founders spend months chasing investors who are not a fit for their stage or sector.',
    approach: 'Investor persona matching, a sharpened pitch deck and a managed multichannel outreach campaign.',
    outcome: 'More of the right investor meetings, booked faster, with feedback fed back into the raise.',
    href: '/raise',
  },
  {
    n: '02',
    program: 'Motion',
    sector: 'B2B',
    title: 'Pipeline on demand',
    end: 10000,
    suffix: '+',
    metric: 'qualified meetings booked',
    summary: 'ICP targeting and automated multichannel outreach.',
    problem: 'Sales teams lose time on unqualified leads and inconsistent outbound.',
    approach: 'ICP definition, verified contact data, multi-touch campaigns and reply filtering.',
    outcome: 'A steady flow of sales-ready meetings, with performance reviewed and iterated each cycle.',
    href: '/motion',
  },
  {
    n: '03',
    program: 'Raise',
    sector: 'Real Estate · Funds',
    title: 'Capital for sponsors and fund managers',
    end: 500,
    suffix: '+',
    metric: 'campaigns delivered',
    summary: 'LP and investor identification at scale.',
    problem: 'Sponsors and managers rely on small networks and broker-led introductions.',
    approach: 'Curated investor and LP lists, tailored materials and targeted outreach.',
    outcome: 'Direct introductions to qualified capital partners, without broker dependency.',
    href: '/real-estate',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="proof">
      <div className="wrap">
        <SecHead eyebrow="Proof & credibility" title="Proven results" lead="Real results from real engagements. We measure success by outcomes, not activity." />
        <div className="cases">
          {CASES.map((c) => (
            <article className="case" key={c.n}>
              <div className="case-top">
                <span className="case-n">{c.n}</span>
                <div className="chips">
                  <span className="chip">Case study</span>
                  <span className="chip">{c.sector}</span>
                </div>
              </div>
              <h3>{c.title}</h3>
              <div className="case-metric" aria-label={`${c.prefix ?? ''}${c.end.toLocaleString('en-US')}${c.suffix ?? ''} ${c.metric}`}>
                <b aria-hidden="true">
                  <CountUp prefix={c.prefix} end={c.end} suffix={c.suffix} />
                </b>
                <span aria-hidden="true">{c.metric}</span>
              </div>
              <p className="case-sum">{c.summary}</p>
              <dl className="case-pao">
                <div>
                  <dt>Problem</dt>
                  <dd>{c.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{c.approach}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{c.outcome}</dd>
                </div>
              </dl>
              <Link className="case-link" href={c.href}>
                Read full case <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="case-all">
          <Link className="btn btn-ghost arrow" href="/testimonials">
            View all client stories
          </Link>
        </div>
      </div>
    </section>
  );
}
