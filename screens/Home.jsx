const COLLABORATIONS = [
  [
    'Wipro BPO', 'Husky Energy', 'Terapeak', 'Ebay',
    'FCV Technologies', 'FCV Labs', 'BC Pensions', 'Public Health Ontario',
  ],
  [
    'Careteam Technologies', 'Sound Transit', 'Inovatec', 'Virtual Vision',
    'Uniqlo', 'LuluLemon', 'Heart Water', 'Classroom Ready',
  ],
  [
    'Argus Controls', 'Motorola Mobility', 'Hubble Connected', 'Grit Financial',
    'Divertica', 'Palo Alto Networks', 'Work BC', 'Price Water House Coopers', 'XPO Technologies',
  ],
];

function HomeScreen({ go }) {
  const { Section, Button, Kicker, CtaBanner, Testimonial, StatBlock, CaseStudyCard, ImageSlot } = window.DSX;
  const CASES = window.CASES || [];
  const [portraitOk, setPortraitOk] = React.useState(true);

  React.useEffect(() => {
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl ? metaEl.getAttribute('content') : null;
    document.title = 'Neil Chakrabarty — fractional product leadership';
    if (metaEl) {
      metaEl.setAttribute('content', "Find what's worth solving. Then build it.");
    }
    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) metaEl.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter) var(--space-16)' }}>
        <div className={portraitOk ? 'split' : undefined} style={portraitOk ? { '--split-a': '1.6fr', alignItems: 'center' } : undefined}>
          <div>
            <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Fractional product leadership</Kicker>
            <h1 className="display-1" style={{ maxWidth: '27ch' }}>
              Find what's worth solving. Then build it<span style={{ color: 'var(--color-accent)' }}>.</span>
            </h1>
            <p style={{ marginTop: 'var(--space-8)', maxWidth: '80ch', fontSize: 17 }}>
              👋 Hi, I'm Neil — a thinking partner and operator for founders and senior teams. I work at the
              intersection of business, data, usability, and AI — finding the right problem, then building
              something people actually use.
            </p>
            <p style={{ marginTop: 'var(--space-4)', maxWidth: '80ch' }}>
              I started in Human-Computer Interaction research, stumbled into building recommendation engines for
              eBay sellers at Terapeak, and somewhere in the middle the title became "product manager" — though
              the actual work never changed: find the real shape of the problem, then build something people can
              actually use.
            </p>
            <p style={{ marginTop: 'var(--space-4)', maxWidth: '80ch' }}>
              These days I work with founders and senior teams as a fractional product and data leader — figuring
              out where AI adds real leverage, and building toward it.
            </p>
            <Kicker style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-3)' }}>Off the clock</Kicker>
            <p style={{ maxWidth: '80ch', fontSize: 17 }}>
              Dad who runs bedtime like a sprint, and a hopeless optimist in a football group chat that never
              sleeps.
            </p>
            <div className="cta-row" style={{ marginTop: 'var(--space-8)' }}>
              <Button size="lg" href="mailto:neilcbty@gmail.com" iconRight={<span>→</span>}>Let's build something together</Button>
            </div>
          </div>
          {portraitOk ? (
            <ImageSlot src="assets/neil-portrait.jpg" alt="Neil Chakrabarty" ratio="4 / 5" tone="mono"
              onError={() => setPortraitOk(false)} />
          ) : null}
        </div>
      </div>
      {/* TODO(neil): add assets/neil-portrait.jpg (natural light, not studio; ~1200x1500) to show the two-column hero with your portrait. */}

      <Section>
        <StatBlock stats={[
          { value: '18+', label: "Years of finding what's worth solving. Then building it." },
          { value: <img src="assets/Time_Magazine_logo.svg" alt="TIME Magazine" style={{ height: 34, width: 'auto', display: 'block' }} />, label: 'Best Inventions 2023 — 1 of 200, collaborated with the NAQI Logix innovation team' },
          { value: '$34M', label: 'In avoided costs and landmines averted, across 3 clients' },
        ]} />
      </Section>

      <Section kicker="Case studies" title="Recent work">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-8)' }}>
          {CASES.map((c) => (
            <CaseStudyCard key={c.id} {...c} ctaLabel="Learn more →" href={window.caseHref(c.id)}
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault(); go('case', c.id);
              }} />
          ))}
        </div>
      </Section>

      <Section kicker="Companies" title="Collaborations">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-8)' }}>
          {COLLABORATIONS.map((col, i) => (
            <ul key={i} style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {col.map((name) => (
                <li key={name} style={{ color: 'var(--text-secondary)' }}>{name}</li>
              ))}
            </ul>
          ))}
        </div>
      </Section>

      <Section kicker="What clients say" title="Plain notes, no superlatives">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-10)' }}>
          <Testimonial quote="He goes deep into understanding the product, analyzes the current state of affairs, and suggests a thorough technical implementation plan, keeping UX as the top priority... He perfectly balances setting realistic expectations with his clients while also making sure the engineering team is comfortable with those expected deliverables." name="Praneeth Yerrapragada" role="Principal Engineer, Trovy" />
          <Testimonial quote="He brings together deep technical knowledge and a strong background in user experience... he guided us through the complexities of hardware and software working together. He even joined fundraising conversations occasionally to share the software vision in a clear and approachable way." name="Zavier Alexander" role="Head of Product, NAQI Logix" />
          <Testimonial quote="What distinguishes Neil from the rest is that he is able to learn, adjust and adapt quickly to course correct teams in getting them out of challenging situations, and avoiding future landmines." name="Donny Cayanan" role="Principal Program Manager, Lantronix" />
        </div>
      </Section>

      <CtaBanner href="mailto:neilcbty@gmail.com" />
    </>
  );
}
window.HomeScreen = HomeScreen;
