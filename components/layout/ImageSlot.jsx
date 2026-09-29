import React from 'react';

export function ImageSlot({
  label = 'image', src, alt = '', ratio = '4 / 5',
  tone = 'mono', hoverColor = false, fit = 'cover', padded = false,
  caption, debug = false, onError, style,
}) {
  if (!src) {
    if (!debug) return null;
    return (
      <div className="image-slot" style={{ width: '100%', aspectRatio: ratio, ...style }}>
        <span>{label}</span>
      </div>
    );
  }

  const toneClass = tone === 'color' ? undefined : (hoverColor ? 'imageslot-hover' : 'grayscale');
  const img = (
    <img className={toneClass} src={src} alt={alt} onError={onError}
      style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }} />
  );

  const frame = padded ? (
    <div style={{ width: '100%', aspectRatio: ratio, background: 'var(--surface-card)', padding: 'var(--space-4)', ...style }}>
      {img}
    </div>
  ) : (
    <div style={{ width: '100%', aspectRatio: ratio, ...style }}>
      {img}
    </div>
  );

  if (caption) {
    return (
      <figure style={{ margin: 0 }}>
        {frame}
        <figcaption className="meta" style={{ marginTop: 'var(--space-3)' }}>{caption}</figcaption>
      </figure>
    );
  }
  return frame;
}
