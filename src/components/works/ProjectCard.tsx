import { Link } from 'react-router-dom'
import type { Project } from '@/data/types'
import { useLang } from '@/i18n/LanguageContext'
import { cn } from '@/lib/utils'
import { Picture } from '@/components/ui/Picture'

interface ProjectCardProps {
  project: Project
  priority?: boolean
}

/**
 * Figma "Card / …" (3:3 etc.): 284×345, white, 1px #e5e5e0 border, radius 8,
 * 170px thumbnail, 📁 title (Gothic A1 SemiBold 14), meta (Inter 12 #737373)
 * and two chips (#e8f0fc / #f2edf7).
 */
export function ProjectCard({ project, priority }: ProjectCardProps) {
  const { l, t, ui } = useLang()
  const hasCover = project.slug !== 'exhibitions'

  return (
    <article className="group h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[8px] border border-line bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] focus-visible:outline-offset-2"
      >
        {hasCover ? (
          <Picture
            image={project.cover}
            ratio="284 / 170"
            rounded="rounded-none"
            priority={priority}
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
            imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex items-center justify-center bg-paper text-4xl text-accent" style={{ aspectRatio: '284 / 170' }} aria-hidden="true">
            {project.icon}
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2 px-3.5 pb-3.5 pt-3">
          <h3 className="text-[14px] font-semibold leading-snug text-ink">
            <span aria-hidden="true">📁 </span>
            {l(project.cardTitle ?? project.title)}
          </h3>
          <p className="font-sans text-[12px] text-muted">{l(project.cardMeta)}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-1" aria-label={t(ui.project.category)}>
            {project.tags.map((tag, i) => (
              <li
                key={i}
                className={cn('rounded-[4px] px-2 py-[3px] font-sans text-[10px] font-semibold text-tag-text', i === 0 ? 'bg-tag-a' : 'bg-tag-b')}
              >
                {l(tag)}
              </li>
            ))}
          </ul>
        </div>
        <span className="sr-only">{t(ui.card.open)}</span>
      </Link>
    </article>
  )
}
