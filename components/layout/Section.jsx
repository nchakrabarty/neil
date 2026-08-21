import React from 'react';
import { Kicker } from '../core/Kicker.jsx';

export function Section({ kicker, title, aside, rule = true, wide = false, children, style }) {
  return (
    <section style={{
      maxWidth: wide ? 'none' : 'var(--page-max)',
      margin: '0 auto', padding: `var(--space-20) var(--page-gutter)`,
      borderTop: rule ? '2px solid var(--color-divider)' : 'none', ...style,
    }}>
      {(kicker || title) ? (
        <div style={{ display: 'flex', gap: 'var(--space-12)', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
          <div style={{ flex: '1 1 420px' }}>
            {kicker ? <Kicker accent style={{ marginBottom: 12 }}>{kicker}</Kicker> : null}
            {title ? <h2 style={{ fontSize: 'var(--text-display-3)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)', margin: 0, maxWidth: '18ch' }}>{title}</h2> : null}
          </div>
          {aside ? <div style={{ flex: '1 1 300px', maxWidth: 'var(--measure-narrow)', color: 'var(--text-secondary)' }}>{aside}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
