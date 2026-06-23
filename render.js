// ════════════════════════════════════════════════════════════════
// render.js — RENDERER
// ────────────────────────────────────────────────────────────────
// Liest window.TRIP (aus trip.js) und baut alle Tageskarten + Header
// automatisch. Diese Datei musst du normalerweise NICHT ändern.
// Sprache: ?lang=de in der URL, oder Standard 'de'.
// ════════════════════════════════════════════════════════════════
'use strict';

(function () {
  // ── Sprache bestimmen ──────────────────────────────────────────
  var params = new URLSearchParams(window.location.search);
  var LANG = params.get('lang') || localStorage.getItem('trip_lang') || 'de';
  if (['pl', 'en', 'de'].indexOf(LANG) === -1) LANG = 'de';
  document.documentElement.lang = LANG;

  // Helper: pick language string from {pl,en,de}
  function t(obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[LANG] != null ? obj[LANG] : (obj.de || obj.en || obj.pl || '');
  }
  // Escape for safe text insertion (titles, labels). Body/links may contain HTML.
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var TRIP = window.TRIP;
  if (!TRIP) { console.error('trip.js not loaded'); return; }
  var UI = TRIP.ui;

  // ── Tagesnummer-Block: type → CSS-Klasse ──────────────────────
  // Behält das bestehende Farbschema bei (alle slate, Akzent über Chips)
  function dnClass(type) {
    return 'dn-' + type; // dn-rest, dn-transit, dn-china, dn-gansu, dn-xian, dn-c
  }

  // ── Eine Tageskarte bauen ─────────────────────────────────────
  function buildDay(d) {
    var h = [];
    h.push('<div class="day-card">');
    h.push('<div class="day-card-header">');

    // Num block
    h.push('<div class="day-num-block ' + dnClass(d.type) + '">');
    h.push('<span class="dn">' + esc(t(UI.dayWord)) + ' ' + d.num + '</span>');
    h.push('<span class="dd">' + esc(t(d.date)) + '</span>');
    h.push('</div>');

    // Info
    h.push('<div class="day-info">');
    h.push('<div class="day-title">' + esc(t(d.title)) + '</div>');
    h.push('<div class="day-loc">' + esc(t(d.loc)) + '</div>');
    if (d.chips && d.chips.length) {
      h.push('<div class="day-chips">');
      d.chips.forEach(function (c) {
        h.push('<span class="chip ' + c.kind + '">' + esc(t(c.text)) + '</span>');
      });
      h.push('</div>');
    }
    h.push('</div>');

    // Cost
    h.push('<div class="day-cost">');
    h.push('<span class="cost-main">' + esc(d.cost) + '</span>');
    h.push('<span class="cost-note">' + esc(t(d.costNote)) + '</span>');
    h.push('</div>');

    h.push('</div>'); // /day-card-header

    // Body
    h.push('<div class="day-body">');
    h.push('<span class="day-body-text">' + t(d.body) + '</span>');

    // Naadam box (special)
    if (d.naadam) {
      h.push('<div class="naadam-box">');
      h.push('<div class="naadam-title">' + esc(t(d.naadam.title)) + '</div>');
      h.push('<div class="naadam-text">' + buildNaadamText(d.naadam) + '</div>');
      h.push('</div>');
    }

    // Links
    if (d.links && d.links.length) {
      h.push('<div class="day-links">');
      d.links.forEach(function (l) {
        if (l.url) {
          h.push('<a class="day-link ' + l.kind + '" href="' + l.url + '" target="_blank" rel="noopener">' + t(l.text) + '</a>');
        } else {
          h.push('<span class="day-link ' + l.kind + '">' + t(l.text) + '</span>');
        }
      });
      h.push('</div>');
    }

    // Transit card
    if (d.transit) {
      h.push(buildTransit(d.transit));
    }

    // Fact box
    if (d.fact) {
      h.push(buildFact(d.fact));
    }

    h.push('</div>'); // /day-body
    h.push('</div>'); // /day-card
    return h.join('\n');
  }

  function buildNaadamText(n) {
    // naadam.textRaw may contain data-t spans from old format; render plainly per-lang
    if (n.textParts) {
      return n.textParts.map(function (p) { return t(p); }).join(' ');
    }
    return t(n.text || { pl: '', en: '', de: '' });
  }

  // ── Transit card ──────────────────────────────────────────────
  function buildTransit(tc) {
    var h = [];
    h.push('<div class="transit-card">');
    h.push('<div class="tc-header">');
    h.push('<div class="tc-route">' + esc(t(tc.route)) + '</div>');
    h.push('<div class="tc-total">' + esc(t(tc.total)) + '</div>');
    h.push('</div>');
    h.push('<div class="tc-body">');
    (tc.rows || []).forEach(function (r) {
      // val is {pl,en,de} and may contain HTML (links, strong, booked badge)
      var val = t(r.val);
      h.push('<div class="tc-row"><span class="tc-label">' + esc(t(r.label)) +
        '</span><span class="tc-val">' + val + '</span></div>');
    });
    h.push('</div>');
    if (tc.change) {
      h.push('<div class="tc-change">' + t(tc.change) + '</div>');
    }
    h.push('</div>');
    return h.join('\n');
  }

  // localizeRaw: handle valRaw strings that still carry data-t spans or booked badges
  function localizeRaw(raw) {
    // Replace <span data-t="booked">...</span> with localized booked text
    raw = raw.replace(/<span class="booked-badge"[^>]*>.*?<\/span>/g,
      '<span class="booked-badge">' + esc(t(UI.booked)) + '</span>');
    // Replace any remaining data-t spans by stripping the tag (keep inner per-lang if mapped)
    // For simplicity, strip data-t attribute spans to their inner text
    return raw;
  }

  // ── Fact box ──────────────────────────────────────────────────
  function buildFact(f) {
    var label = UI.factLabels[f.type] || UI.factLabels.wow;
    var h = [];
    h.push('<div class="fact-box fact-' + f.type + '">');
    h.push('<div class="fact-stamp-icon">' + f.icon + '</div>');
    h.push('<div class="fact-stamp-body">');
    h.push('<span class="fact-stamp-type">' + esc(t(label)) + '</span>');
    h.push('<div class="fact-stamp-title">' + esc(t(f.title)) + '</div>');
    h.push('<div class="fact-stamp-text">' + t(f.text) + '</div>');
    h.push('</div>');
    h.push('</div>');
    return h.join('\n');
  }

  // ── Section label (between day groups) ────────────────────────
  function buildSectionLabel(text) {
    return '<div class="section-label">' + esc(t(text)) + '</div>';
  }

  // ── Header ────────────────────────────────────────────────────
  function buildHeader() {
    var hd = TRIP.meta.header;
    var h = [];
    h.push('<div class="page-header"><div class="header-content">');
    h.push('<div class="overline">' + esc(t(hd.overline)) + '</div>');
    h.push('<h1>' + esc(t(hd.title)) + '</h1>');
    h.push('<div class="header-subtitle">' + esc(t(hd.subtitle)) + '</div>');
    h.push('<div class="header-route">' + esc(t(hd.route)) + '</div>');
    h.push('<div class="plan-badges">');
    h.push('<span class="badge badge-c"><span class="badge-dot"></span> ' + esc(t(hd.badge)) + '</span>');
    // Language switcher
    h.push('<div class="lang-switcher">');
    ['pl', 'en', 'de'].forEach(function (code, i) {
      if (code === LANG) {
        h.push('<span class="active">' + UI.langNames[code] + '</span>');
      } else {
        h.push('<a href="?lang=' + code + '" onclick="localStorage.setItem(\'trip_lang\',\'' + code + '\')">' + UI.langNames[code] + '</a>');
      }
      if (i < 2) h.push('<span class="lang-sep">·</span>');
    });
    h.push('</div>');
    h.push('</div>');
    h.push('</div></div>');
    return h.join('\n');
  }

  // ── Plans area: days + section labels interleaved ─────────────
  function buildPlans() {
    var h = [];
    h.push('<div class="plans-grid"><div class="plan-col">');
    var labels = {};
    (TRIP.meta.sectionLabels || []).forEach(function (sl) { labels[sl.afterDay] = sl.text; });

    TRIP.days.forEach(function (d) {
      // Section label BEFORE this day if one is anchored to the previous day
      if (labels[d.num - 1]) {
        h.push(buildSectionLabel(labels[d.num - 1]));
      }
      h.push(buildDay(d));
    });
    h.push('</div></div>');
    return h.join('\n');
  }

  // ── Totals ────────────────────────────────────────────────────
  function buildTotals() {
    var tot = TRIP.meta.total;
    var h = [];
    h.push('<div class="totals-bar"><div class="total-cell">');
    h.push('<div class="total-label">' + esc(t(tot.label)) + '</div>');
    h.push('<div class="total-main tc">' + esc(tot.label[LANG] ? '' : '') + '~1.253 €</div>');
    h.push('<div class="total-sub">' + esc(t(tot.note)) + '</div>');
    h.push('<div class="total-breakdown">');
    (tot.breakdown || []).forEach(function (b) {
      h.push('<div class="tb-row"><span>' + esc(t(b.label)) + '</span><span>' + esc(b.val) + '</span></div>');
    });
    h.push('</div>');
    h.push('</div></div>');
    return h.join('\n');
  }

  // ── Mount everything ──────────────────────────────────────────
  function mount() {
    // Always read the freshest data (editor may have replaced window.TRIP)
    TRIP = window.TRIP;
    UI = TRIP.ui;

    var headerEl = document.getElementById('trip-header');
    var plansEl = document.getElementById('trip-plans');
    var totalsEl = document.getElementById('trip-totals');
    if (headerEl) headerEl.innerHTML = buildHeader();
    if (plansEl) plansEl.innerHTML = buildPlans();
    if (totalsEl) totalsEl.innerHTML = buildTotals();

    // Localize static sections (data-i attributes)
    localizeStatic();

    // Fire ready event so script.js can init map, packlist, etc.
    document.dispatchEvent(new CustomEvent('trip-rendered', { detail: { lang: LANG } }));
  }

  // Localize static HTML sections that carry data-t / data-named attributes.
  // Translation table lives in window.TRIP_STRINGS (static_translations).
  function localizeStatic() {
    var S = window.TRIP_STRINGS || {};
    // data-t: leaf text nodes
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var key = el.getAttribute('data-t');
      if (S[key]) el.innerHTML = t(S[key]);
    });
    // data-named: section headers etc.
    document.querySelectorAll('[data-named]').forEach(function (el) {
      var key = el.getAttribute('data-named');
      if (S[key]) el.innerHTML = t(S[key]);
    });
    // data-i: direct TRIP path lookups (optional)
    document.querySelectorAll('[data-i]').forEach(function (el) {
      var path = el.getAttribute('data-i').split('.');
      var val = TRIP;
      for (var i = 0; i < path.length && val; i++) val = val[path[i]];
      if (val) el.innerHTML = t(val);
    });
  }

  // expose lang + helper for script.js
  window.TRIP_LANG = LANG;
  window.TRIP_T = t;
  // expose re-render so the editor can refresh the page after edits
  window.TRIP_RENDER = mount;

  // If the editor saved a modified trip in the browser, load it before rendering
  if (window.TRIP_EDITOR_APPLY_SAVED) {
    try { window.TRIP_EDITOR_APPLY_SAVED(); } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
