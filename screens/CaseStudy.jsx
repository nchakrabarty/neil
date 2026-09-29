const CASE_CONTENT = {
  'grit-bulk-enrollment': {
    pageTitle: 'Turning a 2-day onboarding into a 3-click employer action',
    pageResult: "The fix wasn't a faster version of the employee's flow. It was removing the employee from the flow — the employer already had the data the process kept asking for.",
    pullQuote: 'The employer already had the data the process kept asking for.',
    narrative: [
      "Grit's onboarding flow put employees in the driver's seat of their own compliance — submitting identity documents and clearing KYC checks on their own, one step at a time. It was mentally taxing and slow enough that only 62% of people who started actually finished, even with strong marketing driving people to the front door.",
      'The answer was Mass Enrollment: rebuilding onboarding around the employer instead of the employee, using data the employer already had on file. Getting there took four decisions, each building on the one before it.',
    ],
    keyDecisions: [
      {
        title: '1. Research both sides of onboarding before redesigning it',
        parts: [
          { label: 'The situation', text: "38% of the people who started onboarding never finished it, and marketing and support could point to the drop-off without explaining it." },
          { label: 'The call', text: 'Go talk to the people stuck in the flow, and the people running payroll and HR for them, before changing a single screen.' },
          { label: 'How I executed', text: 'I looked at onboarding from both sides of it: the employees going through the flow, and the employer HR and payroll teams who set them up on Grit in the first place. Employees experienced the identity and KYC steps as repetitive and confusing — being asked to re-enter information by hand. Employers, on the other side, already held that same information as verified data in their own payroll and HR systems.' },
          { label: 'What it bought us', text: "A finding, not a guess: the bottleneck wasn't the KYC logic itself. It was asking the wrong party — the employee — to reassemble information the employer already had on file." },
        ],
      },
      {
        title: '2. Redesign around the employer, not the employee',
        parts: [
          { label: 'The situation', text: 'The research pointed at a different target user for the onboarding flow than the one it had been designed for.' },
          { label: 'The call', text: "Move the point of action from the employee to the employer's HR admin." },
          { label: 'How I executed', text: 'I rebuilt onboarding so the employer selects who to enroll, and the backend silently runs identity and compliance checks using data already on file. No employee action required.' },
          { label: 'What it bought us', text: "An onboarding flow with nothing left for the employee to get stuck on, because it no longer asked them to do anything." },
        ],
      },
      {
        title: '3. Architect Mass Enrollment as a direct payroll/HR integration',
        parts: [
          { label: 'The situation', text: "The employer's verified employee data lived inside their own payroll and HR systems, not inside Grit." },
          { label: 'The call', text: "Build a direct integration to that data, rather than a new form for the employer to fill out by hand." },
          { label: 'How I executed', text: "I designed a direct integration between Grit and the employer's payroll/HR system, so identity and compliance checks could run automatically against data the employer had already verified." },
          { label: 'What it bought us', text: 'An onboarding action that took an employer 3 clicks instead of the days of back-and-forth the old process required.' },
        ],
        // TODO(neil): this screenshot mentions "Corecard" (a legacy ZIP-format
        // limitation) and "Fortuna" (international phone number support) as
        // small asides in two bullet points. No "Internal use only" or
        // "CONFIDENTIAL" marking, and no client name beyond what's already
        // public on the site — but please confirm those two vendor/product
        // mentions are OK to ship before this goes live.
        figure: {
          src: 'assets/case-studies/12-bulk-enrollment-detailed-flow.webp',
          alt: 'Detailed flow diagram of the rules-engine validation gate for Mass Enrollment.',
          caption: 'The rules-engine validation gate: duplicate detection, field rules and card-delivery requirements.',
        },
      },
      {
        title: '4. Build Mass Enrollment as the cornerstone of a new B2B admin portal',
        parts: [
          { label: 'The situation', text: 'Mass Enrollment on its own solved onboarding, but HR teams running the program still needed a place to manage everything downstream of it.' },
          { label: 'The call', text: 'Ship Mass Enrollment as the anchor feature of a new B2B admin portal, not a standalone tool.' },
          { label: 'How I executed', text: 'I architected Mass Enrollment as the cornerstone feature of a new B2B admin portal — covering enrollment, card ordering, shipment tracking, and an operational metrics dashboard for the HR teams running the program — and led the team through build.' },
          { label: 'What it bought us', text: 'A single home for HR teams to run the whole program, not just the sign-up step.' },
        ],
        figure: {
          src: 'assets/case-studies/13-bulk-enrollment-iteration-2.webp',
          alt: 'Iteration 2 development priorities for Mass Enrollment.',
          caption: 'Iteration 2 priorities.',
        },
      },
    ],
    stats: [
      { value: '62% → 97%', label: 'Onboarding success rate' },
      { value: '~2 days → minutes', label: 'Onboarding time' },
      { value: '~1,000', label: 'New users in the first 3 months' },
    ],
    results: [
      'Onboarding time: ~2 days → minutes',
      'Onboarding success rate: 62% → 97%',
      '~1,000 new users added in the first 3 months post-launch (active users now ~2,000 total)',
    ],
    role: 'VP of Data Platforms, Grit Financial — architected the feature and the B2B admin portal, drove the UX, and led the engineering team through build.',
    roleTag: 'VP of Data Platforms',
    awards: null,
    artifactLabel: 'artefact · mass enrollment flow · b&w',
    artifactSrc: 'assets/bulk-enrollment-timeline.webp',
    artifactAlt: 'Mass Enrollment onboarding timeline.',
    artifactRatio: '11 / 5',
    artifactTone: 'color',
  },
  'classroom-ready': {
    pageTitle: 'Turning book buyers into subscribers',
    pageResult: 'Leadership thought the videos were the problem. The data said the videos were fine and the path to them was broken.',
    pullQuote: 'The data said the videos were fine and the path to them was broken.',
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
    stats: [
      { value: '196 → 2,048', label: 'Paying customers in six months' },
      { value: '33–44%', label: 'QR scan to platform (excl. Staples)' },
      { value: '3% → 12–15%', label: 'Google Ads conversion' },
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
    artifactComponent: 'FunnelFigure',
  },
  'xpo-technologies': {
    pageTitle: 'Turning scope creep into a decision leadership could act on',
    pageResult: "The roadmap wasn't behind because of bad estimating. It was behind because nearly half the team's capacity was going somewhere nobody had measured.",
    pullQuote: "It was behind because nearly half the team's capacity was going somewhere nobody had measured.",
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
    pageTitle: 'Scaling complaint review without automating judgment',
    pageResult: 'The hard part was not getting the model to classify complaints. It was designing a system that knew when the evidence was too weak to classify at all.',
    pullQuote: 'It was designing a system that knew when the evidence was too weak to classify at all.',
    narrative: [
      "Grit's compliance team was reviewing customer-service complaints and transaction records by hand. The work was necessary, but the process scaled linearly with volume: every new record created another record a trained reviewer had to read from a blank page.",
      'The opportunity looked straightforward. Build a classification layer that could identify potential UDAAP, Regulation E, Regulation P, Regulation GG and related compliance concerns, then route the right cases to a person.',
      'The risk was less straightforward. A language model can produce a confident explanation even when the complaint does not contain enough evidence to support it. In compliance, a polished answer without a defensible trail is not a shortcut. It is a new risk.',
      'My recommendation was to build a decision system rather than a standalone classifier: deterministic rules for clear triggers, contextual reasoning for ambiguous narratives, confidence-based routing, and human review as part of the operating model. The model would organize the work. Compliance would still own the determination.',
    ],
    keyDecisionsIntro: 'Every decision below began with the same constraint: the model could triage, but a person had to own the final call.',
    keyDecisions: [
      {
        title: '1. Build the rulebook before the model',
        parts: [
          { label: 'The situation', text: 'The complaint data contained labels, but the regulatory logic behind those labels was not yet explicit enough to serve as a repeatable decision standard.' },
          { label: 'The call', text: 'Start with a regulatory knowledge base, not a prompt.' },
          { label: 'How I executed', text: [
            'I structured the source material around the regulations in scope, beginning with primary and supervisory sources such as Dodd-Frank sections 1031 and 1036, the CFPB UDAAP examination guidance, and the applicable Regulation E, Regulation DD, Regulation P and Regulation GG materials.',
            'Each rule was broken into reusable parts: scope, trigger, required evidence, missing facts, exceptions, potential consumer harm, source and recommended escalation. The complaint framework then sat on top of that knowledge base, with one layer for issue classification and another for regulatory reasoning.',
          ] },
          { label: 'What it bought us', text: 'The model no longer had to "remember" the regulation. It had a rule to evaluate, evidence to look for and a source a reviewer could trace.' },
        ],
      },
      {
        title: '2. Separate observable facts from regulatory conclusions',
        parts: [
          { label: 'The situation', text: 'A single complaint could combine an allegation, an operational explanation and a regulatory implication in the same paragraph. If the system classified all three at once, it was difficult to tell whether an error came from misunderstood facts or misapplied rules.' },
          { label: 'The call', text: 'Extract the facts first. Apply the regulation second.' },
          { label: 'How I executed', text: [
            'For each record, the system produced a normalized complaint summary, issue category, product and channel, triggering facts, missing facts, potential regulatory flags, root cause, confidence score and written rationale.',
            'For example, "my money is missing" was not enough on its own to confirm Regulation E. The system still needed to determine whether the record described a covered electronic fund transfer, whether the consumer alleged an error or unauthorized activity, whether notice had been provided and whether the resolution timeline was known.',
          ] },
          { label: 'What it bought us', text: 'A reviewer could disagree with the facts, the rule application or the conclusion without reverse-engineering the entire model response. That made corrections faster and the audit trail more useful.' },
        ],
      },
      {
        title: '3. Make "Unknown" a real answer',
        parts: [
          { label: 'The situation', text: 'Keyword-based classification was too eager. Words such as "declined," "blocked," "fraud" and "funds" appeared across ordinary operational issues, genuine transaction disputes and incomplete records. Forcing every complaint into a regulation would make the output look complete while making it less reliable.' },
          { label: 'The call', text: 'Treat insufficient evidence as a classification, not a failure.' },
          { label: 'How I executed', text: [
            'When the complaint did not establish the transaction type, authorization status, disclosure, timing, consumer notice or other evidence needed for a defensible conclusion, the system selected Unknown and stated what information was missing.',
            'That was an intentional design choice. The system was allowed to say, "The complaint log is not enough. Review the ticket notes, transaction history, disclosure record or system event."',
          ] },
          { label: 'What it bought us', text: 'The model became less likely to fill gaps with assumptions. More importantly, the compliance team could distinguish a potentially low-risk complaint from a complaint that simply had not been documented well enough to assess.' },
        ],
      },
      {
        title: '4. Turn confidence into workflow',
        parts: [
          { label: 'The situation', text: 'A confidence score is only useful when it changes what happens next. Displaying 54% beside a classification without changing the review path would have been decoration.' },
          { label: 'The call', text: 'Use confidence as a routing control.' },
          { label: 'How I executed', text: [
            'Any record below 60% confidence was automatically flagged for human review. The score represented confidence in the classification based on the available evidence. It did not represent the probability that a legal violation had occurred.',
            'I then turned the output into a searchable compliance report. Reviewers could filter by regulation, Unknown status, root cause, confidence band and human-review requirement; inspect the original complaint and resolution beside the rationale; and export the resulting review set.',
          ] },
          { label: 'What it bought us', text: 'The model handled the repetitive sorting. Reviewers spent their time on ambiguity, overlap and higher-risk cases — the work that actually required judgment.' },
        ],
      },
      {
        title: '5. Use human disagreement as training data',
        parts: [
          { label: 'The situation', text: "The first output was structured and explainable, but it still reflected the model's interpretation of incomplete operational records. It needed to be challenged at ticket level by the people accountable for the compliance decision." },
          { label: 'The call', text: 'Make human review a formal learning loop, not a sign-off at the end.' },
          { label: 'How I executed', text: [
            'The report went through two rounds of human review.',
            'The first review produced 29 ticket-level corrections. I retained each change and updated the classification logic around the issues those records exposed.',
            'The second review was much larger: 834 disagreements, each tied to a ticket, a recommended classification and a reason for the change. I applied all 834 individually, retained the 29 earlier updates and refreshed the rules and rationales behind the model.',
            'Across both reviews, 863 of 9,253 records changed — about 9.3% of the register. Many of the changes did not move a complaint from one regulation to another. They moved it to Unknown because the complaint narrative did not contain enough evidence to support the original classification.',
            'Every correction remained traceable through the ticket identifier, original classification, reviewed classification, reason for disagreement and updated rationale.',
          ] },
          { label: 'What it bought us', text: 'The system became more conservative where the evidence was weak and more specific where reviewers supplied the missing context. Human disagreement did not sit outside the model. It became the input that improved it.' },
        ],
      },
    ],
    stats: [
      { value: '60% reduction', label: 'In compliance audit review time' },
      { value: '9,253', label: 'Complaint records classified' },
      { value: '863', label: 'Ticket-level decisions updated across two review rounds' },
    ],
    results: [
      { stat: '60% reduction', text: 'in compliance audit review time without reducing the population covered by the review.' },
      { stat: '9,253 complaint records', text: 'processed through a consistent classification and reasoning framework.' },
      { stat: '863 ticket-level decisions updated', text: 'through two formal human-review cycles: 29 in the first review and 834 in the second.' },
      { stat: 'Sub-60% confidence automatically routed', text: 'to human review rather than presented as a complete answer.' },
      { stat: 'A reusable regulatory knowledge structure', text: 'covering triggers, required evidence, missing facts, exceptions, harm and source.' },
      { stat: 'An audit-ready record', text: 'of the complaint, resolution, classification, rationale, confidence, root cause and reviewer correction.' },
    ],
    role: 'VP of Data Platforms, Grit Financial — I designed the regulatory knowledge architecture, complaint taxonomy, classification logic, confidence and escalation model, human-review workflow and interactive compliance report. I worked alongside compliance to incorporate both rounds of ticket-level review and convert the disagreements into stronger rules rather than one-off overrides.',
    roleTag: 'VP of Data Platforms',
    awards: null,
    lesson: [
      'The value of the system was not that it always produced an answer.',
      'It was that it made the boundary between evidence, inference and human judgment visible. Automation handled structure, pattern recognition and scale. Compliance retained ownership of interpretation and final determination.',
    ],
    closingQuestion: "How did you make sure the model wasn't hallucinating?",
    artifactLabel: 'artefact · complaint classification and review workflow · b&w',
    artifactSrc: 'assets/Complaint_classification.webp',
    artifactAlt: 'Complaint classification and review workflow diagram.',
    artifactRatio: '37 / 10',
    artifactTone: 'color',
  },
  'neurotech-wearable-platform': {
    pageTitle: "From a founder's idea to a publicly funded, multi-platform release",
    pageResult: 'Five decisions, made at the right moments, took this product from a rigged-up prototype to a multi-platform release that helped the company secure public innovation funding.',
    pullQuote: 'The founder had a bold idea: an earbud that lets people control a computer without their hands or voice.',
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
    stats: [
      { value: '12 weeks', label: 'To a working proof of concept, on plan' },
      { value: '7x', label: 'Engineering team growth, from 1 to 7' },
      { value: 'Within 5 months', label: 'Multi-platform release for the funding milestone' },
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
  const DSX = window.DSX;
  const { Section, MetaList, Button, Kicker, Rule, ImageSlot, PullQuote, StatBlock } = DSX;
  const c = (window.CASES || []).find((x) => x.id === caseId) || (window.CASES || [])[0];
  const content = CASE_CONTENT[c.id];
  const ArtifactComponent = content.artifactComponent ? DSX[content.artifactComponent] : null;

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
            {content.pullQuote ? <PullQuote style={{ margin: 'var(--space-10) 0' }}>{content.pullQuote}</PullQuote> : null}
            {content.keyDecisions ? (
              <>
                <Rule space={40} weight="hair" />
                <h3>The decisions that drove results</h3>
                {content.keyDecisionsIntro ? <p>{content.keyDecisionsIntro}</p> : null}
                {content.keyDecisions.map((d, i) => (
                  <div key={i} style={{ marginTop: i === 0 ? 'var(--space-6)' : 'var(--space-8)' }}>
                    <h4 style={{ margin: 0 }}>{d.title}</h4>
                    {d.body ? <p style={{ marginTop: 'var(--space-2)' }}>{d.body}</p> : null}
                    {d.parts ? d.parts.flatMap((p, j) => {
                      const texts = Array.isArray(p.text) ? p.text : [p.text];
                      return texts.map((t, k) => (
                        <p key={`${j}-${k}`} style={{ marginTop: (j === 0 && k === 0) ? 'var(--space-2)' : 'var(--space-3)' }}>
                          {k === 0 ? <strong>{p.label}: </strong> : null}{t}
                        </p>
                      ));
                    }) : null}
                    {d.bullets ? (
                      <ul style={{ margin: 'var(--space-4) 0 0', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {d.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    ) : null}
                    {d.afterBullets ? <p style={{ marginTop: 'var(--space-4)' }}>{d.afterBullets}</p> : null}
                    {d.figure ? (
                      <div style={{ marginTop: 'var(--space-4)', maxWidth: 480 }}>
                        <ImageSlot src={d.figure.src} alt={d.figure.alt} caption={d.figure.caption}
                          tone={d.figure.tone || 'mono'} ratio="4 / 3" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </>
            ) : null}
            <Rule space={40} weight="hair" />
            <h3>Results</h3>
            {content.stats ? <StatBlock stats={content.stats} style={{ marginBottom: 'var(--space-6)' }} /> : null}
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
            {content.lesson ? (
              <>
                <h3 style={{ marginTop: 'var(--space-10)' }}>The lesson</h3>
                {content.lesson.map((p, i) => (
                  <p key={i} style={{ marginTop: i === 0 ? 0 : 'var(--space-3)' }}>{p}</p>
                ))}
                {content.closingQuestion ? <p style={{ marginTop: 'var(--space-4)' }}><strong>{content.closingQuestion}</strong></p> : null}
              </>
            ) : null}
          </div>
          <div className="case-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <MetaList items={[
              { label: 'Client', value: c.client },
              { label: 'Role', value: content.roleTag },
              { label: 'Disciplines', value: c.tags.join(', ') },
            ]} />
            {ArtifactComponent ? (
              <div style={{ width: '100%', aspectRatio: content.artifactRatio || '4 / 3', background: 'var(--surface-card)' }}>
                <ArtifactComponent />
              </div>
            ) : (
              <ImageSlot label={content.artifactLabel} src={content.artifactSrc} alt={content.artifactAlt || content.artifactLabel}
                ratio={content.artifactRatio || '4 / 3'} tone={content.artifactTone || 'mono'} />
            )}
            {content.artifactCaption ? <p className="meta" style={{ marginTop: 'var(--space-3)' }}>{content.artifactCaption}</p> : null}
            <Button variant="secondary" block iconRight={<span>→</span>} href="mailto:neilcbty@gmail.com">Discuss a similar problem</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
window.CaseStudyScreen = CaseStudyScreen;
