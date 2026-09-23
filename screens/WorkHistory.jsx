const ROLE_HISTORY = [
  {
    title: 'VP of Data Platforms', company: 'Grit Financial', dates: 'Oct 2024 – Present',
    scope: 'EWA / fintech B2B SaaS. Long-term fractional contract, owning the data platform and 0-1 product work.',
  },
  {
    title: 'COO & Partner', company: 'Divertica', dates: 'Nov 2019 – Oct 2024',
    scope: "Consulting firm whose work funded Grit Financial's early development. Ran delivery across five concurrent client engagements.",
  },
];

const SKILLS = [
  'MS, Human-Computer Interaction — University of Victoria (IEEE-published; Fellowship Award 2007)',
  'BE, University of Burdwan',
  'CSPO (Certified Scrum Product Owner)',
  'CSM (Certified Scrum Master)',
];

function WorkHistoryScreen({ go }) {
  const { Section, Kicker, Testimonial } = window.DSX;

  React.useEffect(() => {
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl ? metaEl.getAttribute('content') : null;
    document.title = 'Work History — Neil Chakrabarty';
    if (metaEl) {
      metaEl.setAttribute('content', "Neil Chakrabarty's background across product, data, entrepreneurship and usability — role history, skills, and what people say about working with him.");
    }
    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) metaEl.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter) var(--space-16)' }}>
        <Kicker accent style={{ marginBottom: 'var(--space-6)' }}>Fractional Product & Data Leader / 0-to-1 Builder / Football Group Chat Menace</Kicker>
        <h1 className="display-2" style={{ maxWidth: '18ch' }}>Work history</h1>
        <p style={{ marginTop: 'var(--space-8)', maxWidth: '62ch', fontSize: 17 }}>
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
      </div>

      <Section kicker="Role history" title="Where I've worked">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {ROLE_HISTORY.map((r) => (
            <div key={r.company} style={{ borderTop: '2px solid var(--color-divider)', paddingTop: 'var(--space-4)' }}>
              <div className="cols" style={{ '--col-min': '220px', gap: 'var(--space-4)', alignItems: 'baseline' }}>
                <h3 style={{ margin: 0 }}>{r.title}, {r.company}</h3>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{r.dates}</div>
              </div>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>{r.scope}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Skills & certifications" title="Background">
        <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SKILLS.map((s) => <li key={s} style={{ color: 'var(--text-secondary)' }}>{s}</li>)}
        </ul>
      </Section>

      <Section kicker="What clients say" title="Plain notes, no superlatives">
        <div className="cols" style={{ '--col-min': '260px', gap: 'var(--space-10)' }}>
          <Testimonial quote="He goes deep into understanding the product, analyzes the current state of affairs, and suggests a thorough technical implementation plan, keeping UX as the top priority... He perfectly balances setting realistic expectations with his clients while also making sure the engineering team is comfortable with those expected deliverables." name="Praneeth Yerrapragada" role="Principal Engineer, Trovy" />
          <Testimonial quote="He brings together deep technical knowledge and a strong background in user experience... he guided us through the complexities of hardware and software working together. He even joined fundraising conversations occasionally to share the software vision in a clear and approachable way." name="Zavier Alexander" role="Head of Product, NAQI Logix" />
          <Testimonial quote="What distinguishes Neil from the rest is that he is able to learn, adjust and adapt quickly to course correct teams in getting them out of challenging situations, and avoiding future landmines." name="Donny Cayanan" role="Principal Program Manager, Lantronix" />
        </div>
      </Section>
    </>
  );
}
window.WorkHistoryScreen = WorkHistoryScreen;
