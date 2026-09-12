const NAV = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Case studies' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const { SiteHeader, SiteFooter } = window.DSX;
  const [page, setPage] = React.useState('about');
  const [caseId, setCaseId] = React.useState('northline');
  const go = (p, id) => { if (id) setCaseId(id); setPage(p); window.scrollTo(0, 0); };
  const screen = {
    about: <AboutScreen go={go} />,
    services: <ServicesScreen go={go} />,
    work: <CaseStudiesScreen go={go} />,
    case: <CaseStudyScreen go={go} caseId={caseId} />,
    contact: <ContactScreen />,
  }[page];
  return (
    <>
      <SiteHeader items={NAV} current={page === 'case' ? 'work' : page}
        onNavigate={(id) => go(id || 'about')} cta={{ label: 'Book a call', onClick: () => go('contact') }} />
      {screen}
      <SiteFooter
        blurb="Fractional product leadership across business, usability, data & AI."
        columns={[
          { title: 'Site', links: NAV.map((n) => ({ label: n.label })) },
          { title: 'Elsewhere', links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nchakrabarty/', target: '_blank' }, { label: 'Instagram', href: 'https://www.instagram.com/neilcbty/', target: '_blank' }, { label: 'neilcbty@gmail.com' }] },
        ]}
        note="© 2026 Neil Chakrabarty · Vancouver, BC" />
    </>
  );
}

window.__mount = function () {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
};
