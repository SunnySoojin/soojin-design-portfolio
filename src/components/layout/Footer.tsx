import { useLang } from '@/i18n/LanguageContext'
import { site } from '@/data/site'

export function Footer() {
  const { t, l, ui } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer id="channels" className="mt-24 scroll-mt-20 border-t border-line bg-callout/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-sans text-xl font-bold tracking-tight">SOO ARTWORKS</p>
          <p className="mt-2 text-sm text-muted">{t(ui.hero.tagline)}</p>
        </div>

        <div className="md:col-span-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{ui.footer.youtube}</p>
          <ul className="space-y-2 text-sm">
            {site.channels.youtube.map((c) => (
              <li key={c.href}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-sans text-link underline decoration-link/40 underline-offset-4 hover:decoration-link">
                  {c.handle}
                  <span className="sr-only"> ({t(ui.common.external)})</span>
                </a>
                <span className="ml-2 text-xs text-muted">{l(c.note)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{ui.footer.instagram}</p>
          <ul className="space-y-2 text-sm">
            {site.channels.instagram.map((c) => (
              <li key={c.href}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-sans text-link underline decoration-link/40 underline-offset-4 hover:decoration-link">
                  {c.handle}
                  <span className="sr-only"> ({t(ui.common.external)})</span>
                </a>
                <span className="ml-2 text-xs text-muted">{l(c.note)}</span>
              </li>
            ))}
          </ul>
          {site.email && (
            <p className="mt-4 text-sm">
              <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{t(ui.footer.email)}</span>
              <a href={`mailto:${site.email}`} className="font-sans text-link underline underline-offset-4">
                {site.email}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-line py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. {t(ui.footer.rights)} · {t(ui.footer.based)}
        </p>
        <a href="#top" className="underline-offset-4 hover:underline">
          {t(ui.footer.backToTop)} ↑
        </a>
      </div>
    </footer>
  )
}
