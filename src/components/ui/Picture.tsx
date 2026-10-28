import { useState } from 'react'
import type { Img } from '@/data/types'
import { assetMeta, assetSrc } from '@/data/assets'
import { useLang } from '@/i18n/LanguageContext'
import { asset, cn } from '@/lib/utils'

interface PictureProps {
  image: Img
  className?: string
  imgClassName?: string
  /** CSS aspect ratio, e.g. "4 / 5". Defaults to the Figma frame ratio from the manifest. */
  ratio?: string
  /** "contain" shows the whole artwork (card-news pages). */
  fit?: 'cover' | 'contain'
  priority?: boolean
  sizes?: string
  rounded?: string
}

/**
 * Lazy image for Figma-exported assets with reserved aspect ratio, shimmer
 * while loading, and an honest "not exported yet" tile when the file is
 * missing from /public/images (see scripts/check-assets.mjs).
 */
export function Picture({ image, className, imgClassName, ratio, fit = 'cover', priority = false, sizes, rounded = 'rounded-[6px]' }: PictureProps) {
  const { l, t, ui } = useLang()
  const [state, setState] = useState<'loading' | 'ok' | 'missing'>('loading')
  const meta = assetMeta(image.key)
  const aspect = ratio ?? (meta ? `${meta.w} / ${meta.h}` : '4 / 3')

  return (
    <div
      className={cn('relative overflow-hidden bg-[#f1efea]', rounded, state === 'loading' && 'img-skeleton', className)}
      style={{ aspectRatio: aspect }}
    >
      {state !== 'missing' ? (
        <img
          src={asset(assetSrc(image.key))}
          alt={l(image.alt)}
          width={meta?.w}
          height={meta?.h}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          sizes={sizes}
          onLoad={() => setState('ok')}
          onError={() => setState('missing')}
          className={cn(
            'h-full w-full transition-opacity duration-500 ease-out',
            fit === 'contain' ? 'object-contain' : 'object-cover',
            state === 'ok' ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      ) : (
        <div
          role="img"
          aria-label={`${t(ui.asset.missing)}: ${l(image.alt)}`}
          className="flex h-full w-full flex-col items-center justify-center gap-1 border border-dashed border-line-warm bg-[repeating-linear-gradient(45deg,#f5f3ee_0_10px,#efece6_10px_20px)] p-3 text-center"
        >
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted">{t(ui.asset.missing)}</span>
          <span className="line-clamp-2 text-[0.6875rem] leading-snug text-muted-soft">{l(image.alt)}</span>
          {meta && (
            <code className="rounded bg-white/70 px-1.5 py-0.5 text-[0.625rem] text-muted">
              {t(ui.asset.missingHint)} {meta.node}
            </code>
          )}
        </div>
      )}
    </div>
  )
}
