const NAV = [
  { id: 'home', label: 'Home', href: '#/' },
  { id: 'work', label: 'Case Studies', href: '#/work' },
];

function parseHash() {
  const raw = (window.location.hash || '').replace(/^#\/?/, '');
  if (!raw || raw === 'home') return { page: 'home', caseId: null };
  if (raw === 'work') return { page: 'work', caseId: null };
  const m = raw.match(/^case\/(.+)$/);
  if (m) return { page: 'case', caseId: decodeURIComponent(m[1]) };
  return { page: 'home', caseId: null };
}

function buildHash(page, id) {
  if (page === 'case' && id) return '#/case/' + encodeURIComponent(id);
  if (page === 'work') return '#/work';
  return '#/';
}
window.caseHref = function (id) { return buildHash('case', id); };

function App() {
  const { SiteHeader, SiteFooter } = window.DSX;
  const initial = parseHash();
  const [page, setPage] = React.useState(initial.page);
  const [caseId, setCaseId] = React.useState(initial.caseId || 'grit-bulk-enrollment');

  React.useEffect(() => {
    const onHashChange = () => {
      const next = parseHash();
      setPage(next.page);
      if (next.caseId) setCaseId(next.caseId);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const go = (p, id) => {
    const hash = buildHash(p, id);
    if (window.location.hash === hash) {
      // Same hash won't fire hashchange, so update state directly (e.g.
      // re-clicking the current nav item should still scroll to top).
      setPage(p);
      if (id) setCaseId(id);
      window.scrollTo(0, 0);
    } else {
      window.location.hash = hash;
    }
  };
  const screen = {
    home: <HomeScreen go={go} />,
    work: <CaseStudiesScreen go={go} />,
    case: <CaseStudyScreen go={go} caseId={caseId} />,
  }[page];
  return (
    <>
      <SiteHeader items={NAV} current={page === 'case' ? 'work' : page}
        onNavigate={(id) => go(id || 'home')} cta={{ label: 'Get in touch', href: 'mailto:neilcbty@gmail.com' }} />
      {screen}
      <SiteFooter
        blurb="Fractional product leadership across business, usability, data & AI."
        columns={[
          { title: 'Site', links: NAV.map((n) => ({ label: n.label, href: n.href, onClick: () => go(n.id) })) },
          { title: 'Elsewhere', links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nchakrabarty/', target: '_blank' }, { label: 'neilcbty@gmail.com' }] },
        ]}
        note="© 2026 Neil Chakrabarty · Vancouver, BC" />
    </>
  );
}

window.__mount = function () {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
};
