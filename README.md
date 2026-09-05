# Susmito — Portfolio

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
Push this to a GitHub repo, then import it at https://vercel.com — it deploys with zero config.

## Where to edit things
- **Projects (Work page + Home's Selected Work + case studies):** `lib/projects.ts` — one array, edit the `problem` / `approach` / `whatBuilt` / `result` fields with your real story. Add a new object here to add another project.
- **Blog posts:** `app/blog/page.tsx` — add entries to the `posts` array once you've written something.
- **About text:** `app/about/page.tsx`
- **Contact info / social links:** `app/contact/page.tsx` and `components/Footer.tsx`
- **Colors / fonts / glass & neumorphic styles:** `app/globals.css` (top of the file has the light/dark color tokens)
- **Placeholder images:** search for `placeholder-block` — each one is a dashed box marking where a real photo/screenshot goes. Replace with an `<img>` or `next/image` once you have real assets.

## Notes
- Dark mode toggle is in the navbar (top right), persists via `localStorage`.
- No backend, no database — this is a fully static site. The Blog page uses a plain array; swap to MDX files later if posts get long.
