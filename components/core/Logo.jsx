import React from 'react';

/* The mark is 4a: an ink square, "Neil." set in Archivo 800 flush to the
   bottom-left corner, the period in accent. Everything scales from `size`. */
export function Logo({
  variant = 'lockup', size = 34, name = 'Neil Chakrabarty',
  onDark = false, style,
}) {
  /* The square is fluid between a 28px floor (below which "Neil." stops
     reading) and `size`, so the logo scales with the device without a
     breakpoint. Everything inside is derived from that one length. */
  const m = size <= 28 ? `${size}px`
    : `clamp(${Math.max(28, Math.round(size * 0.76))}px, ${Math.round(size * 0.55)}px + 1.4vw, ${size}px)`;
  const mark = (
    <span aria-hidden="true" style={{
      width: m, height: m, flex: 'none', display: 'flex', alignItems: 'flex-end',
      padding: `0 calc(${m} * 0.107) calc(${m} * 0.107)`,
      background: onDark ? 'var(--color-bg)' : 'var(--color-text)',
      color: onDark ? 'var(--color-text)' : 'var(--color-bg)',
      fontFamily: 'var(--font-heading)', fontWeight: 800,
      fontSize: `calc(${m} * 0.3)`, letterSpacing: '-0.03em', lineHeight: 1,
    }}>
      Neil<span style={{ color: onDark ? 'var(--color-accent)' : 'var(--color-accent-400)' }}>.</span>
    </span>
  );

  if (variant === 'mark') {
    return <span role="img" aria-label={name} style={{ display: 'inline-flex', ...style }}>{mark}</span>;
  }

  const wordmark = (
    <span style={{
      fontFamily: 'var(--font-heading)', fontWeight: 800,
      fontSize: `calc(${m} * 0.56)`, letterSpacing: '-0.03em', lineHeight: 1,
      color: onDark ? 'var(--color-bg)' : 'var(--text-primary)',
    }}>{name}</span>
  );

  if (variant === 'stacked') {
    return (
      <span role="img" aria-label={name} style={{ display: 'inline-flex', flexDirection: 'column', gap: `calc(${m} * 0.35)`, ...style }}>
        {mark}
        <span style={{ display: 'flex', flexDirection: 'column', gap: `calc(${m} * 0.22)` }}>
          {wordmark}
          <span style={{ height: 2, background: 'var(--color-divider)' }}></span>
        </span>
      </span>
    );
  }

  return (
    <span role="img" aria-label={name} style={{
      display: 'inline-flex', alignItems: 'center', gap: `calc(${m} * 0.35)`, ...style,
    }}>{mark}{wordmark}</span>
  );
}
