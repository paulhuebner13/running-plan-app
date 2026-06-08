# KW Laufplan App

Mobile-optimierte React/Vite-App für einen 20-Wochen-Laufplan ab KW 24 / 08.06.2026.

## Features

- Anzeige nach Kalenderwoche, nicht nach Woche 1, Woche 2 usw.
- Pfeile zum Wechseln zwischen Kalenderwochen.
- 4 fixe Läufe pro Woche plus optionaler Extra-Lauf.
- Detailansicht mit Ablauf, Optimalpuls, strengem HR-Bereich und Zielpace.
- Statusfarben: gelb = offen, grün = erledigt, rot = Woche vorbei und nicht erledigt.
- Fortschritt lokal gespeichert und optional über Supabase synchronisiert.
- Trainingsplan liegt in `src/trainingPlan.js` und kann dort bearbeitet werden.

## Lokal starten

```bash
npm install
npm run dev
```

## Supabase einrichten

1. Neues Supabase-Projekt erstellen.
2. SQL aus `supabase/schema.sql` im Supabase SQL Editor ausführen.
3. `.env.example` zu `.env` kopieren.
4. `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY` eintragen.
5. App neu starten.

## Vercel Deployment

1. Projekt auf GitHub pushen.
2. In Vercel importieren.
3. Environment Variables setzen:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Build Command: `npm run build`
5. Output Directory: `dist`

## Sync-Code

Die App nutzt einen frei wählbaren Sync-Code. Wenn du auf Handy und Laptop denselben Sync-Code verwendest, wird derselbe Fortschritt geladen.
