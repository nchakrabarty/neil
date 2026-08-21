import React from 'react';

export function StatBlock({ stats = [], style }) {
  return (
    <div className="cols" style={{ '--col-min': '150px', gap: 'var(--space-8)', ...style }}>
      {stats.map((s) => (
        <div key={s.label} style={{ borderTop: '2px solid var(--color-divider)', paddingTop: 'var(--space-4)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(32px, 3.6vw, 44px)', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.value}</div>
          <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text-secondary)', maxWidth: '22ch' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
