Farmage V4 - Responsive + 'Coming Soon' Vite + React + Tailwind Starter
------------------------------------------------------------------------

How to run locally:
1. Extract the zip outside OneDrive (e.g. C:\projects\farmage-v4)
2. cd farmage-v4
3. npm install
4. npm run dev
5. Open http://localhost:5173

Deploying to Render (Static Site):
1. Push this repository to GitHub.
2. On Render: New -> Static Site -> Connect Repo
3. Build Command: npm install && npm run build
4. Publish Directory: dist
5. Node version: 18+ recommended
6. Deploy. The site will be served from the generated `dist` folder.

Notes:
- Images are in public/images/
- Tailwind is preconfigured (tailwind.config.cjs)
- Coming Soon badges are added across the site; purchase buttons are disabled.
- Replace public/images/mkh-front.jpg and mkh-back.jpg with better images if needed.
