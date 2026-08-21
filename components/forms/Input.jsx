import React from 'react';

export const inputStyle = {
  width: '100%', minHeight: 42, padding: '10px 12px', font: 'inherit', fontSize: 14,
  color: 'var(--text-primary)', caretColor: 'var(--color-accent)',
  background: 'var(--surface-card)', border: '1px solid var(--color-divider)',
  borderRadius: 'var(--radius-md)',
};

export function Input({ style, ...rest }) {
  return <input style={{ ...inputStyle, ...style }} {...rest} />;
}
