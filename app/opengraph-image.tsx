import { ImageResponse } from 'next/og';

export const alt = 'ThinkFISH — Fundraising or Go-to-Market';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0A0A',
          color: '#fff',
          padding: 72,
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>ThinkFISH</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>
            Fundraising or Go-to-Market.
          </div>
          <div style={{ fontSize: 40, color: '#A3A3A3' }}>What&apos;s your next move?</div>
        </div>
        <div style={{ display: 'flex', gap: 48, fontSize: 28, color: '#D4D4D4' }}>
          <span>$200M+ raised</span>
          <span>10,000+ meetings</span>
          <span>500+ clients</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
