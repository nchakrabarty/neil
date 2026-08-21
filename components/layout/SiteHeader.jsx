import React from 'react';
import { Button } from '../core/Button.jsx';
import { Logo } from '../core/Logo.jsx';

export function SiteHeader({ brand = 'Neil Chakrabarty', items = [], current, onNavigate, cta, style }) {
  return (
    <header className="site-header" style={{
      padding: 'var(--space-6) var(--page-gutter)',
      borderBottom: '2px solid var(--color-divider)', ...style,
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(items[0] && items[0].id); }}
        aria-label={brand}
        className="site-brand"
        style={{ textDecoration: 'none', marginRight: 'auto', display: 'flex', alignSelf: 'center' }}>
        <Logo variant="lockup" size={34} name={brand} />
      </a>
      <nav className="site-nav">
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`}
            aria-current={current === it.id ? 'page' : undefined}
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(it.id); }}
            style={{
              fontSize: 14, textDecoration: 'none',
              color: current === it.id ? 'var(--color-accent)' : 'var(--text-primary)',
              paddingBottom: 2,
              borderBottom: current === it.id ? '2px solid var(--color-accent)' : '2px solid transparent',
            }}>{it.label}</a>
        ))}
      </nav>
      {cta ? <Button size="sm" onClick={cta.onClick} href={cta.href}>{cta.label}</Button> : null}
    </header>
  );
}
