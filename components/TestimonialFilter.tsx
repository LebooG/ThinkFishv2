'use client';

import Image from 'next/image';
import { useState } from 'react';

export type VideoItem = { title: string; text: string; id: string; kind: 'Raise' | 'Motion' };

export default function TestimonialFilter({ videos }: { videos: VideoItem[] }) {
  const [f, setF] = useState<'all' | 'Raise' | 'Motion'>('all');
  const tabs: { key: 'all' | 'Raise' | 'Motion'; label: string }[] = [
    { key: 'all', label: 'All Stories' },
    { key: 'Raise', label: 'Fundraising' },
    { key: 'Motion', label: 'Lead Generation' },
  ];
  return (
    <>
      <div className="filters" role="group" aria-label="Filter stories">
        {tabs.map((t) => (
          <button key={t.key} type="button" className={f === t.key ? 'on' : ''} aria-pressed={f === t.key} onClick={() => setF(t.key)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid g3">
        {videos
          .filter((v) => f === 'all' || v.kind === f)
          .map((v) => (
            <article className="vcard" key={v.id}>
              <a
                className="thumb"
                href={`https://www.youtube.com/watch?v=${v.id}`}
                rel="noopener"
                target="_blank"
                aria-label={`Watch: ${v.title}`}
              >
                <Image
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  width={480}
                  height={360}
                  sizes="(max-width: 980px) 100vw, 380px"
                />
                <div className="play">
                  <span />
                </div>
              </a>
              <span className="chip" style={{ justifySelf: 'start' }}>
                ThinkFISH {v.kind}
              </span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
      </div>
    </>
  );
}
