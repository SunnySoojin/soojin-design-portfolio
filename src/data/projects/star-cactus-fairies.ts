import type { Project } from '../types'
import { L, img } from './_helpers'

export const starCactusFairies: Project = {
  id: 'P13',
  slug: 'star-cactus-fairies',
  figmaNode: '8:2',
  title: L('선인장 걸스 | AI 캐릭터 시리즈', 'Star Cactus Fairies | AI Character Series'),
  cardTitle: L('선인장 걸스 — AI 캐릭터 시리즈', 'Star Cactus Fairies — AI Character Series'),
  cardMeta: L('2026 — 캐릭터 6종', '2026 — 6 characters'),
  tags: [L('AI ART', 'AI ART'), L('캐릭터 IP', 'Character IP')],
  category: 'ai-art',
  year: '2026',
  sortYear: 2026.03,
  icon: '📁',
  template: 'media',
  cover: img('star-cactus-fairies/group', '선인장 걸스 6종 단체 이미지', 'Group image of the six Star Cactus Fairies'),
  summary: L(
    '자체 IP 캐릭터 「건드릴 수 없는 백년초 걸스」 — LUMI · NIA · MOMO · PIPI · RORO · VIVI 여섯 캐릭터의 AI 캐릭터 시리즈.',
    'Original character IP "Untouchable Prickly-Pear Girls" — an AI character series of six: LUMI, NIA, MOMO, PIPI, RORO and VIVI.',
  ),
  links: [
    { href: 'https://www.youtube.com/@Soo_Artworks_AI' },
    { href: 'https://www.instagram.com/soo_supanova' },
  ],
  related: ['najeonchilgi-cactus-girls', 'cactus-girls-jeju-skate'],
  sections: [
    {
      type: 'media',
      title: L('🎬  선인장 걸스 | Star Cactus Fairies', '🎬  Star Cactus Fairies'),
      items: [
        { image: img('star-cactus-fairies/group', '선인장 걸스 단체 이미지', 'Star Cactus Fairies group image') },
        {
          video: {
            poster: img('star-cactus-fairies/video-thumb', '선인장 걸스 영상 썸네일', 'Star Cactus Fairies video thumbnail'),
            title: L('선인장 걸스', 'Star Cactus Fairies'),
          },
        },
      ],
    },
    {
      type: 'links',
      title: L('📌  유튜브', '📌  YouTube'),
      links: [
        { href: 'https://www.youtube.com/@Soo_Artworks_AI' },
        { href: 'https://youtu.be/wkWHTTyvijQ', label: L('ASIA Landmarks — https://youtu.be/wkWHTTyvijQ', 'ASIA Landmarks — https://youtu.be/wkWHTTyvijQ') },
      ],
    },
    {
      type: 'links',
      title: L('📌  인스타그램', '📌  Instagram'),
      links: [{ href: 'https://www.instagram.com/soo_supanova' }],
    },
    {
      type: 'thumbs',
      title: L('📌  캐릭터시트', '📌  Character sheet'),
      items: [
        { image: img('star-cactus-fairies/char-lumi', 'LUMI', 'LUMI'), label: 'LUMI' },
        { image: img('star-cactus-fairies/char-nia', 'NIA', 'NIA'), label: 'NIA' },
        { image: img('star-cactus-fairies/char-momo', 'MOMO', 'MOMO'), label: 'MOMO' },
        { image: img('star-cactus-fairies/char-pipi', 'PIPI', 'PIPI'), label: 'PIPI' },
        { image: img('star-cactus-fairies/char-roro', 'RORO', 'RORO'), label: 'RORO' },
        { image: img('star-cactus-fairies/char-vivi', 'VIVI', 'VIVI'), label: 'VIVI' },
      ],
    },
  ],
  needsConfirmation: [
    'No home card exists for this page in Figma; the card uses the GroupImage (8:9) as cover and a generated meta line.',
    'The YouTube box repeats the "ASIA Landmarks" link from the AI Brick page — likely copied; confirm the correct video.',
    'Video URL for the VideoThumb tile.',
  ],
}
