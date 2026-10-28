import type { Project } from '../types'
import { CONCEPT_TITLE, L, P, TOOLS_TITLE, img } from './_helpers'

const sports: Array<[string, string, string]> = [
  ['볼링', 'Bowling', '63장'],
  ['휠체어 볼링', 'Wheelchair bowling', '59장'],
  ['보치아', 'Boccia', '43장'],
  ['라인댄스', 'Line dance', '40장'],
  ['탁구', 'Table tennis', '39장'],
  ['배드민턴', 'Badminton', '38장'],
  ['수영', 'Swimming', '37장'],
  ['파크골프', 'Park golf', '37장'],
  ['휠체어 펜싱', 'Wheelchair fencing', '34장'],
  ['게이트볼', 'Gateball', '34장'],
  ['휠체어 댄스스포츠', 'Wheelchair dance sport', '34장'],
  ['론볼', 'Lawn bowls', '33장'],
  ['바둑', 'Baduk (Go)', '33장'],
  ['휠체어농구', 'Wheelchair basketball', '30장'],
  ['슐런', 'Sjoelen', '25장'],
  ['좌식배구', 'Sitting volleyball', '24장'],
  ['당구', 'Billiards', '14장'],
]

export const jejuDisabilitySports: Project = {
  id: 'P06',
  slug: 'jeju-disability-sports',
  figmaNode: '282:2',
  figmaCard: '252:2',
  title: L('제주 장애인 스포츠종목 시리즈', 'Jeju Disability Sports Series'),
  subtitle: L('생활체육 18종목을 번호 매긴 카드뉴스로 정리한 장기 시리즈 · 18-part series', 'A long-running numbered card-news series covering 18 community sports · 18-part series'),
  cardTitle: L('제주 장애인 스포츠 — 종목 연재', 'Jeju Disability Sports — Discipline Series'),
  cardMeta: L('2024 — 2025 (번호 연재)', '2024 — 2025 (numbered series)'),
  tags: [L('PUBLIC', 'PUBLIC'), L('장애인체육', 'Para sports')],
  tagline: 'EDITORIAL DESIGN   ·   CARD NEWS   ·   SPORTS   ·   PUBLIC CAMPAIGN',
  category: 'card-news',
  year: '2024 – 2025',
  sortYear: 2025.05,
  icon: '◍',
  template: 'case',
  cover: img('jeju-disability-sports/cover', '제주 장애인 스포츠종목 카드뉴스 표지 모음', 'Covers of the Jeju disability sports card news'),
  summary: L(
    '「제주 장애인 스포츠종목 같이 알아보아요!」 — 생활체육 18종목의 규칙·장비·참여 방법을 종목당 한 편으로 묶은 공공 캠페인 카드뉴스.',
    '"Let’s learn about Jeju disability sports together!" — public-campaign card news packing the rules, equipment and how to join each of 18 community sports into one episode per discipline.',
  ),
  sections: [
    {
      type: 'gallery',
      title: L('시리즈 표지', 'Series covers'),
      ratio: '214 / 120',
      cols: 4,
      items: Array.from({ length: 12 }, (_, i) => ({
        image: img(`jeju-disability-sports/cover-${String(i + 1).padStart(2, '0')}`, `시리즈 표지 ${i + 1}`, `Series cover ${i + 1}`),
      })),
    },
    {
      type: 'chips',
      title: L('수록 종목', 'Disciplines covered'),
      items: [
        ...sports.map(([ko, en, count]) => ({ title: L(ko, en), meta: L(count, count.replace('장', ' cards')) })),
        { title: L('+ 시리즈 계속', '+ series continues') },
      ],
    },
    {
      type: 'text',
      title: CONCEPT_TITLE,
      paragraphs: P(
        [
          '「제주 장애인 스포츠종목 같이 알아보아요!」 — 장애인 생활체육에서 어떤 종목을 실제로 할 수 있는지 알기 어렵다는 문제에서 시작했습니다. 종목마다 규칙·장비·참여 방법을 카드뉴스 한 편으로 묶어, 처음 접하는 사람도 바로 이해할 수 있게 구성했습니다.',
          '확성기를 든 인물과 종목 픽토그램을 공통 표지 골격으로 두고 편마다 색상만 바꿔, 한 시리즈로 읽히면서도 종목이 즉시 구분되게 했습니다. 표지에 회차 번호(①②③…)를 넣어 수집·연재의 성격을 드러냈습니다.',
        ],
        [
          '"Let’s learn about Jeju disability sports together!" — it began with a simple problem: it is hard to know which community sports are actually open to people with disabilities. Each discipline’s rules, equipment and how to take part are packed into one card-news episode so a first-time reader understands immediately.',
          'A figure with a megaphone and a sport pictogram form the shared cover skeleton; only the colour changes per episode, so the series reads as one while each sport is instantly recognisable. Episode numbers (①②③…) on the cover signal the collectable, serial nature.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('18종목', '18 sports'), label: L('수록 종목 수', 'Disciplines covered') },
        { value: L('637장', '637 cards'), label: L('제작 카드', 'Cards produced') },
        { value: L('1280×720', '1280×720'), label: L('카드 규격', 'Card format') },
        { value: L('연재', 'Serial'), label: L('진행 방식', 'Publishing model') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('디자인', 'Design'), v: L('Adobe Illustrator · Canva', 'Adobe Illustrator · Canva') },
        { k: L('편집', 'Editing'), v: L('Adobe Photoshop', 'Adobe Photoshop') },
      ],
    },
  ],
  tools: ['Adobe Illustrator', 'Canva', 'Adobe Photoshop'],
  needsConfirmation: [
    'In Figma, "Cover 02" (289:4) reuses the same image as "Cover 01" (289:3). Confirm the intended second cover.',
    'The subtitle says 18 disciplines but 17 are listed plus "+ series continues".',
  ],
}
