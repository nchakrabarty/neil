function ContactScreen() {
  const { Field, Input, Textarea, RadioGroup, Button, MetaList, Kicker, Section } = window.DSX;
  const [sent, setSent] = React.useState(false);
  const [kind, setKind] = React.useState('diagnostic');
  return (
    <Section rule={false} style={{ paddingTop: 'var(--space-20)' }}>
      <div className="split" style={{ '--split-a': '1.1fr' }}>
        <div>
          <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Contact</Kicker>
          <h1 className="display-3" style={{ maxWidth: '16ch' }}>Thirty minutes, no pitch.</h1>
          <p className="lead" style={{ marginTop: 'var(--space-6)' }}>
            Tell me where the team is stuck. If I am not the right help, I will point you at someone who is.
          </p>
          <div style={{ marginTop: 'var(--space-12)' }}>
            <MetaList items={[
              { label: 'Email', value: 'neil@chakrabarty.co' },
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
              <p style={{ marginBottom: 'var(--space-6)' }}>You will hear from me within two working days, from neil@chakrabarty.co.</p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <div className="cols" style={{ '--col-min': '190px', gap: 'var(--space-4)' }}>
                <Field label="Name" required><Input required placeholder="Your name" /></Field>
                <Field label="Company"><Input placeholder="Optional" /></Field>
              </div>
              <Field label="Email" required hint="I reply within two working days."><Input type="email" required placeholder="you@company.com" /></Field>
              <Field label="What kind of help?">
                <RadioGroup name="kind" value={kind} onChange={setKind} options={[
                  { value: 'diagnostic', label: 'Two-week diagnostic', note: 'Fixed fee, $9,500' },
                  { value: 'fractional', label: 'Fractional product lead', note: 'Two days a week' },
                  { value: 'advisory', label: 'Data & AI advisory', note: 'Standing hours' },
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
  );
}
window.ContactScreen = ContactScreen;
