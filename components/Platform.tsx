import Link from 'next/link';
import type { ReactNode } from 'react';

/* ---------- original isometric illustration kit (light-blue accent on neutral slabs) ---------- */
type Tile = { x: number; y: number; w: number; t?: number; blue?: boolean; label?: string; lx?: number; ly?: number; icon?: 'globe' | 'bank' | 'coin' | 'bars' | 'dot' };
type Link2 = [number, number, number, number, boolean?]; // x1,y1,x2,y2,blue
type Scene = { tiles: Tile[]; links: Link2[] };

const P = (pts: number[][]) => pts.map((p) => p.join(',')).join(' ');

function IsoTile({ x, y, w, t = 10, blue, label, lx, ly, icon }: Tile) {
  const h = w / 2;
  const top = blue ? '#D6E9FF' : '#FFFFFF';
  const left = blue ? '#A8CEF8' : '#E8EBED';
  const right = blue ? '#8DBDF2' : '#DADFE2';
  const stroke = blue ? '#4F95E6' : '#B9C1C6';
  return (
    <g>
      <polygon points={P([[x - w, y], [x, y + h], [x, y + h + t], [x - w, y + t]])} fill={left} stroke={stroke} strokeWidth="1" strokeLinejoin="round" />
      <polygon points={P([[x, y + h], [x + w, y], [x + w, y + t], [x, y + h + t]])} fill={right} stroke={stroke} strokeWidth="1" strokeLinejoin="round" />
      <polygon points={P([[x, y - h], [x + w, y], [x, y + h], [x - w, y]])} fill={top} stroke={stroke} strokeWidth="1" strokeLinejoin="round" />
      {icon === 'globe' && (
        <g fill="none" stroke="#5B6B72" strokeWidth="1">
          <ellipse cx={x} cy={y} rx={w * 0.3} ry={h * 0.3} />
          <ellipse cx={x} cy={y} rx={w * 0.12} ry={h * 0.3} />
          <line x1={x - w * 0.3} y1={y} x2={x + w * 0.3} y2={y} />
        </g>
      )}
      {icon === 'bank' && (
        <g fill="none" stroke="#5B6B72" strokeWidth="1">
          <polygon points={P([[x - 9, y - 1], [x, y - 7], [x + 9, y - 1]])} />
          <line x1={x - 6} y1={y} x2={x - 6} y2={y + 6} />
          <line x1={x} y1={y} x2={x} y2={y + 6} />
          <line x1={x + 6} y1={y} x2={x + 6} y2={y + 6} />
        </g>
      )}
      {icon === 'coin' && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <ellipse key={i} cx={x} cy={y - 2 - i * 4} rx={w * 0.33} ry={h * 0.33} fill="#D6E9FF" stroke="#4F95E6" strokeWidth="1" />
          ))}
          <text x={x} y={y - 12} fontSize="9" textAnchor="middle" fill="#2F6FBF" fontWeight="700">$</text>
        </g>
      )}
      {icon === 'bars' && (
        <g fill="none" stroke={blue ? '#3F83D3' : '#8A979D'} strokeWidth="1.2" strokeLinecap="round">
          <line x1={x - w * 0.3} y1={y + 3} x2={x} y2={y + h * 0.35} />
          <line x1={x - w * 0.3} y1={y - 3} x2={x + w * 0.3} y2={y + h * 0.3 - 3} />
          <line x1={x - w * 0.05} y1={y - h * 0.4} x2={x + w * 0.3} y2={y - 4} />
        </g>
      )}
      {icon === 'dot' && <circle cx={x} cy={y} r={w * 0.14} fill="none" stroke="#5B6B72" strokeWidth="1.2" />}
      {label ? (
        <g>
          <line x1={lx ?? x} y1={(ly ?? y - h - 18) + 6} x2={lx ?? x} y2={y - h + 2} stroke="#8A979D" strokeWidth="0.8" />
          <rect x={(lx ?? x) - 2} y={(ly ?? y - h - 18) + 3} width="4" height="4" fill="#fff" stroke="#8A979D" strokeWidth="0.8" />
          <text x={lx ?? x} y={ly ?? y - h - 18} textAnchor="middle" fontSize="7.5" letterSpacing=".9" fill="#4B5A60" fontFamily="var(--mono)">{label}</text>
        </g>
      ) : null}
    </g>
  );
}

