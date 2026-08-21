function ServicesScreen({ go }) {
  const { Section, ServiceRow, Button, MetaList, Kicker } = window.DSX;
  const services = [
    { index: '01', title: 'Product diagnostic', body: 'Two weeks. Interviews, artefact and telemetry review, then one written diagnosis and a sequenced plan.', price: '$9,500', cadence: 'fixed fee', tags: ['Discovery', 'Data', 'Usability'] },
    { index: '02', title: 'Fractional product lead', body: 'Two days a week inside the team: roadmap, rituals, trade-offs and the hard calls. Minimum three months.', price: '$11,000', cadence: 'per month', tags: ['Leadership', 'Roadmap'] },
    { index: '03', title: 'Data & AI advisory', body: 'Standing hours for founders and heads of data: model scoping, evaluation, build-versus-buy, hiring.', price: '$450', cadence: 'per hour', tags: ['AI', 'Data platform'] },
    { index: '04', title: 'Usability review', body: 'A focused pass over one workflow with findings ranked by cost to fix. Good before a launch.', price: '$4,200', cadence: 'fixed fee', tags: ['Usability'] },
  ];
  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter) var(--space-12)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Engagements</Kicker>
        <h1 className="display-2" style={{ maxWidth: '16ch' }}>Four ways in. All of them start with a call.</h1>
        <p className="lead" style={{ marginTop: 'var(--space-6)' }}>
          Prices are what I charge; there is no proposal theatre. If the diagnostic says you do not need me, I will say so.
        </p>
      </div>

      <Section>
        {services.map((s) => (
          <ServiceRow key={s.index} {...s} action={<Button size="sm" variant="secondary" onClick={() => go('contact')}>Enquire</Button>} />
        ))}
        <div style={{ borderTop: '1px solid color-mix(in srgb, var(--color-text) 22%, transparent)' }} />
      </Section>

      <Section kicker="Terms" title="The boring, useful details"
        aside={<p style={{ margin: 0 }}>Everything below is standard and negotiable in one email.</p>}>
        <div className="cols" style={{ '--col-min': '280px', gap: 'var(--space-16)' }}>
          <MetaList items={[
            { label: 'Availability', value: 'Two client slots, from October' },
            { label: 'Minimum term', value: '3 months (fractional)' },
            { label: 'Notice', value: '30 days, either side' },
            { label: 'Invoicing', value: 'Monthly, net 15' },
          ]} />
          <MetaList items={[
            { label: 'Time zones', value: 'ET, overlapping CET mornings' },
            { label: 'Travel', value: 'Two on-sites per quarter' },
            { label: 'Tools', value: 'Your stack, not mine' },
            { label: 'What I do not do', value: 'Build the software myself' },
          ]} />
        </div>
      </Section>

      <section style={{ background: 'var(--surface-poster)', color: 'var(--text-on-accent)', marginTop: 'var(--space-20)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter)', display: 'flex', gap: 'var(--space-16)', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <h2 className="display-2" style={{ flex: '1 1 420px', maxWidth: '14ch', margin: 0 }}>Tell me what is stuck.</h2>
          <Button size="lg" variant="invert" onClick={() => go('contact')} iconRight={<span>→</span>}>Book a 30-minute call</Button>
        </div>
      </section>
    </>
  );
}
window.ServicesScreen = ServicesScreen;
