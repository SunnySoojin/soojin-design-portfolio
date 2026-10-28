import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'
import { useSEO } from '@/hooks/useSEO'
import { adjacentProjects, getProject, relatedProjects } from '@/data/projects'
import { categoryLabel } from '@/data/categories'
import { assetSrc } from '@/data/assets'
import { cn } from '@/lib/utils'
import { Sections } from '@/components/project/Sections'
import { ProjectCard } from '@/components/works/ProjectCard'
import NotFoundPage from './NotFoundPage'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFoundPage />
  return <ProjectView key={project.slug} slug={project.slug} />
}

function ProjectView({ slug }: { slug: string }) {
  const { t, l, ui, lang } = useLang()
  const reduce = useReducedMotion()
  const project = getProject(slug)!
  const isCase = project.template === 'case'
  const { prev, next } = adjacentProjects(project.slug)
  const related = relatedProjects(project)
  const category = categoryLabel(project.category)

  useSEO({
    title: l(project.title),
    description: l(project.summary),
    image: project.slug === 'exhibitions' ? undefined : assetSrc(project.cover.key),
    type: 'article',
  })

  const tools = project.tools ?? []

  return (
    <div className={cn(isCase && 'bg-paper')}>
      <article className="container-page pb-16 pt-6 md:pt-10">
        {/* ---------------------------------------------------- Header */}
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Link to="/" className="text-[13px] text-muted underline-offset-4 hover:text-ink hover:underline">
            {t(ui.project.back)}
          </Link>

          <p className={cn('mt-6 leading-none', isCase ? 'text-[42px] text-accent' : 'text-[52px]')} aria-hidden="true">
            {project.icon}
          </p>
          <h1 className={cn('mt-5 font-bold leading-tight tracking-tight text-ink', isCase ? 'text-[clamp(1.75rem,5vw,2.75rem)] font-semibold' : 'text-[clamp(1.75rem,5vw,2.5rem)]')}>
            {l(project.title)}
          </h1>
          {project.subtitle && <p className="mt-3 text-[clamp(0.9375rem,2vw,1.25rem)] text-ink-mid">{l(project.subtitle)}</p>}
          {project.tagline && <p className="mt-3 whitespace-pre-wrap font-sans text-[13px] tracking-wide text-accent">{project.tagline}</p>}

          {/* Meta strip: year · category · tools — the "세부 정보 보기" link scrolls here */}
          <dl id={ui.project.detailsAnchor} className="mt-5 flex scroll-mt-20 flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4 text-[13px]">
            <div className="flex gap-2">
              <dt className="text-muted">{t(ui.project.year)}</dt>
              <dd className="font-sans font-medium text-ink">{project.year}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted">{t(ui.project.category)}</dt>
              <dd>
                <Link to={`/?category=${project.category}`} className="font-medium text-ink underline-offset-4 hover:underline">
                  {l(category)}
                </Link>
              </dd>
            </div>
            {tools.length > 0 && (
              <div className="flex gap-2">
                <dt className="text-muted">{t(ui.project.tools)}</dt>
                <dd className="font-sans text-ink">{tools.join(' · ')}</dd>
              </div>
            )}
          </dl>
          {!isCase && (
            <a href={`#${ui.project.detailsAnchor}`} className="mt-3 inline-block text-[13px] text-muted underline underline-offset-4 hover:text-ink">
              {t(ui.project.details)}
            </a>
          )}
          {lang === 'en' && ui.project.translationNote.en && <p className="mt-4 text-[12px] text-muted-soft">{ui.project.translationNote.en}</p>}
        </motion.header>

        {/* ---------------------------------------------------- Body */}
        <div className="mt-8 md:mt-10">
          <Sections sections={project.sections} template={project.template} />
        </div>

        {/* ---------------------------------------------------- Prev / next */}
        <nav aria-label={`${t(ui.project.prev)} / ${t(ui.project.next)}`} className="mt-14 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
          {prev && (
            <Link to={`/projects/${prev.slug}`} className="group rounded-[8px] border border-line bg-white px-4 py-3 transition-colors hover:border-ink">
              <span className="text-[11px] uppercase tracking-wide text-muted">{t(ui.project.prev)}</span>
              <span className="mt-1 block text-[14px] font-semibold text-ink">{l(prev.cardTitle ?? prev.title)}</span>
            </Link>
          )}
          {next && (
            <Link to={`/projects/${next.slug}`} className="group rounded-[8px] border border-line bg-white px-4 py-3 text-right transition-colors hover:border-ink sm:col-start-2">
              <span className="text-[11px] uppercase tracking-wide text-muted">{t(ui.project.next)}</span>
              <span className="mt-1 block text-[14px] font-semibold text-ink">{l(next.cardTitle ?? next.title)}</span>
            </Link>
          )}
        </nav>

        {/* ---------------------------------------------------- Related */}
        {related.length > 0 && (
          <section className="mt-14" aria-labelledby="related-title">
            <h2 id="related-title" className="label-accent mb-4">
              {t(ui.project.related)}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  )
}
