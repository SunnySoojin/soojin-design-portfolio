import type { Localized } from '@/i18n/types'
import type { Img } from '../types'

/** Bilingual string. */
export const L = (ko: string, en: string): Localized => ({ ko, en })

/** Bilingual paragraph list. */
export const P = (ko: string[], en: string[]): Localized<string[]> => ({ ko, en })

/** Image reference by manifest key (see figma/asset-manifest.json). */
export const img = (key: string, altKo: string, altEn: string): Img => ({ key, alt: { ko: altKo, en: altEn } })

/** Standard "사용 도구 · TOOLS" title. */
export const TOOLS_TITLE = L('사용 도구 · TOOLS', 'Tools')
/** Standard "기획 의도" title. */
export const CONCEPT_TITLE = L('기획 의도', 'Concept')
