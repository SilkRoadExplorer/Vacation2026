/* ════════════════════════════════════════════════════════
   JEDWABNY SZLAK 2026 — script.js
   Shared JS for PL / EN / DE versions
   ════════════════════════════════════════════════════════ */

'use strict';

/* ── Accordion ─────────────────────────────────────────── */
function toggleAcc(id) {
  const sec  = document.getElementById(id);
  const body = sec.querySelector('.acc-body');
  const btn  = sec.querySelector('.acc-header');
  const open = sec.classList.toggle('open');
  body.style.display = open ? 'block' : 'none';
  btn.setAttribute('aria-expanded', open);
  // Refresh map if it's the map accordion being opened
  if (id === 'acc-map' && window._map) {
    setTimeout(() => window._map.invalidateSize(), 300);
  }
}

/* ── Scroll-reveal for day cards ───────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Small stagger based on position in viewport batch
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (i % 4) * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.day-card, .free-day-card').forEach(card => {
    observer.observe(card);
  });
}

/* ── Parallax on card images ───────────────────────────── */
function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const images = document.querySelectorAll('.card-image');
  if (!images.length) return;

  let ticking = false;

  function updateParallax() {
    images.forEach(img => {
      const wrap = img.closest('.card-image-wrap');
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const vh   = window.innerHeight;
      // Only animate when card is in viewport
      if (rect.bottom < 0 || rect.top > vh) return;
      // Progress: 0 when top hits bottom of viewport, 1 when bottom hits top
      const progress = (vh - rect.top) / (vh + rect.height);
      // Shift: -20% to +20% of image height
      const shift = (progress - 0.5) * 40; // ±20%
      img.style.transform = `translateY(${shift}px)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();
}

/* ── Packlist ───────────────────────────────────────────── */
function initPacklist() {
  const items    = document.querySelectorAll('.pack-item');
  const fill     = document.getElementById('pack-fill');
  const labelEl  = document.getElementById('pack-label');
  const resetBtn = document.getElementById('pack-reset-btn');
  if (!items.length || !fill) return;

  // Detect language from <html lang="">
  const lang = document.documentElement.lang || 'pl';
  const progressWord = { pl: 'spakowano', en: 'packed', de: 'gepackt' }[lang] || 'spakowano';

  function update() {
    const total   = items.length;
    const checked = [...items].filter(it => it.querySelector('input').checked).length;
    fill.style.width = Math.round(checked / total * 100) + '%';
    if (labelEl) labelEl.textContent = `${checked} / ${total} ${progressWord}`;
    // Save
    const state = {};
    items.forEach(it => { state[it.querySelector('input').id] = it.querySelector('input').checked; });
    try { localStorage.setItem('pack_state', JSON.stringify(state)); } catch(e) {}
  }

  // Restore saved state
  try {
    const saved = JSON.parse(localStorage.getItem('pack_state') || '{}');
    items.forEach(it => {
      const cb = it.querySelector('input');
      if (saved[cb.id]) { cb.checked = true; it.classList.add('checked'); }
    });
  } catch(e) {}

  items.forEach(it => {
    const cb = it.querySelector('input');
    cb.addEventListener('change', () => { it.classList.toggle('checked', cb.checked); update(); });
    it.addEventListener('click', e => {
      if (e.target === it) { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change')); }
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      items.forEach(it => { it.querySelector('input').checked = false; it.classList.remove('checked'); });
      update();
      try { localStorage.removeItem('pack_state'); } catch(e) {}
    });
  }

  update();
}

/* ── Leaflet map ────────────────────────────────────────── */
function initMap() {
  const container = document.getElementById('route-map');
  if (!container || typeof L === 'undefined') return;

  const lang = document.documentElement.lang || 'pl';

  const stops = [
    { name: 'Ałmaty',    nameEn: 'Almaty',    lat: 43.238, lng: 76.945,  days: 'Dni 1–3',    daysEn: 'Days 1–3',    icon: '🏙️' },
    { name: 'Horgos',    nameEn: 'Khorgos',   lat: 44.205, lng: 80.412,  days: 'Dzień 4',    daysEn: 'Day 4',       icon: '🛂' },
    { name: 'Sajram',    nameEn: 'Sayram',     lat: 43.870, lng: 81.235,  days: 'Dzień 4',    daysEn: 'Day 4',       icon: '🏔️' },
    { name: 'Yining',    nameEn: 'Yining',     lat: 43.908, lng: 81.324,  days: 'Dni 4–5',   daysEn: 'Days 4–5',   icon: '🕌' },
    { name: 'Ürümqi',    nameEn: 'Ürümqi',     lat: 43.793, lng: 87.627,  days: 'Przesiadka', daysEn: 'Transit',     icon: '🚄' },
    { name: 'Turpan',    nameEn: 'Turpan',     lat: 42.951, lng: 89.189,  days: 'Dni 6–7',   daysEn: 'Days 6–7',   icon: '🌵' },
    { name: 'Jiayuguan', nameEn: 'Jiayuguan',  lat: 39.802, lng: 98.300,  days: 'Dzień 8',    daysEn: 'Day 8',       icon: '🏯' },
    { name: 'Zhangye',   nameEn: 'Zhangye',    lat: 38.939, lng: 100.449, days: 'Dzień 9',    daysEn: 'Day 9',       icon: '🌈' },
    { name: "Xi'an",     nameEn: "Xi'an",      lat: 34.341, lng: 108.940, days: 'Dni 10–13',  daysEn: 'Days 10–13',  icon: '🏛️' },
  ];

  const map = L.map('route-map', { scrollWheelZoom: false });
  window._map = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const latlngs = stops.map(s => [s.lat, s.lng]);
  L.polyline(latlngs, { color: '#6a2a6a', weight: 2.5, opacity: 0.7, dashArray: '6,4' }).addTo(map);

  const isTransit = s => s.days === 'Przesiadka';

  stops.forEach((s, i) => {
    const transit = isTransit(s);
    const marker = L.circleMarker([s.lat, s.lng], {
      radius:      transit ? 5 : 8,
      fillColor:   transit ? '#aaa' : '#6a2a6a',
      color:       '#fff',
      weight:      2,
      fillOpacity: transit ? 0.5 : 0.9
    }).addTo(map);

    const displayName = lang === 'pl' ? s.name : s.nameEn;
    const displayDays = lang === 'pl' ? s.days : s.daysEn;
    marker.bindPopup(`<strong>${s.icon} ${displayName}</strong><br><span style="color:#888;font-size:11px">${displayDays}</span>`);

    if (!transit) {
      marker.bindTooltip(s.icon + ' ' + displayName, {
        permanent: true,
        direction: i % 2 === 0 ? 'right' : 'left',
        offset: [8, 0],
        className: 'map-label'
      });
    }
    s.marker = marker;
  });

  map.fitBounds(L.latLngBounds(latlngs), { padding: [40, 40], maxZoom: 6 });
}

/* ── Currency converter ─────────────────────────────────── */
// Indicative rates (Aug 2026): 1 EUR = 530 KZT, 1 EUR = 7.9 CNY
var CUR_RATES = { eur: 1, kzt: 530, cny: 7.9 };

function convertCur(source) {
  var eurEl = document.getElementById('cur-eur');
  var kztEl = document.getElementById('cur-kzt');
  var cnyEl = document.getElementById('cur-cny');
  if (!eurEl || !kztEl || !cnyEl) return;

  var val = parseFloat(document.getElementById('cur-' + source).value);
  if (isNaN(val)) {
    if (source !== 'eur') eurEl.value = '';
    if (source !== 'kzt') kztEl.value = '';
    if (source !== 'cny') cnyEl.value = '';
    return;
  }
  // Convert source to EUR base, then to others
  var eur = val / CUR_RATES[source];
  var round = function (n) { return Math.round(n * 100) / 100; };
  if (source !== 'eur') eurEl.value = round(eur);
  if (source !== 'kzt') kztEl.value = Math.round(eur * CUR_RATES.kzt);
  if (source !== 'cny') cnyEl.value = round(eur * CUR_RATES.cny);
}

function initCurrency() {
  // Populate initial values from the default EUR input
  if (document.getElementById('cur-eur')) convertCur('eur');
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPacklist();
  initScrollReveal();
  initParallax();
  initCurrency();
});

window.addEventListener('load', () => {
  // Auto-open map on desktop so Leaflet sizes correctly
  const mapSec = document.getElementById('acc-map');
  if (mapSec && window.innerWidth >= 900) {
    const body = mapSec.querySelector('.acc-body');
    const btn  = mapSec.querySelector('.acc-header');
    mapSec.classList.add('open');
    body.style.display = 'block';
    btn.setAttribute('aria-expanded', 'true');
  }
  initMap();
});
