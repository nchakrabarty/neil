import React from 'react';

const STEPS = ['Books Sold', 'Reached Platform', 'Registration', 'Trial', 'Paying'];

export function FunnelFigure({ style }) {
  const w = 800, h = 400;
  const stepW = 136, gap = 20, startX = 20, cy = 150, nodeH = 64;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Funnel from book sale to paying subscriber. 33 to 44 percent of book buyers, excluding Staples, reached the platform via the QR code. Registration and trial follow, unlabeled. About 9 paying customers resulted per 1,000 books sold. Paying customers grew from 196 to 2,048 within six months of launch. Google Ads conversion rose from about 3 percent to 12 to 15 percent once campaigns were tied to the funnel."
      style={{ display: 'block', ...style }}>
      <text x={startX} y={40} style={{ font: '700 13px var(--font-heading)', letterSpacing: '0.08em', textTransform: 'uppercase', fill: 'var(--color-accent)' }}>
        Book-to-subscriber funnel
      </text>

      {STEPS.map((label, i) => {
        const x = startX + i * (stepW + gap);
        return (
          <g key={label}>
            <rect x={x} y={cy} width={stepW} height={nodeH} fill="var(--surface-card)" stroke="var(--color-divider)" strokeWidth="1" />
            <text x={x + stepW / 2} y={cy + nodeH / 2 + 5} textAnchor="middle" style={{ font: '600 13px var(--font-body)', fill: 'var(--text-primary)' }}>
              {label}
            </text>
            {i < STEPS.length - 1 ? (
              <path d={`M ${x + stepW + 6} ${cy + nodeH / 2} L ${x + stepW + gap - 6} ${cy + nodeH / 2}`}
                stroke="var(--text-muted)" strokeWidth="2" markerEnd="url(#funnel-arrow)" />
            ) : null}
          </g>
        );
      })}

      <defs>
        <marker id="funnel-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--text-muted)" />
        </marker>
      </defs>

      {/* Only the two data points that exist in the case study copy. */}
      <text x={startX + 1 * (stepW + gap) + stepW / 2} y={cy - 14} textAnchor="middle" style={{ font: '700 15px var(--font-heading)', fill: 'var(--color-accent)' }}>
        33–44%*
      </text>
      <text x={startX + 4 * (stepW + gap) + stepW / 2} y={cy + nodeH + 26} textAnchor="middle" style={{ font: '600 12px var(--font-body)', fill: 'var(--text-secondary)' }}>
        ~9 per 1,000 books
      </text>

      <text x={startX} y={cy + nodeH + 62} style={{ font: '400 11px var(--font-body)', fill: 'var(--text-muted)' }}>
        * of buyers reached the platform, excluding Staples
      </text>

      <g transform={`translate(${startX}, ${cy + nodeH + 100})`}>
        <text x={0} y={0} style={{ font: '800 34px var(--font-heading)', letterSpacing: '-0.02em', fill: 'var(--text-primary)' }}>
          196 → 2,048
        </text>
        <text x={0} y={22} style={{ font: '400 13px var(--font-body)', fill: 'var(--text-secondary)' }}>
          paying customers in six months
        </text>
      </g>

      <g transform={`translate(${w - 260}, ${cy + nodeH + 76})`}>
        <text x={0} y={0} style={{ font: '600 12px var(--font-body)', fill: 'var(--text-secondary)' }}>
          Google Ads conversion, once tied to the funnel
        </text>
        <text x={0} y={24} style={{ font: '700 22px var(--font-heading)', fill: 'var(--color-accent)' }}>
          ~3% → 12–15%
        </text>
      </g>
    </svg>
  );
}
