import type { Project } from '../types'
import { L, img } from './_helpers'

export const travelShorts: Project = {
  id: 'P02',
  slug: 'travel-shorts',
  figmaNode: '19:2',
  figmaCard: '3:33',
  title: L('여행 숏폼 | 캐나다 · 발리 · 제주', 'Travel Shorts | Canada · Bali · Jeju'),
  cardTitle: L('여행 숏폼 — 캐나다 · 발리 · 제주', 'Travel Shorts — Canada · Bali · Jeju'),
  cardMeta: L('2026 — 연재 중 (310+ 영상)', '2026 — ongoing (310+ videos)'),
  tags: [L('TRAVEL', 'TRAVEL'), L('YouTube · Instagram', 'YouTube · Instagram')],
  category: 'travel',
  year: '2026',
  sortYear: 2026.05,
  icon: '📁',
  template: 'media',
  cover: img('travel-shorts/cover', '여행 숏폼 썸네일 — 나이아가라 폭포', 'Travel shorts thumbnail — Niagara Falls'),
  summary: L(
    '직접 촬영한 여행 기록으로 만드는 숏폼 시리즈. 캐나다, 발리, 제주를 배경으로 310편 이상 연재 중입니다.',
    'A short-form series made from travel footage shot first-hand in Canada, Bali and Jeju. More than 310 videos and counting.',
  ),
  links: [
    { href: 'https://www.youtube.com/@7sunny_soo' },
    { href: 'https://www.youtube.com/@_09._.21_' },
    { href: 'https://www.instagram.com/soo_supanova' },
  ],
  sections: [
    {
      type: 'media',
      title: L('🎬  직접 촬영한 여행 기록으로 만드는 숏폼 (310+ 영상 연재 중)', '🎬  Short-form videos from first-hand travel footage (310+ videos and counting)'),
      items: [
        { image: img('travel-shorts/travel', '여행 대표 이미지', 'Travel key image') },
        {
          video: {
            poster: img('travel-shorts/video-thumb', '여행 숏폼 영상 썸네일', 'Travel short video thumbnail'),
            title: L('여행 숏폼', 'Travel short'),
          },
        },
      ],
    },
    {
      type: 'links',
      title: L('📌  유튜브', '📌  YouTube'),
      links: [
        { href: 'https://www.youtube.com/@7sunny_soo', label: L('https://www.youtube.com/@7sunny_soo — 발리 · 제주', 'https://www.youtube.com/@7sunny_soo — Bali · Jeju') },
        { href: 'https://www.youtube.com/@_09._.21_', label: L('https://www.youtube.com/@_09._.21_ — Forest Green (캐나다 거주일지 · 기타 연주)', 'https://www.youtube.com/@_09._.21_ — Forest Green (Canada diary · guitar)') },
      ],
    },
    {
      type: 'links',
      title: L('📌  인스타그램', '📌  Instagram'),
      links: [{ href: 'https://www.instagram.com/soo_supanova', note: L('여행 릴스 — 매일 저녁 7시 30분 자동 업로드', 'Travel reels — auto-posted daily at 7:30 PM') }],
    },
    {
      type: 'thumbs',
      title: L('📌  대표 컷', '📌  Selected cuts'),
      items: [
        { image: img('travel-shorts/cut-niagara', '나이아가라', 'Niagara'), label: 'NIAGARA' },
        { image: img('travel-shorts/cut-husky', '허스키', 'Husky'), label: 'HUSKY' },
        { image: img('travel-shorts/cut-kuujjuaq', '쿠주악', 'Kuujjuaq'), label: 'KUUJJUAQ' },
        { image: img('travel-shorts/cut-amed', '아메드 비치', 'Amed Beach'), label: 'AMED BEACH' },
        { image: img('travel-shorts/cut-batur', '바투르 호수', 'Lake Batur'), label: 'LAKE BATUR' },
        { image: img('travel-shorts/cut-kintamani', '킨타마니', 'Kintamani'), label: 'KINTAMANI' },
      ],
    },
  ],
  needsConfirmation: ['Video URL for the VideoThumb tile.', 'Tools used are not listed in the Figma frame.'],
}
