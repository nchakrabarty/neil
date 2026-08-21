import React from 'react';
import { Tag } from '../core/Tag.jsx';

export function ServiceRow({ index, title, body, price, cadence, tags = [], action, style }) {
  return (
    <div className="svc-row" style={{
      padding: 'var(--space-8) 0', borderTop: '1px solid color-mix(in srgb, var(--color-text) 22%, transparent)', ...style,
    }}>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', paddingTop: 6, fontVariantNumeric: 'tabular-nums' }}>{index}</div>
      <div>
        <h3 style={{ margin: 0, fontSize: 'var(--text-h3)' }}>{title}</h3>
        {tags.length ? (
          <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
            {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        ) : null}
      </div>
      <p className="svc-body" style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)' }}>{body}</p>
      <div className="svc-price">
        {price ? <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em' }}>{price}</div> : null}
        {cadence ? <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{cadence}</div> : null}
        {action ? <div className="svc-action" style={{ marginTop: 12 }}>{action}</div> : null}
      </div>
    </div>
  );
}
