/**
 * Site-wide settings. Channel links come from the Figma file
 * (YouTubeBox / InstagramBox sections). Edit freely.
 */
export const site = {
  name: 'SOO ARTWORKS',
  shortName: 'SOO',
  /** Canonical URL — also set VITE_SITE_URL in .env for builds. */
  url: import.meta.env.VITE_SITE_URL || 'https://example.com',
  ogImage: '/og-image.svg',

  intro: {
    ko: "여러분은 지금 여행과 AI로 콘텐츠를 만드는 크리에이터 'SOO'의 작업물을 보고 계십니다.",
    en: "You are looking at the work of 'SOO', a creator making content with travel and AI.",
  },

  /** Hero stats (Figma "Stats" frame). Update the numbers as the channels grow. */
  stats: [
    { value: '5+', label: { ko: '운영 채널', en: 'Channels' } },
    { value: '660+', label: { ko: '제작 콘텐츠', en: 'Pieces of content' } },
    { value: '34', label: { ko: '개국 AI 시리즈', en: 'Countries in the AI series' } },
  ],

  /** Channels referenced across the Figma detail pages. */
  channels: {
    youtube: [
      { handle: '@Soo_Artworks_AI', href: 'https://www.youtube.com/@Soo_Artworks_AI', note: { ko: 'AI 브릭 · AI 캐릭터', en: 'AI Brick · AI characters' } },
      { handle: '@7sunny_soo', href: 'https://www.youtube.com/@7sunny_soo', note: { ko: '여행 — 발리 · 제주', en: 'Travel — Bali · Jeju' } },
      { handle: '@_09._.21_', href: 'https://www.youtube.com/@_09._.21_', note: { ko: 'Forest Green — 캐나다 거주일지 · 기타 연주 · 대륙별 합본', en: 'Forest Green — Canada diary · guitar · continent compilations' } },
      { handle: '@BongcatDiary', href: 'https://www.youtube.com/@BongcatDiary', note: { ko: '제주 고양이 AI 숏폼', en: 'Jeju cat AI shorts' } },
    ],
    instagram: [
      { handle: '@soo_supanova', href: 'https://www.instagram.com/soo_supanova', note: { ko: '여행 · AI 릴스', en: 'Travel · AI reels' } },
      { handle: '@soo.voice.diary', href: 'https://www.instagram.com/soo.voice.diary', note: { ko: '카드뉴스 연재 계정', en: 'Card-news account' } },
    ],
  },

  /** ⚠️ Not in the Figma file — add a real address or leave empty to hide the mail link. */
  email: '',
} as const
