# Handoff

_Session date: 2026-10-20 · Last commit: none yet (git initialized, nothing committed)_

## Goal of the last session
Plan and build the portfolio site, then make the repo ready for future Claude sessions.

## Done
- Built the full site: Home, Projects (with filters), Blog (with filters), and the individual project and event pages.
- Added example content: 3 projects (one per category) and 3 events (one per role).
- Added `netlify.toml`, a plain-English README, and the `npm run check` script.
- Repo setup: git init, CLAUDE.md, PROGRESS.md, `.claude/settings.json`, `.claude/skills/handoff/`.

## Current state
- Works: `npm run check` passes (0 type errors, 9 pages built).
- Every piece of content is placeholder text. `profile.ts` uses the name "Kurt", "City, Country" and you@example.com.
- Not on GitHub or Netlify yet. No commits.

## Decisions made
- Astro over a hand-written site: Markdown content is easy for a non-programmer to edit.
- Cover images are optional; a category- or role-colored placeholder shows instead. Why: posts can go up before screenshots exist.
- The CV button and empty contact links stay hidden until filled in.

## Next steps (in order)
1. Get the owner's real profile details and fill in `profile.ts`.
2. Write up real projects and events with the owner.
3. First commit, then guide the owner through GitHub and Netlify (the owner handles the accounts).

## Gotchas
- See CLAUDE.md → Gotchas (Astro 7 zod import, padding-block, screenshot width).
