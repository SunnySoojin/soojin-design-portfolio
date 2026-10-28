import { Link } from 'react-router-dom'
import { useLang } from '@/i18n/LanguageContext'
import { useSEO } from '@/hooks/useSEO'
import { visibleProjects } from '@/data/projects'
import { ProjectCard } from '@/components/works/ProjectCard'

export default function NotFoundPage() {
  const { t, ui } = useLang()
  useSEO({ title: t(ui.common.notFoundTitle), description: t(ui.common.notFoundBody) })
  const suggestions = visibleProjects.slice(0, 3)

  return (
    <section className="container-page pb-16 pt-16 md:pt-24">
      <p className="font-sans text-[13px] font-semibold tracking-[0.14em] text-accent">404</p>
      <h1 className="mt-3 text-[clamp(1.75rem,5vw,2.75rem)] font-semibold leading-tight tracking-tight text-ink">{t(ui.common.notFoundTitle)}</h1>
      <p className="mt-3 max-w-prose text-[15px] text-ink-mid">{t(ui.common.notFoundBody)}</p>
      <Link to="/" className="mt-6 inline-flex rounded-[6px] bg-ink px-5 py-2.5 font-sans text-[13px] font-semibold text-white transition-colors hover:bg-accent">
        {t(ui.common.goHome)}
      </Link>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
