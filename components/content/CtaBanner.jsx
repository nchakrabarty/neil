import React from 'react';
import { Button } from '../core/Button.jsx';

export function CtaBanner({ title = 'Tell me what is stuck.', buttonLabel = 'Book a 30-minute call', onClick, style }) {
  return (
    <section style={{ background: 'var(--surface-poster)', color: 'var(--text-on-accent)', marginTop: 'var(--space-20)', ...style }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter)', display: 'flex', gap: 'var(--space-16)', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <h2 className="display-2" style={{ flex: '1 1 420px', maxWidth: '14ch', margin: 0 }}>{title}</h2>
        <Button size="lg" variant="invert" onClick={onClick} iconRight={<span>→</span>}>{buttonLabel}</Button>
      </div>
    </section>
  );
}
