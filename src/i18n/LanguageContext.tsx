import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { isLang, type Lang, type Localized } from './types'
import { ui } from './ui'

const STORAGE_KEY = 'soojin.lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  /** Resolve a bilingual value to the current language. */
  l: <T>(value: Localized<T>) => T
  /** Resolve a UI dictionary entry (alias of `l` for readability). */
  t: (entry: Localized<string>) => string
  ui: typeof ui
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ko'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    /* storage unavailable (private mode) — fall through */
  }
  const nav = window.navigator.language?.toLowerCase() ?? ''
  return nav.startsWith('ko') ? 'ko' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'ko' ? 'en' : 'ko')),
    [],
  )

  const value = useMemo<LanguageContextValue>(() => {
    const l = <T,>(v: Localized<T>) => v[lang]
    return { lang, setLang, toggleLang, l, t: l, ui }
  }, [lang, setLang, toggleLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
