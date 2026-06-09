WICHTIG ZUM KOPIEREN

1. Den INHALT dieses Ordners in deinen bestehenden Projektordner kopieren:
   C:\Users\paulh\Documents\running-plan-app

2. Nicht den Ordner running-plan-app in running-plan-app hinein kopieren.
   package.json, index.html und src muessen direkt im Projektordner liegen.

3. Danach in VS Code Terminal:
   npm.cmd install
   npm.cmd run build
   git add -A
   git commit -m "Clean fixed app version"
   git push

4. Bei Vercel Import:
   Framework: Vite
   Root Directory: ./
   Install Command: npm install --no-package-lock --no-audit --no-fund
   Build Command: npm run build
   Output Directory: dist

5. Dein Logo als public/icon-512.png speichern, falls du das Homescreen-Icon willst.
