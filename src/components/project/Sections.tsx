import { useMemo, useState, type ReactNode } from 'react'
import type { Section } from '@/data/types'
import { useLang } from '@/i18n/LanguageContext'
import { cn } from '@/lib/utils'
import { Picture } from '@/components/ui/Picture'
import { VideoPlayer } from '@/components/ui/VideoPlayer'
import { Lightbox, type LightboxItem } from '@/components/ui/Lightbox'
import { Reveal } from '@/components/ui/Reveal'

/* ------------------------------------------------------------------
   Shared primitives mirroring the Figma boxes
------------------------------------------------------------------- */

function Box({ children, className, flat }: { children: ReactNode; className?: string; flat?: boolean }) {
  return <section className={cn(flat ? 'box-flat' : 'box', 'px-5 py-5 md:px-6 md:pb-6', className)}>{children}</section>
}

function BoxTitle({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return <h2 className={cn('mb-4 text-[15px] font-semibold', accent ? 'text-accent' : 'text-ink')}>{children}</h2>
}

function ExternalLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const { t, ui } = useLang()
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn('font-sans text-[14px] text-link underline underline-offset-4 break-all', className)}>
      {children}
      <span className="sr-only"> ({t(ui.common.external)})</span>
    </a>
  )
}

/* ------------------------------------------------------------------
   Renderer
------------------------------------------------------------------- */

interface SectionsProps {
  sections: Section[]
  /** 'case' pages use flat white boxes on the paper background. */
  template: 'media' | 'case'
}

