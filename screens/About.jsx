// Each entry is independently removable — delete a line and the grid reflows.
// Add `logoPath: 'assets/logos/<file>.svg'` per entry once logo usage is
// confirmed directly with that company; until then it renders as a text cell.
const RECENT_ENGAGEMENTS = [
  { name: 'BC Pensions' },
  { name: 'Public Health Ontario' },
  { name: 'Care Team Technologies' },
  { name: 'Sound Transit' },
  { name: 'WorkBC' },
  { name: 'Royal Bank of Canada' },
  { name: 'Ritchie Bros Auctioneers' },
  { name: 'Dynamic Math' },
  { name: 'Motorola Mobility' },
  { name: 'Hubble Connected' },
  { name: 'NAQI Logix' },
  { name: 'Argus Control Systems' },
  { name: 'Heart Water' },
  { name: 'eBay' },
  { name: 'Palo Alto Networks' },
  { name: 'RevenueWire' },
];

const ENGAGEMENT_TAGS = ['Public Sector', 'Fintech', 'HealthTech', 'Consumer Electronics', 'Ecommerce', 'AgriTech', 'EdTech', 'IoT'];

function AboutScreen({ go }) {
  const { Section, ImageSlot, Button, Kicker, StatBlock, Testimonial, Rule, CtaBanner, Tag } = window.DSX;
  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter) var(--space-20)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Fractional product leadership</Kicker>
        <h1 className="display-1" style={{ maxWidth: '15ch' }}>From stuck to shipped<span style={{ color: 'var(--color-accent)' }}>.</span></h1>
        <p className="lead" style={{ marginTop: 'var(--space-8)' }}>
          I embed with leadership and their product teams to help them get unstuck. 18+ years in software, most
          of it where data, usability, business, and AI meet. I find the problem worth solving first, then stay
          long enough to prove the fix shipped.
        </p>
        <div className="cta-row" style={{ marginTop: 'var(--space-8)' }}>
          <Button size="lg" onClick={() => go('contact')} iconRight={<span>→</span>}>Book a call</Button>
          <Button size="lg" variant="secondary" onClick={() => go('work')}>Case studies</Button>
        </div>
      </div>

      <Section>
        <StatBlock stats={[
          { value: '18+', label: 'Years shipping software' },
          { value: 'TIME', label: 'Best Inventions 2023 — 1 of 200, embedded with the NAQI Logix innovation team' },
          { value: '3', label: 'Concurrent clients, maximum' },
          { value: '40+', label: 'Teams advised across data and AI' },
        ]} />
      </Section>

      <Section kicker="About" title="Pick the right problem.">
        <div className="split">
          <div>
            <p style={{ fontSize: 17 }}>
              Across scores of projects, the pattern repeats: leadership isn't short on engineers or technology —
              they're short on knowing which of several reasonable problems, solved first, moves the business
              versus becomes a landmine later.
            </p>
            <p>
              That's the gap I fill. I work directly with founders and leadership to lean on data analysis,
              validated through real user research, to find what people actually need and balance it against
              where the business needs to go — then prioritize what to build first to learn fast, avoid
              landmines, and get to a 10x return before the runway runs out. I bring AI into that process to
              compress the time between arriving and shipping impact, and it shapes where I look for the biggest
              opportunities in the first place, like financial compliance reporting. Sometimes the answer is a
              platform build. Sometimes it's simpler — fixing a misalignment in how a team already operates.
            </p>
            <p>
              I've led this work on hardware products with no existing playbook and fintech compliance flows
              where the wrong call meant regulatory risk, not just a missed deadline — owning outcomes end-to-end
              on teams of two and steering enterprise programmes alike. The job is always the same: find the
              problem worth solving first, make the trade-offs explicit, and hand back a plan the team can own
              after I leave.
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

      <Section>
        <h2 style={{
          fontSize: 'var(--text-display-3)', lineHeight: 'var(--leading-display)',
          letterSpacing: 'var(--tracking-display)', margin: 0, maxWidth: '18ch',
        }}>Recent engagements</h2>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'var(--space-3)' }}>
          {ENGAGEMENT_TAGS.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>
          Sixteen-plus organizations across North America, including Motorola, Royal Bank of Canada, eBay, BC Pensions, and Palo Alto Networks.
        </p>
        <div className="cols" style={{ '--col-min': '200px', gap: 'var(--space-4)', marginTop: 'var(--space-10)' }}>
          {RECENT_ENGAGEMENTS.map((c) => (
            <div key={c.name} className="logo-cell" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: 84, padding: 'var(--space-3)', border: '1px solid var(--color-divider)',
            }}>
              {c.logoPath ? (
                <img src={c.logoPath} alt={c.name} style={{ maxWidth: '100%', maxHeight: 36, objectFit: 'contain' }} />
              ) : (
                <span style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13,
                  letterSpacing: '0.03em', color: 'var(--text-secondary)', textAlign: 'center',
                }}>{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="What clients say" title="Plain notes, no superlatives">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-10)' }}>
          <Testimonial quote="He goes deep into understanding the product, analyzes the current state of affairs, and suggests a thorough technical implementation plan, keeping UX as the top priority... He perfectly balances setting realistic expectations with his clients while also making sure the engineering team is comfortable with those expected deliverables." name="Praneeth Yerrapragada" role="Principal Engineer, Trovy" />
          <Testimonial quote="He brings together deep technical knowledge and a strong background in user experience... he guided us through the complexities of hardware and software working together. He even joined fundraising conversations occasionally to share the software vision in a clear and approachable way." name="Zavier Alexander" role="Head of Product, NAQI Logix" />
          <Testimonial quote="What distinguishes Neil from the rest is that he is able to learn, adjust and adapt quickly to course correct teams in getting them out of challenging situations, and avoiding future landmines." name="Donny Cayanan" role="Principal Program Manager, Lantronix" />
        </div>
      </Section>

      <CtaBanner onClick={() => go('contact')} />
    </>
  );
}
window.AboutScreen = AboutScreen;