function Iso({ scene, title }: { scene: Scene; title: string }) {
  const tiles = [...scene.tiles].sort((a, b) => a.y - b.y);
  return (
    <svg viewBox="0 0 480 340" role="img" aria-label={title} className="iso">
      <defs>
        <pattern id="floor" width="40" height="20" patternUnits="userSpaceOnUse" patternTransform="translate(0 8)">
          <path d="M0 10 L20 0 L40 10 L20 20 Z" fill="none" stroke="#E4E8EA" strokeWidth=".7" />
        </pattern>
      </defs>
      <rect width="480" height="340" fill="url(#floor)" opacity=".7" />
      {scene.links.map(([a, b, c, d, blue], i) => (
        <line key={i} x1={a} y1={b} x2={c} y2={d} stroke={blue ? '#4F95E6' : '#8A979D'} strokeWidth="1.1" strokeDasharray="4 4" />
      ))}
      {tiles.map((t, i) => (
        <g key={i} className={t.blue ? 'iso-float' : undefined}>
          <IsoTile {...t} />
        </g>
      ))}
    </svg>
  );
}

const SCENES: Record<string, Scene> = {
  match: {
    links: [[170, 150, 230, 185], [330, 120, 300, 170, true]],
    tiles: [
      { x: 150, y: 130, w: 34, t: 8, icon: 'globe', label: 'INVESTORS', ly: 92 },
      { x: 250, y: 110, w: 34, t: 8, icon: 'bank', label: 'STAGE FIT', ly: 72 },
      { x: 330, y: 100, w: 40, t: 8, blue: true, icon: 'dot', label: 'BEST MATCH', ly: 52 },
      { x: 280, y: 215, w: 120, t: 18 },
      { x: 250, y: 205, w: 28, t: 5, icon: 'bars' },
      { x: 305, y: 200, w: 28, t: 5, icon: 'bars' },
      { x: 280, y: 228, w: 28, t: 5, icon: 'bars' },
      { x: 335, y: 224, w: 28, t: 5, icon: 'bars' },
    ],
  },
  pitch: {
    links: [[120, 235, 200, 215], [330, 170, 300, 200, true]],
    tiles: [
      { x: 150, y: 245, w: 70, t: 14, label: 'YOUR DECK', ly: 190 },
      { x: 300, y: 215, w: 76, t: 16, blue: true, icon: 'bars', label: 'AI FEEDBACK', ly: 150 },
      { x: 300, y: 205, w: 36, t: 4, icon: 'bars' },
      { x: 395, y: 285, w: 36, t: 8, icon: 'dot', label: 'INVESTOR VIEW', ly: 248 },
    ],
  },
  dd: {
    links: [[250, 140, 250, 175], [160, 250, 215, 225], [340, 250, 285, 225, true]],
    tiles: [
      { x: 250, y: 120, w: 40, t: 8, blue: true, icon: 'dot', label: 'DATA ROOM', ly: 80 },
      { x: 250, y: 215, w: 80, t: 16, icon: 'bars' },
      { x: 150, y: 265, w: 34, t: 8, icon: 'globe', label: 'FOUNDER', ly: 228 },
      { x: 350, y: 265, w: 34, t: 8, icon: 'bank', label: 'INVESTOR', ly: 228 },
    ],
  },
  leads: {
    links: [[160, 150, 220, 190], [340, 150, 290, 190, true]],
    tiles: [
      { x: 150, y: 125, w: 32, t: 8, icon: 'globe', label: 'ICP', ly: 90 },
      { x: 350, y: 125, w: 32, t: 8, blue: true, icon: 'dot', label: 'VERIFIED', ly: 90 },
      { x: 250, y: 225, w: 110, t: 18 },
      { x: 220, y: 215, w: 26, t: 5, icon: 'bars' },
      { x: 275, y: 210, w: 26, t: 5, icon: 'bars' },
      { x: 250, y: 238, w: 26, t: 5, icon: 'bars' },
    ],
  },
  outreach: {
    links: [[250, 190, 150, 120], [250, 190, 250, 100], [250, 190, 350, 120, true]],
    tiles: [
      { x: 150, y: 110, w: 28, t: 7, icon: 'dot', label: 'EMAIL', ly: 76 },
      { x: 250, y: 92, w: 28, t: 7, icon: 'dot', label: 'LINKEDIN', ly: 58 },
      { x: 350, y: 110, w: 28, t: 7, blue: true, icon: 'dot', label: 'PHONE', ly: 76 },
      { x: 250, y: 235, w: 100, t: 16, blue: true, icon: 'bars' },
    ],
  },
  analytics: {
    links: [[170, 245, 230, 220], [330, 175, 300, 205, true]],
    tiles: [
      { x: 150, y: 255, w: 40, t: 8, icon: 'bank', label: 'PIPELINE', ly: 215 },
      { x: 270, y: 225, w: 90, t: 14, icon: 'bars' },
      { x: 345, y: 160, w: 44, t: 8, blue: true, icon: 'coin', label: 'MEETINGS BOOKED', ly: 108 },
    ],
  },
};

