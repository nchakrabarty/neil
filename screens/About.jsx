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

      <Section kicker="About" title="Pick the right problem.">
        <div className="split">
          <div>
            <p style={{ fontSize: 17 }}>
              Across scores of projects, the pattern repeats. Leadership isn't stuck because they lack engineers
              or technology — they're stuck because several reasonable problems compete for the same budget, and
              no one can tell which one, solved first, would actually move the business versus quietly become a
              landmine later.
            </p>
            <p>
              That's the gap I fill. I lean on data analysis, validated through real user research, to find what
              people actually need and balance it against where the business needs to go — then prioritize what
              to build first to learn fast, avoid landmines, and get to a 10x return before the runway runs out.
              That prioritization is also where I find the real opportunities for AI — not AI for its own sake,
              but where it moves the needle most: compliance risk assessment, transaction monitoring for fraud,
              loan management. Sometimes the answer is a platform build. Sometimes it's simpler — fixing a
              misalignment in how a team already operates.
            </p>
            <p>
              I've done this on two-person teams and enterprise programmes, on hardware products with no existing
              playbook, and on fintech compliance flows where the wrong call meant regulatory risk, not just a
              missed deadline. The job is always the same: find the problem worth solving first, make the
              trade-offs explicit, and hand back a plan the team can own after I leave.
            </p>
            <Rule space={32} weight="hair" />
            <div className="cols" style={{ '--col-min': '190px' }}>
              {[
                ['01', 'Diagnose', 'Data, interviews, telemetry — mapping user needs to business goals so they complement, not compete. Two weeks, no workshops for their own sake.'],
                ['02', 'Sequence', 'One plan: what ships first, what waits, what gets deleted.'],
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
            <ImageSlot src="assets/Fly%20over%20Westend.jpg" alt="Aerial view of Vancouver's West End" ratio="4 / 5" />
            <p className="meta" style={{ marginTop: 'var(--space-3)' }}>
              Based in Vancouver. Working with teams in North America, Asia and Europe.
            </p>
          </div>
        </div>
      </Section>

      <Section kicker="What clients say" title="Plain notes, no superlatives">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-10)' }}>
          <Testimonial quote="He goes deep into understanding the product, analyzes the current state of affairs, and suggests a thorough technical implementation plan, keeping UX as the top priority... He perfectly balances setting realistic expectations with his clients while also making sure the engineering team is comfortable with those expected deliverables." name="Praneeth Yerrapragada" role="Principal Engineer, Trovy" />
          <Testimonial quote="He brings together deep technical knowledge and a strong background in user experience... he guided us through the complexities of hardware and software working together. He even joined fundraising conversations occasionally to share the software vision in a clear and approachable way." name="Zavier Alexander" role="Head of Product, NAQI Logix" />
          <Testimonial quote="What distinguishes Neil from the rest is that he is able to learn, adjust and adapt quickly to course correct teams in getting them out of challenging situations, and avoiding future landmines." name="Donny Cayanan" role="Principal Program Manager, Lantronix" />
        </div>
      </Section>
    </>
  );
}
window.AboutScreen = AboutScreen;
