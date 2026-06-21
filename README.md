# Reiseplaner — Modulares System

Eine wiederverwendbare, dreisprachige (PL/EN/DE) Reiseplaner-Webseite.
Der Reiseinhalt steckt komplett in **einer Datendatei** — du änderst nie HTML.

## Dateien

| Datei | Zweck | Änderst du? |
|---|---|---|
| `trip.js` | **Die Reisedaten** (Tage, Kosten, Karte, Texte) | ✅ Ja — hier passiert alles |
| `render.js` | Baut die Tageskarten aus `trip.js` | ❌ Nein |
| `index.html` | Gerüst + statische Sektionen | ❌ Selten |
| `style.css` | Aussehen | ❌ Nur fürs Design |
| `script.js` | Karte, Packliste, Währungsrechner | ❌ Nein |
| `trip.template.js` | Leere Vorlage für neue Reisen | Kopiervorlage |

## Eine Reise ändern

Öffne `trip.js`. Jeder Tag ist ein Objekt im `days`-Array:

```javascript
{
  num: 1,
  date: { de: "1. Aug" },
  type: "rest",                    // bestimmt die Akzentfarbe
  title: { de: "Ankunft" },
  loc:   { de: "Wien · Hotel" },
  cost: "~50 €",
  costNote: { de: "Hotel" },
  body: { de: "Beschreibung..." },
  chips: [{ kind: "rest", text: { de: "Ankunft" } }],
  links: [{ kind: "sleep", url: "https://...", text: { de: "🛏️ Hotel" } }]
}
```

- **Tag hinzufügen** → neues Objekt ins `days`-Array
- **Tag löschen** → Objekt entfernen
- **Längere Reise** → mehr Objekte; **kürzere** → weniger

Alles Weitere (Nummerierung, Farben, Layout, Übersetzung) macht `render.js` automatisch.

## Neue Reise anlegen

1. `trip.template.js` → nach `trip.js` kopieren
2. `days` füllen, `header` + `total` + `map.stops` anpassen
3. Im Browser `index.html` öffnen

## Sprache

`index.html?lang=de` (oder `en` / `pl`). Der Umschalter oben rechts merkt sich die Wahl.
Jedes Textfeld ist `{ pl: "...", en: "...", de: "..." }`. Fehlende Sprachen fallen auf DE zurück.

## Feldreferenz

**type** (Tagesfarbe): `rest` · `transit` · `city` · `nature` · `culture` · `china` · `gansu` · `xian`
**chip.kind**: `rest` · `transit` · `border` · `nature` · `culture` · `city` · `history` · `silk`
**link.kind**: `food` · `sights` · `transport` · `sleep`
**fact.type**: `wow` · `history` · `nature` · `culture`

**Optionale Felder pro Tag**: `transit` (Zug/Bus-Karte), `fact` (Fun-Fact-Box), `naadam` (Spezialbox).

## Hosting

Alle Dateien in dasselbe Verzeichnis legen (z. B. GitHub Pages). Fertig.
Hinweis: Die Seite braucht JavaScript — die Tageskarten werden im Browser erzeugt.
