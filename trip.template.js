// ════════════════════════════════════════════════════════════════
// trip.template.js — VORLAGE für eine neue Reise
// ────────────────────────────────────────────────────────────────
// So legst du eine neue Reise an:
//   1. Kopiere diese Datei → trip.js
//   2. Fülle 'days' mit so vielen Tagen wie du brauchst (3, 9, 20 …)
//   3. Passe header + total + map.stops an
//   4. Fertig — render.js baut die Seite automatisch
//
// Sprachen: jedes Textfeld ist {pl, en, de}. Wenn du nur eine Sprache
// brauchst, lass die anderen weg oder kopiere denselben Text.
// Aufruf: index.html?lang=de  (oder en / pl)
// ════════════════════════════════════════════════════════════════

window.TRIP = {

  // ── Kopf der Seite ──────────────────────────────────────────────
  meta: {
    header: {
      overline: { pl: "", en: "", de: "Reise · X Tage · Datum" },
      title:    { pl: "", en: "", de: "Mein Reisetitel" },
      subtitle: { pl: "", en: "", de: "Untertitel" },
      route:    { pl: "", en: "", de: "Ort A → Ort B → Ort C" },
      badge:    { pl: "", en: "", de: "Kurz-Label" }
    },

    // Gesamtsumme unten auf der Seite
    total: {
      label: { de: "Reisetitel · ~XXX €" },
      desc:  { de: "Gesamt pro Person · X Tage" },
      note:  { de: "Hinweis zu Flügen etc." },
      breakdown: [
        { label: { de: "Unterkünfte" }, val: "~000 €" },
        { label: { de: "Essen" },       val: "~000 €" },
        { label: { de: "Transport" },   val: "~000 €" }
      ]
    },

    // Karte (Leaflet). Leer lassen [] = keine Karte.
    map: {
      title:   { de: "🗺️ Route" },
      caption: { de: "Marker anklicken für Details" },
      stops: [
        // { name:{de:"Wien"}, lat:48.21, lng:16.37, days:{de:"Tag 1"}, icon:"🏙️" },
        // { ..., transit:true }   // grauer Zwischenstopp
      ]
    },

    // Zwischenüberschriften zwischen Tagesgruppen.
    // afterDay = nach welchem Tag die Überschrift erscheint.
    sectionLabels: [
      // { afterDay:3, text:{de:"Zweite Etappe"} }
    ]
  },

  // ── UI-Texte (selten ändern) ────────────────────────────────────
  ui: {
    langNames: { pl: "PL", en: "EN", de: "DE" },
    dayWord:   { pl: "Dzień", en: "Day", de: "Tag" },
    booked:    { pl: "✓ zarezerwowane", en: "✓ booked", de: "✓ gebucht" },
    factLabels: {
      wow:     { pl: "Ciekawostka", en: "Fun fact", de: "Wissenswertes" },
      history: { pl: "Historia", en: "History", de: "Geschichte" },
      nature:  { pl: "Przyroda", en: "Nature", de: "Natur" },
      culture: { pl: "Kultura", en: "Culture", de: "Kultur" }
    }
  },

  // ── DIE TAGE — hier passiert die Arbeit ─────────────────────────
  days: [

    {
      num: 1,
      date: { de: "1. Tag" },
      type: "rest",                       // rest | transit | city | nature | culture
      title: { de: "Titel des Tages" },
      loc:   { de: "Ort · Unterzeile" },
      cost: "~50 €",
      costNote: { de: "Hotel + Transfer" },
      body: { de: "Beschreibung des Tagesablaufs." },

      // Chips (kleine farbige Marker). kind bestimmt die Farbe.
      chips: [
        { kind: "rest", text: { de: "Ankunft" } }
        // kind: rest|transit|border|nature|culture|city|history|silk
      ],

      // Links als Buttons. kind bestimmt Farbe + Position.
      links: [
        { kind: "food",   url: "https://...", text: { de: "🍽️ Restaurant" } },
        { kind: "sights", url: "https://...", text: { de: "📷 Sehenswürdigkeit" } },
        { kind: "sleep",  url: "https://...", text: { de: "🛏️ Hotel" } }
        // kind: food|sights|transport|sleep
      ],

      // OPTIONAL: Transit-Karte (Zug/Bus mit Details)
      // transit: {
      //   route: { de: "🚄 Ort A → Ort B" },
      //   total: { de: "~3 Std. gesamt" },
      //   rows: [
      //     { label:{de:"Abfahrt"}, val:{de:"<strong>12:26</strong> · Bahnhof"} },
      //     { label:{de:"Ankunft"}, val:{de:"~16:00 · Zielbahnhof"} }
      //   ],
      //   change: { de: "💡 Tipp zum Umstieg" }
      // },

      // OPTIONAL: Fun-Fact-Box
      // fact: {
      //   type: "wow",                    // wow | history | nature | culture
      //   icon: "🍎",
      //   title: { de: "Überschrift" },
      //   text: { de: "Interessanter Fakt." }
      // }
    }

    // … weitere Tage hier anhängen.
    // Mehr Tage = längere Reise, weniger = kürzere. Sonst nichts ändern.

  ]
};

// Statische Sektionen (Packliste, Wetter, Visa, Apps, Notfall, Phrasen, Währung)
// kommen aus der bestehenden trip.js — bei einer ganz neuen Reise hier
// entweder leer lassen oder eigene Übersetzungen eintragen.
window.TRIP_STRINGS = window.TRIP_STRINGS || {};
