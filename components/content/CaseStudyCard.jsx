import React from 'react';
import { Tag } from '../core/Tag.jsx';

export function CaseStudyCard({
  client, headline, result, tags = [], year,
  thumb, thumbAlt, thumbComponent, thumbFallback,
  ctaLabel, href, onClick, style,
}) {
  const [hover, setHover] = React.useState(false);
  const DSX = window.DSX || {};
  const ImageSlot = DSX.ImageSlot;
  const ThumbComponent = thumbComponent ? DSX[thumbComponent] : null;

  return (
    <a href={href || '#'} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', textDecoration: 'none',
        color: 'var(--text-primary)', padding: 'var(--space-6)',
        background: hover ? 'var(--surface-card)' : 'transparent',
        borderTop: '2px solid var(--color-divider)',
        transition: 'background var(--duration-base) var(--ease-standard)', ...style,
      }}>
      {ThumbComponent ? (
        <div style={{ width: '100%', aspectRatio: '16 / 10', background: 'var(--surface-card)' }}>
          <ThumbComponent />
        </div>
      ) : thumb && ImageSlot ? (
        <ImageSlot src={thumb} alt={thumbAlt || headline} ratio="16 / 10" fit="contain" padded tone="mono" hoverColor />
      ) : thumbFallback ? (
        <div style={{
          width: '100%', aspectRatio: '16 / 10', background: 'var(--surface-card)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-display-3)' }}>{thumbFallback}</span>
        </div>
      ) : null}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <span style={{ color: 'var(--color-accent)' }}>{client}</span>
        <span style={{ color: 'var(--text-muted)' }}>{year}</span>
      </div>
      <h3 style={{ margin: 0, fontSize: 'var(--text-h3)', maxWidth: '20ch' }}>{headline}</h3>
      {result ? <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)' }}>{result}</p> : null}
      {tags.length ? <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div> : null}
      {ctaLabel ? <span style={{ fontSize: 13, color: 'var(--text-accent-safe)', marginTop: tags.length ? 0 : 'auto' }}>{ctaLabel}</span> : null}
    </a>
  );
}
