import React from 'react';

export function Field({ label, hint, required = false, children, style }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <span style={{ fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '0.01em' }}>
        {label}{required ? <span style={{ color: 'var(--color-accent)' }}> *</span> : null}
      </span>
      {children}
      {hint ? <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{hint}</span> : null}
    </label>
  );
}
