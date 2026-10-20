---
name: handoff
description: Save session state to HANDOFF.md (and durable decisions to CLAUDE.md, progress to PROGRESS.md) before starting a fresh session. Use when the user says handoff, wrap up, end session, or is about to /clear.
---

Prepare this session for a handoff to a fresh session:

1. Overwrite HANDOFF.md with: date and last commit hash, goal, what was done, current state (works / broken / files touched), decisions and why, ordered next steps, gotchas.
2. Update PROGRESS.md: move finished items to Done, refresh Next up and the date.
3. If lasting decisions were made (conventions, architecture, commands), add them to CLAUDE.md. Keep it short; remove anything now outdated.
4. Tell the user it's ready and they can run /clear.
