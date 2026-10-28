/** Join class names, skipping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/**
 * Resolve a public asset path against Vite's base URL so images work both at
 * "/" and under a sub-path such as GitHub Pages ("/repo-name/").
 */
export function asset(src: string): string {
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${src.startsWith('/') ? '' : '/'}${src}`
}

/** True when the URL is an iframe-embeddable player (YouTube / Vimeo). */
export function isEmbedUrl(url: string): boolean {
  return /youtube\.com\/embed|youtube-nocookie\.com\/embed|player\.vimeo\.com/.test(url)
}

export function formatYear(year: number | string): string {
  return String(year)
}
