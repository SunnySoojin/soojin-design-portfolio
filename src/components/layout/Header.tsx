import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '@/i18n/LanguageContext'
import { cn } from '@/lib/utils'

/**
 * Slim sticky bar. The Figma design has no persistent header (the logo card
 * sits on the hero), so this bar stays minimal: wordmark, works link,
 * channels anchor and the KO/EN switch — every control is functional.
 */
export function Header() {
  const { t, ui, lang, toggleLang } = useLang()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled || !isHome ? 'border-line bg-white/90 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-14 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 font-sans" aria-label={t(ui.siteName)}>
          <span className="text-[15px] font-bold tracking-tight text-ink">SOO</span>
          <span className="text-[10px] tracking-[1.5px] text-muted">ARTWORKS</span>
        </Link>

        <nav aria-label={t(ui.mainNav)} className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn('rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors', isActive ? 'text-ink' : 'text-muted hover:text-ink')
            }
          >
            {t(ui.nav.works)}
          </NavLink>
          <a href={isHome ? '#channels' : '/#channels'} className="rounded-md px-3 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-ink">
            {t(ui.nav.channels)}
          </a>
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t(ui.languageSwitch)}
            lang={lang === 'ko' ? 'en' : 'ko'}
            className="ml-1 rounded-md border border-line bg-tab px-3 py-1.5 font-sans text-[12px] font-semibold tracking-wide text-tab-text transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            {t(ui.languageSwitchShort)}
          </button>
        </nav>
      </div>
    </header>
  )
}
