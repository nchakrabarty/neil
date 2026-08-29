const CASE_CONTENT = {
  'grit-bulk-enrollment': {
    governingThought: "Redesigning onboarding around the employer instead of the employee — using data the employer already had — turned Grit's biggest growth bottleneck into its fastest-scaling channel: onboarding success rose from 62% to 97%, time-to-onboard fell from ~2 days to minutes, and monthly enrollment scaled from ~140 users to ~1,000 in the first 3 months post-launch.",
    reasonsIntro: 'This held true for three reasons: it removed the point of failure, it repurposed data that already existed, and it turned a single-user workflow into an operational tool for the real buyer.',
    reasons: [
      {
        title: '1. It removed the actual point of failure — the employee',
        situation: "Grit's onboarding flow required each employee to personally complete a multi-step KYC process — submitting identity documents and clearing compliance checks on their own.",
        complication: 'This was mentally taxing and slow enough that only 62% of started onboardings were completed, even with strong marketing pushes driving people to start.',
        resolution: 'Bulk Enrollment removed the employee from the critical path entirely. The employer selects which employees to onboard; the backend silently runs identity and compliance checks using data the employer already provides — no employee action required.',
        evidence: 'Success rate: 62% → 97%. Time-to-onboard: ~2 days → minutes.',
      },
      {
        title: '2. It repurposed data that already existed, instead of asking for it twice',
        situation: "Employers moving payroll onto the Grit card already held verified employee details in their existing HR/payroll systems.",
        complication: "Grit's KYC flow ignored this and asked employees to re-enter the same information by hand — duplicating work and introducing drop-off risk.",
        resolution: "I designed a direct integration between Grit and the employer's payroll/HR system, so existing verified data could flow straight into account creation and compliance checks.",
        evidence: 'This is the mechanism behind both the time and success-rate gains above — it eliminated re-entry as a source of friction and error.',
      },
      {
        title: '3. It turned a one-time signup into an ongoing operational tool for the real buyer',
        situation: "Grit's B2B and B2B2B clients (employers) needed more than a one-off signup flow — they needed to run an enrollment program at scale.",
        complication: 'No existing surface let an HR manager select, enroll, order cards for, and track a whole employee population in one place.',
        resolution: 'I architected Bulk Enrollment as the cornerstone feature of a new B2B admin portal — covering enrollment, card ordering, shipment tracking, and an operational metrics dashboard — and led the team through build.',
        evidence: '~1,000 users added in 3 months post-launch, up from a prior average of ~140/month — evidence the portal, not just the integration, is what let volume scale.',
      },
    ],
    outcomeTable: [
      { metric: 'Time to onboard', before: '~2 days', after: 'Minutes' },
      { metric: 'Onboarding success rate', before: '62%', after: '97%' },
      { metric: 'Scale', before: '~140 users/month (avg.)', after: '~1,000 users added in 3 months post-launch' },
      { metric: 'Cost of acquisition', before: 'High (manual drop-off)', after: 'Reduced' },
    ],
    role: 'I am currently VP of Data Platforms at Grit. I architected the feature and its experience along with my team, drove the UX, and led the engineering team through the build.',
    meta: [
      { label: 'Role', value: 'VP of Data Platforms' },
      { label: 'Client type', value: 'B2B / B2B2B payroll employers' },
      { label: 'Scope', value: 'Bulk enrollment + admin portal, 0-1' },
    ],
    artifactLabel: 'artefact · bulk enrollment flow · b&w',
  },
};

