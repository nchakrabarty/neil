import React from 'react';

export function Kicker({ accent = false, as: As = 'div', children, style }) {
  return (
    <As style={{
      fontSize: 'var(--text-kicker)', letterSpacing: 'var(--tracking-kicker)',
      textTransform: 'uppercase', fontWeight: 600,
      color: accent ? 'var(--color-accent)' : 'var(--text-secondary)',
      ...style,
    }}>{children}</As>
  );
}
