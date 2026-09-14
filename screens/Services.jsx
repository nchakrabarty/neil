function ServicesScreen({ go }) {
  const { Section, Button, Kicker, PricingCard } = window.DSX;

  React.useEffect(() => {
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl ? metaEl.getAttribute('content') : null;
    document.title = 'Services — Neil Chakrabarty';
    if (metaEl) {
      metaEl.setAttribute('content', 'Fixed-fee and retainer product leadership engagements — Diagnose, Embedded, and UX Research. Fractional product leadership for teams working on data, AI and the usability of both.');
    }
    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) metaEl.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter) var(--space-12)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Engagements</Kicker>
        <h1 className="display-2" style={{ maxWidth: '20ch' }}>How we'd work together</h1>
        <p className="lead" style={{ marginTop: 'var(--space-6)' }}>
          Three ways in, one goal: find the problem worth solving first, then prove the fix shipped.
        </p>
      </div>

      <Section rule={false}>
        <div className="cols" style={{ '--col-min': '280px', gap: 'var(--space-8)', alignItems: 'stretch' }}>
          <PricingCard
            badge="Start here" badgeTone="quiet"
            title="Diagnose" price="$10,000 CAD" duration="2 weeks"
            body="Data, interviews, telemetry — mapping user needs to business goals so they complement, not compete. Where relevant, this includes spotting where AI can move the needle before we build anything."
            bullets={[
              'Stakeholder interviews and discovery',
              'Data and telemetry review',
              'AI opportunity assessment — standard on every engagement',
              'One written plan: what ships first, what waits, what gets deleted',
            ]}
            finePrint="50% due at kickoff, 50% on delivery of the plan. Credited toward your total investment if you move into Embedded within 30 days."
          />
          <PricingCard
            featured badge="Recommended" badgeTone="solid"
            title="Embedded" price="$15,000 CAD/month" duration="2 days a week · typically 3–6 months"
            body="I stay inside the team, driving the plan from Diagnose through to shipped — including scoping and executing AI-based solutions where they're the highest-leverage move, not the default one."
            bullets={[
              'Full ownership of the plan from Diagnose through to shipped',
              'Prioritization and sequencing as the roadmap evolves',
              'AI-based solution scoping and execution — standard, not an upsell',
              'Direct collaboration with founders and senior leadership throughout',
              'Stay until the team can run without me',
            ]}
            finePrint="Billed monthly, in advance."
          />
          <PricingCard
            badge="Popular add-on" badgeTone="quiet"
            title="UX Research" price="$10,000 CAD" duration="2–3 week sprint"
            body="Usability studies and research synthesis, run the way I ran it on a hardware product with no existing playbook — real feedback, mapped directly to what gets built next."
            bullets={[
              "Usability studies designed around your product's actual context",
              'Research synthesis mapped directly to what gets built next',
              'AI-accelerated analysis — standard, to compress findings-to-action time',
              'Add to any Embedded engagement',
            ]}
            finePrint="50% due at kickoff, 50% on delivery of findings."
          />
        </div>

        <p style={{ marginTop: 'var(--space-8)', fontSize: 14, color: 'var(--text-secondary)' }}>
          Scope doesn't always map perfectly to a package — <a href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}>contact me</a> to talk through something custom.
        </p>
      </Section>

      <Section kicker="FAQ">
        <h3 style={{ margin: 0 }}>Do you offer hourly rates?</h3>
        <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>
          No — I price by outcome and engagement, not by the clock. It keeps the focus on the result you need
          rather than time spent getting there, and it means a fast fix is never worth less than a slow one.
          Fixed-fee and retainer pricing also means the investment is clear upfront, with no surprises on either side.
        </p>
      </Section>

      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter)', textAlign: 'center' }}>
        <h2 style={{ margin: 0 }}>Not sure which one fits?</h2>
        <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>Start with a conversation, not a commitment.</p>
        <Button variant="ghost" size="lg" style={{ marginTop: 'var(--space-6)' }} onClick={() => go('contact')} iconRight={<span>→</span>}>Get in touch</Button>
      </div>
    </>
  );
}
window.ServicesScreen = ServicesScreen;