function CaseStudyScreen({ go, caseId }) {
  const { Section, MetaList, PullQuote, StatBlock, Button, Kicker, Rule, ImageSlot } = window.DSX;
  const c = (window.CASES || []).find((x) => x.id === caseId) || (window.CASES || [])[0];
  const content = CASE_CONTENT[c.id];

  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-16) var(--page-gutter) var(--space-12)' }}>
        <button onClick={() => go('work')} style={{ font: 'inherit', fontSize: 13, background: 'none', border: 0, padding: 0, cursor: 'pointer', color: 'var(--text-accent-safe)' }}>← All case studies</button>
        <Kicker accent style={{ margin: 'var(--space-8) 0 var(--space-4)' }}>{c.client} · {c.year}</Kicker>
        <h1 className="display-2" style={{ maxWidth: '18ch' }}>{c.headline}</h1>
        <p className="lead" style={{ marginTop: 'var(--space-6)' }}>{c.result}</p>
      </div>

      <Section>
        <div className="split" style={{ '--split-a': '1.5fr' }}>
          {content ? (
            <div>
              <h3>Governing thought</h3>
              <p>{content.governingThought}</p>
              <p>{content.reasonsIntro}</p>
              <Rule space={40} weight="hair" />
              {content.reasons.map((r, i) => (
                <div key={r.title} style={{ marginTop: i === 0 ? 0 : 'var(--space-10)' }}>
                  <h3>{r.title}</h3>
                  <p><strong>Situation:</strong> {r.situation}</p>
                  <p style={{ marginTop: 'var(--space-3)' }}><strong>Complication:</strong> {r.complication}</p>
                  <p style={{ marginTop: 'var(--space-3)' }}><strong>Resolution:</strong> {r.resolution}</p>
                  <p style={{ marginTop: 'var(--space-3)' }}><strong>Evidence:</strong> {r.evidence}</p>
                </div>
              ))}
              <Rule space={40} weight="hair" />
              <h3>Outcome summary</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 0, marginTop: 'var(--space-6)' }}>
                {['Metric', 'Before', 'After'].map((h) => (
                  <div key={h} style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '10px 0', borderTop: '2px solid var(--color-divider)' }}>{h}</div>
                ))}
                {content.outcomeTable.map((row) => (
                  <React.Fragment key={row.metric}>
                    <div style={{ padding: '10px 12px 10px 0', borderTop: '1px solid color-mix(in srgb, var(--color-text) 22%, transparent)', fontSize: 14 }}>{row.metric}</div>
                    <div style={{ padding: '10px 12px 10px 0', borderTop: '1px solid color-mix(in srgb, var(--color-text) 22%, transparent)', fontSize: 14, color: 'var(--text-secondary)' }}>{row.before}</div>
                    <div style={{ padding: '10px 0', borderTop: '1px solid color-mix(in srgb, var(--color-text) 22%, transparent)', fontSize: 14 }}>{row.after}</div>
                  </React.Fragment>
                ))}
              </div>
              <h3 style={{ marginTop: 'var(--space-12)' }}>My role</h3>
              <p>{content.role}</p>
            </div>
          ) : (
            <div>
              <h3>The situation</h3>
              <p>
                A nine-person engineering team with two analysts, shipping quarterly and missing most of it.
                Every release waited on a spreadsheet that only one person could reconcile, and nobody owned the decision
                about what went in.
              </p>
              <h3 style={{ marginTop: 'var(--space-10)' }}>What we did</h3>
              <p>
                Two weeks of interviews and a read of eighteen months of tickets. The diagnosis was short: three
                competing definitions of the core entity, and a review ritual that rewarded caution.
                We settled the definitions in writing, moved the reconciliation into the pipeline, and cut the
                release checklist from forty items to nine.
              </p>
              <p>
                I stayed two days a week for five months, running the weekly trade-off call until the team's own
                lead took it over.
              </p>
              <Rule space={40} weight="hair" />
              <PullQuote attribution={`Head of Data, ${c.client}`}>
                The written diagnosis is still the document we onboard new PMs with.
              </PullQuote>
              <h3 style={{ marginTop: 'var(--space-12)' }}>Outcome</h3>
              <StatBlock style={{ marginTop: 'var(--space-6)' }} stats={[
                { value: '9 days', label: 'Release cycle, down from 11 weeks' },
                { value: '40 → 9', label: 'Items on the release checklist' },
                { value: '5 mo', label: 'Engagement, then handover' },
              ]} />
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <MetaList items={[
              { label: 'Client', value: c.client },
              ...(content ? content.meta : [
                { label: 'Role', value: 'Fractional product lead' },
                { label: 'Duration', value: '5 months, 2 days a week' },
                { label: 'Team', value: '9 engineers, 2 analysts' },
              ]),
              { label: 'Disciplines', value: c.tags.join(', ') },
            ]} />
            <ImageSlot label={content ? content.artifactLabel : 'artefact · plan spread · b&w'} ratio="4 / 3" />
            <Button variant="secondary" block iconRight={<span>→</span>} onClick={() => go('contact')}>Discuss a similar problem</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
window.CaseStudyScreen = CaseStudyScreen;
