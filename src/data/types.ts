import type { Localized } from '@/i18n/types'

/* ------------------------------------------------------------------
   Images & video
------------------------------------------------------------------- */

/**
 * An image from the Figma file. `key` is the manifest key in
 * figma/asset-manifest.json and resolves to /images/<key>.png.
 */
export interface Img {
  key: string
  alt: Localized
}

export interface Video {
  /** Direct mp4/webm file or YouTube/Vimeo embed URL. Omit to show the poster only. */
  url?: string
  poster: Img
  title: Localized
}

export interface LinkItem {
  href: string
  /** Shown instead of the raw URL when provided. */
  label?: Localized
  /** Small grey note under the link (e.g. "대륙별 합본 릴스 — 매일 오전 9시 업로드"). */
  note?: Localized
}

/* ------------------------------------------------------------------
   Categories
------------------------------------------------------------------- */
export type CategoryId =
  | 'travel'
  | 'ai-brick'
  | 'ai-pets'
  | 'ai-art'
  | 'card-news'
  | 'design'
  | 'channel-art'
  | 'poster'
  | 'motion'
  | 'exhibition'

/* ------------------------------------------------------------------
   Detail-page content blocks
   A project page is an ordered list of these sections, rendered by
   src/components/project/Sections.tsx. Mirror of the Figma boxes:
   MediaCard, YouTubeBox/InstagramBox, Gallery, ConceptBox, Stats,
   ToolStackBox, Work 01/02 (Problem/Solution), SpecBox, ProcessBox …
------------------------------------------------------------------- */

/** 🎬 MediaCard — one or two large tiles (image and/or video). */
export interface MediaSection {
  type: 'media'
  title: Localized
  items: Array<{ image: Img } | { video: Video }>
}

/** 📌 YouTube / Instagram box — a list of links with optional notes. */
export interface LinksSection {
  type: 'links'
  title: Localized
  links: LinkItem[]
}

/** Small square thumbnails with uppercase labels (landmarks, characters, cuts). */
export interface ThumbsSection {
  type: 'thumbs'
  title: Localized
  items: Array<{ image: Img; label: string }>
}

/** Larger gallery tiles with optional captions; opens the fullscreen viewer. */
export interface GallerySection {
  type: 'gallery'
  title?: Localized
  items: Array<{ image: Img; caption?: Localized }>
  /** CSS aspect ratio for tiles, e.g. "1 / 1", "214 / 120", "290 / 387". */
  ratio: string
  /** Columns on desktop (1, 2, 3, 4 or 6). */
  cols: 1 | 2 | 3 | 4 | 6
  /** "contain" shows the whole artwork with a warm border (card-news pages). */
  fit?: 'cover' | 'contain'
  /** Render inside a white box (MediaCard style) instead of bare tiles. */
  boxed?: boolean
}

/** ConceptBox / ExperienceBox / CertBox — a titled text block. */
export interface TextSection {
  type: 'text'
  title: Localized
  paragraphs: Localized<string[]>
}

/** Row of big numbers with labels. */
export interface StatsSection {
  type: 'stats'
  items: Array<{ value: Localized; label: Localized }>
}

/** ToolStackBox / SpecBox — key/value rows. */
export interface KeyValueSection {
  type: 'kv'
  title: Localized
  rows: Array<{ k: Localized; v: Localized }>
}

/** Work 01 / 02 — numbered case box (Problem / Solution). */
export interface WorkSection {
  type: 'work'
  num: string
  title: Localized
  sub?: Localized
  paragraphs: Localized<string[]>
}

/** Pipeline cards (4 across) or numbered process list. */
export interface StepsSection {
  type: 'steps'
  title: Localized
  layout: 'cards' | 'list'
  steps: Array<{ num: string; title: Localized; desc?: Localized; tool?: string }>
}

/** Rows like "10월 | 노인성질환자 … | 9장" or exhibition entries. */
export interface ListSection {
  type: 'list'
  title: Localized
  items: Array<{ lead?: Localized; text: Localized; meta?: Localized; meta2?: Localized }>
}

/** Small chips grid (sport × card count). */
export interface ChipsSection {
  type: 'chips'
  title: Localized
  items: Array<{ title: Localized; meta?: Localized }>
}

/** Bulleted list in a box (주요 프로젝트). */
export interface BulletsSection {
  type: 'bullets'
  title: Localized
  items: Localized<string[]>
}

/** Plain multi-column text list (topics). */
export interface ColumnsSection {
  type: 'columns'
  title: Localized
  items: Localized<string[]>
}

/** Horizontal rule with eyebrow + heading (e.g. "2026 EXTENSION"). */
export interface DividerSection {
  type: 'divider'
  eyebrow: Localized
  title: Localized
}

export type Section =
  | MediaSection
  | LinksSection
  | ThumbsSection
  | GallerySection
  | TextSection
  | StatsSection
  | KeyValueSection
  | WorkSection
  | StepsSection
  | ListSection
  | ChipsSection
  | BulletsSection
  | ColumnsSection
  | DividerSection

/* ------------------------------------------------------------------
   Project
------------------------------------------------------------------- */
export interface Project {
  /** Stable unique id (never changes, even if the slug does). */
  id: string
  /** URL slug → /projects/:slug */
  slug: string
  /** Figma node id of the detail frame (for reference / re-export). */
  figmaNode: string
  /** Figma node id of the home card, if one exists in the design. */
  figmaCard?: string

  title: Localized
  /** Secondary line under the title on the detail page. */
  subtitle?: Localized
  /** Card title (Figma shows "📁 …"). Falls back to `title`. */
  cardTitle?: Localized
  /** Card meta line, e.g. "2026/07 — 진행 중 (249개국 예정)". */
  cardMeta: Localized
  /** Two chips on the card. */
  tags: [Localized, Localized]
  /** Uppercase tag line on case-study pages ("EDITORIAL DESIGN · CARD NEWS · …"). */
  tagline?: string

  category: CategoryId
  /** Display year (string so "2024 – 2025" is possible). Sorting uses `sortYear`. */
  year: string
  sortYear: number
  /** Emoji or glyph shown above the title on the detail page. */
  icon: string
  /** 'media' = white Notion-style page (📁 + MediaCard); 'case' = paper case-study page. */
  template: 'media' | 'case'

  cover: Img
  /** 1–3 sentence summary (SEO description + card hover). */
  summary: Localized
  /** Flat list of tools (also derived from kv sections when omitted). */
  tools?: string[]
  /** Primary external links (YouTube, Instagram). */
  links?: LinkItem[]
  sections: Section[]
  /** Slugs of related projects; defaults to same-category projects. */
  related?: string[]
  /** Open questions for the owner — rendered in FIGMA_AUDIT.md, not on the site. */
  needsConfirmation?: string[]
  /** Hide from the home grid (still reachable by URL). */
  hidden?: boolean
}
