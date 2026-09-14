const CASES = [
  { id: 'grit-bulk-enrollment', client: 'Grit Financial', year: '2026', headline: 'Batch Onboarding — Turning a 2-day onboarding into a 3-click employer action', result: 'Onboarding success rate up from 62% to 97%, adding ~1,000 users in 3 months.', tags: ['Fintech', 'B2B Growth', 'Onboarding UX', 'Compliance/KYC', '0-1 Feature', 'Platform Architecture'], discipline: 'Usability' },
];

function CaseStudiesScreen({ go }) {
  const { Section, CaseStudyCard, Kicker, Tag, CtaBanner } = window.DSX;
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Data', 'AI', 'Usability', 'Leadership'];
  const shown = filter === 'All' ? CASES : CASES.filter((c) => c.discipline === filter);
  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter) var(--space-10)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Selected work</Kicker>
        <h1 className="display-2" style={{ maxWidth: '18ch' }}>One engagement, written up honestly.</h1>
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-10)', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                font: 'inherit', fontSize: 13, cursor: 'pointer', padding: '6px 12px',
                border: '1px solid var(--color-divider)', borderRadius: 0,
                background: filter === f ? 'var(--color-accent)' : 'transparent',
                color: filter === f ? 'var(--text-on-accent)' : 'var(--text-primary)',
              }}>{f}</button>
          ))}
        </div>
      </div>

      <Section rule={false}>
        <div className="cols" style={{ '--col-min': '280px', gap: 'var(--space-6)' }}>
          {shown.map((c) => (
            <CaseStudyCard key={c.id} {...c} onClick={(e) => { e.preventDefault(); go('case', c.id); }} />
          ))}
        </div>
        {shown.length === 0 ? <p className="muted">Nothing filed under {filter} yet.</p> : null}
      </Section>

      <CtaBanner onClick={() => go('contact')} />
    </>
  );
}
window.CASES = CASES;
window.CaseStudiesScreen = CaseStudiesScreen;
