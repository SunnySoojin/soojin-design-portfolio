import type { Localized } from '@/i18n/types'
import type { CategoryId } from './types'

export interface Category {
  id: CategoryId
  /** Uppercase Latin label as in the Figma tabs ("AI BRICK"). */
  en: string
  /** Korean label shown next to it ("AI 브릭"). */
  ko: string
  /** True when the tab exists in the Figma design; others were added so every card is filterable. */
  inFigma: boolean
}

/**
 * Filter tabs. Order = display order.
 * The Figma file defines 7 tabs (ALL · TRAVEL · AI BRICK · AI PETS · CHANNEL ART ·
 * POSTER · MOTION). Four tabs were added so that card-news, design, AI-art and
 * exhibition projects can also be filtered — see FIGMA_AUDIT.md.
 */
export const categories: Category[] = [
  { id: 'travel', en: 'TRAVEL', ko: '여행', inFigma: true },
  { id: 'ai-brick', en: 'AI BRICK', ko: 'AI 브릭', inFigma: true },
  { id: 'ai-pets', en: 'AI PETS', ko: 'AI 동물', inFigma: true },
  { id: 'ai-art', en: 'AI ART', ko: 'AI 아트', inFigma: false },
  { id: 'card-news', en: 'CARD NEWS', ko: '카드뉴스', inFigma: false },
  { id: 'design', en: 'DESIGN', ko: '디자인', inFigma: false },
  { id: 'channel-art', en: 'CHANNEL ART', ko: '채널 아트', inFigma: true },
  { id: 'poster', en: 'POSTER', ko: '포스터', inFigma: true },
  { id: 'motion', en: 'MOTION', ko: '모션 광고', inFigma: true },
  { id: 'exhibition', en: 'EXHIBITION', ko: '전시', inFigma: false },
]

export function categoryLabel(id: CategoryId): Localized {
  const c = categories.find((x) => x.id === id)
  return c ? { ko: c.ko, en: c.en } : { ko: id, en: id }
}
