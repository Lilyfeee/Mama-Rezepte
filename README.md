# 🌸 Rezeptbuch für Mama

## Lokales Testen (VS Code)

1. Ordner in VS Code öffnen: **Datei → Ordner öffnen → rezeptbuch/**
2. Rechtsklick auf `index.html` → **"Show Preview"** (Live Preview Extension)
3. ⚠️ Nicht per Doppelklick öffnen — braucht einen lokalen Server!

---

## Auf GitHub Pages veröffentlichen (für Mama per Link zugänglich)

### Schritt 1 — GitHub Account erstellen
👉 https://github.com/signup

### Schritt 2 — Neues Repository
1. Einloggen auf github.com
2. Oben rechts: **"+" → "New repository"**
3. Name: `rezeptbuch-mama`
4. **Public** auswählen
5. **"Create repository"** klicken

### Schritt 3 — Dateien hochladen
1. Im leeren Repository: **"uploading an existing file"** klicken
2. Alle Dateien aus dem ZIP hochladen — **Ordnerstruktur beibehalten!**
   ```
   index.html          ← ins Root (direkt rein)
   css/style.css
   js/i18n.js
   js/recipes.js
   js/timer.js
   js/app.js
   data/bread.js
   data/pasta.js
   data/meat.js
   data/soup.js
   data/baking.js
   data/dessert.js
   data/drinks.js
   ```
3. Unten: **"Commit changes"** klicken

### Schritt 4 — GitHub Pages aktivieren
1. Im Repository: **Settings** (oben)
2. Links: **Pages**
3. Source: **"Deploy from a branch"**
4. Branch: **main** / Ordner: **/ (root)**
5. **Save** klicken

### Schritt 5 — Link an Mama schicken
Nach 1-2 Minuten ist die Seite erreichbar unter:
```
https://DEIN-GITHUB-NAME.github.io/rezeptbuch-mama
```

---

## Ein neues Rezept hinzufügen

Öffne die passende Datei in `/data/`, z.B. `baking.js` für ein Kuchenrezept.

Füge ein neues Objekt ans Array an:

```javascript
['baking', '🎂', 8, {
  'zh-Hant': {
    t: 'Titel auf Chinesisch',
    d: 'Kurze Beschreibung (optional)',
    z: [['200克', '麵粉'], ['3個', '雞蛋']],        // Zutaten: [Menge, Zutat]
    s: [['Schritt-Name', 'Beschreibung', 0]],       // Schritte: [Name, Text, Timer in Sekunden]
    n: 'Hinweis (optional)'
  },
  'zh-Hans': { ... },   // Vereinfachtes Chinesisch
  de:        { ... },   // Deutsch
  en:        { ... },   // Englisch
}],
```

**Timer:** `0` = kein Timer, `1800` = 30 min, `3600` = 1 Stunde

---

## Farbe ändern

In `css/style.css` ganz oben:
```css
:root {
  --F:  #C0157A;   /* Hauptfarbe — hier ändern */
}
```

## Begrüßungstext ändern

In `js/i18n.js` unter dem jeweiligen Sprachcode:
```javascript
'zh-Hant': {
  hm: 'Eigener Text hier...'
}
```
