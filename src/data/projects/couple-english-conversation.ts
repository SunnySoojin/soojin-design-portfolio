import type { Project } from '../types'
import { CONCEPT_TITLE, L, P, TOOLS_TITLE, img } from './_helpers'

export const coupleEnglishConversation: Project = {
  id: 'P07',
  slug: 'couple-english-conversation',
  figmaNode: '306:2',
  figmaCard: '252:11',
  title: L('서로에게 묻는 영어대화', 'Questions for Each Other — English Conversation'),
  subtitle: L('국제커플을 위한 영어 대화 질문 카드뉴스 · 23 topics / 256 cards', 'English conversation-question card news for international couples · 23 topics / 256 cards'),
  cardTitle: L('영어회화 카드뉴스 — 40편+', 'English Conversation Card News — 40+'),
  cardMeta: L('2024 — 2025 (템플릿 시스템)', '2024 — 2025 (template system)'),
  tags: [L('ENGLISH', 'ENGLISH'), L('시리즈 운영', 'Series')],
  tagline: 'EDITORIAL DESIGN   ·   CARD NEWS   ·   LANGUAGE LEARNING   ·   RELATIONSHIP',
  category: 'card-news',
  year: '2024 – 2025',
  sortYear: 2025.03,
  icon: '❝',
  template: 'case',
  cover: img('couple-english-conversation/cover', '영어회화 카드뉴스 표지 모음', 'English conversation card news covers'),
  summary: L(
    '국제커플에게 언어 장벽은 단어가 아니라 "무엇을 물어야 할지 모르는 것"에서 옵니다. 관계의 주제별로 바로 쓸 수 있는 영어 질문을 카드로 묶었습니다.',
    'For international couples the language barrier is less about vocabulary than "not knowing what to ask". Ready-to-use English questions, grouped by relationship topic, as card news.',
  ),
  sections: [
    {
      type: 'gallery',
      title: L('주제 표지', 'Topic covers'),
      ratio: '1 / 1',
      cols: 4,
      items: Array.from({ length: 8 }, (_, i) => ({
        image: img(`couple-english-conversation/cover-${String(i + 1).padStart(2, '0')}`, `주제 표지 ${i + 1}`, `Topic cover ${i + 1}`),
      })),
    },
    {
      type: 'columns',
      title: L('수록 주제 23 · 카드 세트 32', '23 topics · 32 card sets'),
      items: P(
        ['사랑과 로맨스', '애착과 보살핌', '신체적 친밀감', '신뢰와 존경', '우정과 교제', '가족과 양육', '어린시절', '감정과 정신적 행복', '마음 챙김', '건강과 행복', '꿈과 목표', '개인적 성장', '반성과 성장', '배움과 교육', '창의성과 표현', '모험과 여행', '활동', '재미와 예능', '집과 생활방식', '재정', '영성과 신념', '고마움과 감사', '전환과 변화', '기술과 혁신'],
        ['Love & romance', 'Attachment & care', 'Physical intimacy', 'Trust & respect', 'Friendship & companionship', 'Family & parenting', 'Childhood', 'Emotions & mental well-being', 'Mindfulness', 'Health & happiness', 'Dreams & goals', 'Personal growth', 'Reflection & growth', 'Learning & education', 'Creativity & expression', 'Adventure & travel', 'Activities', 'Fun & entertainment', 'Home & lifestyle', 'Finances', 'Spirituality & beliefs', 'Gratitude & thanks', 'Transitions & change', 'Technology & innovation'],
      ),
    },
    {
      type: 'text',
      title: CONCEPT_TITLE,
      paragraphs: P(
        [
          "국제커플에게 언어 장벽은 단어가 아니라 '무엇을 물어야 할지 모르는 것'에서 옵니다. 관계에서 실제로 오가는 30개 주제를 정하고, 주제마다 바로 쓸 수 있는 영어 질문을 카드로 묶었습니다.",
          '각 질문은 영어 문장과 한국어 해석을 함께 실어 어느 쪽 파트너가 읽어도 대화가 시작되도록 했습니다. 표지는 주제별 색과 일러스트로 구분하고, 본문은 메모지 질감의 공통 서식을 써 30개 주제가 한 시리즈로 읽히게 했습니다.',
        ],
        [
          "For international couples, the language barrier comes not from words but from 'not knowing what to ask'. Thirty topics that actually come up in a relationship were chosen, and for each one ready-to-use English questions were bundled into cards.",
          'Every question carries the English sentence and a Korean rendering so that whichever partner reads it, a conversation can start. Covers are told apart by topic colour and illustration; the inner cards share a memo-paper texture so the thirty topics read as one series.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('23주제', '23 topics'), label: L('수록 주제', 'Topics covered') },
        { value: L('256장', '256 cards'), label: L('제작 카드', 'Cards produced') },
        { value: L('1080×1080', '1080×1080'), label: L('카드 규격', 'Card format') },
        { value: L('한·영', 'KO · EN'), label: L('병기 구성', 'Bilingual layout') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('디자인', 'Design'), v: L('Adobe Illustrator · Canva', 'Adobe Illustrator · Canva') },
        { k: L('영문 감수', 'English proofreading'), v: L('원어민 파트너 검수', 'Reviewed by native-speaker partner') },
      ],
    },
  ],
  tools: ['Adobe Illustrator', 'Canva'],
  needsConfirmation: [
    'The home card says "40편+" while the detail page says 23 topics / 32 card sets / 256 cards. Confirm which count to show.',
    'The concept text mentions 30 topics; the topic list and stats say 23.',
  ],
}
