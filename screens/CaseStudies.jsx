const CASES = [
  { id: 'grit-bulk-enrollment', client: 'Grit Financial', year: '2026', headline: 'Turning a 2-day onboarding into a 3-click employer action', result: 'Onboarding success rate up from 62% to 97%, adding ~1,000 users in 3 months.', tags: ['Fintech', 'B2B Growth', 'Onboarding UX', 'Compliance/KYC', '0-1 Feature', 'Platform Architecture'], discipline: 'Usability' },
  { id: 'northline', client: 'Northline Logistics', year: '2025', headline: 'A data team that finally shipped weekly', result: 'Release cycle cut from 11 weeks to 9 days.', tags: ['Data', 'Ops'], discipline: 'Data' },
  { id: 'meridian', client: 'Meridian Health', year: '2025', headline: 'An AI triage pilot that survived contact with clinicians', result: 'Evaluation harness built before the model, not after.', tags: ['AI', 'Usability'], discipline: 'AI' },
  { id: 'kestrel', client: 'Kestrel Analytics', year: '2024', headline: 'One roadmap four founders could agree on', result: 'Two products retired, one shipped in six weeks.', tags: ['Leadership'], discipline: 'Leadership' },
  { id: 'atlas', client: 'Atlas Field Services', year: '2024', headline: 'A field app technicians stopped working around', result: 'Task completion up 34% after one workflow pass.', tags: ['Usability'], discipline: 'Usability' },
  { id: 'harbour', client: 'Harbour Trust', year: '2023', headline: 'A reporting layer the board actually trusted', result: 'Single definition of revenue, agreed in writing.', tags: ['Data'], discipline: 'Data' },
  { id: 'verso', client: 'Verso Studio', year: '2023', headline: 'Hiring the product lead I was standing in for', result: 'Handover in eight weeks, no slippage.', tags: ['Leadership'], discipline: 'Leadership' },
];

function CaseStudiesScreen({ go }) {
  const { Section, CaseStudyCard, Kicker, Tag } = window.DSX;
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Data', 'AI', 'Usability', 'Leadership'];
  const shown = filter === 'All' ? CASES : CASES.filter((c) => c.discipline === filter);
  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter) var(--space-10)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Selected work</Kicker>
        <h1 className="display-2" style={{ maxWidth: '18ch' }}>Seven engagements, written up honestly.</h1>
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
    </>
  );
}
window.CASES = CASES;
window.CaseStudiesScreen = CaseStudiesScreen;
