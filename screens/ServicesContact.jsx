function ServicesContactScreen() {
  const { Section, Button, Kicker, PricingCard, Field, Input, Textarea, RadioGroup, MetaList } = window.DSX;
  const [sent, setSent] = React.useState(false);
  const [kind, setKind] = React.useState('diagnose');

  React.useEffect(() => {
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl ? metaEl.getAttribute('content') : null;
    document.title = 'Services & Contact — Neil Chakrabarty';
    if (metaEl) {
      metaEl.setAttribute('content', 'Diagnose and Embedded engagements — fractional product, data and AI leadership. Let’s talk about what you’re building.');
    }
    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) metaEl.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-20) var(--page-gutter) var(--space-12)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Services</Kicker>
        <h1 className="display-2" style={{ maxWidth: '20ch' }}>How we'd work together</h1>
        <p className="lead" style={{ marginTop: 'var(--space-6)' }}>
          I work two ways: a short diagnostic to find the real problem, or embedded alongside your team to fix
          it. Either way, the goal is the same — find the problem worth solving first, then prove the fix shipped.
        </p>
      </div>

      <Section rule={false}>
        <div className="cols" style={{ '--col-min': '280px', gap: 'var(--space-8)', alignItems: 'stretch' }}>
          <PricingCard
            badge="Start here" badgeTone="quiet"
            title="Diagnose" duration="2 weeks"
            body="A standalone-capable base layer for teams at a roadmap crossroads — quick prototyping and user research to validate direction before committing to a build. Where relevant, this includes spotting where AI can move the needle before we build anything."
            bullets={[
              'Stakeholder interviews and discovery',
              'Data and telemetry review',
              'AI opportunity assessment — standard on every engagement',
              'One written plan: what ships first, what waits, what gets deleted',
            ]}
            finePrint="Two weeks, then a clear next step — often straight into Embedded."
          />
          <PricingCard
            featured badge="Recommended" badgeTone="solid"
            title="Embedded" duration="2 days a week"
            body="The default next step after Diagnose — I stay inside the team, driving the plan through to shipped, including scoping and executing AI-based solutions where they're the highest-leverage move, not the default one."
            bullets={[
              'Full ownership of the plan from Diagnose through to shipped',
              'Prioritization and sequencing as the roadmap evolves',
              'AI-based solution scoping and execution — standard, not an upsell',
              'Direct collaboration with founders and senior leadership throughout',
              'Stay until the team can run without me',
            ]}
          />
          <PricingCard
            badge="Popular add-on" badgeTone="quiet"
            title="UX Research" duration="2–3 week sprint"
            body="An add-on layer on any Embedded engagement, leaning on an HCI background — usability studies and research synthesis, run the way I ran it on a hardware product with no existing playbook. When the work touches a regulated area like compliance, this sits alongside your compliance team, not in place of one."
            bullets={[
              "Usability studies designed around your product's actual context",
              'Research synthesis mapped directly to what gets built next',
              'AI-accelerated analysis — standard, to compress findings-to-action time',
              'Add to any Embedded engagement',
            ]}
          />
        </div>

        <p style={{ marginTop: 'var(--space-8)', fontSize: 14, color: 'var(--text-secondary)' }}>
          Scope doesn't always map perfectly to a package — the form below works for talking through something custom too.
        </p>
      </Section>

      <Section kicker="FAQ">
        <h3 style={{ margin: 0 }}>Do you offer hourly rates?</h3>
        <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>
          No — I work by outcome and engagement, not by the clock. It keeps the focus on the result you need
          rather than time spent getting there, and it means a fast fix is never worth less than a slow one.
        </p>
      </Section>

      <Section kicker="Contact" title="Let's talk about what you're building">
        <div className="split" style={{ '--split-a': '1.1fr' }}>
          <div>
            <p className="lead">
              Tell me where the team is stuck. If I'm not the right help, I'll point you at someone who is.
            </p>
            <div style={{ marginTop: 'var(--space-12)' }}>
              <MetaList items={[
                { label: 'Email', value: 'neilcbty@gmail.com' },
                { label: 'Response', value: 'Within two working days' },
                { label: 'Availability', value: 'Two slots from October' },
                { label: 'Referrals', value: 'Always welcome' },
              ]} />
            </div>
          </div>

          <div style={{ background: 'var(--surface-card)', padding: 'var(--space-10)' }}>
            {sent ? (
              <div>
                <h3 style={{ marginTop: 0 }}>Sent.</h3>
                <p style={{ marginBottom: 'var(--space-6)' }}>You will hear from me within two working days, from neilcbty@gmail.com.</p>
                <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div className="cols" style={{ '--col-min': '190px', gap: 'var(--space-4)' }}>
                  <Field label="Name" required><Input required placeholder="Your name" /></Field>
                  <Field label="Company"><Input placeholder="Optional" /></Field>
                  <Field label="Phone"><Input type="tel" placeholder="Optional" /></Field>
                </div>
                <Field label="Email" required hint="I reply within two working days."><Input type="email" required placeholder="you@company.com" /></Field>
                <Field label="What kind of help?">
                  <RadioGroup name="kind" value={kind} onChange={setKind} options={[
                    { value: 'diagnose', label: 'Diagnose', note: '2 weeks' },
                    { value: 'embedded', label: 'Embedded', note: '2 days a week' },
                    { value: 'research', label: 'UX Research', note: '2–3 week sprint' },
                    { value: 'unsure', label: 'Not sure yet', note: 'Fine — start here' },
                  ]} />
                </Field>
                <Field label="Where is the team stuck?"><Textarea rows={4} placeholder="Two or three sentences is plenty." /></Field>
                <Button type="submit" size="lg" block iconRight={<span>→</span>}>Request a call</Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
window.ServicesContactScreen = ServicesContactScreen;