type Row = { n: string; title: string; sub: string; text: string; cta: string; href: string; scene: keyof typeof SCENES; chips: string[]; alt: string };

const ROWS: Row[] = [
  { n: '01', title: 'Investor Matching', sub: 'Reach the investors who fit your stage', text: 'AI-assisted matching connects you with investors by industry, stage and funding need — so every meeting is a relevant one.', cta: 'Explore Raise', href: '/raise', scene: 'match', chips: ['Industry & stage', 'Right investors'], alt: 'Investor matching: investors and stage fit feeding a best-match profile' },
  { n: '02', title: 'Pitch Optimization', sub: 'Sharpen the deck before it goes out', text: 'AI-powered feedback on your pitch deck and presentation, tuned to what investors in your space look for.', cta: 'Explore Raise', href: '/raise', scene: 'pitch', chips: ['Deck feedback', 'Investor view'], alt: 'Pitch optimization: a deck passing through AI feedback' },
  { n: '03', title: 'Due Diligence Hub', sub: 'One secure room for every document', text: 'Secure document management and investor communication, so diligence stays organized from first look to close.', cta: 'Explore Raise', href: '/raise', scene: 'dd', chips: ['Secure data room', 'Investor comms'], alt: 'Due diligence hub connecting founder and investor through a data room' },
  { n: '04', title: 'Smart Lead Generation', sub: 'Find and qualify the right buyers', text: 'AI-powered prospecting identifies and qualifies high-value B2B leads against your ideal customer profile.', cta: 'Explore Motion', href: '/motion', scene: 'leads', chips: ['ICP targeting', 'Verified contacts'], alt: 'Smart lead generation: ICP and verified contacts feeding a lead list' },
  { n: '05', title: 'Automated Outreach', sub: 'Every channel, one sequence', text: 'Personalized email sequences and multi-channel campaigns across email, LinkedIn and phone, run end to end.', cta: 'Explore Motion', href: '/motion', scene: 'outreach', chips: ['Multi-channel', 'Personalized'], alt: 'Automated outreach across email, LinkedIn and phone from one sequence' },
  { n: '06', title: 'Conversion Analytics', sub: 'See what turns into meetings', text: 'Track performance and optimize the funnel with detailed insight from first touch to booked meeting.', cta: 'Explore Motion', href: '/motion', scene: 'analytics', chips: ['Funnel insight', 'Meetings booked'], alt: 'Conversion analytics from pipeline to meetings booked' },
];

export default function Platform(): ReactNode {
  return (
    <div className="plat" id="platform">
      <div className="plat-head">
        <div>
          <span className="plat-eyebrow">The platform</span>
          <h2>
            Two engines.
            <br />
            Endless growth.
          </h2>
        </div>
        <p>
          Fundraising or go-to-market — ThinkFISH runs both done-for-you. Six capabilities across Raise and Motion, one growth partner, one accountable team.
        </p>
      </div>
      {ROWS.map((r, i) => (
        <div className={`plat-row${i % 2 ? ' flip' : ''}`} key={r.n}>
          <div className="plat-text">
            <span className="plat-n">{r.n}</span>
            <h3>{r.title}</h3>
            <b>{r.sub}</b>
            <p>{r.text}</p>
            <Link className="plat-btn" href={r.href}>
              {r.cta} <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className="plat-art">
            <Iso scene={SCENES[r.scene]} title={r.alt} />
            <ul className="plat-chips">
              {r.chips.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
