import React from 'react';
import { inputStyle } from './Input.jsx';

export function Textarea({ rows = 5, style, ...rest }) {
  return <textarea rows={rows} style={{ ...inputStyle, minHeight: 120, resize: 'vertical', ...style }} {...rest} />;
}
