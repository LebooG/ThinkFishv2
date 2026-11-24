'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SELECTOR =
  '.sec-head,.card,.step,.prim,.stat,.person,.vcard,.road,.case,.quote,.panels,.lic,.cta,.news,.form,.dfy,.contact .info>*';

/** Scroll-reveal: progressive enhancement. Content is fully visible without JS. */
export default function Reveal() {
  const path = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('reveal', 'in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add('in');
            io.unobserve(x.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((e, i) => {
      e.classList.add('reveal');
      e.style.setProperty('--d', `${(i % 4) * 0.07}s`);
      io.observe(e);
    });
    return () => io.disconnect();
  }, [path]);

  return null;
}
