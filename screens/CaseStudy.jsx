const CASE_CONTENT = {
  'grit-bulk-enrollment': {
    narrative: [
      "Grit's onboarding flow put employees in the driver's seat of their own compliance — submitting identity documents and clearing KYC checks on their own, one step at a time. It was mentally taxing and slow enough that only 62% of people who started actually finished, even with strong marketing driving people to the front door.",
      "The employer already had what the KYC flow was asking employees to re-type by hand: verified employee data sitting in their own HR and payroll systems. I designed a direct integration between Grit and the employer's payroll/HR system, then rebuilt onboarding around the employer instead of the employee — they select who to enroll, and the backend silently runs identity and compliance checks using data already on file. No employee action required.",
      'I architected Batch Onboarding as the cornerstone feature of a new B2B admin portal — covering enrollment, card ordering, shipment tracking, and an operational metrics dashboard for the HR teams running the program — and led the team through build.',
    ],
    results: [
      'Onboarding time: ~2 days → minutes',
      'Onboarding success rate: 62% → 97%',
      '~1,000 new users added in the first 3 months post-launch (active users now ~2,000 total)',
    ],
    role: 'VP of Data Platforms, Grit Financial — architected the feature and the B2B admin portal, drove the UX, and led the engineering team through build.',
    roleTag: 'VP of Data Platforms',
    awards: null,
    artifactLabel: 'artefact · batch onboarding flow · b&w',
  },
  'classroom-ready-cohorts': {
    narrative: [
      "Classroom Ready's paying customer base was growing, but not evenly — some cohorts of students stuck around and upgraded, others churned within weeks, and the aggregate growth numbers were masking which behavior was actually driving retention. The team needed to know which early usage patterns predicted a paying customer six months out, not just track vanity engagement metrics.",
      "I dug into the engagement data to find the cohorts that actually mattered — the behavioral signals in the first sessions that separated students who'd still be active (and paying) months later from those who'd quietly drop off. That analysis reshaped where the team focused: onboarding and early-engagement changes aimed at reproducing the patterns of the cohorts that stuck.",
      'The result showed up directly in the growth line: paying customers grew from 196 to 2,048 within six months of launch — roughly 10x — tracking the shift toward optimizing for the cohort behavior the data had flagged, not just top-of-funnel signups.',
    ],
    results: [
      '196 → 2,048 paying customers within 6 months of platform launch',
      '~10x growth, concentrated in the cohorts the engagement analysis identified as highest-retention',
    ],
    role: "Data & product advisory for Classroom Ready's online math platform — identified the engagement cohorts behind the growth strategy.",
    roleTag: 'Data & Product Advisory',
    awards: null,
    artifactLabel: 'artefact · cohort engagement analysis · b&w',
  },
  'grit-compliance-classification': {
    narrative: [
      "Grit's compliance team was manually reviewing customer service calls and transactions to satisfy audit requirements — a process that scaled linearly with volume and pulled skilled reviewers into repetitive triage work.",
      "I worked alongside the compliance team to build a classification layer over customer service call and transaction records, tagging and routing records so reviewers could focus their time on the interactions that actually needed a human judgment call, rather than reading every record cold.",
      'The classification layer now runs against the full volume of customer service calls and transactions that compliance pulls for audit — roughly 9,000 records — cutting review time by 60% without reducing coverage.',
    ],
    results: [
      '60% reduction in compliance audit review time',
      'Applied across ~9,000 customer service calls and transactions',
    ],
    role: 'VP of Data Platforms, Grit Financial — built the compliance data classification layer alongside the compliance team.',
    roleTag: 'VP of Data Platforms',
    awards: null,
    artifactLabel: 'artefact · compliance classification layer · b&w',
  },
  'divertica-scope-visibility': {
    narrative: [
      "This case study is still being written up — the short version is that a tight-timeline Divertica engagement needed scope creep made visible early, before it became the deadline's problem, rather than caught after the fact. Full narrative and results coming soon.",
    ],
    results: [
      'Details coming soon.',
    ],
    role: 'COO & Partner, Divertica — full case details coming soon.',
    roleTag: 'COO & Partner',
    awards: null,
    artifactLabel: 'artefact · coming soon · b&w',
  },
  'naqilogix-0-to-1': {
    narrative: [
      'Naqilogix set out to build a wearables platform from scratch — new hardware, new software, and an interaction model with no existing playbook to borrow from. I joined as part of the innovation team building it from 0 to 1.',
      "The work spanned the same ground that runs through most of what I do — product, hardware/software integration, and usability — because a wearable lives or dies on whether people actually want to keep it on. I helped shape the software vision and joined fundraising conversations to explain it in terms non-technical stakeholders could act on.",
      "The platform went on to be recognized in TIME's Best Inventions 2023 list — one of roughly 200 honorees that year, and a shared recognition across the team that built it, not a solo credit. Naqilogix was later valued at $126M.",
    ],
    results: [
      'Built the wearables platform from 0 to 1, with no existing playbook to build from',
      "Recognized in TIME's Best Inventions 2023 (1 of ~200 honorees; shared team recognition)",
      'Company later valued at $126M',
    ],
    role: 'Embedded with the NAQI Logix innovation team — 0-to-1 product and software build.',
    roleTag: 'Embedded — 0-to-1 Build',
    awards: "TIME Best Inventions 2023 — Naqilogix wearables platform (shared team recognition).",
    artifactLabel: 'artefact · wearables platform · b&w',
  },
};

function CaseStudyScreen({ go, caseId }) {
  const { Section, MetaList, Button, Kicker, Rule, ImageSlot } = window.DSX;
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
          <div>
            <h3>The story</h3>
            {content.narrative.map((p, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : 'var(--space-4)' }}>{p}</p>
            ))}
            <Rule space={40} weight="hair" />
            <h3>Results</h3>
            <ul style={{ margin: 'var(--space-4) 0 0', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {content.results.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <h3 style={{ marginTop: 'var(--space-10)' }}>My role</h3>
            <p>{content.role}</p>
            {content.awards ? (
              <>
                <h3 style={{ marginTop: 'var(--space-10)' }}>Awards & press</h3>
                <p>{content.awards}</p>
              </>
            ) : null}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <MetaList items={[
              { label: 'Client', value: c.client },
              { label: 'Role', value: content.roleTag },
              { label: 'Disciplines', value: c.tags.join(', ') },
            ]} />
            <ImageSlot label={content.artifactLabel} ratio="4 / 3" />
            <Button variant="secondary" block iconRight={<span>→</span>} onClick={() => go('contact')}>Discuss a similar problem</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
window.CaseStudyScreen = CaseStudyScreen;
