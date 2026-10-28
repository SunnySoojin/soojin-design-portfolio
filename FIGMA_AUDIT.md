# FIGMA_AUDIT — SOO Portfolio Website

**File:** `ApgT5BDBUGzJgYFXCSCC9F` · "SOO Portfolio Website" · 1 page ("Page 1")
**Audited:** 2026-10-28 via the official Figma MCP connector (metadata, design context and screenshots of every frame).
**Not possible from this session:** downloading image bytes. The sandbox's network policy blocks `www.figma.com`, `api.figma.com` and Figma's S3 asset hosts, so **0 of 142 artwork files are in the repository yet**. Everything needed to export them mechanically is in place — see §6.

---

## 1. Frames in the file

### 1.1 Home page

| Node | Frame | Size | Status |
|------|-------|------|--------|
| `1:2` | Portfolio Website | 1440 × 2336 | ✅ Implemented (`/`) |

Contents: Cover gradient (`#c7def7 → #e5e5fa → #f7f2ed`, 300 px) with five blurred white ellipses · LogoCard (SOO / ARTWORKS) · title "SOO ARTWORKS" · Callout ("💡 여러분은 지금 여행과 AI로 콘텐츠를 만드는 크리에이터 'SOO'의 작업물을 보고 계십니다.") · Stats (5+ 운영 채널 · 660+ 제작 콘텐츠 · 34 개국 AI 시리즈) · Tabs · ProjectGrid (12 cards, 3 × 4, 284 × 345).

### 1.2 Project detail frames (18)

| Node | Figma frame | Route | Home card in Figma | Template |
|------|-------------|-------|--------------------|----------|
| `13:2` | Project Detail - AI Brick Series | `/projects/ai-brick` | ✅ `3:3` | media |
| `19:2` | Project Detail - Travel Series | `/projects/travel-shorts` | ✅ `3:33` | media |
| `17:2` | Project Detail - AI Pets Series | `/projects/ai-pets` | ✅ `3:73` | media |
| `22:12` | Project Detail - Design Works | `/projects/design-works` | ✅ `22:2` | media |
| `245:2` | Project Detail - Disability English Card News | `/projects/disability-english` | ✅ `249:2` | case |
| `282:2` | Project Detail - Jeju Disability Sports Card News | `/projects/jeju-disability-sports` | ✅ `252:2` | case |
| `306:2` | Project Detail - Couple English Conversation Card News | `/projects/couple-english-conversation` | ✅ `252:11` | case |
| `285:2` | Project Detail - Social Welfare Policy Card News | `/projects/welfare-policy` | ✅ `252:20` | case |
| `256:2` | Project Detail - Queen Bee Syndrome Card News | `/projects/queen-bee-syndrome` | ✅ `266:2` | case |
| `340:2` | Project Detail - Kuujjuaq Beanie Poster | `/projects/kuujjuaq-beanie-poster` | ✅ `354:2` | case |
| `352:2` | Project Detail - Couple Counseling Channel Art | `/projects/couple-counseling-channel-art` | ✅ `354:11` | case |
| `363:2` | Project Detail - Product Ad Motion Graphics | `/projects/product-ad-motion` | ✅ `363:70` | case |
| `8:2` | Project Detail - Star Cactus Fairies | `/projects/star-cactus-fairies` | ❌ none — card added | media |
| `320:2` | Project Detail - Najeonchilgi Cactus Girls | `/projects/najeonchilgi-cactus-girls` | ❌ none — card added | case |
| `323:2` | Project Detail - Cactus Girls Jeju Skate Series | `/projects/cactus-girls-jeju-skate` | ❌ none — card added | case |
| `234:2` | Project Detail - Hospital Selection Card News | `/projects/hospital-selection` | ❌ none — card added | case |
| `286:2` | Project Detail - Advocacy Design | `/projects/advocacy-design` | ❌ none — card added | case |
| `287:2` | Project Detail - Exhibitions | `/projects/exhibitions` | ❌ none — card added (no image) | case |

Two layout templates exist in the file and both are reproduced:

* **media** (white background): 📁 icon 52 px → title Gothic A1 Bold 40 → "세부 정보 보기" → 🎬 MediaCard (two 416 × 340 tiles, one with a play button) → 📌 YouTubeBox → 📌 InstagramBox → 130 px thumbnail grid with uppercase labels.
* **case** (`#f8f7f3` background): glyph icon in `#2f5692` → title Gothic A1 SemiBold 44 → subtitle 16–20 px → uppercase tag line in `#2f5692` → galleries → white rounded boxes (ConceptBox, Work 01/02 Problem/Solution, SpecBox, ToolStackBox, ProcessBox, pipeline cards) → Stats row.

