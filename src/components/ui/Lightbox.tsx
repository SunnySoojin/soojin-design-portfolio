import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Img } from '@/data/types'
import type { Localized } from '@/i18n/types'
import { assetSrc } from '@/data/assets'
import { useLang } from '@/i18n/LanguageContext'
import { asset } from '@/lib/utils'

export interface LightboxItem {
  image: Img
  caption?: Localized
}

interface LightboxProps {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}

/**
 * Accessible fullscreen image viewer: focus trap, Escape closes, arrow keys
 * navigate, body scroll locked while open, focus restored on close.
 */
export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const { l, t, ui } = useLang()
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const open = index !== null
  const item = open ? items[index] : null

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onNavigate((index + dir + items.length) % items.length)
    },
    [index, items.length, onNavigate],
  )

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'))
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus()
    }
  }, [open, onClose, go])

  const NavButton = ({ dir, label }: { dir: 1 | -1; label: string }) => (
    <button
      type="button"
      aria-label={label}
      onClick={() => go(dir)}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-3 text-white transition-colors hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink ${dir === -1 ? 'left-2 md:left-6' : 'right-2 md:right-6'}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d={dir === -1 ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={l(item.image.alt)}
          className="fixed inset-0 z-[90] flex flex-col bg-ink/95 text-white backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-4 text-xs uppercase tracking-widest md:px-8">
            <span className="tabular-nums text-white/70">
              {index + 1} / {items.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/30 px-4 py-2 transition-colors hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink"
            >
              {t(ui.common.close)}
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-16" onClick={(e) => e.stopPropagation()}>
            {items.length > 1 && <NavButton dir={-1} label={t(ui.project.prev)} />}
            <motion.figure
              key={item.image.key}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-h-full flex-col items-center"
            >
              <img src={asset(assetSrc(item.image.key))} alt={l(item.image.alt)} className="max-h-[78vh] w-auto max-w-full rounded-[6px] object-contain" />
              <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/70">{item.caption ? l(item.caption) : l(item.image.alt)}</figcaption>
            </motion.figure>
            {items.length > 1 && <NavButton dir={1} label={t(ui.project.next)} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
