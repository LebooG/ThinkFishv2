import Link from 'next/link';
import type { ReactNode } from 'react';
import { BOOKING_URL } from '@/lib/site';

/** CTA that opens the Calendly scheduler (new tab); falls back to /contact if no link is configured. */
export function BookLink({ className, children }: { className?: string; children: ReactNode }) {
  if (!BOOKING_URL) {
    return (
      <Link className={className} href="/contact">
        {children}
      </Link>
    );
  }
  return (
    <a className={className} href={BOOKING_URL} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

/** Inline Calendly scheduler. No script needed — Calendly's embed page is framed directly. */
export function CalendlyEmbed({ height = 720 }: { height?: number }) {
  if (!BOOKING_URL) {
    return (
      <div className="book-embed book-empty">
        <h2 style={{ fontSize: 26 }}>Book a strategy call</h2>
        <p className="muted">Online scheduling is being set up. Email us and we&apos;ll find a time that works.</p>
        <a className="btn btn-primary" href="mailto:hello@thinkfish.co">
          hello@thinkfish.co
        </a>
      </div>
    );
  }
  const src = `${BOOKING_URL}${BOOKING_URL.includes('?') ? '&' : '?'}embed_type=Inline&hide_gdpr_banner=1&primary_color=0a1f26`;
  return (
    <div className="book-embed">
      <iframe src={src} title="Book a call with ThinkFISH" loading="lazy" style={{ height }} />
      <a className="book-alt" href={BOOKING_URL} target="_blank" rel="noopener">
        Open scheduler in a new tab →
      </a>
    </div>
  );
}
