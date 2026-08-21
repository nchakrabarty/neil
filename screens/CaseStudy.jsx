function CaseStudyScreen({ go, caseId }) {
  const { Section, MetaList, PullQuote, StatBlock, Button, Kicker, Rule, ImageSlot } = window.DSX;
  const c = (window.CASES || []).find((x) => x.id === caseId) || (window.CASES || [])[0];
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <MetaList items={[
              { label: 'Client', value: c.client },
              { label: 'Role', value: 'Fractional product lead' },
              { label: 'Duration', value: '5 months, 2 days a week' },
              { label: 'Team', value: '9 engineers, 2 analysts' },
              { label: 'Disciplines', value: c.tags.join(', ') },
            ]} />
            <ImageSlot label="artefact · plan spread · b&w" ratio="4 / 3" />
            <Button variant="secondary" block iconRight={<span>→</span>} onClick={() => go('contact')}>Discuss a similar problem</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
window.CaseStudyScreen = CaseStudyScreen;