### 1.3 Frames that are **not** portfolio pages (left out, please confirm)

| Node | Name | What it is |
|------|------|------------|
| `110:2` | Detail Page - Handmade Lace Collar Set (860 × 7304) | A product detail-page mock-up for a handmade lace collar ("1차 Figma 구성") |
| `111:2` | Product Detail - Lace Collar Object (860 × 5904) | Same product, variant |
| `111:55` | Product Detail - Wearable Lace Collar | Same product, variant |
| `111:108` | Product Detail - Lace Cuff Ornament | Same product, variant |
| `107:2` | Edited - face slim photo (900 × 506) | A single edited photo |
| `122:2` | Higgsfield image (1536 × 2048) | A single generated image |
| `109:2` – `109:16` | Source image 109:x (15 frames, hidden) | Hidden source images |

The four lace-collar pages look like a separate commercial detail-page project. They were **not** turned into a portfolio entry; if you want them shown, they can become one `design` project with their own gallery.

---

## 2. Design system extracted

| Token | Value | Used for |
|-------|-------|----------|
| Background | `#ffffff` (home) · `#f8f7f3` (case pages) | page |
| Text | `#1f1f1f` ink · `#3d3d3d` body · `#616161` subtitle · `#737373` muted · `#8f8f8f` tab-KR · `#595959` tab-EN | type |
| Accent | `#2f5692` | case-page icon, labels, tag line, step numbers |
| Links | `#3366d9` underlined | URLs in YouTube/Instagram boxes |
| Borders | `#e5e5e0` cards/boxes · `#ebe8e5` callout · `#dbd6cc` card-news gallery · `#d9d6d1` divider | |
| Chips | `#e8f0fc` (first) · `#f2edf7` (second) · text `#4d5266` Inter SemiBold 10 | card tags |
| Tabs | active `#1f1f1f`/white · inactive `#f5f5f2` | filter |
| Callout | `#f7f6f4` | home intro box |
| Hero gradient | `#c7def7 → #e5e5fa → #f7f2ed` + white blurred circles | cover |
| Shadows | cards `0 1px 4px rgba(0,0,0,.05)` · logo `0 2px 8px rgba(0,0,0,.08)` | |
| Radii | 8 px cards/boxes · 10 px media boxes · 6 px images/tabs · 4 px chips | |
| Fonts | **Inter** (Latin: titles, numbers, URLs, chips) · **Gothic A1** (Korean body/titles) | loaded from Google Fonts |
| Type scale | 52 title · 44/40 page title · 34/30 stats · 22 work title · 20/16 subtitle · 15 box label · 14/13 body · 12 meta · 11/10 labels | |
| Layout | 900 px content column, 270 px side margins at 1440; grid 3 × 284 px with 24 px gaps | responsive: 1 / 2 / 3 columns |

No Figma variables or styles are defined in the file (`get_variable_defs` returned `{}`); all values above were read from the nodes.

---

## 3. Content inventory (titles, descriptions, metadata)

All Korean copy was taken verbatim from the frames. English is a draft translation (flagged on EN pages). Per project the site carries: title, subtitle, card title/meta, two chips, tag line, icon, year, category, galleries with captions, concept text, stats, tool stack, Problem/Solution boxes, pipeline/process steps, lists, links.

Cross-check against your preliminary list:

| Your list | Figma | Note |
|-----------|-------|------|
| 1 AI Brick — 34 Countries | ✅ `13:2` | 12 of 34 landmarks shown in Figma |
| 2 Travel Shorts | ✅ `19:2` | |
| 3 AI Animal Shorts | ✅ `17:2` | |
| 4 Design & Welfare Card News | ✅ `22:12` | includes experience + certificates |
| 5 Disability English 14-part | ✅ `245:2` | includes the 2026 audio extension |
| 6 Jeju Disability Sports | ✅ `282:2` | |
| 7 English Conversation Card News | ✅ `306:2` | title in Figma: "서로에게 묻는 영어대화" |
| 8 Health & Welfare Policy | ✅ `285:2` (+ `234:2` hospital page) | see §4 |
| 9 Queen Bee Syndrome | ✅ `256:2` | |
| 10 Star Cactus Fairies | ✅ `8:2` | no home card in Figma |
| 11 Kuujjuaq Beanie Poster | ✅ `340:2` | |
| 12 International Couple Counseling Channel Art | ✅ `352:2` | |
| 13 Product Advertising & Motion Graphics | ✅ `363:2` | |
| — | ➕ `320:2` Najeonchilgi Cactus Girls | not in your list |
| — | ➕ `323:2` Cactus Girls Jeju Skate | not in your list |
| — | ➕ `286:2` Advocacy Design | not in your list |
| — | ➕ `287:2` Exhibitions | not in your list |

