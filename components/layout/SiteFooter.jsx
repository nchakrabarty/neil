import React from 'react';
import { Kicker } from '../core/Kicker.jsx';
import { Logo } from '../core/Logo.jsx';

export function SiteFooter({ brand = 'Neil Chakrabarty', blurb, columns = [], note, style }) {
  return (
    <footer style={{
      borderTop: '2px solid var(--color-divider)', marginTop: 'var(--space-24)',
      padding: 'var(--space-16) var(--page-gutter) var(--space-10)', ...style,
    }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', display: 'flex', gap: 'var(--space-16)', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px' }}>
          <Logo variant="stacked" size={44} name={brand} style={{ display: 'flex' }} />
          {blurb ? <p style={{ maxWidth: 'var(--measure-narrow)', color: 'var(--text-secondary)', marginTop: 20 }}>{blurb}</p> : null}
        </div>
        {columns.map((col) => (
          <div key={col.title} style={{ flex: '0 0 auto', minWidth: 150 }}>
            <Kicker>{col.title}</Kicker>
            <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href || '#'} style={{ fontSize: 14, color: 'var(--text-primary)', textDecoration: 'none' }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {note ? (
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', paddingTop: 'var(--space-10)' }}>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{note}</div>
        </div>
      ) : null}
    </footer>
  );
}
