function AboutScreen({ go }) {
  const { Section, ImageSlot, Button, Kicker, StatBlock, Testimonial, Rule } = window.DSX;
  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter) var(--space-20)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Fractional product leadership</Kicker>
        <h1 className="display-1" style={{ maxWidth: '15ch' }}>I help product teams get unstuck.</h1>
        <p className="lead" style={{ marginTop: 'var(--space-8)' }}>
          Eighteen years in software, most of it where data, AI and usability meet. I join part-time,
          find the real blocker, and stay long enough to prove the fix shipped.
        </p>
        <div className="cta-row" style={{ marginTop: 'var(--space-8)' }}>
          <Button size="lg" onClick={() => go('contact')} iconRight={<span>→</span>}>Book a call</Button>
          <Button size="lg" variant="secondary" onClick={() => go('work')}>Case studies</Button>
        </div>
      </div>

      <Section>
        <StatBlock stats={[
          { value: '18+', label: 'Years shipping software' },
          { value: '2 wks', label: 'From first call to a written plan' },
          { value: '3', label: 'Concurrent clients, maximum' },
          { value: '40+', label: 'Teams advised across data and AI' },
        ]} />
      </Section>

      <Section kicker="About" title="Product leadership, part time">
        <div className="split">
          <div>
            <p style={{ fontSize: 17 }}>
              I work with small teams that have good engineers, real customers and a roadmap that keeps slipping.
              Usually the problem is not the code. It is unclear ownership, a data model nobody trusts,
              or a workflow that was designed for a demo and never for the job.
            </p>
            <p>
              My background is product leadership in data platforms, applied AI and usability. I have run
              discovery with two-person teams and with enterprise programmes; I write things down, I make the
              trade-offs explicit, and I hand back a plan your team can own after I leave.
            </p>
            <p>
              Most engagements are two days a week. Some are a two-week diagnostic and nothing more —
              that is a good outcome too.
            </p>
            <Rule space={32} weight="hair" />
            <div className="cols" style={{ '--col-min': '190px' }}>
              {[
                ['01', 'Diagnose', 'Interviews, artefacts, telemetry. Two weeks, no workshops for their own sake.'],
                ['02', 'Sequence', 'One plan: what ships next, what waits, what gets deleted.'],
                ['03', 'Stay', 'Two days a week until the team is shipping without me.'],
              ].map(([n, t, b]) => (
                <div key={n} style={{ borderTop: '2px solid var(--color-divider)', paddingTop: 'var(--space-4)' }}>
                  <div style={{ fontSize: 11, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>{n}</div>
                  <h4 style={{ margin: '8px 0 6px' }}>{t}</h4>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)' }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ImageSlot label="portrait · 4:5 · b&w" ratio="4 / 5" />
            <p className="meta" style={{ marginTop: 'var(--space-3)' }}>
              Based in Toronto. Working with teams in North America and Europe.
            </p>
          </div>
        </div>
      </Section>

      <Section kicker="What clients say" title="Plain notes, no superlatives">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-10)' }}>
          <Testimonial quote="Neil found the blocker in a week and stayed long enough to prove the fix." name="A. Rao" role="COO, 30-person agency" />
          <Testimonial quote="He rewrote our roadmap into something the four of us could actually agree on." name="M. Bergström" role="Founder, analytics startup" />
          <Testimonial quote="The written diagnosis is still the document we onboard new PMs with." name="J. Okonjo" role="Head of Data, logistics" />
        </div>
      </Section>
    </>
  );
}
window.AboutScreen = AboutScreen;
