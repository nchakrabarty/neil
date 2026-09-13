import React from 'react';

const badgeTones = {
  quiet: { background: 'transparent', color: 'var(--text-accent-safe)', border: '1px solid var(--color-accent)' },
  solid: { background: 'var(--color-accent)', color: 'var(--text-on-accent)', border: '1px solid var(--color-accent)' },
};

export function PricingCard({
  badge, badgeTone = 'quiet', title, price, duration, body, bullets = [], finePrint, featured = false, style,
}) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      padding: 'var(--space-8)', height: '100%',
      border: featured ? '2px solid var(--color-accent)' : '1px solid var(--color-divider)',
      background: featured ? 'var(--color-accent-100)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      ...style,
    }}>
      {badge ? (
        <span style={{
          alignSelf: 'flex-start', fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase',
          fontWeight: 600, padding: '4px 10px', borderRadius: 'var(--radius-sm)',
          ...badgeTones[badgeTone],
        }}>{badge}</span>
      ) : null}

      <h3 style={{ margin: 0, fontSize: 'var(--text-h3)' }}>{title}</h3>

      <div>
        {price ? (
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em' }}>{price}</div>
        ) : null}
        {duration ? <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{duration}</div> : null}
      </div>

      {body ? <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)' }}>{body}</p> : null}

      {bullets.length ? (
        <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {bullets.map((b) => <li key={b} style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{b}</li>)}
        </ul>
      ) : null}

      {finePrint ? (
        <p style={{
          margin: 0, marginTop: 'auto', paddingTop: 'var(--space-3)', fontSize: 11, color: 'var(--text-muted)',
          borderTop: '1px solid color-mix(in srgb, var(--color-text) 15%, transparent)',
        }}>{finePrint}</p>
      ) : null}
    </div>
  );
}
