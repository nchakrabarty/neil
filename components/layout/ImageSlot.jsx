import React from 'react';

export function ImageSlot({ label = 'image', src, alt = '', ratio = '4 / 5', style }) {
  if (src) {
    return <img className="grayscale" src={src} alt={alt} style={{ width: '100%', aspectRatio: ratio, objectFit: 'cover', ...style }} />;
  }
  return (
    <div className="image-slot" style={{ width: '100%', aspectRatio: ratio, ...style }}>
      <span>{label}</span>
    </div>
  );
}
