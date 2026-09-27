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
  'classroom-ready': {
    pageTitle: 'Classroom Ready | Turning book buyers into subscribers',
    pageResult: 'Leadership thought the videos were the problem. The data said the videos were fine and the path to them was broken.',
    narrative: [
      "Classroom Ready's Dynamic Math workbooks sold in the thousands through Staples, Amazon and homeschool parent networks. The companion video subscription barely moved: average course completion was under 2%, and viewing collapsed after the first unit. The owner and senior leadership faced an expensive fork. If the content was weak, they needed new videos. If the portal was the wrong bet, they should pull back from it. Underneath both was a sharper question: why weren't book sales turning into lasting subscriptions?",
    ],
    keyDecisionsIntro: "Every decision below began as a recommendation from me and was approved by the client's leadership.",
    keyDecisions: [
      {
        title: '1. Diagnose before spending',
        body: 'Rather than commit to either path, I recommended a short discovery phase. It combined a year of sales and viewing data with paid interviews of parents, learners and educators.',
      },
      {
        title: '2. Keep the content, fix the access',
        body: "The data didn't support a reshoot. It showed hidden behaviors that the completion metric had recorded as failure:",
        bullets: [
          'Younger students (grades 4–7) watched in order and dropped off after the first unit.',
          'Older students (grade 8 and up) stayed longer, but skipped around to the exact lesson they needed for homework or a test.',
          'The people who did watch went deep, averaging about 15 videos and more than 30-minute sessions each.',
          'Worksheets outperformed video subscriptions.',
        ],
        afterBullets: "The interviews explained the rest. Families thought of Dynamic Math as a book. Many didn't know the videos existed or how to get to them, and the buyer was often a parent helping a child rather than the learner. The content was working; the gap was between the book and the screen. Keeping the existing library saved the client the months a reshoot would have cost.",
      },
      {
        title: '3. Own the platform, but de-risk the build',
        body: 'We moved off the rented course platform and built a dedicated one in three funded milestones:',
        bullets: [
          'First, secure access, videos and worksheets.',
          'Then search and playlists, designed for how students of different ages actually learn.',
          'Then payments and a free trial.',
        ],
        afterBullets: 'Each milestone gave leadership a decision point before the next round of spending. Existing subscribers were moved over through an invite-only beta, with their old subscriptions refunded. The public launch was timed for mid-summer 2024, just as back-to-school book sales began to climb.',
      },
      {
        title: '4. Make the book the growth engine',
        body: "Since families trusted the book, it became the front door. Our strategy focused on turning book buyers into platform users, with book-plus-video bundles as the core offer. The client's head of marketing added QR stickers in the workbooks that linked straight to the platform.",
      },
      {
        title: '5. Remove friction and run growth by the funnel',
        body: 'After launch I led the growth strategy.',
        bullets: [
          'I drove the decision to drop the paywall so families could try the videos before paying.',
          'Course completion was replaced by a funnel running from book sale through QR scan, registration, trial, payment and retention.',
          'Targets were set for each stage of that funnel.',
          'Paid acquisition was run by my team, with campaigns aimed at the conversion goals in each stage.',
          'The build contract became a lean retainer, so spending tracked growth.',
        ],
      },
    ],
    results: [
      'Paying customers grew from 196 to 2,048 within six months of launch.',
      'QR-enabled books sent 33–44% of buyers to the platform (excluding Staples), about 9 paying customers per 1,000 books sold.',
      'Google Ads conversion rose from about 3% to 12–15% once campaigns were tied to the funnel.',
    ],
    role: 'Fractional Head of Product',
    roleTag: 'Fractional Head of Product',
    awards: null,
    artifactLabel: 'artefact · book-to-subscriber funnel · b&w',
  },
  'xpo-technologies': {
    pageTitle: 'XPO Technologies | Turning scope creep into a decision leadership could act on',
    pageResult: "The roadmap wasn't behind because of bad estimating. It was behind because nearly half the team's capacity was going somewhere nobody had measured.",
    narrative: [
      "XPO Technologies was mid-build on a new platform architecture, a fixed roadmap of 167 story points, while its biz dev team was simultaneously onboarding new clients onto the same engineering team. Two sprints in, actual delivery had already fallen far behind plan, but the team's own reporting made this look like ordinary variance rather than a warning sign. Leadership had no way to tell whether the roadmap was slipping because of bad estimates or because something else was quietly consuming the capacity they'd already paid for.",
    ],
    keyDecisionsIntro: "Every decision below began as a recommendation from me and was approved by XPO's CEO and Head of Biz Dev.",
    keyDecisions: [
      {
        title: '1. Diagnose the gap as a share of capacity, not story points',
        body: 'Rather than treat the missed sprint targets as an estimating problem, I built a cost model of the team\'s actual capacity. It showed that unplanned bug work was consuming close to half of every sprint — 47.6% — leaving less than the roadmap needed to stay on track. Framed this way, "we\'re behind" became "we are spending nearly half our engineering capacity on unplanned work," a way of stating the problem that leadership could act on immediately.',
      },
      {
        title: '2. Name the competing draw on capacity',
        body: 'The roadmap wasn\'t only being eaten by bugs. It was also competing with new client onboarding, which looked like growth but was quietly drawing on the same engineers. I laid the burn-up of planned versus actual progress alongside the capacity breakdown so leadership could see both drains at once, not just the missed dates.',
      },
      {
        title: '3. Present the trade-off as a real choice, not a status update',
        body: 'I took this to the CEO and Head of Biz Dev as a decision, not an update: keep onboarding new clients on borrowed capacity, or protect the roadmap. Pausing onboarding was framed not as "no," but as "not yet, and here\'s what it buys us."',
      },
      {
        title: '4. Make the fix structural, not a one-time fire drill',
        body: 'The resolution was to pause new client onboarding and formally fold bug fixing into planned sprint capacity going forward, rather than absorbing it as invisible overhead. That meant the next spike in unplanned work would show up as a forecasted line item instead of a repeat surprise.',
      },
    ],
    results: [
      'Roadmap delivery got back on plan after the pause.',
      'Trust was rebuilt between the engineering team and management, with decisions now grounded in shared numbers rather than competing narratives.',
      'The added transparency and planning discipline gave the biz dev team the confidence to resume client onboarding without jeopardizing delivery.',
    ],
    role: 'Fractional Delivery Manager',
    roleTag: 'Fractional Delivery Manager',
    awards: null,
    artifactLabel: 'artefact · planned vs. actual delivery · b&w',
    artifactSrc: 'assets/xpo-burnup-illustration.png',
    artifactAlt: 'Planned vs. actual delivery on the architecture roadmap. Two sprints in, actual progress had already fallen far behind plan.',
    artifactCaption: 'Planned vs. actual delivery on the architecture roadmap. Two sprints in, actual progress had already fallen far behind plan.',
    artifactRatio: '8 / 5',
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
  'neurotech-wearable-platform': {
    pageTitle: "From a founder's idea to a publicly funded, multi-platform release",
    pageResult: 'Five decisions, made at the right moments, took this product from a rigged-up prototype to a multi-platform release that helped the company secure public innovation funding.',
    narrative: [
      "I joined on day two. There was no company entity yet (we tracked billing in a spreadsheet) and no product. The founder had a bold idea: an earbud that lets people control a computer without their hands or voice. The only hardware was a proof of concept rigged from an off-the-shelf earbud, and the founders and executive team each had their own picture of what the platform could become.",
      "Three years later, that idea shipped across platforms. We didn't get there by hiring early or moving fast for its own sake. We got there through a handful of well-timed decisions and a team disciplined enough to carry them out.",
    ],
    keyDecisions: [
      {
        title: '1. Give the vision one story before writing any code',
        parts: [
          { label: 'The situation', text: "Roughly a dozen product ideas were circulating, from device control to cloud services. Each was exciting, but they didn't connect." },
          { label: 'The call', text: 'Agree on one platform story first, then prove one thing.' },
          { label: 'How we executed', text: 'I turned the scattered ideas into a single platform narrative with a clear home for each concept: the device, a core software layer, a developer toolkit (SDK), a desktop hub, and later cloud and mobile. With my lead engineer, I mapped the architecture underneath, including how a user would set up a new device for the first time. Then we chose one use case to prove first: hands-free control of a desktop mouse and keyboard.' },
          { label: 'What it bought us', text: 'A plan the founders could rally behind, and something investors could see.' },
        ],
      },
      {
        title: "2. Don't wait for the hardware",
        parts: [
          { label: 'The situation', text: "The company's own earbud hadn't been designed yet, and outside partners would take months to build it." },
          { label: 'The call', text: 'Build software against the stand-in device and a simulator, so hardware and software could move in parallel.' },
          { label: 'How we executed', text: "We recreated the earbud's motion data in software and built against it from the first sprint. When the real hardware arrived, we plugged it in rather than starting over." },
          { label: 'What it bought us', text: 'A working proof of concept in about 12 weeks, right on the three-month plan. Calibrating the real device later took longer than any single feature, which is exactly why waiting would have cost us.' },
        ],
      },
      {
        title: '3. Choose speed now, with a clear path to scale',
        parts: [
          { label: 'The situation', text: 'Python would let us prototype fast. C++ would perform better and travel across platforms. The founder needed a clear answer.' },
          { label: 'The call', text: 'Start in Python, with Bluetooth libraries that could support the build, and plan a later move to a shared C++ codebase for mobile and other operating systems.' },
          { label: 'How we executed', text: 'At the proof-of-concept review, I laid the trade-offs side by side: speed versus performance, prototyping now versus cross-platform later. The founder and I agreed on a staged path, and we built the platform in layers so a future language change would touch the foundation, not the features.' },
          { label: 'What it bought us', text: 'Fast iteration when it mattered most, with the scaling plan already agreed.' },
        ],
      },
      {
        title: '4. Run a small team with big-team discipline',
        parts: [
          { label: 'The situation', text: 'A tiny team was building on a moving target, the moment when shortcuts are most tempting.' },
          { label: 'The call', text: 'Hold ourselves to real engineering practice from day one, and protect the core over new features.' },
          { label: 'How we executed', text: 'My lead engineer and I held the line on code reviews, versioned releases, documented APIs and builds tested on clean machines. When stability slipped, I paused plugin work so the team could harden the core.' },
          { label: 'What it bought us', text: 'Twice, events outside our control cut the engineering team off for extended periods. The product kept working, and the company ran several investor demos with almost no engineering support.' },
        ],
      },
      {
        title: '5. Scale the team to the milestone, not ahead of it',
        parts: [
          { label: 'The situation', text: 'A public innovation-funding program required a multi-platform release on a fixed timeline.' },
          { label: 'The call', text: 'Grow deliberately, adding each skill only when the plan needed it.' },
          { label: 'How we executed', text: "We grew from one engineer to four, then seven, across embedded, desktop, web and iOS, adding design, cloud and QA along the way. The scope was to bring the hub to macOS, design onboarding for Windows and Mac, set up basic cloud infrastructure and plan the launch. As account lead and interim software manager, I was the link between the founder's vision and the engineering team: I turned ideas into buildable decisions and translated technical constraints back into business terms." },
          { label: 'What it bought us', text: 'Our first multi-platform release shipped within five months, in time for the funding milestone.' },
        ],
      },
    ],
    results: [
      { stat: '12 weeks', text: 'to a working proof of concept, on plan' },
      { stat: '10+ releases', text: 'in the first nine months' },
      { stat: '77%', text: 'of the core mouse and keyboard backlog shipped' },
      { stat: '7x', text: 'engineering team growth, from 1 to 7' },
      { stat: '1 → 2', text: 'platforms in production, with 4 designed' },
      { stat: '5 organizations', text: 'coordinated across 9 parallel workstreams' },
      { stat: 'Several investor demos', text: 'delivered during extended development pauses' },
      { stat: 'Within 5 months', text: 'a multi-platform release for a public funding milestone' },
    ],
    role: 'Account Lead & Interim Software Manager (delivery-partner side), working alongside the lead engineer as platform co-architect.',
    roleTag: 'Account Lead & Interim Software Manager',
    awards: "The earbud was named one of TIME's Best Inventions of 2023. The award recognized the device. The Bluetooth-based software platform my team built is what connects it to computers and the devices around it.",
    artifactLabel: 'artefact · multi-platform build · b&w',
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
        <h1 className="display-2" style={{ maxWidth: '18ch' }}>{content.pageTitle || c.headline}</h1>
        <p className="lead" style={{ marginTop: 'var(--space-6)' }}>{content.pageResult || c.result}</p>
      </div>

      <Section>
        <div className="split" style={{ '--split-a': '1.5fr' }}>
          <div>
            <h3>The story</h3>
            {content.narrative.map((p, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : 'var(--space-4)' }}>{p}</p>
            ))}
            {content.keyDecisions ? (
              <>
                <Rule space={40} weight="hair" />
                <h3>Key decisions</h3>
                {content.keyDecisionsIntro ? <p>{content.keyDecisionsIntro}</p> : null}
                {content.keyDecisions.map((d, i) => (
                  <div key={i} style={{ marginTop: i === 0 ? 'var(--space-6)' : 'var(--space-8)' }}>
                    <h4 style={{ margin: 0 }}>{d.title}</h4>
                    {d.body ? <p style={{ marginTop: 'var(--space-2)' }}>{d.body}</p> : null}
                    {d.parts ? d.parts.map((p, j) => (
                      <p key={j} style={{ marginTop: j === 0 ? 'var(--space-2)' : 'var(--space-3)' }}><strong>{p.label}:</strong> {p.text}</p>
                    )) : null}
                    {d.bullets ? (
                      <ul style={{ margin: 'var(--space-4) 0 0', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {d.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    ) : null}
                    {d.afterBullets ? <p style={{ marginTop: 'var(--space-4)' }}>{d.afterBullets}</p> : null}
                  </div>
                ))}
              </>
            ) : null}
            <Rule space={40} weight="hair" />
            <h3>Results</h3>
            <ul style={{ margin: 'var(--space-4) 0 0', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {content.results.map((r, i) => (
                <li key={i}>{typeof r === 'string' ? r : (<><strong>{r.stat}</strong> {r.text}</>)}</li>
              ))}
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
            <ImageSlot label={content.artifactLabel} src={content.artifactSrc} alt={content.artifactAlt || content.artifactLabel} ratio={content.artifactRatio || '4 / 3'} />
            {content.artifactCaption ? <p className="meta" style={{ marginTop: 'var(--space-3)' }}>{content.artifactCaption}</p> : null}
            <Button variant="secondary" block iconRight={<span>→</span>} href="mailto:neilcbty@gmail.com">Discuss a similar problem</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
window.CaseStudyScreen = CaseStudyScreen;