---

## 4. Duplicated labels, incomplete content, inconsistencies found

1. **Layer names vs. content (stale names)** — card `363:70` "Product Ad Motion Graphics" has layer names copied from the Channel Art card ("국제커플 상담 채널 — 채널 아트"), and tab `363:79` is still named "POSTER / 포스터". The *visible text* is correct ("제품 광고 모션그래픽 — 6편", "MOTION / 모션 광고"); the site uses the visible text.
2. **Copied stats on the Product Ad page** — `363:42–49` show "5종 채널 아트 세트 · 1546×423 · 8색 · 1템플릿", copied from the Channel Art page. The site shows the page's own figures (6편 · 30초 · 5개 · 1엔진). Please fix in Figma.
3. **"결과물 5종" vs six posters** on the Product Ad page (`363:7`).
4. **Star Cactus Fairies YouTube box** repeats "ASIA Landmarks — https://youtu.be/wkWHTTyvijQ" from the AI Brick page — probably a copy-paste; needs the real link.
5. **Jeju Disability Sports** — "Cover 02" (`289:4`) uses the same image as "Cover 01" (`289:3`); subtitle says 18 sports, 17 are listed + "+ 시리즈 계속".
6. **English Conversation** — home card says "40편+", detail page says 23 topics / 32 card sets / 256 cards; concept text says 30 topics.
7. **Health & Welfare card (`252:20`)** uses a thumbnail of recipe cards ("레시피") that appears on neither the Welfare Policy page nor the Hospital Selection page. Which page should the card open? (Currently → Welfare Policy; Hospital Selection has its own added card.)
8. **Filter tabs don't cover all cards** — Figma has 7 tabs (ALL, TRAVEL, AI BRICK, AI PETS, CHANNEL ART, POSTER, MOTION) but cards are tagged DESIGN, CARD NEWS, PUBLIC, ENGLISH, HEALTH too, so 6 of 12 cards had no filter. Four tabs were added: **AI ART, CARD NEWS, DESIGN, EXHIBITION**. Remove or rename in `src/data/categories.ts` if you prefer.
9. **"세부 정보 보기"** on media-template pages is a plain underlined text in Figma with nothing to open. On the site it scrolls to the year / category / tools strip so it is not a dead control.
10. **Incomplete pages** — Hospital Selection (`234:2`) has only title, subtitle, tag line and 9 cards (no year, concept, tools); Exhibitions (`287:2`) has no images and no years for two shows; Star Cactus Fairies, Travel, AI Pets, AI Brick frames list no tools.
11. **Hidden text** — Exhibitions frame contains an unused "386점 작품 아카이브" stat; Social Welfare `Item 3/4` have "—" as month.
12. **No English anywhere in the file** except tab labels, tag lines and a few proper nouns. All EN body copy is new.
13. **Fonts** — Gothic A1 and Inter are Google Fonts, so no licensing issue; Baloo 2 / Satisfy / Nunito are only *mentioned* (channel-art specs), not used by the site.

---

## 5. Decisions made in the implementation (please confirm)

* **Six detail pages without home cards** were given cards (cover = first image on the page, generated meta line) and appended after the 12 Figma cards. Set `hidden: true` on any you do not want on the grid.
* **Header bar** (wordmark · 작업물 · 채널 · KO/EN) and **footer** (channel links) were added; the Figma frame has neither but the site needs navigation and a language switch.
* **Prev/next and related projects** were added at the bottom of every detail page (requested in the brief, not in Figma).
* **Routes:** `/`, `/projects/:slug`, `/?category=…` for filters, custom 404. `/works/:slug` redirects to `/projects/:slug`.
* Korean is the default language for Korean browsers; others get English.
* The first-pass generic layout (About / Journal / AI Lab / Contact pages, ivory-sage palette) was removed in favour of the Figma structure. A contact form can be added back if wanted.

---

## 6. Missing assets (142 files)

Every image in the file is catalogued in `figma/asset-manifest.json` (key → Figma node id, parent frame, layer name, display size). **None could be downloaded from this environment** because the network policy blocks Figma's hosts.

