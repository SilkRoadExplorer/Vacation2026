# Reiseplaner — mit Browser-Editor

Dreisprachige (DE/EN/PL) Reiseplaner-Seite. Du kannst den **kompletten Plan direkt
auf der Webseite bearbeiten** — kein Code nötig. Änderungen werden im Browser
gespeichert (auf deinem Gerät).

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die Seite — hier öffnest du alles |
| `trip.js` | Die Reisedaten (Ausgangsplan) |
| `editor.js` + `editor.css` | Der Bearbeitungsmodus |
| `render.js` | Baut die Tageskarten |
| `script.js`, `style.css` | Karte, Packliste, Währungsrechner, Design |
| `trip.template.js` | Leere Vorlage für eine ganz neue Reise |

**Wichtig:** Alle Dateien müssen im selben Ordner liegen (z. B. dein GitHub-Pages-Repo).

## So bearbeitest du den Plan

1. Seite öffnen, oben auf **„Bearbeiten"** klicken.
2. An jeder Tageskarte erscheinen Knöpfe:
   - **✏️ Bearbeiten** — öffnet ein Formular mit ALLEN Feldern des Tages
   - **▲ / ▼** — Tag nach oben/unten verschieben
   - **🗑** — Tag löschen
   - **+ Tag hinzufügen** — neuen Tag einfügen (zwischen den Karten)
3. Im Bearbeiten-Formular änderst du Titel, Ort, Kosten, Beschreibung, Chips,
   Links (Essen/Sehenswürdigkeit/Transport/Hotel), Transit-Karte und Fun-Fact —
   jeweils in **DE / EN / PL** (Reiter im Formular).
4. **„Übernehmen"** schließt das Formular und zeigt die Änderung sofort.
5. Wenn alles passt, oben auf **„Speichern"** klicken → wird im Browser gespeichert.

Der Speichern-Knopf wird erst aktiv, wenn es ungespeicherte Änderungen gibt.
Verlässt du die Seite mit ungespeicherten Änderungen, warnt der Browser.

## Sichern & Übertragen

- **Export** — lädt deinen aktuellen Plan als JSON-Datei herunter (Sicherung).
- **Import** — lädt so eine JSON-Datei wieder ein.
- **Zurücksetzen** — verwirft gespeicherte Änderungen, zurück zum Original aus `trip.js`.

### Änderungen dauerhaft machen
Der Browser-Speicher gilt nur auf deinem Gerät und kann beim Leeren des Caches
verloren gehen. Für eine dauerhafte Version: **Export** klicken, den Inhalt der
heruntergeladenen Datei kopieren und damit den `window.TRIP = {...}`-Block in
`trip.js` ersetzen, dann neu hochladen. So wird dein Plan zum neuen Ausgangsstand.

## Sprache

`index.html?lang=de` (oder `en` / `pl`). Der Umschalter oben rechts merkt sich die Wahl.

## Gut zu wissen

- Die Seite braucht JavaScript (die Karten werden im Browser erzeugt).
- Der Browser-Speicher ist pro Gerät und pro Browser. Auf einem anderen Gerät
  siehst du wieder den Original-Plan (bis du dort importierst).
- Möchtest du den Plan auf mehreren Geräten synchron oder zu mehreren bearbeiten,
  bräuchte es einen Cloud-Dienst (Firebase/Supabase) — das ist bewusst nicht
  eingebaut, um die Seite einfach und ohne Konto zu halten.
