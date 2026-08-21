import React from 'react';

export function Testimonial({ quote, name, role, style }) {
  return (
    <figure style={{ margin: 0, borderTop: '1px solid color-mix(in srgb, var(--color-text) 22%, transparent)', paddingTop: 'var(--space-4)', ...style }}>
      <p style={{ margin: 0, fontSize: 15, maxWidth: 'var(--measure-narrow)' }}>{quote}</p>
      <figcaption style={{ marginTop: 'var(--space-3)', fontSize: 12, color: 'var(--text-muted)' }}>
        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{name}</span>{role ? ` · ${role}` : ''}
      </figcaption>
    </figure>
  );
}
