import type { Project } from '../types'
import { L, img } from './_helpers'

const landmarks: Array<[string, string]> = [
  ['france', 'FRANCE'],
  ['united-kingdom', 'UK'],
  ['italy', 'ITALY'],
  ['spain', 'SPAIN'],
  ['united-states', 'USA'],
  ['china', 'CHINA'],
  ['india', 'INDIA'],
  ['thailand', 'THAILAND'],
  ['egypt', 'EGYPT'],
  ['australia', 'AUSTRALIA'],
  ['brazil', 'BRAZIL'],
  ['russia', 'RUSSIA'],
]

export const aiBrick: Project = {
  id: 'P01',
  slug: 'ai-brick',
  figmaNode: '13:2',
  figmaCard: '3:3',
  title: L('AI 브릭 | 34개국 랜드마크 시리즈', 'AI Brick | 34-Country Landmark Series'),
  cardTitle: L('AI Brick — 34개국 랜드마크 시리즈', 'AI Brick — 34 Countries Landmark Series'),
  cardMeta: L('2026/07 — 진행 중 (249개국 예정)', '2026/07 — ongoing (249 countries planned)'),
  tags: [L('AI BRICK', 'AI BRICK'), L('YouTube · Reels', 'YouTube · Reels')],
  category: 'ai-brick',
  year: '2026',
  sortYear: 2026.07,
  icon: '📁',
  template: 'media',
  cover: img('ai-brick/cover', 'AI 브릭 랜드마크 시리즈 썸네일 — 물 위의 브릭 건축물', 'AI Brick landmark series thumbnail — a brick landmark on water'),
  summary: L(
    '국기 브릭볼이 각국의 랜드마크로 변신하는 토이브릭 AI 영상 시리즈. 34개국을 공개했고 249개국까지 이어갈 예정입니다.',
    'An AI toy-brick video series in which a flag brick-ball transforms into each country’s landmark. 34 countries published, 249 planned.',
  ),
  links: [
    { href: 'https://www.youtube.com/@Soo_Artworks_AI' },
    { href: 'https://www.instagram.com/soo_supanova' },
  ],
  sections: [
    {
      type: 'media',
      title: L('🎬  국기 브릭볼이 랜드마크로 변신하는 토이브릭 시리즈 (249개국 진행 중)', '🎬  A toy-brick series where a flag brick-ball turns into a landmark (249 countries in progress)'),
      items: [
        { image: img('ai-brick/landmark', '브릭으로 만든 한국 전통 건축물, 물 위에 떠 있는 장면', 'A Korean palace built from bricks, floating on water') },
        {
          video: {
            poster: img('ai-brick/video-thumb', '만리장성 망루 — 중국 편 영상 썸네일', 'Great Wall Watchtower — China episode video thumbnail'),
            title: L('Great Wall Watchtower — CHINA', 'Great Wall Watchtower — CHINA'),
            // url: 'https://www.youtube.com/embed/VIDEO_ID' — add the episode link to enable playback
          },
        },
      ],
    },
    {
      type: 'links',
      title: L('📌  유튜브', '📌  YouTube'),
      links: [
        { href: 'https://www.youtube.com/@Soo_Artworks_AI' },
        { href: 'https://youtu.be/wkWHTTyvijQ', label: L('ASIA Landmarks Compilation — https://youtu.be/wkWHTTyvijQ', 'ASIA Landmarks Compilation — https://youtu.be/wkWHTTyvijQ') },
        { href: 'https://www.youtube.com/@_09._.21_', label: L('https://www.youtube.com/@_09._.21_ — Forest Green (대륙별 합본, 3일 로테이션)', 'https://www.youtube.com/@_09._.21_ — Forest Green (continent compilations, 3-day rotation)') },
      ],
    },
    {
      type: 'links',
      title: L('📌  인스타그램', '📌  Instagram'),
      links: [{ href: 'https://www.instagram.com/soo_supanova', note: L('대륙별 합본 릴스 — 매일 오전 9시 업로드', 'Continent compilation reels — uploaded daily at 9 AM') }],
    },
    {
      type: 'thumbs',
      title: L('📌  국가별 랜드마크 (34개국 중 12개국)', '📌  Landmarks by country (12 of 34)'),
      items: landmarks.map(([key, label]) => ({
        image: img(`ai-brick/lm-${key}`, `${label} 랜드마크 브릭`, `${label} landmark in bricks`),
        label,
      })),
    },
  ],
  tools: ['AI image generation', 'AI video generation', 'Video editing'],
  needsConfirmation: [
    'Episode video URLs for the VideoThumb tile (the Figma file shows a poster with a play button but no link).',
    'Tools used are not listed in the Figma frame; the generic list in `tools` should be replaced.',
  ],
}
