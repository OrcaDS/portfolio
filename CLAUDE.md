# Portfolio

Personal portfolio for Kurt Gemoya's data science, dashboard and systems work. Three sections: Home (about), Projects (data-science / dashboards / systems), Blog (events hosted, attended or volunteered at). Static site hosted free on Netlify. The owner is not a programmer and adds content through Pages CMS forms, so every content change must stay editable there.

## Sources of truth
- [HANDOFF.md](HANDOFF.md): read at session start.
- [PROGRESS.md](PROGRESS.md): update when a task finishes.
- [README.md](README.md): owner-facing guide for editing content and publishing. Keep it in sync when content fields change.
- [src/content.config.ts](src/content.config.ts) + [src/data/profile.ts](src/data/profile.ts): the fields the build accepts.
- [.pages.yml](.pages.yml): the Pages CMS forms. Must match the two files above field for field.

## Tech stack
- Astro 7 (static output), plain CSS, no UI framework. Chosen 2026-10-20 for simple Markdown content and free static hosting.
- Netlify builds from `netlify.toml` (`npm run build` → `dist/`, Node 22). Once connected to GitHub, every push to `main` goes live, including every save in Pages CMS.
- Pages CMS (app.pagescms.org, free, chosen 2026-10-20): edits commit straight to GitHub. Uploads go to `public/media/` and are written as `/media/<file>`.

## Commands
Run from the project root.
- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:4321)
- Check (type check + build, run before calling a task done): `npm run check`
- Build only: `npm run build`
- Preview the built site: `npm run preview`

## Structure
- `src/content/projects/<slug>.md`, `src/content/blog/<slug>.md`: one flat file per entry (Pages CMS needs flat files). The file name is the URL.
- `src/data/profile.json`: Home page and footer details, validated by `profile.ts`. `src/data/labels.ts`: category/role names and the date helper.
- `public/media/`: uploaded images and files.
- `src/components/`, `src/layouts/BaseLayout.astro`, `src/pages/`: site code.
- `src/styles/global.css`: color tokens (light + dark), shared classes (`.container`, `.section`, `.btn`, `.badge`, `.prose`).
- `public/`: served as-is (favicon).

## Rules
- No real employer/client data, names or numbers in content unless the owner confirms permission. Why: the site is public.
- Public contact details are only those in `profile.json` (email approved for public use 2026-10-20). Ask before adding any others (phone, address).
- Ask before pushing to GitHub, connecting or deploying to Netlify, or buying a domain.
- Any field change goes in `content.config.ts`/`profile.ts` AND `.pages.yml`. New category or role values also need `labels.ts` and a `--c-<value>` color plus `[data-tone]` rule in `global.css`.
- Optional fields must accept `""` and `null` (Pages CMS writes these for empty boxes). Use the `optional()`/`blank` helpers in `content.config.ts`.
- Images are plain `<img>` with `/media/...` paths, not `astro:assets`: Pages CMS can't write paths relative to the content file.
- Colors only through CSS variables in `global.css`. Both light and dark blocks must be updated together.

## Gotchas
- Astro 7: import `z` from `astro/zod`, not `astro:content` (deprecated). Zod 4: use `z.url()`, not `z.string().url()`.
- Global `.section`/`.page-header` set vertical padding only (`padding-block`). Setting horizontal padding there breaks alignment with `.container`.
- Headless Edge screenshots can't go narrower than ~500px. To test phone width, load the page in a 390px `<iframe>`.
- Card filtering (`FilterTabs.astro`) matches `data-filter-item` on cards and reads `?filter=` from the URL. Home skill cards link to `/projects/?filter=<category>`.
