import React from 'react';

export function Rule({ weight = 'strong', space = 0, style }) {
  return (
    <hr style={{
      border: 0, margin: `${space}px 0`,
      height: weight === 'strong' ? 2 : 1,
      background: weight === 'strong'
        ? 'var(--color-divider)'
        : 'color-mix(in srgb, var(--color-text) 22%, transparent)',
      ...style,
    }} />
  );
}
