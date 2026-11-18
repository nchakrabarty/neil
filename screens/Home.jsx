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
  const RECENT_IDS = ['argus-controls', 'grit-compliance-classification', 'classroom-ready'];
  const RECENT_IMAGE_TAGS = { 'argus-controls': 'AI', 'grit-compliance-classification': 'AI', 'classroom-ready': 'Business Consulting' };
  const recentCases = RECENT_IDS.map((id) => CASES.find((c) => c.id === id)).filter(Boolean);
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
            <p className="lead" style={{ marginTop: 'var(--space-8)' }}>
              Hi, I'm Neil, a product strategist and operator for data and AI platforms.
            </p>
            <p style={{ marginTop: 'var(--space-4)', maxWidth: '80ch' }}>
              In 2019 a greenhouse-tech company hired me to build a machine learning model. A month in, it was
              clear their data couldn't support one. I persuaded their leadership to pause the model and build a
              platform that captured accurate operations data, while an internal team cleaned up what they already
              had. That data later fed their predictive operational analytics, and a 3-month contract turned into
              more than two years.
            </p>
            <p style={{ marginTop: 'var(--space-4)', maxWidth: '80ch' }}>
              Every AI decision since has come down to four questions. Is the existing data usable? Will a model
              beat what's there today? Will people trust it? Will it help the business scale? I've been a
              developer, an HCI researcher, a product lead and a P&amp;L owner, so I answer all four together.
            </p>
            <p style={{ marginTop: 'var(--space-4)', maxWidth: '80ch' }}>
              If you're about to put budget into AI, I'd like to see your data first.
            </p>
            <div className="cta-row" style={{ marginTop: 'var(--space-8)' }}>
              <Button size="lg" href="mailto:neilcbty@gmail.com" iconRight={<span>→</span>}>Talk through your AI plan</Button>
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
        <div className="cols" style={{ '--col-min': '320px', gap: 'var(--space-10)' }}>
          {recentCases.map((c) => (
            <CaseStudyCard key={c.id} {...c} ctaLabel="Learn more →" href={window.caseHref(c.id)}
              imageTag={RECENT_IMAGE_TAGS[c.id]}
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault(); go('case', c.id);
              }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-12)' }}>
          <Button variant="secondary" size="md" href="#/work" iconRight={<span>→</span>}
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
              e.preventDefault(); go('work');
            }}>More case studies</Button>
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
          <Testimonial quote="What distinguishes Neil from the rest is that he is able to learn, adjust and adapt quickly to course correct teams in getting them out of challenging situations, and avoiding future landmines." name="Donny Cayanan" role="Head of Engineering, Argus Controls" />
        </div>
      </Section>

      <CtaBanner href="mailto:neilcbty@gmail.com" />
    </>
  );
}
window.HomeScreen = HomeScreen;
