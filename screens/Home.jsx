const COLLABORATIONS = [
  [
    'Wipro BPO', 'Husky Energy', 'Terapeak', 'Ebay', 'FCV Technologies', 'FCV Labs',
    'BC Pensions', 'Public Health Ontario', 'Careteam Technologies', 'Sound Transit', 'Inovatec', 'Virtual Vision',
  ],
  [
    'Uniqlo', 'LuluLemon', 'Heart Water', 'Classroom Ready', 'Argus Controls', 'Motorola Mobility',
    'Hubble Connected', 'Grit Financial', 'Divertica', 'Palo Alto Networks', 'Work BC', 'Price Water House Coopers',
  ],
];

function HomeScreen({ go }) {
  const { Section, Button, Kicker, CtaBanner, Testimonial } = window.DSX;
  const CASES = window.CASES || [];

  React.useEffect(() => {
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl ? metaEl.getAttribute('content') : null;
    document.title = 'Neil Chakrabarty — fractional product leadership';
    if (metaEl) {
      metaEl.setAttribute('content', 'I help product teams get unstuck. Diagnostics, fractional leadership, data and AI advisory.');
    }
    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) metaEl.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter) var(--space-16)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Fractional product leadership</Kicker>
        <h1 className="display-1" style={{ maxWidth: '18ch' }}>
          I help product teams get unstuck<span style={{ color: 'var(--color-accent)' }}>.</span>
        </h1>
        <p className="lead" style={{ marginTop: 'var(--space-6)' }}>
          Diagnostics, fractional leadership, data and AI advisory.
        </p>
        <p style={{ marginTop: 'var(--space-8)', maxWidth: '58ch', fontSize: 17 }}>
          👋 I'm Neil — a product, data, and usability leader who's spent a career sitting at the intersection
          of tech, business, and the people actually using the thing. Also a dad who runs bedtime like a
          sprint, and a lifelong football (soccer) optimist who never learns.
        </p>
        <p style={{ marginTop: 'var(--space-4)', maxWidth: '62ch' }}>
          I ended up here mostly by accident. Trained academically in collaborative data visualization, my
          first real job landed me on the R&D team at Terapeak, building recommendation engines for eBay
          sellers — which put me squarely at the intersection of technology, business, research, and
          usability before anyone had bothered to call that a "product" job. The title changed a few times
          after that — developer, usability engineer, product manager — but the actual work never really did:
          find the shape of the problem, then build something people can actually use.
        </p>
        <p style={{ marginTop: 'var(--space-4)', maxWidth: '62ch' }}>
          These days I work at the intersection of Product, Entrepreneurship, Data & AI, and Usability — which
          is a fancy way of saying I like problems that don't fit neatly into one department. Off the clock,
          I'm a dad who's discovered that agile ceremonies work disturbingly well on a toddler — sprint
          planning is just negotiating bedtime, and retros happen most nights whether I want them or not. I'm
          also a hopeless case in a football (soccer) group chat that never sleeps, forever certain this is
          our year.
        </p>
        <div className="cta-row" style={{ marginTop: 'var(--space-8)' }}>
          <Button size="lg" href="mailto:neilcbty@gmail.com" iconRight={<span>→</span>}>Let's talk about what you're building</Button>
        </div>
      </div>

      <Section kicker="Case studies" title="Recent work">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-8)' }}>
          {CASES.map((c) => (
            <a key={c.id} href="#" onClick={(e) => { e.preventDefault(); go('case', c.id); }}
              style={{
                display: 'block', textDecoration: 'none', color: 'inherit',
                borderTop: '2px solid var(--color-divider)', paddingTop: 'var(--space-4)',
              }}>
              <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>{c.client}</div>
              <h3 style={{ margin: '10px 0 14px', fontSize: 'var(--text-h3)', maxWidth: '24ch' }}>{c.headline}</h3>
              <span style={{ fontSize: 13, color: 'var(--text-accent-safe)' }}>Learn more →</span>
            </a>
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
