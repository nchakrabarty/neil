/* _dev_shim.js — lets cards and UI kits render from source before the
   compiler emits _ds_bundle.js. If a bundled namespace is already on window,
   that one wins. Include with: <script src="<root>/_dev_shim.js" data-root="<root>"></script> */
(function () {
  var script = document.currentScript;
  var root = (script && script.getAttribute('data-root')) || '.';
  var FILES = [
    'components/core/Logo.jsx',
    'components/core/Button.jsx',
    'components/core/Tag.jsx',
    'components/core/Rule.jsx',
    'components/core/Kicker.jsx',
    'components/forms/Input.jsx',
    'components/forms/Field.jsx',
    'components/forms/Textarea.jsx',
    'components/forms/RadioGroup.jsx',
    'components/layout/SiteHeader.jsx',
    'components/layout/SiteFooter.jsx',
    'components/layout/Section.jsx',
    'components/layout/ImageSlot.jsx',
    'components/content/PullQuote.jsx',
    'components/content/StatBlock.jsx',
    'components/content/ServiceRow.jsx',
    'components/content/CaseStudyCard.jsx',
    'components/content/Testimonial.jsx',
    'components/content/MetaList.jsx'
  ];
  var MARKERS = ['Button', 'Section', 'ServiceRow', 'CaseStudyCard'];
  var SCREENS = ((script && script.getAttribute('data-screens')) || '').split(',').filter(Boolean);
  var MOUNT = script && script.getAttribute('data-mount');

  function run(src) {
    return eval(Babel.transform(src, { presets: [['react', { runtime: 'classic' }]] }).code);
  }

  function bundled() {
    try {
      var keys = Object.getOwnPropertyNames(window);
      for (var i = 0; i < keys.length; i++) {
        try {
          var o = window[keys[i]];
          if (o && typeof o === 'object' && !(o instanceof Window) &&
              MARKERS.every(function (n) { return typeof o[n] === 'function'; })) return o;
        } catch (e) { /* cross-origin or throwing getter */ }
      }
    } catch (e) { /* ignore */ }
    return null;
  }

  function loadBundle() {
    return new Promise(function (resolve) {
      var el = document.createElement('script');
      el.src = root + '/_ds_bundle.js';
      el.onload = resolve;
      el.onerror = function () { resolve(); };
      document.head.appendChild(el);
    });
  }

  window.DSReady = (async function () {
    await loadBundle();
    var found = bundled();
    if (found) { window.DSX = found; return found; }
    var NS = {};
    for (var i = 0; i < FILES.length; i++) {
      var src = await (await fetch(root + '/' + FILES[i])).text();
      var names = [];
      src.replace(/export\s+(?:function|const)\s+(\w+)/g, function (_, n) { names.push(n); return _; });
      var deps = [];
      src.replace(/import\s*\{([^}]+)\}\s*from/g, function (_, list) {
        list.split(',').forEach(function (n) { n = n.trim(); if (n) deps.push(n); });
        return _;
      });
      var body = src.split('\n').filter(function (l) { return !/^\s*import\b/.test(l); })
        .join('\n').replace(/^export\s+/gm, '');
      var preamble = deps.map(function (d) { return 'var ' + d + ' = __deps.' + d + ';'; }).join('\n');
      var code = Babel.transform(
        '(function(React, __deps){' + preamble + '\n' + body + '\nreturn {' + names.join(',') + '};})',
        { presets: [['react', { runtime: 'classic' }]] }
      ).code;
      try {
        Object.assign(NS, eval(code)(window.React, NS));
      } catch (e) {
        console.error('[ds-shim]', FILES[i], e.message);
      }
    }
    window.DSX = NS;
    for (var j = 0; j < SCREENS.length; j++) {
      var sSrc = await (await fetch(SCREENS[j].trim())).text();
      try { run(sSrc); } catch (e) { console.error('[ds-shim]', SCREENS[j], e.message); }
    }
    if (MOUNT && typeof window[MOUNT] === 'function') window[MOUNT]();
    return NS;
  })();
})();
