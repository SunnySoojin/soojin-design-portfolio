/**
 * Project registry — the simple "CMS".
 *
 * To ADD a project: copy any file in this folder, give it a new `id` and
 * `slug`, drop its images into /public/images/<slug>/, then import and
 * append it to the `projects` array below. Order here = order on the home page.
 *
 * To REMOVE a project: delete the import and the array entry (and the file).
 * To HIDE without deleting: set `hidden: true` in the project file.
 */
import type { Project } from '../types'

import { aiBrick } from './ai-brick'
import { travelShorts } from './travel-shorts'
import { aiPets } from './ai-pets'
import { designWorks } from './design-works'
import { disabilityEnglish } from './disability-english'
import { jejuDisabilitySports } from './jeju-disability-sports'
import { coupleEnglishConversation } from './couple-english-conversation'
import { welfarePolicy } from './welfare-policy'
import { queenBeeSyndrome } from './queen-bee-syndrome'
import { kuujjuaqBeaniePoster } from './kuujjuaq-beanie-poster'
import { coupleCounselingChannelArt } from './couple-counseling-channel-art'
import { productAdMotion } from './product-ad-motion'
import { starCactusFairies } from './star-cactus-fairies'
import { hospitalSelection } from './hospital-selection'
import { advocacyDesign } from './advocacy-design'
import { najeonchilgiCactusGirls } from './najeonchilgi-cactus-girls'
import { cactusGirlsJejuSkate } from './cactus-girls-jeju-skate'
import { exhibitions } from './exhibitions'

export const projects: Project[] = [
  // ── 12 cards exactly as laid out in the Figma "ProjectGrid" ───────────
  aiBrick,
  travelShorts,
  aiPets,
  designWorks,
  disabilityEnglish,
  jejuDisabilitySports,
  coupleEnglishConversation,
  welfarePolicy,
  queenBeeSyndrome,
  kuujjuaqBeaniePoster,
  coupleCounselingChannelArt,
  productAdMotion,
  // ── Detail pages that exist in Figma without a home card ──────────────
  starCactusFairies,
  najeonchilgiCactusGirls,
  cactusGirlsJejuSkate,
  hospitalSelection,
  advocacyDesign,
  exhibitions,
]

export const visibleProjects = projects.filter((p) => !p.hidden)

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function adjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const list = visibleProjects
  const i = list.findIndex((p) => p.slug === slug)
  if (i === -1) return {}
  return { prev: list[(i - 1 + list.length) % list.length], next: list[(i + 1) % list.length] }
}

export function relatedProjects(project: Project, limit = 3): Project[] {
  const explicit = (project.related ?? []).map((s) => getProject(s)).filter((p): p is Project => Boolean(p) && p!.slug !== project.slug)
  if (explicit.length >= limit) return explicit.slice(0, limit)
  const sameCategory = visibleProjects.filter((p) => p.category === project.category && p.slug !== project.slug && !explicit.includes(p))
  const rest = visibleProjects.filter((p) => p.slug !== project.slug && !explicit.includes(p) && !sameCategory.includes(p))
  return [...explicit, ...sameCategory, ...rest].slice(0, limit)
}

/** Guard against duplicate ids/slugs at module load (dev-time safety). */
if (import.meta.env.DEV) {
  const seen = new Set<string>()
  for (const p of projects) {
    for (const key of [p.id, p.slug]) {
      if (seen.has(key)) console.error(`[projects] duplicate id/slug: ${key}`)
      seen.add(key)
    }
  }
}
