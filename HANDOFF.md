# Handoff

_Session date: 2026-10-20 · Last commit: 01d3511 (on GitHub: github.com/OrcaDS/portfolio, public, branch main)_

## Goal of the last session
Build the portfolio, fill it from Kurt's resume, add form-based editing (Pages CMS), and get it onto GitHub and Netlify.

## Done
- Built the Astro 7 site: Home, Projects (filters: Data Science / Dashboards / Systems), Blog (filters: Hosted / Attended / Volunteered), plus detail pages, light/dark mode and phone layout.
- Filled it from the resume (`Documents/SELF/Gemoya_Kurt_Resume.pdf`):
  - Projects: beat-the-bot, event-performance-dashboard, surveyor, aeroc
  - Events: aws-and-looker-studio-workshops, solar-power-hackathon, beat-the-bot-booth
- Added Pages CMS: `.pages.yml`. Content moved to flat `.md` files. Images are plain `/media/...` paths in `public/media/`. Home details moved to `src/data/profile.json`, validated by `profile.ts`.
- Made the schemas accept `""`/`null` for empty optional fields (tested). `npm run check`: 0 errors, 10 pages.
- Created the public GitHub repo and pushed. Added `.gitattributes` (LF line endings).
- Made a fill-in doc for the owner: https://claude.ai/code/artifact/e8cc4fec-8674-4710-bdfe-867c06eb694f

## Current state
- Works locally and is pushed.
- **Unverified:** the owner said "done" with Netlify and Pages CMS, but no Pages CMS commit has reached GitHub and no Netlify status is visible yet. Waiting for the owner's Netlify URL and the CV test save.
- The `.pages.yml` field shapes are written from the docs and haven't been tested in the live editor. Most uncertain: rich-text `options.format: markdown`, `list: true` on string/text/object fields, and how empty images and booleans are saved.
- The CV is not on the site yet (`cvUrl: ""`). The owner will upload it via Pages CMS. Copying it from the SELF folder was blocked by permissions.

## Decisions made
- Pages CMS over Decap/Tina: simplest, free, nothing to host.
- Plain `<img>` instead of `astro:assets`: Pages CMS writes `/media/...` paths, not file-relative ones. Trade-off: no automatic image optimization.
- Event dates show month + year only, and location is optional: the resume has no exact days or venues, and we don't invent details.
- Email `kurt1984217@gmail.com` approved for public use.
- Project tools list only what the resume states. Speculative tools were removed.

## Next steps (in order)
1. Get the Netlify URL from the owner. Check the live site: all pages, links, phone layout.
2. After the owner's first Pages CMS save: `git pull`, then inspect the diff to see how Pages CMS formats frontmatter, body, empty fields and image paths. Fix `.pages.yml` or the schemas if anything mismatches, and run `npm run check`.
3. Set `site:` in `astro.config.mjs` to the Netlify URL. Add an og:image/preview image for LinkedIn sharing.
4. Content gaps from the owner: Beat the Bot accuracy vs baseline, the booth event's name/place, the hackathon location, project GitHub links, screenshots, a photo.

## Gotchas
- Always `git pull` before local edits: Pages CMS commits straight to `main`.
- See CLAUDE.md → Gotchas and Rules (keep `.pages.yml` in sync with the schemas; optional fields must accept `""`/`null`).
