/**
 * UI copy (navigation, labels, buttons). Edit both `ko` and `en` for every key.
 * Project content lives in `src/data/projects/*`.
 */
export const ui = {
  siteName: { ko: 'SOO ARTWORKS', en: 'SOO ARTWORKS' },
  skipToContent: { ko: '본문으로 건너뛰기', en: 'Skip to content' },
  languageSwitch: { ko: 'Switch to English', en: '한국어로 보기' },
  languageSwitchShort: { ko: 'EN', en: 'KO' },
  mainNav: { ko: '주 메뉴', en: 'Main navigation' },

  nav: {
    home: { ko: '홈', en: 'Home' },
    works: { ko: '작업물', en: 'Works' },
    channels: { ko: '채널', en: 'Channels' },
  },

  hero: {
    logoTop: 'SOO',
    logoBottom: 'ARTWORKS',
    title: 'SOO ARTWORKS',
    tagline: {
      ko: '독립 디자이너 · 비주얼 아티스트 · 여행 스토리텔러 · AI 콘텐츠 크리에이터 — 제주',
      en: 'Independent designer · visual artist · travel storyteller · AI content creator — Jeju Island',
    },
  },

  filters: {
    label: { ko: '카테고리 필터', en: 'Filter by category' },
    all: { ko: '전체', en: 'ALL' },
    allEn: 'ALL',
    empty: { ko: '이 카테고리에는 아직 프로젝트가 없습니다.', en: 'No projects in this category yet.' },
    count: { ko: '개 프로젝트', en: 'projects' },
  },

  card: {
    open: { ko: '프로젝트 보기', en: 'View project' },
    noCover: { ko: '표지 이미지 없음', en: 'No cover image' },
  },

  project: {
    back: { ko: '← 작업물 목록', en: '← All works' },
    details: { ko: '세부 정보 보기', en: 'View details' },
    detailsAnchor: 'details',
    gallery: { ko: '갤러리', en: 'Gallery' },
    tools: { ko: '사용 도구 · TOOLS', en: 'Tools' },
    links: { ko: '링크', en: 'Links' },
    related: { ko: '관련 프로젝트', en: 'Related projects' },
    year: { ko: '연도', en: 'Year' },
    category: { ko: '카테고리', en: 'Category' },
    prev: { ko: '이전 프로젝트', en: 'Previous project' },
    next: { ko: '다음 프로젝트', en: 'Next project' },
    notFound: { ko: '프로젝트를 찾을 수 없습니다.', en: 'Project not found.' },
    openImage: { ko: '크게 보기', en: 'View larger' },
    playVideo: { ko: '영상 재생', en: 'Play video' },
    videoPending: {
      ko: '영상 링크 준비 중 — src/data/projects 에서 url 을 추가하면 재생됩니다.',
      en: 'Video link pending — add a url in src/data/projects to enable playback.',
    },
    translationNote: {
      ko: '',
      en: 'English text is a draft translation of the original Korean content.',
    },
  },

  asset: {
    missing: { ko: '이미지 내보내기 대기 중', en: 'Image not exported yet' },
    missingHint: { ko: 'Figma 노드', en: 'Figma node' },
  },

  footer: {
    channels: { ko: '채널', en: 'Channels' },
    youtube: 'YouTube',
    instagram: 'Instagram',
    email: { ko: '이메일', en: 'Email' },
    rights: { ko: '모든 권리 보유.', en: 'All rights reserved.' },
    based: { ko: '제주, 대한민국', en: 'Jeju Island, South Korea' },
    backToTop: { ko: '맨 위로', en: 'Back to top' },
  },

  common: {
    close: { ko: '닫기', en: 'Close' },
    external: { ko: '새 창에서 열림', en: 'Opens in a new window' },
    notFoundTitle: { ko: '페이지를 찾을 수 없습니다', en: 'Page not found' },
    notFoundBody: {
      ko: '주소가 바뀌었거나 삭제된 페이지입니다. 홈에서 작업물을 둘러보세요.',
      en: 'The address may have changed or the page was removed. Browse the works from the home page.',
    },
    goHome: { ko: '홈으로', en: 'Go home' },
    of: { ko: '/', en: 'of' },
  },
} as const

export type UIDict = typeof ui
