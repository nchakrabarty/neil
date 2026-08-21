import React from 'react';

export function RadioGroup({ name, options = [], value, onChange, style }) {
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: 10, ...style }}>
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label key={opt.value} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', fontSize: 14 }}>
            <input
              type="radio" name={name} value={opt.value} checked={checked}
              onChange={() => onChange && onChange(opt.value)}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
            />
            <span aria-hidden="true" style={{
              width: 16, height: 16, flex: 'none', marginTop: 3, borderRadius: '50%',
              border: `1.5px solid ${checked ? 'var(--color-accent)' : 'var(--color-divider)'}`,
              background: checked ? 'var(--color-accent)' : 'transparent',
              boxShadow: checked ? 'inset 0 0 0 4px var(--color-bg)' : 'none',
            }} />
            <span>
              {opt.label}
              {opt.note ? <span style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)' }}>{opt.note}</span> : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}
