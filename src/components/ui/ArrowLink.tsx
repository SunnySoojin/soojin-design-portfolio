import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useLang } from '@/i18n/LanguageContext'

interface ArrowLinkProps {
  to?: string
  href?: string
  children: ReactNode
  className?: string
  variant?: 'text' | 'button' | 'button-dark'
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1em] w-[1em] shrink-0 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1 group-focus-visible:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Inline editorial link or pill button with an animated arrow. Internal (`to`) or external (`href`). */
export function ArrowLink({ to, href, children, className, variant = 'text' }: ArrowLinkProps) {
  const { t, ui } = useLang()
  const classes = cn(
    'group inline-flex items-center gap-3 text-sm font-medium tracking-wide transition-colors',
    variant === 'text' && 'link-underline py-1',
    variant === 'button' &&
      'rounded-full border border-charcoal px-6 py-3 hover:bg-charcoal hover:text-ivory focus-visible:bg-charcoal focus-visible:text-ivory',
    variant === 'button-dark' &&
      'rounded-full bg-charcoal px-6 py-3 text-ivory hover:bg-sage-deep focus-visible:bg-sage-deep',
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        <Arrow />
        <span className="sr-only"> ({t(ui.common.external)})</span>
      </a>
    )
  }
  return (
    <Link to={to ?? '/'} className={classes}>
      <span>{children}</span>
      <Arrow />
    </Link>
  )
}
