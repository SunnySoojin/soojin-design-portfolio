# SOO ARTWORKS — Portfolio Website

Bilingual (한국어 / English) portfolio website for **SOO**, an independent multidisciplinary designer, visual artist, travel storyteller and AI content creator based in Jeju Island.

The site is a faithful implementation of the Figma file **SOO Portfolio Website** (`ApgT5BDBUGzJgYFXCSCC9F`): the home page (cover, logo card, intro callout, stats, category tabs, project grid) and 18 project detail pages. See [`FIGMA_AUDIT.md`](./FIGMA_AUDIT.md) for the full audit, the list of missing assets and the items that still need confirmation.

**Stack:** React 18 · TypeScript · Vite 7 · Tailwind CSS 4 · Motion (framer-motion 12) · React Router 7.

---

## 1. Local development

```bash
npm install          # install dependencies (Node 20.19+ / 22+)
npm run dev          # http://localhost:5173
npm run build        # type-check + production build → dist/
npm run preview      # serve the production build locally
npm run lint         # ESLint
npm run typecheck    # TypeScript only
npm run assets:check # list Figma images still missing from public/images
npm run figma:export # download original artwork from Figma (needs FIGMA_TOKEN)
```

Copy `.env.example` to `.env` to set the site URL (`VITE_SITE_URL`), a base path (`VITE_BASE`) or your Figma token.

## 2. Project structure

```
figma/asset-manifest.json   ← every Figma image: key → node id, frame, size
public/
  images/<project>/*.png    ← exported artwork (see §4)
  favicon.svg, og-image.svg
scripts/
  export-figma-assets.mjs   ← downloads originals via the Figma REST API
  check-assets.mjs          ← reports missing / orphan images
src/
  main.tsx, App.tsx         ← entry + routes (/, /projects/:slug, 404)
  index.css                 ← design tokens from Figma (colours, fonts) + utilities
  i18n/
    ui.ts                   ← all UI copy, KO + EN
    LanguageContext.tsx     ← language state, persisted in localStorage
  data/
    types.ts                ← Project / Section types (the content schema)
    categories.ts           ← filter tabs
    site.ts                 ← intro text, stats, channel links
    assets.ts               ← manifest helper
    projects/
      index.ts              ← ordered project registry
      <slug>.ts             ← one file per project (the "CMS")
  components/
    layout/   Header, Footer, Layout (skip link, scroll restore, page transition)
    works/    ProjectCard, FilterBar (Figma card + tabs)
    project/  Sections (renders every detail-page block)
    ui/       Picture (lazy + missing-asset tile), Lightbox, VideoPlayer, Reveal
  pages/      HomePage, ProjectPage, NotFoundPage
  hooks/useSEO.ts           ← title, description, Open Graph, canonical per page
```

## 3. Adding, editing and removing projects

Content lives in plain TypeScript files — no CMS, no database.

**Add a project**

1. Copy an existing file in `src/data/projects/`, e.g. `queen-bee-syndrome.ts` (case-study layout) or `ai-brick.ts` (media/Notion-style layout).
2. Set a unique `id` (`P19`…) and `slug` (becomes `/projects/<slug>`).
3. Fill in `title`, `cardTitle`, `cardMeta`, `tags`, `category`, `year`, `summary`, `cover`, `sections`, `tools`, `links`. Every text field is `{ ko, en }` — use the `L()` / `P()` helpers.
4. Put images in `public/images/<slug>/` and register each one in `figma/asset-manifest.json` (key → `{ node, frame, name, w, h }`); `w`/`h` reserve the aspect ratio before the image loads. Refer to them with `img('slug/name', altKo, altEn)`.
5. Import the file in `src/data/projects/index.ts` and add it to the `projects` array. Array order = order on the home page.

**Edit a project** — change the file; the dev server hot-reloads.

**Remove / hide** — delete the import and array entry, or set `hidden: true` to keep the page reachable by URL but off the grid.

**Categories** — edit `src/data/categories.ts`. A tab only appears when at least one visible project uses it.

### Detail-page sections

A project page is an ordered list of `sections` (see `src/data/types.ts`). Available blocks mirror the Figma boxes:

