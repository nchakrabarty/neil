import React from 'react';

const tones = {
  accent: { background: 'var(--color-accent-100)', color: 'var(--color-accent-800)' },
  neutral: { background: 'var(--color-neutral-200)', color: 'var(--color-neutral-800)' },
  outline: { background: 'transparent', color: 'var(--text-accent-safe)', border: '1px solid var(--color-accent)' },
  invert: { background: 'color-mix(in srgb, var(--color-bg) 18%, transparent)', color: 'var(--color-bg)' },
};

export function Tag({ tone = 'neutral', children, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', fontSize: 11, letterSpacing: '0.04em',
      textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px',
      borderRadius: 'var(--radius-sm)', ...tones[tone], ...style,
    }}>{children}</span>
  );
}
