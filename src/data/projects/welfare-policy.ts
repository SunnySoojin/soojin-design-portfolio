import type { Project } from '../types'
import { CONCEPT_TITLE, L, P, TOOLS_TITLE, img } from './_helpers'

export const welfarePolicy: Project = {
  id: 'P08',
  slug: 'welfare-policy',
  figmaNode: '285:2',
  figmaCard: '252:20',
  title: L('사회복지정책 카드뉴스', 'Social Welfare Policy Card News'),
  subtitle: L('달마다 바뀌는 복지 제도를 시민이 읽을 수 있는 언어로 옮긴 월간 시리즈', 'A monthly series translating ever-changing welfare schemes into language citizens can read'),
  cardTitle: L('건강·복지정책 카드뉴스', 'Health & Welfare Policy Card News'),
  cardMeta: L('2024 — 2025 (정보형)', '2024 — 2025 (informational)'),
  tags: [L('HEALTH', 'HEALTH'), L('정책 · 의료', 'Policy · Healthcare')],
  tagline: 'EDITORIAL DESIGN   ·   CARD NEWS   ·   PUBLIC POLICY',
  category: 'card-news',
  year: '2024 – 2025',
  sortYear: 2025.02,
  icon: '◈',
  template: 'case',
  cover: img('welfare-policy/cover', '건강·복지정책 카드뉴스 표지 모음', 'Health & welfare policy card news covers'),
  summary: L(
    "복지 제도는 매달 바뀌지만 공고문은 행정 언어로 쓰여 당사자에게 닿지 않습니다. 제도 하나를 골라 '누가·무엇을·어떻게 신청하는가'만 남기고 카드 7~9장으로 압축했습니다.",
    "Welfare schemes change monthly, but official notices are written in administrative language that never reaches the people concerned. Each episode takes one scheme and keeps only 'who, what and how to apply' in 7–9 cards.",
  ),
  related: ['hospital-selection', 'jeju-disability-sports', 'disability-english'],
  sections: [
    {
      type: 'gallery',
      title: L('카드 표지', 'Card covers'),
      ratio: '214 / 120',
      cols: 4,
      items: Array.from({ length: 4 }, (_, i) => ({
        image: img(`welfare-policy/cover-${String(i + 1).padStart(2, '0')}`, `카드 표지 ${i + 1}`, `Card cover ${i + 1}`),
      })),
    },
    {
      type: 'list',
      title: L('수록 편', 'Episodes'),
      items: [
        { lead: L('10월', 'Oct'), text: L('노인성질환자 장애인 활동지원 보전급여 지원', 'Activity-support compensation benefit for people with age-related disabilities'), meta: L('9장', '9 cards') },
        { lead: L('11월', 'Nov'), text: L('결식아동 급식단가 인상', 'Meal-subsidy increase for children at risk of hunger'), meta: L('7장', '7 cards') },
        { lead: L('12월', 'Dec'), text: L('웹배너 (모션)', 'Web banner (motion)'), meta: L('GIF', 'GIF') },
        { lead: L('—', '—'), text: L('저소득층 위기가정 지원 확대', 'Expanded support for low-income families in crisis'), meta: L('7장', '7 cards') },
        { lead: L('—', '—'), text: L('장애인활동지원센터 안내', 'Guide to the disability activity-support centre'), meta: L('9장', '9 cards') },
      ],
    },
    {
      type: 'text',
      title: CONCEPT_TITLE,
      paragraphs: P(
        [
          "복지 제도는 매달 바뀌지만 공고문은 행정 언어로 쓰여 정작 당사자에게 닿지 않습니다. 제도 하나를 골라 '누가·무엇을·어떻게 신청하는가'만 남기고 카드 7~9장으로 압축했습니다.",
          '월간 연재 형식이라 매 편 같은 골격을 쓰되 제도 성격에 따라 색을 달리해, 지난 편과 구분되면서도 같은 시리즈로 읽히게 했습니다.',
        ],
        [
          "Welfare schemes change every month, yet the notices are written in administrative language that never reaches the people they concern. Each episode picks one scheme, keeps only 'who, what and how to apply', and compresses it into 7–9 cards.",
          'As a monthly series, every episode shares the same skeleton while the colour changes with the nature of the scheme, so each one is distinct from the last yet reads as the same series.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('5편', '5 episodes'), label: L('제작 편수', 'Episodes produced') },
        { value: L('7~9장', '7–9 cards'), label: L('편당 카드', 'Cards per episode') },
        { value: L('월간', 'Monthly'), label: L('연재 주기', 'Cadence') },
        { value: L('GIF', 'GIF'), label: L('웹배너 확장', 'Web-banner extension') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('디자인', 'Design'), v: L('Adobe Illustrator · Canva', 'Adobe Illustrator · Canva') },
        { k: L('모션 배너', 'Motion banner'), v: L('Adobe Photoshop (GIF)', 'Adobe Photoshop (GIF)') },
      ],
    },
  ],
  tools: ['Adobe Illustrator', 'Canva', 'Adobe Photoshop'],
  needsConfirmation: [
    'The home card "건강·복지정책 카드뉴스" uses a thumbnail of recipe cards (레시피) that does not appear on this detail page. Confirm the card thumbnail or link the card to the Hospital Selection page as well.',
  ],
}
