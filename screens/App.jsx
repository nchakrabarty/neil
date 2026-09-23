const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'work-history', label: 'Work History' },
  { id: 'work', label: 'Case Studies' },
  { id: 'contact', label: 'Services + Contact' },
];

function App() {
  const { SiteHeader, SiteFooter } = window.DSX;
  const [page, setPage] = React.useState('home');
  const [caseId, setCaseId] = React.useState('grit-bulk-enrollment');
  const go = (p, id) => { if (id) setCaseId(id); setPage(p); window.scrollTo(0, 0); };
  const screen = {
    home: <HomeScreen go={go} />,
    'work-history': <WorkHistoryScreen go={go} />,
    work: <CaseStudiesScreen go={go} />,
    case: <CaseStudyScreen go={go} caseId={caseId} />,
    contact: <ServicesContactScreen />,
  }[page];
  return (
    <>
      <SiteHeader items={NAV} current={page === 'case' ? 'work' : page}
        onNavigate={(id) => go(id || 'home')} cta={{ label: "Let's talk", onClick: () => go('contact') }} />
      {screen}
      <SiteFooter
        blurb="Fractional product leadership across business, usability, data & AI."
        columns={[
          { title: 'Site', links: NAV.map((n) => ({ label: n.label, onClick: () => go(n.id) })) },
          { title: 'Elsewhere', links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nchakrabarty/', target: '_blank' }, { label: 'Instagram', href: 'https://www.instagram.com/neilcbty/', target: '_blank' }, { label: 'neilcbty@gmail.com' }] },
        ]}
        note="© 2026 Neil Chakrabarty · Vancouver, BC" />
    </>
  );
}

window.__mount = function () {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
};
