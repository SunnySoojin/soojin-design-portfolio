import { useState } from 'react'
import type { Video } from '@/data/types'
import { useLang } from '@/i18n/LanguageContext'
import { asset, cn, isEmbedUrl } from '@/lib/utils'
import { Picture } from './Picture'

interface VideoPlayerProps {
  video: Video
  className?: string
  ratio?: string
}

/**
 * Figma "VideoThumb": poster with a centred play button. Click-to-play
 * supports YouTube/Vimeo embeds and direct mp4/webm. Without `url` the
 * poster is shown with a visually-identical but disabled play glyph and an
 * accessible note explaining the link is pending.
 */
export function VideoPlayer({ video, className, ratio = '416 / 340' }: VideoPlayerProps) {
  const { l, t, ui } = useLang()
  const [playing, setPlaying] = useState(false)
  const hasSource = Boolean(video.url)

  if (playing && video.url) {
    return (
      <div className={cn('relative overflow-hidden rounded-[6px] bg-ink', className)} style={{ aspectRatio: ratio }}>
        {isEmbedUrl(video.url) ? (
          <iframe
            src={`${video.url}${video.url.includes('?') ? '&' : '?'}autoplay=1`}
            title={l(video.title)}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={asset(video.url)} className="absolute inset-0 h-full w-full object-cover" controls autoPlay playsInline />
        )}
      </div>
    )
  }

  const Glyph = (
    <span
      className={cn(
        'flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-ink shadow-md transition-transform',
        hasSource && 'group-hover:scale-105',
      )}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  )

  return (
    <div className={cn('group relative', className)}>
      <Picture image={video.poster} ratio={ratio} />
      {hasSource ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${t(ui.project.playVideo)}: ${l(video.title)}`}
          className="absolute inset-0 flex items-center justify-center rounded-[6px]"
        >
          {Glyph}
        </button>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="opacity-80">{Glyph}</span>
        </div>
      )}
      {!hasSource && <p className="sr-only">{t(ui.project.videoPending)}</p>}
    </div>
  )
}
