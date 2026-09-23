import React from 'react';
import { Button } from '../core/Button.jsx';

export function CtaBanner({ title = "Let's talk about what you're building.", buttonLabel = 'Get in touch', onClick, style }) {
  return (
    <section style={{ background: 'var(--surface-poster)', color: 'var(--text-on-accent)', marginTop: 'var(--space-20)', ...style }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter)', display: 'flex', gap: 'var(--space-8)', alignItems: 'center', flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <Button size="lg" variant="invert" onClick={onClick} iconRight={<span>→</span>}>{buttonLabel}</Button>
      </div>
    </section>
  );
}