| type      | Figma box                               | notes |
|-----------|------------------------------------------|-------|
| `media`   | 🎬 MediaCard                             | up to two large tiles, image or `video` (poster + optional `url`) |
| `links`   | 📌 YouTubeBox / InstagramBox             | links with optional label and note |
| `thumbs`  | LandmarkGrid / CharacterSheet / Gallery  | square thumbs with uppercase label |
| `gallery` | Cover Gallery / Pieces / Shots / Posters | tiles with `ratio`, `cols`, optional captions, `fit: 'contain'` for card news |
| `text`    | ConceptBox / CertBox                     | titled paragraphs |
| `stats`   | Stats                                    | big numbers |
| `kv`      | ToolStackBox / SpecBox                   | key/value rows |
| `work`    | Work 01 / 02 (Problem / Solution)        | numbered case box |
| `steps`   | Pipeline cards / ProcessBox              | `layout: 'cards' \| 'list'` |
| `list`    | Items / Exhibitions / ExperienceBox      | rows with lead, text, meta |
| `chips`   | Sport chips                              | small tiles |
| `bullets` | ProjectsBox                              | bullet list |
| `columns` | TopicsBox                                | multi-column list |
| `divider` | "2026 EXTENSION"                         | rule + eyebrow + heading |

Every gallery/thumb/media image opens in the fullscreen viewer (arrow keys, Escape, focus trap).

**Video:** set `video.url` to a YouTube embed (`https://www.youtube.com/embed/ID`), Vimeo (`https://player.vimeo.com/video/ID`) or an mp4 under `public/`. Without a URL the poster is shown with a disabled play glyph and an accessible "link pending" note.

## 4. Replacing images (original artwork)

All artwork lives in the Figma file. Nothing is regenerated — the site only ever shows your originals, and until a file exists it shows a clearly labelled "Image not exported yet · Figma node x:y" tile.

**Automatic export (recommended)**

```bash
# Figma → Settings → Security → Personal access tokens (scope: File content: Read)
FIGMA_TOKEN=figd_… npm run figma:export            # downloads only missing files
FIGMA_TOKEN=figd_… npm run figma:export -- ai-brick # one project
FIGMA_TOKEN=figd_… npm run figma:export -- --force  # re-download everything
npm run assets:check
```

The script downloads the **original uploaded image** behind each Figma fill (uncropped, full resolution). Vector nodes with no image fill fall back to a 2× PNG render. Files land in `public/images/<key>.png` exactly where the manifest expects them.

**Manual export** — in Figma select the layer named in the manifest (e.g. frame "Card / AI Brick Series" → layer "Thumb"), export as PNG, and save it as `public/images/<key>.png`.

**Optimisation** — PNGs over ~1.5 MB should be compressed before committing (e.g. `npx @squoosh/cli --oxipng auto public/images/**/*.png`, or convert to WebP and update the extension in `src/data/assets.ts`). Keep the full composition; the site never crops with `object-fit` on card-news pages (`fit: 'contain'`).

## 5. Editing Korean and English content

* **UI labels** (navigation, buttons, filter names, 404 copy): `src/i18n/ui.ts`.
* **Intro, stats, channel links**: `src/data/site.ts`.
* **Project copy**: each `src/data/projects/<slug>.ts`. Every string is `{ ko, en }`.
* The language switch (header, `KO`/`EN`) persists in `localStorage` and sets `<html lang>`. The default follows the browser language (Korean → `ko`, otherwise `en`).
* English texts are draft translations of the Korean originals and are marked as such on EN pages; edit freely.

## 6. Deployment

The build is a static single-page app (`dist/`). Do **not** publish until you have reviewed the content.

**Vercel** — import the GitHub repo; `vercel.json` already sets the framework, output dir and SPA rewrite. Add `VITE_SITE_URL` in Project → Environment Variables. Every push to the production branch deploys.

**Netlify** — import the repo; `netlify.toml` sets build command, publish dir, SPA redirect and cache headers. Add `VITE_SITE_URL` under Site configuration → Environment variables.

**GitHub Pages** — set `VITE_BASE=/soojin-design-portfolio/` (your repo name), run `npm run build`, copy `dist/index.html` to `dist/404.html` (SPA fallback) and publish `dist/` with your preferred action.

**Any static host** — serve `dist/` and route unknown paths to `index.html`.

## 7. Accessibility & performance notes

* Skip link, landmark regions, semantic headings, visible focus rings (WCAG 2.2 AA-oriented).
* Filter tabs are a `radiogroup` (arrow-key navigation); lightbox traps focus and restores it on close.
* `prefers-reduced-motion` disables all animations.
* Images are lazy-loaded with reserved aspect ratios (no layout shift); route chunks are code-split.
* SEO: per-page `<title>`, description, Open Graph, Twitter card and canonical link.
