const CASE_CONTENT = {
  'grit-bulk-enrollment': {
    quickRead: "Grit Financial's payroll card had a good product buried behind a bad first mile: employees had to self-onboard through a multi-step KYC flow, and only 62% made it through. I flipped the model — instead of asking employees to onboard themselves, I designed a bulk enrollment feature that let employers push existing payroll/HR data straight into Grit's system, running identity and compliance checks silently in the background. Onboarding time dropped from ~2 days to minutes, success rate jumped to 97%, and the feature helped Grit add ~1,000 users in its first 3 months. I architected the feature and the surrounding B2B admin portal, and led the team that built it.",
    situation: "Grit's onboarding was designed around individual employees signing up on their own — providing identity documents, passing KYC, working through several friction-heavy steps. Even with strong marketing pushes, only ~62% of people who started onboarding actually finished it. Every dropped user was a lost acquisition cost and a slower path to scale.",
    insightTitle: 'The insight',
    insight: "The employer already had the data. HR and payroll systems already held verified employee details — the exact information Grit's KYC flow was asking employees to re-enter by hand. The unlock wasn't a better onboarding form; it was removing the form entirely for a whole class of users.",
    approachIntro: "I designed Bulk Enrollment as the cornerstone feature of a new B2B admin portal for Grit's B2B and B2B2B clients (employers moving payroll onto the Grit card). The flow:",
    approachSteps: [
      "Grit integrates with the employer's existing payroll/HR system",
      'The HR manager selects which employees to onboard',
      'The backend silently pulls existing employee data to create accounts and run KYC/compliance checks — no employee action required',
      'The same portal lets the employer order and track physical card shipment, and gives them an operational dashboard (enrollment volume, speed, status) to run the program day-to-day',
    ],
    role: 'I owned the architecture of the portal and the feature, drove the UX design, and led the engineering team through build.',
    stats: [
      { value: 'Minutes', label: 'Time to onboard, down from ~2 days' },
      { value: '97%', label: 'Onboarding success rate, up from 62%' },
      { value: '~1,000', label: 'Users added in the first 3 months post-launch' },
    ],
    costNote: 'Cost of acquisition dropped alongside it — fewer manual drop-offs meant fewer wasted acquisition dollars.',
    meta: [
      { label: 'Role', value: 'Feature & portal architect, eng lead' },
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
              <p className="lead" style={{ marginBottom: 'var(--space-8)' }}>{content.quickRead}</p>
              <h3>The problem</h3>
              <p>{content.situation}</p>
              <h3 style={{ marginTop: 'var(--space-10)' }}>{content.insightTitle}</h3>
              <p>{content.insight}</p>
              <h3 style={{ marginTop: 'var(--space-10)' }}>The approach</h3>
              <p>{content.approachIntro}</p>
              <ul style={{ margin: '0 0 0 1.2em', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {content.approachSteps.map((step) => <li key={step}>{step}</li>)}
              </ul>
              <p style={{ marginTop: 'var(--space-6)' }}>{content.role}</p>
              <Rule space={40} weight="hair" />
              <h3>Outcome</h3>
              <StatBlock style={{ marginTop: 'var(--space-6)' }} stats={content.stats} />
              {content.costNote ? <p className="muted" style={{ marginTop: 'var(--space-6)' }}>{content.costNote}</p> : null}
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
