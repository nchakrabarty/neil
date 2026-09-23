const TRUST_STRIP = ['Grit Financial', 'Divertica', 'Naqilogix', 'Classroom Ready', 'Argus Controls'];

function HomeScreen({ go }) {
  const { Section, Button, Kicker, CtaBanner } = window.DSX;
  const CASES = window.CASES || [];

  React.useEffect(() => {
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl ? metaEl.getAttribute('content') : null;
    document.title = 'Neil Chakrabarty — fractional product leadership';
    if (metaEl) {
      metaEl.setAttribute('content', 'I help product teams get unstuck. Diagnostics, fractional leadership, data and AI advisory.');
    }
    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) metaEl.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter) var(--space-16)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Fractional product leadership</Kicker>
        <h1 className="display-1" style={{ maxWidth: '18ch' }}>
          I help product teams get unstuck<span style={{ color: 'var(--color-accent)' }}>.</span>
        </h1>
        <p className="lead" style={{ marginTop: 'var(--space-6)' }}>
          Diagnostics, fractional leadership, data and AI advisory.
        </p>
        <p style={{ marginTop: 'var(--space-8)', maxWidth: '58ch', fontSize: 17 }}>
          👋 I'm Neil — a product, data, and usability leader who's spent a career sitting at the intersection
          of tech, business, and the people actually using the thing. Also a dad who runs bedtime like a
          sprint, and a lifelong football (soccer) optimist who never learns.
        </p>
        <div className="cta-row" style={{ marginTop: 'var(--space-8)' }}>
          <Button size="lg" onClick={() => go('contact')} iconRight={<span>→</span>}>Let's talk about what you're building</Button>
        </div>
      </div>

      <Section kicker="Case studies" title="Recent work">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-8)' }}>
          {CASES.map((c) => (
            <a key={c.id} href="#" onClick={(e) => { e.preventDefault(); go('case', c.id); }}
              style={{
                display: 'block', textDecoration: 'none', color: 'inherit',
                borderTop: '2px solid var(--color-divider)', paddingTop: 'var(--space-4)',
              }}>
              <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>{c.client}</div>
              <h3 style={{ margin: '10px 0 14px', fontSize: 'var(--text-h3)', maxWidth: '24ch' }}>{c.headline}</h3>
              <span style={{ fontSize: 13, color: 'var(--text-accent-safe)' }}>Learn more →</span>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <Kicker style={{ marginBottom: 'var(--space-4)' }}>Selected clients</Kicker>
        <p style={{ color: 'var(--text-secondary)' }}>{TRUST_STRIP.join(' · ')}</p>
        <p className="meta" style={{ marginTop: 'var(--space-6)' }}>
          TIME Best Inventions 2023, via the Naqilogix wearables platform.
        </p>
      </Section>

      <CtaBanner onClick={() => go('contact')} />
    </>
  );
}
window.HomeScreen = HomeScreen;
