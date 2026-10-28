export type Lang = 'ko' | 'en'

export const LANGS: Lang[] = ['ko', 'en']

/** A value that exists in both languages. */
export type Localized<T = string> = Record<Lang, T>

export function isLang(value: unknown): value is Lang {
  return value === 'ko' || value === 'en'
}
