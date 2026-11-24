'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

/**
 * Contact form. There is no mail backend in this repo, so on submit the message is
 * composed into a mailto: link to the ThinkFISH inbox. Swap `onSubmit` for a call to
 * your form service (Resend, Formspree, HubSpot…) when one is available.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        if (f.get('website')) return; // honeypot
        const body = [
          `Name: ${f.get('name')}`,
          `Email: ${f.get('email')}`,
          `Company: ${f.get('company') || '-'}`,
          '',
          `${f.get('message')}`,
        ].join('\n');
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
          `[${f.get('topic')}] Website enquiry`,
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <h2 style={{ fontSize: 28 }}>Send us a Message</h2>
      <div className="field">
        <label htmlFor="cf-name">Full Name *</label>
        <input id="cf-name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email Address *</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="cf-topic">How can we help? *</label>
        <select id="cf-topic" name="topic" required defaultValue="General Inquiry">
          <option>General Inquiry</option>
          <option>Fundraising Services</option>
          <option>Go-to-Market Strategy</option>
          <option>Partnership Opportunities</option>
          <option>Customer Support</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message *</label>
        <textarea id="cf-message" name="message" required />
      </div>
      <input className="honey" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-primary" type="submit">
        {sent ? 'Opening your email app…' : 'Send Message'}
      </button>
      <p className="note">Prefer email? Write to {SITE.email} — we respond within 24 hours.</p>
    </form>
  );
}