| Project | Files | Nodes |
|---------|------:|-------|
| Home card thumbnails | 12 | `3:4 3:34 3:74 22:3 249:3 252:3 252:12 252:21 266:3 354:3 354:12 363:71` |
| ai-brick | 14 | `13:9 13:10` + 12 landmarks `13:25…13:59` |
| travel-shorts | 8 | `19:9 19:10 19:25…19:40` |
| ai-pets | 8 | `17:9 17:10 17:24…17:39` |
| star-cactus-fairies | 8 | `8:9 8:10 8:24…8:39` |
| design-works | 2 | `22:19 22:20` |
| hospital-selection | 9 | `234:8…234:16` |
| disability-english | 14 | `245:8…245:21` |
| queen-bee-syndrome | 10 | `256:8…256:17` |
| jeju-disability-sports | 12 | `289:3…289:14` |
| welfare-policy | 4 | `289:16…289:19` |
| advocacy-design | 4 | `289:21…289:24` |
| couple-english-conversation | 8 | `306:8…306:15` |
| najeonchilgi-cactus-girls | 6 | `320:8 … 320:18` |
| cactus-girls-jeju-skate | 7 | `323:8 … 323:18`, strip `323:21` |
| kuujjuaq-beanie-poster | 4 | `340:8…340:11` |
| couple-counseling-channel-art | 5 | `352:8…352:12` |
| product-ad-motion | 7 | `363:8`, posters `363:58…363:68` |

**How to get them in (pick one):**

1. **Run the export script locally** (recommended — fetches the original uploaded files, uncropped):
   `FIGMA_TOKEN=figd_… npm run figma:export` then `npm run assets:check`.
2. **Re-run this agent with network access**: in the environment settings add `www.figma.com`, `api.figma.com` and `figma-alpha-api.s3.us-west-2.amazonaws.com` to Allowed domains; the Figma connector already works, only downloads were blocked.
3. **Manual export** from Figma into `public/images/<key>.png` following the manifest.

Until then every image slot renders a labelled "Image not exported yet · Figma node x:y" tile — no substitute or AI-generated artwork is used anywhere.

Also missing (not in Figma at all): video URLs for every VideoThumb and for the six product ads / six skate shorts; an email address; a real OG image (a text placeholder SVG is used).

---

## 7. Items requiring your confirmation

- [ ] Allow Figma hosts in the environment, or run `npm run figma:export` locally, so the 142 originals land in `public/images/`.
- [ ] Keep the six added cards (Star Cactus Fairies, Najeonchilgi, Jeju Skate, Hospital Selection, Advocacy Design, Exhibitions) on the home grid, or hide some.
- [ ] Keep the four added filter tabs (AI ART, CARD NEWS, DESIGN, EXHIBITION) and their names.
- [ ] Which page the "건강·복지정책 카드뉴스" card should open, and its thumbnail (§4-7).
- [ ] Correct counts: English Conversation (40편+ vs 23/32/256), Product Ad (5종 vs 6), Jeju Sports (18 vs 17).
- [ ] Real video links (AI Brick, Travel, AI Pets, Star Cactus Fairies, product ads, skate series) and the correct Star Cactus Fairies YouTube link.
- [ ] Tools for AI Brick, Travel, AI Pets, Star Cactus Fairies, Queen Bee (none listed in Figma; generic entries were used).
- [ ] Years for Hospital Selection, Advocacy Design, Monet Artist exhibition, graduation show.
- [ ] Whether the lace-collar detail pages (`110:2`, `111:*`) should become a portfolio project.
- [ ] Review the English draft translations.
- [ ] Hero stats (5+ / 660+ / 34) — update if outdated.
- [ ] Contact email / whether to add a contact form.
- [ ] Deployment target (Vercel or Netlify) and the final domain for `VITE_SITE_URL` — nothing has been published.

---

## 8. QC performed on the production build

Playwright, Chromium, `vite preview`:

* Home renders 18 cards; 11 filter tabs each filter correctly and write `?category=` to the URL; arrow keys move between tabs.
* All 18 detail pages render with correct `<h1>`, `<title>` and meta description; prev/next and related cards link correctly; `/works/ai-brick` redirects; unknown URLs show the custom 404.
* Lightbox opens from gallery tiles, arrow keys navigate (1/14 → 2/14), Escape closes and focus returns.
* KO/EN toggle switches `<html lang>` and all copy.
* `prefers-reduced-motion` honoured (static render, 18 cards).
* 0 console errors, 0 failed non-image requests. Image requests return the missing-asset tile (expected until §6 is done).
* No horizontal overflow at 390 px, 834 px, 1440 px after fixing the tab row.
* `tsc`, `eslint` and `vite build` pass; bundle ≈ 140 kB gzip (React + Motion + app).
