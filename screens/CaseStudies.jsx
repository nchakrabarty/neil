const CASES = [
  { id: 'grit-compliance-classification', client: 'Grit Financial', year: '2025–2026', headline: 'Cut compliance review time 60% without asking AI to make the final call', result: '9,253 complaint records classified; two rounds of human review corrected 863 decisions and strengthened the rules behind the model.', tags: ['Fintech', 'Compliance', 'AI', 'AI Governance', 'Data Classification', 'Human-in-the-Loop', 'Knowledge Graphs'], discipline: 'AI' },
  { id: 'grit-bulk-enrollment', client: 'Grit Financial', year: '2026', headline: 'Mass Enrollment — Turning a 2-day onboarding into a 3-click employer action', result: 'Onboarding success rate up from 62% to 97%, adding ~1,000 users in 3 months.', tags: ['User Research', 'Fintech', 'B2B Growth', 'Onboarding UX', 'Compliance/KYC', '0-1 Feature', 'Platform Architecture'], discipline: 'Usability' },
  { id: 'classroom-ready', client: 'Classroom Ready', year: '2024', headline: 'Grew paying customers from 196 to 2,048 in six months', result: 'Found the hidden users behind a 2% completion rate and rebuilt an EdTech platform around them.', tags: ['Product Strategy', 'User Research', 'Data Analysis', 'Growth', 'Digital Transformation'], discipline: 'Data' },
  { id: 'xpo-technologies', client: 'XPO Technologies', year: '2021', headline: 'Found that 47.6% of sprint capacity was going to unplanned work', result: 'Quantified silent scope creep and gave leadership a real trade-off to choose from — pause growth or lose the roadmap.', tags: ['Delivery Management', 'Data Analysis', 'Stakeholder Alignment', 'Roadmap Planning', 'Organizational Change'], discipline: 'Leadership' },
  { id: 'neurotech-wearable-platform', client: 'Naqi Logix', year: '2023', headline: "From a founder's idea to a publicly funded, multi-platform release", result: 'Five decisions, made at the right moments, took a rigged-up prototype to a multi-platform release that helped the company secure public innovation funding.', tags: ['0-1 Build', 'Platform Architecture', 'Hardware/Software Integration', 'Program Leadership'], discipline: 'Usability' },
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
        <h1 className="display-2" style={{ maxWidth: '18ch' }}>Decisions that shaped the build.</h1>
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

      <CtaBanner href="mailto:neilcbty@gmail.com" />
    </>
  );
}
window.CASES = CASES;
window.CaseStudiesScreen = CaseStudiesScreen;
