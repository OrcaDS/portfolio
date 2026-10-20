# Portfolio

Personal portfolio site with three sections: **Home** (about me), **Projects** (data science, dashboards, systems) and **Blog** (events I've hosted, attended or volunteered at). Built with [Astro](https://astro.build), hosted on Netlify, edited with [Pages CMS](https://pagescms.org).

## Add or edit content (the easy way: Pages CMS)

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open this repository.
3. Pick **Projects**, **Blog (events)** or **Profile (Home page)**.
4. Click **Add an entry** (or open an existing one), fill in the form, upload images, and click **Save**.

Saving updates GitHub, and Netlify puts the change live within a minute or two.

Tips:
- **Cover images**: landscape screenshots (16:9) look best. Keep files under about 1 MB (a screenshot saved as JPG or WebP usually is).
- **Feature on Home page**: the 3 newest projects with this switched on appear on Home.
- **Hide from site (draft)**: lets you save a half-written entry without publishing it.
- **CV**: upload it in Profile → CV (PDF). The "Download CV" button appears once it's set.

## Preview the site on your computer

```sh
npm install      # first time only
npm run dev      # live preview at http://localhost:4321
```

Press `Ctrl + C` in the terminal to stop it. If you edited in Pages CMS, run `git pull` first to get those changes.

## Edit files directly (optional)

- Projects: `src/content/projects/<name>.md`. Events: `src/content/blog/<name>.md`. The file name becomes the page address.
- Home page details: `src/data/profile.json`.
- Uploaded images and files: `public/media/`, referenced as `/media/<file>`.

Project fields:

| Field | Required | What it is |
| --- | --- | --- |
| `title` | yes | Project name |
| `summary` | yes | One sentence shown on the card |
| `category` | yes | `data-science`, `dashboards` or `systems` |
| `date` | yes | e.g. `2026-06-01` |
| `tools` | no | e.g. `[Python, SQL, Power BI]` |
| `featured` | no | `true` to show it on the Home page |
| `cover` / `coverAlt` | no | e.g. `/media/my-screenshot.png` plus a short description of it |
| `github`, `liveUrl`, `notebookUrl` | no | Full links starting with `https://` |
| `draft` | no | `true` hides it from the site |

Event fields:

| Field | Required | What it is |
| --- | --- | --- |
| `title`, `summary`, `date` | yes | The date shows as month and year |
| `role` | yes | `hosted`, `attended` or `volunteered` |
| `location`, `organizer`, `link` | no | Where it was, who ran it, and a link to the event page |
| `cover` / `coverAlt` | no | Main photo |
| `photos` | no | A gallery, written as below |

```yaml
photos:
  - src: /media/photo-1.jpg
    alt: Participants working on laptops
```

## If something is wrong

Run `npm run check`. If a file has a missing or misspelled field, the error names the file and the field. On Netlify, a failed build leaves the previous version of the site live, and the error appears in the Netlify deploy log.

## Publish to Netlify (first time)

1. Put this project on GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub**, and pick the repository.
3. Netlify reads `netlify.toml`, so the build settings are already filled in. Click **Deploy**.

## Folder map

```text
.pages.yml              Pages CMS forms (fields must match src/content.config.ts)
src/
├── content/projects/   one .md file per project
├── content/blog/       one .md file per event
├── data/profile.json   your name, bio, skills, links
├── components/         reusable pieces (cards, header, footer, filters)
├── layouts/            the page shell shared by every page
├── pages/              the pages themselves (Home, Projects, Blog)
└── styles/global.css   colors, fonts, spacing
public/media/           uploaded images and files
```
