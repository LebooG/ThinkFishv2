'use client';

import Link from 'next/link';
import { useState } from 'react';

/** Dismissible announcement bar (content stays in the server HTML for crawlers). */
export default function Announce() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="announce" role="region" aria-label="Announcement">
      <p>
        <span className="announce-tag">NEW</span>
        Proud to launch <b>ThinkFISH Raise &amp; Motion</b> — one growth partner for capital and customers.
        <Link href="/contact">Book a call →</Link>
      </p>
      <button type="button" className="announce-x" aria-label="Dismiss announcement" onClick={() => setOpen(false)}>
        ×
      </button>
    </div>
  );
}
