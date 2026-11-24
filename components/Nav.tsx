'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { MEGA, type MegaMenu } from '@/lib/site';

const isExternal = (h: string) => h.startsWith('http');

function A({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void }) {
  return isExternal(href) ? (
    <a href={href} className={className} rel="noopener" onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function Panel({ m, close }: { m: MegaMenu; close: () => void }) {
  return (
    <div className="mega" role="region" aria-label={m.label}>
      <div className="mega-in">
        <div className="mega-cols">
          {m.columns.map((c) => (
            <div key={c.title}>
              <p className="mega-title">{c.title}</p>
              <ul>
                {c.links.map((l) => (
                  <li key={l.href}>
                    <A href={l.href} className="mega-link" onClick={close}>
                      <span className="mega-ico" aria-hidden="true">
                        {l.icon}
                      </span>
                      <span>
                        <b>{l.label}</b>
                        <small>{l.desc}</small>
                      </span>
                    </A>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <A href={m.feature.href} className="mega-feature" onClick={close}>
          <span className="mega-eyebrow">{m.feature.eyebrow}</span>
          <strong>{m.feature.title}</strong>
          <span>{m.feature.text}</span>
          <em>{m.feature.cta} →</em>
        </A>
      </div>
    </div>
  );
}

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState<string | null>(null); // open mega panel (desktop hover/focus + mobile accordion)
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const close = () => {
    setOpen(null);
    setMobile(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => close(), [path]);

  const enter = (l: string) => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(l);
  };
  const leave = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' mega-open' : ''}`} onMouseLeave={leave}>
      <div className="nav-in">
        <Link className="brand" href="/" aria-label="ThinkFISH home" onClick={close}>
          think<b>fish</b>
        </Link>
        <nav aria-label="Primary" className={`menu-wrap${mobile ? ' open' : ''}`}>
          <ul className="menu" id="menu">
            {MEGA.map((m) => (
              <li key={m.label} className={open === m.label ? 'is-open' : ''} onMouseEnter={() => enter(m.label)}>
                <button
                  type="button"
                  className="lnk"
                  aria-expanded={open === m.label}
                  onClick={() => setOpen(open === m.label ? null : m.label)}
                  onFocus={() => enter(m.label)}
                >
                  {m.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <Panel m={m} close={close} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <Link className="nav-login" href="/testimonials" onClick={close}>
            Results
          </Link>
          <Link className="btn btn-primary btn-sm" href="/contact" onClick={close}>
            Contact Us
          </Link>
          <button className="burger" type="button" aria-label="Toggle menu" aria-expanded={mobile} aria-controls="menu" onClick={() => setMobile((v) => !v)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
