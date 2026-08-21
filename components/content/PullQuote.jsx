import React from 'react';

export function PullQuote({ children, attribution, invert = false, style }) {
  return (
    <blockquote style={{
      margin: 0, padding: invert ? 'var(--space-12)' : 0,
      background: invert ? 'var(--surface-invert)' : 'transparent',
      color: invert ? 'var(--text-on-invert)' : 'var(--text-primary)', ...style,
    }}>
      <p style={{
        fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)',
        lineHeight: 1.12, letterSpacing: 'var(--tracking-heading)', margin: 0, maxWidth: '26ch',
      }}>{children}</p>
      {attribution ? (
        <footer style={{ marginTop: 'var(--space-4)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
          color: invert ? 'color-mix(in srgb, var(--color-bg) 70%, transparent)' : 'var(--text-muted)' }}>{attribution}</footer>
      ) : null}
    </blockquote>
  );
}
