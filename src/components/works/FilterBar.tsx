import { useRef, type KeyboardEvent } from 'react'
import type { CategoryId } from '@/data/types'
import { categories } from '@/data/categories'
import { useLang } from '@/i18n/LanguageContext'
import { cn } from '@/lib/utils'

export type Filter = CategoryId | 'all'

interface FilterBarProps {
  value: Filter
  onChange: (next: Filter) => void
  counts: Record<string, number>
}

/**
 * Figma "Tabs" (2:16): pill tabs with an uppercase Latin label (Inter SemiBold 13)
 * and a Korean label (Gothic A1 SemiBold 12). Active tab is #1f1f1f with white text.
 * Implemented as a radio group so arrow keys move between tabs.
 */
export function FilterBar({ value, onChange, counts }: FilterBarProps) {
  const { t, ui } = useLang()
  const groupRef = useRef<HTMLDivElement>(null)
  const options: { id: Filter; en: string; ko: string }[] = [
    { id: 'all', en: ui.filters.allEn, ko: ui.filters.all.ko },
    ...categories.filter((c) => (counts[c.id] ?? 0) > 0).map((c) => ({ id: c.id, en: c.en, ko: c.ko })),
  ]

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
    if (delta === undefined) return
    e.preventDefault()
    const next = (index + delta + options.length) % options.length
    onChange(options[next].id)
    groupRef.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]')[next]?.focus()
  }

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-label={t(ui.filters.label)}
      className="-mx-gutter flex gap-2 overflow-x-auto px-gutter pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {options.map((opt, i) => {
        const selected = opt.id === value
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(opt.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              'relative flex shrink-0 items-center gap-1.5 rounded-[6px] px-3.5 py-[7px] transition-colors',
              selected ? 'bg-ink text-white' : 'bg-tab text-tab-text hover:bg-[#ebebe7]',
            )}
          >
            <span className="font-sans text-[13px] font-semibold">{opt.en}</span>
            <span className={cn('text-[12px] font-semibold', selected ? 'text-white/70' : 'text-muted-soft')}>{opt.ko}</span>
            <span className="sr-only">
              {counts[opt.id] ?? 0} {t(ui.filters.count)}
            </span>
          </button>
        )
      })}
    </div>
  )
}