export function Sections({ sections, template }: SectionsProps) {
  const { l, t, ui } = useLang()
  const flat = template === 'case'

  // One lightbox for every gallery/thumb image on the page, in document order.
  const lightboxItems = useMemo<LightboxItem[]>(() => {
    const items: LightboxItem[] = []
    for (const s of sections) {
      if (s.type === 'media') for (const it of s.items) if ('image' in it) items.push({ image: it.image })
      if (s.type === 'thumbs') for (const it of s.items) items.push({ image: it.image, caption: { ko: it.label, en: it.label } })
      if (s.type === 'gallery') for (const it of s.items) items.push({ image: it.image, caption: it.caption })
    }
    return items
  }, [sections])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const indexOf = (key: string) => lightboxItems.findIndex((i) => i.image.key === key)

  const ImageButton = ({ imageKey, children, className }: { imageKey: string; children: ReactNode; className?: string }) => (
    <button type="button" onClick={() => setLightboxIndex(indexOf(imageKey))} className={cn('group block w-full text-left', className)} aria-label={t(ui.project.openImage)}>
      {children}
    </button>
  )

  return (
    <div className="space-y-5 md:space-y-6">
      {sections.map((s, idx) => {
        const key = `${s.type}-${idx}`
        switch (s.type) {
          case 'media':
            return (
              <Reveal key={key}>
                <Box flat={flat}>
                  <BoxTitle>{l(s.title)}</BoxTitle>
                  <div className={cn('grid gap-5', s.items.length > 1 && 'sm:grid-cols-2')}>
                    {s.items.map((it, i) =>
                      'image' in it ? (
                        <ImageButton key={i} imageKey={it.image.key}>
                          <Picture image={it.image} ratio="416 / 340" imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.02]" />
                        </ImageButton>
                      ) : (
                        <VideoPlayer key={i} video={it.video} ratio="416 / 340" />
                      ),
                    )}
                  </div>
                </Box>
              </Reveal>
            )

          case 'links':
            return (
              <Reveal key={key}>
                <Box flat={flat}>
                  <BoxTitle>{l(s.title)}</BoxTitle>
                  <ul className="space-y-3">
                    {s.links.map((lk, i) => (
                      <li key={i} className="space-y-1">
                        <ExternalLink href={lk.href}>{lk.label ? l(lk.label) : lk.href}</ExternalLink>
                        {lk.note && <p className="text-[13px] text-muted">{l(lk.note)}</p>}
                      </li>
                    ))}
                  </ul>
                </Box>
              </Reveal>
            )

          case 'thumbs':
            return (
              <Reveal key={key}>
                <Box flat={flat}>
                  <BoxTitle>{l(s.title)}</BoxTitle>
                  <ul className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6">
                    {s.items.map((it) => (
                      <li key={it.image.key} className="flex flex-col items-center gap-1.5">
                        <ImageButton imageKey={it.image.key}>
                          <Picture image={it.image} ratio="1 / 1" imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04]" />
                        </ImageButton>
                        <span className="font-sans text-[11px] font-semibold uppercase text-muted">{it.label}</span>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Reveal>
            )

          case 'gallery': {
            const colClass = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-2 md:grid-cols-3', 4: 'grid-cols-2 md:grid-cols-4', 6: 'grid-cols-3 md:grid-cols-6' }[s.cols]
            const grid = (
              <ul className={cn('grid gap-4', colClass)}>
                {s.items.map((it) => (
                  <li key={it.image.key} className="flex flex-col gap-1.5">
                    <ImageButton imageKey={it.image.key}>
                      <Picture
                        image={it.image}
                        ratio={s.ratio}
                        fit={s.fit}
                        rounded="rounded-[8px]"
                        className={cn(s.fit === 'contain' && 'border border-line-warm bg-white')}
                        imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.02]"
                      />
                    </ImageButton>
                    {it.caption && <span className="text-[12px] text-muted">{l(it.caption)}</span>}
                  </li>
                ))}
              </ul>
            )
            return (
              <Reveal key={key}>
                {s.boxed ? (
                  <Box flat={flat}>
                    {s.title && <BoxTitle accent={flat}>{l(s.title)}</BoxTitle>}
                    {grid}
                  </Box>
                ) : (
                  <section>
                    {s.title && <h2 className="label-accent mb-4">{l(s.title)}</h2>}
                    {grid}
                  </section>
                )}
              </Reveal>
            )
          }

          case 'text':
            return (
              <Reveal key={key}>
                <Box flat={flat}>
                  <BoxTitle accent={flat}>{l(s.title)}</BoxTitle>
                  <div className="space-y-3 text-[14px] leading-[1.75] text-ink-soft">
                    {l(s.paragraphs).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Box>
              </Reveal>
            )

          case 'stats':
            return (
              <Reveal key={key}>
                <dl className={cn('grid gap-6 py-2', s.items.length <= 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4')}>
                  {s.items.map((it, i) => (
                    <div key={i}>
                      <dd className="font-sans text-[clamp(1.25rem,3vw,1.875rem)] font-semibold leading-tight text-ink">{l(it.value)}</dd>
                      <dt className="mt-1.5 text-[13px] text-muted">{l(it.label)}</dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )

          case 'kv':
            return (
              <Reveal key={key}>
                <Box flat={flat}>
                  <BoxTitle accent={flat}>{l(s.title)}</BoxTitle>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[13px]">
                    {s.rows.map((r, i) => (
                      <div key={i} className="contents">
                        <dt className="font-semibold text-ink-soft">{l(r.k)}</dt>
                        <dd className="text-muted">{l(r.v)}</dd>
                      </div>
                    ))}
                  </dl>
                </Box>
              </Reveal>
            )

          case 'work':
            return (
              <Reveal key={key}>
                <Box flat={flat}>
                  {s.num && <p className="font-sans text-[13px] font-semibold text-accent">{s.num}</p>}
                  <h2 className={cn('font-semibold text-ink', s.num ? 'mt-1 text-[20px] md:text-[22px]' : 'text-[15px] text-accent')}>{l(s.title)}</h2>
                  {s.sub && <p className="mt-1.5 text-[14px] text-muted">{l(s.sub)}</p>}
                  <div className="mt-4 space-y-3 text-[14px] leading-[1.65] text-ink-soft">
                    {l(s.paragraphs).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Box>
              </Reveal>
            )

          case 'steps':
            return (
              <Reveal key={key}>
                {s.layout === 'cards' ? (
                  <section>
                    <h2 className="label-accent mb-4">{l(s.title)}</h2>
                    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {s.steps.map((st) => (
                        <li key={st.num} className="box-flat flex flex-col px-[18px] py-[18px]">
                          <span className="font-sans text-[13px] font-semibold text-accent">{st.num}</span>
                          <h3 className="mt-2 text-[16px] font-semibold text-ink">{l(st.title)}</h3>
                          {st.desc && <p className="mt-2 text-[12px] leading-relaxed text-muted">{l(st.desc)}</p>}
                          {st.tool && <p className="mt-auto pt-4 font-sans text-[11px] font-semibold text-accent">{st.tool}</p>}
                        </li>
                      ))}
                    </ol>
                  </section>
                ) : (
                  <Box flat={flat}>
                    <BoxTitle accent={flat}>{l(s.title)}</BoxTitle>
                    <ol className="space-y-2.5 text-[13px] leading-relaxed text-ink-soft">
                      {s.steps.map((st) => (
                        <li key={st.num} className="grid grid-cols-[2rem_1fr] gap-2">
                          <span className="font-sans font-semibold text-accent">{st.num}</span>
                          <span>
                            {l(st.title)}
                            {st.desc && <span className="text-muted"> — {l(st.desc)}</span>}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </Box>
                )}
              </Reveal>
            )

          case 'list':
            return (
              <Reveal key={key}>
                <section>
                  <h2 className="label-accent mb-4">{l(s.title)}</h2>
                  <ul className="space-y-3">
                    {s.items.map((it, i) => (
                      <li key={i} className={cn(flat ? 'box-flat' : 'box', 'grid gap-x-6 gap-y-1 px-5 py-4 md:grid-cols-[auto_1fr_auto] md:items-center')}>
                        {it.lead && <span className="font-sans text-[11px] font-semibold uppercase tracking-wide text-accent md:text-[13px]">{l(it.lead)}</span>}
                        <div className={cn(!it.lead && 'md:col-span-2')}>
                          <p className="text-[14px] font-semibold text-ink md:text-[15px]">{l(it.text)}</p>
                          {it.meta && it.meta2 === undefined && !it.lead && <p className="mt-1 text-[12px] leading-relaxed text-muted">{l(it.meta)}</p>}
                        </div>
                        {(it.lead || it.meta2) && it.meta && (
                          <div className="text-[12px] text-muted md:text-right">
                            <p>{l(it.meta)}</p>
                            {it.meta2 && <p>{l(it.meta2)}</p>}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )

          case 'chips':
            return (
              <Reveal key={key}>
                <section>
                  <h2 className="label-accent mb-4">{l(s.title)}</h2>
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                    {s.items.map((it, i) => (
                      <li key={i} className="box-flat px-3.5 py-3.5">
                        <p className="text-[14px] font-semibold text-ink">{l(it.title)}</p>
                        {it.meta && <p className="mt-1 text-[12px] text-muted">{l(it.meta)}</p>}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )

          case 'bullets':
            return (
              <Reveal key={key}>
                <Box flat={flat}>
                  <BoxTitle>{l(s.title)}</BoxTitle>
                  <ul className="list-disc space-y-1.5 pl-5 text-[13px] leading-relaxed text-ink-soft">
                    {l(s.items).map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </Box>
              </Reveal>
            )

          case 'columns':
            return (
              <Reveal key={key}>
                <section>
                  <h2 className="label-accent mb-4">{l(s.title)}</h2>
                  <ul className="box-flat grid grid-cols-2 gap-x-4 gap-y-2 px-5 py-5 text-[13px] text-ink-soft sm:grid-cols-3 md:grid-cols-4">
                    {l(s.items).map((it, i) => (
                      <li key={i}>· {it}</li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )

          case 'divider':
            return (
              <Reveal key={key}>
                <div className="border-t border-divider pt-8">
                  <p className="font-sans text-[13px] text-accent">{l(s.eyebrow)}</p>
                  <h2 className="mt-2 text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-tight text-ink">{l(s.title)}</h2>
                </div>
              </Reveal>
            )
        }
      })}

      <Lightbox items={lightboxItems} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </div>
  )
}
