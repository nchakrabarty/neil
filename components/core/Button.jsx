import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
  textDecoration: 'none', fontFamily: 'var(--font-heading)', fontWeight: 800,
  lineHeight: 1.2, border: '1px solid transparent', borderRadius: 'var(--radius-md)',
  transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
};

const sizes = {
  sm: { fontSize: 13, padding: '6px 12px' },
  md: { fontSize: 14, padding: '10px 16px' },
  lg: { fontSize: 16, padding: '14px 22px' },
};

export function Button({
  variant = 'primary', size = 'md', href, iconRight, block = false,
  disabled = false, onClick, children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const skin = {
    primary: {
      background: press ? 'var(--state-press-accent)' : hover ? 'var(--state-hover-accent)' : 'var(--color-accent)',
      color: 'var(--text-on-accent)',
    },
    secondary: {
      background: press ? 'var(--state-press-ink)' : hover ? 'var(--state-hover-ink)' : 'transparent',
      color: 'var(--text-primary)', borderColor: 'var(--color-divider)',
    },
    ghost: {
      background: press ? 'color-mix(in srgb, var(--color-accent) 18%, transparent)'
        : hover ? 'color-mix(in srgb, var(--color-accent) 10%, transparent)' : 'transparent',
      color: 'var(--text-accent-safe)', padding: '6px 4px',
    },
    invert: {
      background: hover ? 'var(--color-neutral-200)' : 'var(--color-bg)',
      color: 'var(--color-text)',
    },
  }[variant];

  const css = {
    ...base, ...sizes[size], ...skin,
    width: block ? '100%' : undefined,
    justifyContent: block ? 'space-between' : 'flex-start',
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
  };

  const inner = (<>{children}{iconRight ? <span aria-hidden="true" style={{ display: 'flex' }}>{iconRight}</span> : null}</>);

  if (href && !disabled) {
    return <a href={href} style={css} onClick={onClick} {...handlers} {...rest}>{inner}</a>;
  }
  return <button type="button" style={css} disabled={disabled} onClick={onClick} {...handlers} {...rest}>{inner}</button>;
}
