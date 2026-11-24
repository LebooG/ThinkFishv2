'use client';

import { useState } from 'react';

/**
 * Newsletter signup. Subscriptions are handled on Substack, so this form hands the
 * visitor to the Substack subscribe page with their email pre-filled.
 */
export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <div>
      <form
        action="https://startupdealdesk.substack.com/subscribe"
        method="get"
        target="_blank"
        onSubmit={() => setDone(true)}
      >
        <label className="sr-only" htmlFor="nl-email" style={{ position: 'absolute', left: -9999 }}>
          Email address
        </label>
        <input id="nl-email" name="email" type="email" required placeholder="Email address" autoComplete="email" />
        <button className="btn btn-primary" type="submit">
          {done ? 'Opening Substack…' : 'Subscribe'}
        </button>
      </form>
      <p style={{ marginTop: 16 }}>
        <a
          className="arrow"
          style={{ color: 'var(--ink)', fontWeight: 600, borderBottom: '1px solid var(--ink)' }}
          href="https://startupdealdesk.substack.com/"
          rel="noopener"
        >
          Or read our newsletter on Substack{' '}
        </a>
      </p>
    </div>
  );
}
