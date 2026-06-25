// ════════════════════════════════════════════════════════════════
// editor.js — Bearbeitungsmodus für die Reiseseite
// ────────────────────────────────────────────────────────────────
// Lädt nach render.js. Fügt einen "Bearbeiten"-Modus hinzu:
//   • Tage hinzufügen / löschen / verschieben
//   • Jedes Feld bearbeiten (Titel, Text, Kosten, Chips, Links,
//     Transit-Karte, Fun-Fact) in allen 3 Sprachen
//   • Speichern im Browser (localStorage)
//   • Export / Import als JSON-Datei
//
// Die Originaldaten aus trip.js bleiben unangetastet. Beim Laden
// prüft der Editor, ob eine gespeicherte Version im Browser liegt
// und nutzt diese stattdessen.
// ════════════════════════════════════════════════════════════════
'use strict';

(function () {
  var STORAGE_KEY = 'trip_data_v1';
  var ALL_LANGS = ['de', 'en', 'pl'];
  var LANG_NAMES = { de: 'DE', en: 'EN', pl: 'PL' };

  // Detect the language the page is currently shown in (set by render.js).
  // Used so the editor opens on that language and new days are seeded from it.
  function currentLang() {
    var l = (window.TRIP_LANG || document.documentElement.lang || 'de');
    return ALL_LANGS.indexOf(l) !== -1 ? l : 'de';
  }
  // LANGS: same three languages, but the page language first so its tab/field
  // is the default the user sees when editing.
  function orderedLangs() {
    var cur = currentLang();
    return [cur].concat(ALL_LANGS.filter(function (l) { return l !== cur; }));
  }
  var LANGS = orderedLangs();

  // Option lists (from existing data)
  var DAY_TYPES = ['rest', 'transit', 'city', 'nature', 'culture', 'china', 'gansu', 'xian', 'c'];
  var CHIP_KINDS = ['rest', 'transit', 'border', 'nature', 'culture', 'city', 'history', 'silk'];
  var LINK_KINDS = ['food', 'sights', 'transport', 'sleep'];
  var FACT_TYPES = ['wow', 'history', 'nature', 'culture'];

  var TYPE_LABELS = {
    rest: 'Erholung', transit: 'Transit', city: 'Stadt', nature: 'Natur',
    culture: 'Kultur', china: 'China', gansu: 'Gansu', xian: "Xi'an", c: 'Sonstige'
  };
  var CHIP_LABELS = {
    rest: 'Erholung', transit: 'Transit', border: 'Grenze', nature: 'Natur',
    culture: 'Kultur', city: 'Stadt', history: 'Geschichte', silk: 'Seidenstraße'
  };
  var LINK_LABELS = { food: '🍽️ Essen', sights: '📷 Sehenswürdigkeit', transport: '🚆 Transport', sleep: '🛏️ Hotel' };
  var FACT_LABELS = { wow: 'Wissenswertes', history: 'Geschichte', nature: 'Natur', culture: 'Kultur' };

  var editMode = false;
  var dirty = false;
  var editLang = currentLang();  // edit in the language the page is shown in
  var currentEditIndex = -1; // which day is open in the modal

  // ── Storage ──────────────────────────────────────────────────
  function hasSaved() {
    try { return !!localStorage.getItem(STORAGE_KEY); } catch (e) { return false; }
  }
  function loadSaved() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function saveTrip() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(window.TRIP));
      setDirty(false);
      toast('Gespeichert ✓', 'success');
      return true;
    } catch (e) {
      toast('Speichern fehlgeschlagen: ' + e.message, 'error');
      return false;
    }
  }
  function clearSaved() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }

  function setDirty(v) {
    dirty = v;
    var tb = document.querySelector('.editor-toolbar');
    if (tb) tb.classList.toggle('dirty', v);
    var saveBtn = document.getElementById('ed-save');
    if (saveBtn) saveBtn.disabled = !v;
  }

  // Apply saved data over window.TRIP before render.js runs
  // (called immediately on script load — see bottom)
  function applySavedData() {
    var saved = loadSaved();
    if (saved && saved.days) {
      // Merge: saved overrides, but keep any new fields from trip.js meta
      window.TRIP = saved;
      return true;
    }
    return false;
  }

  // ── Helpers ──────────────────────────────────────────────────
  function ml(obj) { // multilang getter for current editLang, fallback de
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[editLang] != null ? obj[editLang] : (obj.de || obj.en || obj.pl || '');
  }
  function emptyML() { return { de: '', en: '', pl: '' }; }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

  // Re-render the whole page after data change
  function rerender() {
    if (window.TRIP_RENDER) {
      window.TRIP_RENDER();
    } else {
      location.reload(); // fallback
    }
    // Re-inject edit controls after render
    setTimeout(injectCardControls, 30);
  }

  // ── Toolbar ──────────────────────────────────────────────────
  function buildToolbar() {
    var bar = document.createElement('div');
    bar.className = 'editor-toolbar';
    bar.innerHTML =
      '<span class="et-title">✏️ Reise-Editor <span class="et-dirty">● ungespeichert</span></span>' +
      '<button class="et-btn" id="ed-toggle">Bearbeiten</button>' +
      '<button class="et-btn primary" id="ed-save" disabled>Speichern</button>' +
      '<button class="et-btn ghost" id="ed-export">Export</button>' +
      '<button class="et-btn ghost" id="ed-import">Import</button>' +
      '<button class="et-btn ghost" id="ed-reset">Zurücksetzen</button>' +
      '<input type="file" id="ed-import-file" accept="application/json,.json">';
    document.body.insertBefore(bar, document.body.firstChild);

    document.getElementById('ed-toggle').addEventListener('click', toggleEdit);
    document.getElementById('ed-save').addEventListener('click', saveTrip);
    document.getElementById('ed-export').addEventListener('click', exportTrip);
    document.getElementById('ed-import').addEventListener('click', function () {
      document.getElementById('ed-import-file').click();
    });
    document.getElementById('ed-import-file').addEventListener('change', importTrip);
    document.getElementById('ed-reset').addEventListener('click', resetTrip);
  }

  function toggleEdit() {
    editMode = !editMode;
    LANGS = orderedLangs();        // keep language order in sync with the page
    editLang = currentLang();
    document.body.classList.toggle('edit-mode', editMode);
    document.getElementById('ed-toggle').textContent = editMode ? 'Vorschau' : 'Bearbeiten';
    if (editMode) injectCardControls();
  }

  // ── Per-card controls (edit / move / delete / add) ───────────
  function injectCardControls() {
    // Remove old controls
    document.querySelectorAll('.card-edit-bar, .add-day-row').forEach(function (e) { e.remove(); });

    var cards = document.querySelectorAll('.plans-grid .day-card, .plans-grid .free-day-card');
    var total = cards.length;
    cards.forEach(function (card, i) {
      // Edit bar on the card
      var bar = document.createElement('div');
      bar.className = 'card-edit-bar';
      var upDis = i === 0 ? ' disabled' : '';
      var downDis = i === total - 1 ? ' disabled' : '';
      bar.innerHTML =
        '<button class="ceb-up" title="Nach oben"' + upDis + '>▲</button>' +
        '<button class="ceb-down" title="Nach unten"' + downDis + '>▼</button>' +
        '<button class="ceb-edit" title="Bearbeiten">✏️ Bearbeiten</button>' +
        '<button class="ceb-del" title="Löschen">🗑</button>';
      card.style.position = 'relative';
      card.appendChild(bar);

      bar.querySelector('.ceb-edit').addEventListener('click', function (e) { e.stopPropagation(); openEditor(i); });
      bar.querySelector('.ceb-up').addEventListener('click', function (e) { e.stopPropagation(); moveDay(i, -1); });
      bar.querySelector('.ceb-down').addEventListener('click', function (e) { e.stopPropagation(); moveDay(i, 1); });
      bar.querySelector('.ceb-del').addEventListener('click', function (e) { e.stopPropagation(); deleteDay(i); });

      // "Add day" row after each card
      var addRow = document.createElement('div');
      addRow.className = 'add-day-row';
      addRow.innerHTML = '<button class="add-day-btn">+ Tag einfügen</button>';
      addRow.querySelector('button').addEventListener('click', function () { addDay(i + 1); });
      card.parentNode.insertBefore(addRow, card.nextSibling);
    });

    // "Add day" at the very top
    var col = document.querySelector('.plans-grid .plan-col');
    if (col && cards.length) {
      var topRow = document.createElement('div');
      topRow.className = 'add-day-row';
      topRow.style.marginTop = '0';
      topRow.innerHTML = '<button class="add-day-btn">+ Tag am Anfang einfügen</button>';
      topRow.querySelector('button').addEventListener('click', function () { addDay(0); });
      col.insertBefore(topRow, cards[0]);
    }
  }

  // ── Day operations ───────────────────────────────────────────
  function moveDay(i, dir) {
    var days = window.TRIP.days;
    var j = i + dir;
    if (j < 0 || j >= days.length) return;
    var tmp = days[i]; days[i] = days[j]; days[j] = tmp;
    renumber();
    setDirty(true);
    rerender();
  }
  function deleteDay(i) {
    if (!confirm('Tag ' + window.TRIP.days[i].num + ' wirklich löschen?')) return;
    window.TRIP.days.splice(i, 1);
    renumber();
    setDirty(true);
    rerender();
  }
  function addDay(pos) {
    var cur = currentLang();
    // Seed the title only in the language the page is shown in, so the new
    // card reads correctly right away; other languages stay empty for the user.
    var seedTitle = {};
    seedTitle[cur] = ({ de: 'Neuer Tag', en: 'New day', pl: 'Nowy dzień' })[cur] || 'Neuer Tag';
    var newDay = {
      num: 0,
      date: emptyML(),
      type: 'rest',
      title: seedTitle,
      loc: emptyML(),
      cost: '',
      costNote: emptyML(),
      body: emptyML(),
      chips: [],
      links: []
    };
    window.TRIP.days.splice(pos, 0, newDay);
    renumber();
    setDirty(true);
    rerender();
    // After re-render: scroll the new card into view, then open its editor.
    setTimeout(function () {
      scrollToDay(pos);
      openEditor(pos);
    }, 80);
  }

  // Scroll a given day index into the middle of the viewport (smooth).
  function scrollToDay(index) {
    var cards = document.querySelectorAll('.plans-grid .day-card, .plans-grid .free-day-card');
    var card = cards[index];
    if (card && card.scrollIntoView) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('day-card-flash');
      setTimeout(function () { card.classList.remove('day-card-flash'); }, 1500);
    }
  }
  function renumber() {
    window.TRIP.days.forEach(function (d, i) { d.num = i + 1; });
  }

  // ── Export / Import / Reset ──────────────────────────────────
  function exportTrip() {
    var data = JSON.stringify(window.TRIP, null, 2);
    var blob = new Blob([data], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'trip-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    toast('Exportiert als JSON ✓', 'success');
  }
  function importTrip(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (ev) {
      try {
        var data = JSON.parse(ev.target.result);
        if (!data.days || !Array.isArray(data.days)) throw new Error('Keine gültige Reisedatei (days fehlt)');
        window.TRIP = data;
        renumber();
        setDirty(true);
        rerender();
        toast('Importiert ✓ — denk ans Speichern', 'success');
      } catch (err) {
        toast('Import fehlgeschlagen: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // allow re-importing same file
  }
  function resetTrip() {
    if (!confirm('Auf die Original-Reise (aus trip.js) zurücksetzen? Deine gespeicherten Änderungen gehen verloren.')) return;
    clearSaved();
    location.reload();
  }

  // ── Modal editor ─────────────────────────────────────────────
  function buildModal() {
    var ov = document.createElement('div');
    ov.className = 'editor-overlay';
    ov.id = 'ed-overlay';
    ov.innerHTML =
      '<div class="editor-modal">' +
        '<div class="em-head">' +
          '<h2 id="em-title">Tag bearbeiten</h2>' +
          '<button class="em-close" id="em-close">×</button>' +
        '</div>' +
        '<div class="em-body" id="em-body"></div>' +
        '<div class="em-foot">' +
          '<button class="et-btn ghost" id="em-cancel" style="color:var(--muted)">Abbrechen</button>' +
          '<button class="et-btn primary" id="em-apply">Übernehmen</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);

    document.getElementById('em-close').addEventListener('click', closeEditor);
    document.getElementById('em-cancel').addEventListener('click', closeEditor);
    document.getElementById('em-apply').addEventListener('click', applyEditor);
    ov.addEventListener('click', function (e) { if (e.target === ov) closeEditor(); });
  }

  function openEditor(index) {
    LANGS = orderedLangs();        // refresh: page language first (render.js has set it by now)
    editLang = currentLang();
    currentEditIndex = index;
    var d = window.TRIP.days[index];
    document.getElementById('em-title').textContent = 'Tag ' + d.num + ' bearbeiten';
    document.getElementById('em-body').innerHTML = buildForm(d);
    wireForm(d);
    var overlay = document.getElementById('ed-overlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Reset modal scroll to top and focus the first text field for fast typing
    var modalBody = document.getElementById('em-body');
    if (modalBody) modalBody.scrollTop = 0;
    setTimeout(function () {
      var first = modalBody && modalBody.querySelector('.ef-lang-pane.active input, .ef-lang-pane.active textarea, .ef-input');
      if (first) { try { first.focus(); } catch (e) {} }
    }, 50);
  }
  function closeEditor() {
    document.getElementById('ed-overlay').classList.remove('open');
    document.body.style.overflow = '';
    currentEditIndex = -1;
  }

  // Multi-language text field (input or textarea)
  function mlField(id, labelObj, value, multiline) {
    var tabs = '<div class="ef-langtabs">' + LANGS.map(function (l, i) {
      return '<button type="button" data-mltab="' + id + '" data-lang="' + l + '"' +
        (i === 0 ? ' class="active"' : '') + '>' + LANG_NAMES[l] + '</button>';
    }).join('') + '</div>';
    var panes = LANGS.map(function (l, i) {
      var v = esc((value && value[l]) || '');
      var ctrl = multiline
        ? '<textarea class="ef-textarea" data-ml="' + id + '" data-lang="' + l + '">' + v + '</textarea>'
        : '<input class="ef-input" data-ml="' + id + '" data-lang="' + l + '" value="' + v + '">';
      return '<div class="ef-lang-pane' + (i === 0 ? ' active' : '') + '" data-mlpane="' + id + '" data-lang="' + l + '">' + ctrl + '</div>';
    }).join('');
    return '<div class="ef-group"><label class="ef-label">' + labelObj + '</label>' + tabs + panes + '</div>';
  }

  function selectField(name, options, labels, current) {
    var opts = options.map(function (o) {
      return '<option value="' + o + '"' + (o === current ? ' selected' : '') + '>' + (labels[o] || o) + '</option>';
    }).join('');
    return '<select class="ef-select" data-field="' + name + '">' + opts + '</select>';
  }

  function buildForm(d) {
    var h = [];

    // Basic fields
    h.push('<div class="ef-row">');
    h.push('<div class="ef-group"><label class="ef-label">Typ (Farbe)</label>' +
      selectField('type', DAY_TYPES, TYPE_LABELS, d.type) + '</div>');
    h.push('<div class="ef-group"><label class="ef-label">Kosten</label>' +
      '<input class="ef-input" data-field="cost" value="' + esc(d.cost) + '"></div>');
    h.push('</div>');

    h.push(mlField('date', 'Datum (kurz)', d.date, false));
    h.push(mlField('title', 'Titel', d.title, false));
    h.push(mlField('loc', 'Ort / Unterzeile', d.loc, false));
    h.push(mlField('costNote', 'Kostennotiz', d.costNote, false));
    h.push(mlField('body', 'Beschreibung', d.body, true));

    // Chips
    h.push('<div class="ef-section" id="ef-chips">');
    h.push('<div class="ef-section-head"><h3>Chips (Marker)</h3>' +
      '<button type="button" class="ef-additem" data-add="chip">+ Chip</button></div>');
    h.push('<div id="ef-chips-list">');
    (d.chips || []).forEach(function (c, i) { h.push(chipItem(c, i)); });
    h.push('</div></div>');

    // Links
    h.push('<div class="ef-section" id="ef-links">');
    h.push('<div class="ef-section-head"><h3>Links (Buttons)</h3>' +
      '<button type="button" class="ef-additem" data-add="link">+ Link</button></div>');
    h.push('<div id="ef-links-list">');
    (d.links || []).forEach(function (l, i) { h.push(linkItem(l, i)); });
    h.push('</div></div>');

    // Transit (optional)
    var hasTransit = !!d.transit;
    h.push('<div class="ef-section">');
    h.push('<label class="ef-toggle"><input type="checkbox" id="ef-transit-toggle"' +
      (hasTransit ? ' checked' : '') + '> Transit-Karte (Zug/Bus)</label>');
    h.push('<div id="ef-transit-body" style="margin-top:12px;' + (hasTransit ? '' : 'display:none') + '">');
    h.push(transitForm(d.transit || {}));
    h.push('</div></div>');

    // Fact (optional)
    var hasFact = !!d.fact;
    h.push('<div class="ef-section">');
    h.push('<label class="ef-toggle"><input type="checkbox" id="ef-fact-toggle"' +
      (hasFact ? ' checked' : '') + '> Fun-Fact-Box</label>');
    h.push('<div id="ef-fact-body" style="margin-top:12px;' + (hasFact ? '' : 'display:none') + '">');
    h.push(factForm(d.fact || {}));
    h.push('</div></div>');

    return h.join('');
  }

  function chipItem(c, i) {
    return '<div class="ef-item" data-chip-item="' + i + '">' +
      '<div class="ef-item-head">' +
        selectField('chip-kind', CHIP_KINDS, CHIP_LABELS, c.kind) +
        '<button type="button" class="ef-del-item" data-del="chip">Entfernen</button>' +
      '</div>' +
      mlSmall('chip-text', c.text) +
    '</div>';
  }
  function linkItem(l, i) {
    return '<div class="ef-item" data-link-item="' + i + '">' +
      '<div class="ef-item-head">' +
        selectField('link-kind', LINK_KINDS, LINK_LABELS, l.kind) +
        '<button type="button" class="ef-del-item" data-del="link">Entfernen</button>' +
      '</div>' +
      '<input class="ef-input" data-linkurl="1" placeholder="https://..." value="' + esc(l.url || '') + '" style="margin-bottom:8px">' +
      mlSmall('link-text', l.text) +
    '</div>';
  }
  // Compact multilang (3 inputs stacked, no tabs — for items)
  function mlSmall(cls, value) {
    return '<div class="ef-ml-small">' + LANGS.map(function (l) {
      return '<input class="ef-input" data-mlsmall="' + cls + '" data-lang="' + l + '" placeholder="' +
        LANG_NAMES[l] + '" value="' + esc((value && value[l]) || '') + '" style="margin-bottom:5px;font-size:12.5px">';
    }).join('') + '</div>';
  }

  function transitForm(tc) {
    var h = [];
    h.push(mlField('tc-route', 'Route', tc.route, false));
    h.push(mlField('tc-total', 'Gesamtdauer', tc.total, false));
    h.push('<label class="ef-label" style="margin-top:8px">Zeilen (Abfahrt, Ankunft, …)</label>');
    h.push('<div id="ef-tc-rows">');
    (tc.rows || []).forEach(function (r, i) { h.push(tcRowItem(r, i)); });
    h.push('</div>');
    h.push('<button type="button" class="ef-additem" data-add="tcrow" style="margin-bottom:12px">+ Zeile</button>');
    h.push(mlField('tc-change', 'Tipp / Hinweis (optional)', tc.change, true));
    return h.join('');
  }
  function tcRowItem(r, i) {
    return '<div class="ef-item" data-tcrow-item="' + i + '">' +
      '<div class="ef-item-head"><strong style="font-size:12px">Zeile ' + (i + 1) + '</strong>' +
        '<button type="button" class="ef-del-item" data-del="tcrow">Entfernen</button></div>' +
      '<label class="ef-label" style="font-size:10px">Bezeichnung (Abfahrt/Ankunft…)</label>' +
      mlSmall('tcrow-label', r.label) +
      '<label class="ef-label" style="font-size:10px;margin-top:6px">Wert (Zeit, Ort — HTML erlaubt)</label>' +
      mlSmall('tcrow-val', r.val) +
    '</div>';
  }

  function factForm(f) {
    var h = [];
    h.push('<div class="ef-row">');
    h.push('<div class="ef-group"><label class="ef-label">Typ</label>' +
      selectField('fact-type', FACT_TYPES, FACT_LABELS, f.type || 'wow') + '</div>');
    h.push('<div class="ef-group"><label class="ef-label">Icon (Emoji)</label>' +
      '<input class="ef-input" data-field="fact-icon" value="' + esc(f.icon || '') + '"></div>');
    h.push('</div>');
    h.push(mlField('fact-title', 'Fact-Titel', f.title, false));
    h.push(mlField('fact-text', 'Fact-Text', f.text, true));
    return h.join('');
  }

  // Wire up dynamic controls inside the modal
  function wireForm(d) {
    var body = document.getElementById('em-body');

    // Language tabs (mlField)
    body.querySelectorAll('[data-mltab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-mltab');
        var lang = btn.getAttribute('data-lang');
        body.querySelectorAll('[data-mltab="' + id + '"]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        body.querySelectorAll('[data-mlpane="' + id + '"]').forEach(function (p) {
          p.classList.toggle('active', p.getAttribute('data-lang') === lang);
        });
      });
    });

    // Add chip / link / tcrow
    body.querySelectorAll('[data-add]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var what = btn.getAttribute('data-add');
        if (what === 'chip') {
          var list = document.getElementById('ef-chips-list');
          var i = list.children.length;
          list.insertAdjacentHTML('beforeend', chipItem({ kind: 'rest', text: emptyML() }, i));
          wireItemDeletes();
        } else if (what === 'link') {
          var list2 = document.getElementById('ef-links-list');
          var i2 = list2.children.length;
          list2.insertAdjacentHTML('beforeend', linkItem({ kind: 'food', url: '', text: emptyML() }, i2));
          wireItemDeletes();
        } else if (what === 'tcrow') {
          var list3 = document.getElementById('ef-tc-rows');
          var i3 = list3.children.length;
          list3.insertAdjacentHTML('beforeend', tcRowItem({ label: emptyML(), val: emptyML() }, i3));
          wireItemDeletes();
        }
      });
    });

    // Toggles for transit / fact
    var tt = document.getElementById('ef-transit-toggle');
    tt.addEventListener('change', function () {
      document.getElementById('ef-transit-body').style.display = tt.checked ? '' : 'none';
    });
    var ft = document.getElementById('ef-fact-toggle');
    ft.addEventListener('change', function () {
      document.getElementById('ef-fact-body').style.display = ft.checked ? '' : 'none';
    });

    wireItemDeletes();
  }
  function wireItemDeletes() {
    document.querySelectorAll('.ef-del-item').forEach(function (btn) {
      btn.onclick = function () { btn.closest('.ef-item').remove(); };
    });
  }

  // Read all values from modal back into the day object
  function applyEditor() {
    var idx = currentEditIndex;
    if (idx < 0) return;
    var body = document.getElementById('em-body');
    var d = window.TRIP.days[idx];

    // Simple fields
    d.type = body.querySelector('[data-field="type"]').value;
    d.cost = body.querySelector('[data-field="cost"]').value;

    // ML fields
    d.date = readML(body, 'date');
    d.title = readML(body, 'title');
    d.loc = readML(body, 'loc');
    d.costNote = readML(body, 'costNote');
    d.body = readML(body, 'body');

    // Chips
    d.chips = [];
    body.querySelectorAll('#ef-chips-list .ef-item').forEach(function (item) {
      d.chips.push({
        kind: item.querySelector('[data-field="chip-kind"]').value,
        text: readMLSmall(item, 'chip-text')
      });
    });

    // Links
    d.links = [];
    body.querySelectorAll('#ef-links-list .ef-item').forEach(function (item) {
      d.links.push({
        kind: item.querySelector('[data-field="link-kind"]').value,
        url: item.querySelector('[data-linkurl]').value.trim(),
        text: readMLSmall(item, 'link-text')
      });
    });

    // Transit
    if (document.getElementById('ef-transit-toggle').checked) {
      var tc = {
        route: readML(body, 'tc-route'),
        total: readML(body, 'tc-total'),
        rows: []
      };
      body.querySelectorAll('#ef-tc-rows .ef-item').forEach(function (item) {
        tc.rows.push({
          label: readMLSmall(item, 'tcrow-label'),
          val: readMLSmall(item, 'tcrow-val')
        });
      });
      var change = readML(body, 'tc-change');
      if (change.de || change.en || change.pl) tc.change = change;
      d.transit = tc;
    } else {
      delete d.transit;
    }

    // Fact
    if (document.getElementById('ef-fact-toggle').checked) {
      d.fact = {
        type: body.querySelector('[data-field="fact-type"]').value,
        icon: body.querySelector('[data-field="fact-icon"]').value,
        title: readML(body, 'fact-title'),
        text: readML(body, 'fact-text')
      };
    } else {
      delete d.fact;
    }

    setDirty(true);
    var idx = currentEditIndex;
    rerender();
    closeEditor();
    // After both re-render and close, bring the edited card back into view
    if (idx >= 0) setTimeout(function () { scrollToDay(idx); }, 90);
  }

  function readML(scope, id) {
    var out = {};
    LANGS.forEach(function (l) {
      var el = scope.querySelector('[data-ml="' + id + '"][data-lang="' + l + '"]');
      out[l] = el ? el.value : '';
    });
    return out;
  }
  function readMLSmall(scope, cls) {
    var out = {};
    LANGS.forEach(function (l) {
      var el = scope.querySelector('[data-mlsmall="' + cls + '"][data-lang="' + l + '"]');
      out[l] = el ? el.value : '';
    });
    return out;
  }

  // ── Toast ────────────────────────────────────────────────────
  var toastTimer;
  function toast(msg, kind) {
    var el = document.getElementById('ed-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'ed-toast';
      el.className = 'ed-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = 'ed-toast ' + (kind || '');
    // force reflow then show
    void el.offsetWidth;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2500);
  }

  // ── Warn on unload if unsaved ────────────────────────────────
  window.addEventListener('beforeunload', function (e) {
    if (dirty) { e.preventDefault(); e.returnValue = ''; }
  });

  // ── Boot ─────────────────────────────────────────────────────
  // Build UI once the page (and render.js) are ready.
  document.addEventListener('trip-rendered', function () {
    if (!document.querySelector('.editor-toolbar')) {
      buildToolbar();
      buildModal();
    }
  });

  // Expose applySavedData so it can run BEFORE render (see index.html order)
  window.TRIP_EDITOR_APPLY_SAVED = applySavedData;
})();
