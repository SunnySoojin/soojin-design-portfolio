import type { Project } from '../types'
import { L, img } from './_helpers'

export const aiPets: Project = {
  id: 'P03',
  slug: 'ai-pets',
  figmaNode: '17:2',
  figmaCard: '3:73',
  title: L('AI 동물 숏폼 | 봉캣 · 강아지', 'AI Animal Shorts | Bongcat · Dogs'),
  cardTitle: L('AI 동물 숏폼 — 봉캣 · 강아지', 'AI Animal Shorts — Bongcat · Dogs'),
  cardMeta: L('2026 — 연재 중', '2026 — ongoing'),
  tags: [L('AI PETS', 'AI PETS'), L('YouTube · Shorts', 'YouTube · Shorts')],
  category: 'ai-pets',
  year: '2026',
  sortYear: 2026.04,
  icon: '📁',
  template: 'media',
  cover: img('ai-pets/cover', 'AI 동물 숏폼 썸네일 — 서핑보드 위의 골든리트리버', 'AI animal shorts thumbnail — a golden retriever on a surfboard'),
  summary: L(
    '실제 반려동물 사진으로 만드는 AI 숏폼. K-pop 댄스, 여름휴가 시리즈 등 제주 고양이 봉캣과 강아지들이 주인공입니다.',
    'AI shorts made from real pet photographs: K-pop dance and summer-holiday series starring Bongcat, a Jeju cat, and dogs.',
  ),
  links: [
    { href: 'https://www.youtube.com/@BongcatDiary' },
    { href: 'https://www.instagram.com/soo_supanova' },
  ],
  sections: [
    {
      type: 'media',
      title: L('🎬  실제 반려동물 사진으로 만드는 AI 숏폼 (K-pop 댄스 · 여름휴가 시리즈)', '🎬  AI shorts made from real pet photos (K-pop dance · summer holiday series)'),
      items: [
        { image: img('ai-pets/cat', '봉캣 대표 이미지', 'Bongcat key image') },
        {
          video: {
            poster: img('ai-pets/video-thumb', 'AI 동물 숏폼 영상 썸네일', 'AI animal short video thumbnail'),
            title: L('AI 동물 숏폼', 'AI animal short'),
          },
        },
      ],
    },
    {
      type: 'links',
      title: L('📌  유튜브', '📌  YouTube'),
      links: [{ href: 'https://www.youtube.com/@BongcatDiary', note: L('Bongcat Diary — 제주 고양이 AI 숏폼, 매일 저녁 업로드', 'Bongcat Diary — Jeju cat AI shorts, uploaded every evening') }],
    },
    {
      type: 'links',
      title: L('📌  인스타그램', '📌  Instagram'),
      links: [{ href: 'https://www.instagram.com/soo_supanova' }],
    },
    {
      type: 'thumbs',
      title: L('📌  대표 컷', '📌  Selected cuts'),
      items: [
        { image: img('ai-pets/cut-cat1', '봉캣', 'Bongcat'), label: 'BONGCAT' },
        { image: img('ai-pets/cut-cat2', '요정 포즈', 'Fairy pose'), label: 'FAIRY POSE' },
        { image: img('ai-pets/cut-surf', '서핑하는 강아지', 'Surf dog'), label: 'SURF DOG' },
        { image: img('ai-pets/cut-dance', '춤추는 강아지', 'Dance dog'), label: 'DANCE DOG' },
        { image: img('ai-pets/cut-sunglasses', '해변의 강아지', 'Beach dog'), label: 'BEACH DOG' },
        { image: img('ai-pets/cut-rocks', '바닷가 바위의 강아지', 'Seaside dog'), label: 'SEASIDE DOG' },
      ],
    },
  ],
  needsConfirmation: ['Video URL for the VideoThumb tile.', 'Tools used are not listed in the Figma frame.'],
}
