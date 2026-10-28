import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '@/i18n/LanguageContext'
import { site } from '@/data/site'
import { asset } from '@/lib/utils'

interface SEOOptions {
  title: string
  description: string
  /** Absolute or public-relative image path for Open Graph. */
  image?: string
  type?: 'website' | 'article'
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

function upsertLink(rel: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${attrs.hreflang ? `[hreflang="${attrs.hreflang}"]` : ''}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

/**
 * Sets document title, description, Open Graph / Twitter tags and canonical
 * link for the current page. Re-runs when language or route changes.
 */
export function useSEO({ title, description, image, type = 'website' }: SEOOptions) {
  const { lang, t, ui } = useLang()
  const { pathname } = useLocation()

  useEffect(() => {
    const siteName = t(ui.siteName)
    const fullTitle = title === siteName ? title : `${title} — ${siteName}`
    const url = `${site.url.replace(/\/$/, '')}${pathname}`
    const img = image ? (image.startsWith('http') ? image : `${site.url.replace(/\/$/, '')}${asset(image)}`) : `${site.url.replace(/\/$/, '')}${asset(site.ogImage)}`

    document.title = fullTitle
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: img })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'ko' ? 'ko_KR' : 'en_US' })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertLink('canonical', { href: url })
  }, [title, description, image, type, lang, pathname, t, ui])
}
