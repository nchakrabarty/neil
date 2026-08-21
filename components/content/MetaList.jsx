import React from 'react';

export function MetaList({ items = [], style }) {
  return (
    <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 0, ...style }}>
      {items.map((it) => (
        <div key={it.label} style={{
          display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)',
          padding: '10px 0', borderTop: '1px solid color-mix(in srgb, var(--color-text) 22%, transparent)',
        }}>
          <dt style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{it.label}</dt>
          <dd style={{ margin: 0, fontSize: 14, textAlign: 'right' }}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
