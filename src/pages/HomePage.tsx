import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'
import { useSEO } from '@/hooks/useSEO'
import { site } from '@/data/site'
import { visibleProjects } from '@/data/projects'
import type { CategoryId } from '@/data/types'
import { categories } from '@/data/categories'
import { FilterBar, type Filter } from '@/components/works/FilterBar'
import { ProjectCard } from '@/components/works/ProjectCard'

const EASE = [0.22, 1, 0.36, 1] as const
const validFilters = new Set<string>(['all', ...categories.map((c) => c.id)])

export default function HomePage() {
  const { t, l, ui } = useLang()
  useSEO({ title: t(ui.siteName), description: l(site.intro) })

  const reduce = useReducedMotion()
  const [params, setParams] = useSearchParams()
  const raw = params.get('category') ?? 'all'
  const filter: Filter = validFilters.has(raw) ? (raw as Filter) : 'all'

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: visibleProjects.length }
    for (const p of visibleProjects) c[p.category] = (c[p.category] ?? 0) + 1
    return c
  }, [])

  const list = filter === 'all' ? visibleProjects : visibleProjects.filter((p) => p.category === (filter as CategoryId))

  const setFilter = (next: Filter) => {
    const nextParams = new URLSearchParams(params)
    if (next === 'all') nextParams.delete('category')
    else nextParams.set('category', next)
    setParams(nextParams, { replace: true })
  }

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  })

  return (
    <>
      {/* ---------------------------------------------------------- Cover */}
      <div className="relative -mt-14 h-[240px] overflow-hidden bg-gradient-to-r from-hero-from via-hero-via to-hero-to md:h-[300px]" aria-hidden="true">
        <span className="hero-blob" style={{ left: '62%', top: 40, width: 220, height: 220 }} />
        <span className="hero-blob" style={{ left: '78%', top: 120, width: 150, height: 150 }} />
        <span className="hero-blob" style={{ left: '72%', top: -40, width: 130, height: 130 }} />
        <span className="hero-blob" style={{ left: '53%', top: 150, width: 90, height: 90 }} />
        <span className="hero-blob" style={{ left: '87%', top: 30, width: 80, height: 80 }} />
      </div>

      {/* ---------------------------------------------------------- Intro */}
      <section className="container-page">
        <motion.div
          {...fadeUp(0)}
          className="relative z-10 -mt-[52px] flex h-[104px] w-[104px] flex-col items-center justify-center rounded-[8px] border border-line bg-white shadow-[var(--shadow-logo)]"
        >
          <span className="font-sans text-[26px] font-bold leading-none text-[#1a1a1a]">{ui.hero.logoTop}</span>
          <span className="mt-2 font-sans text-[10px] tracking-[1.5px] text-muted">{ui.hero.logoBottom}</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.08)} className="mt-10 font-sans text-[clamp(2rem,6vw,3.25rem)] font-bold leading-none tracking-tight text-ink">
          {ui.hero.title}
        </motion.h1>
        <motion.p {...fadeUp(0.12)} className="mt-3 text-[14px] text-muted">
          {t(ui.hero.tagline)}
        </motion.p>

        <motion.div {...fadeUp(0.16)} className="mt-7 flex items-start gap-3 rounded-[6px] border border-line-soft bg-callout px-5 py-4">
          <span className="text-[18px] leading-none" aria-hidden="true">
            💡
          </span>
          <p className="text-[15px] font-medium text-ink-soft">{l(site.intro)}</p>
        </motion.div>

        <motion.dl {...fadeUp(0.22)} className="mt-8 grid grid-cols-3 gap-4">
          {site.stats.map((s) => (
            <div key={s.value}>
              <dd className="font-sans text-[clamp(1.5rem,4vw,2.125rem)] font-bold leading-none text-ink">{s.value}</dd>
              <dt className="mt-2 text-[14px] text-muted">{l(s.label)}</dt>
            </div>
          ))}
        </motion.dl>
      </section>

      {/* ---------------------------------------------------------- Works */}
      <section className="container-page mt-12 scroll-mt-20" id="works" aria-labelledby="works-title">
        <h2 id="works-title" className="sr-only">
          {t(ui.nav.works)}
        </h2>
        <FilterBar value={filter} onChange={setFilter} counts={counts} />

        <p className="sr-only" role="status" aria-live="polite">
          {list.length} {t(ui.filters.count)}
        </p>

        {list.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">{t(ui.filters.empty)}</p>
        ) : (
          <motion.ul layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <motion.li
                key={p.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3), ease: EASE }}
              >
                <ProjectCard project={p} priority={i < 3} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </section>
    </>
  )
}
