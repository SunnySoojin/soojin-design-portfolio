import type { Project } from '../types'
import { CONCEPT_TITLE, L, P, img } from './_helpers'

export const queenBeeSyndrome: Project = {
  id: 'P09',
  slug: 'queen-bee-syndrome',
  figmaNode: '256:2',
  figmaCard: '266:2',
  title: L('여왕벌 신드롬 카드뉴스', 'Queen Bee Syndrome Card News'),
  subtitle: L('직장 내 가스라이팅 대응법을 다룬 10컷 시리즈 · Korean–English bilingual', 'A 10-card series on responding to workplace gaslighting · Korean–English bilingual'),
  cardTitle: L('여왕벌 신드롬 — 카드뉴스 10컷', 'Queen Bee Syndrome — 10-Card Editorial'),
  cardMeta: L('2026 (10 cards, KO/EN)', '2026 (10 cards, KO/EN)'),
  tags: [L('카드뉴스', 'Card news'), L('에디토리얼', 'Editorial')],
  tagline: 'EDITORIAL DESIGN   ·   CARD NEWS   ·   ILLUSTRATION',
  category: 'card-news',
  year: '2026',
  sortYear: 2026.09,
  icon: '◆',
  template: 'case',
  cover: img('queen-bee-syndrome/cover', '여왕벌 신드롬 카드뉴스 표지', 'Queen Bee Syndrome card news cover'),
  summary: L(
    "1973년 미시간대가 이름 붙인 '여왕벌 신드롬'과 직장 내 가스라이팅의 수법 세 가지, 그레이록 기법으로 대응하는 법을 10컷에 담은 에디토리얼 카드뉴스.",
    "An editorial card-news series packing the 'queen bee syndrome' named by the University of Michigan in 1973, three workplace gaslighting tactics and the grey-rock response into 10 cards.",
  ),
  sections: [
    {
      type: 'gallery',
      ratio: '1 / 1',
      cols: 4,
      items: Array.from({ length: 10 }, (_, i) => ({
        image: img(`queen-bee-syndrome/cover-${String(i + 1).padStart(2, '0')}`, `카드 ${i + 1}`, `Card ${i + 1}`),
      })),
    },
    {
      type: 'text',
      title: CONCEPT_TITLE,
      paragraphs: P(
        [
          "1973년 미시간대가 이름 붙인 '여왕벌 신드롬'과 직장 내 가스라이팅의 수법 세 가지, 그리고 그레이록 기법으로 대응하는 법을 10컷에 담았습니다. 블로그 원고를 카드뉴스로 옮기며 원문의 주장을 창작 없이 그대로 유지했습니다.",
          '상단 삽화 · 하단 텍스트 패널의 에디토리얼 구조로 통일하고, 문제를 이름 붙이는 앞부분에서 수법을 보여주는 4번 카드로 넘어가는 지점에만 패널을 짙은 남색으로 뒤집어 전환점을 만들었습니다. 삽화 10장은 같은 스타일 지시문으로 생성해 색·형태를 하나로 묶었고, 한글은 렌더링 오류를 피하려 로컬에서 직접 조판했습니다.',
        ],
        [
          "Ten cards cover the 'queen bee syndrome' named by the University of Michigan in 1973, three workplace gaslighting tactics, and how to respond with the grey-rock technique. The blog manuscript was moved into card news with its claims kept intact, nothing invented.",
          'Every card follows the same editorial structure — illustration above, text panel below. Only at card 4, where the series moves from naming the problem to showing the tactics, is the panel flipped to deep navy to mark the turning point. The ten illustrations were generated with one shared style prompt to unify colour and form, and the Korean type was set locally to avoid rendering errors.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('10컷', '10 cards'), label: L('카드 수', 'Card count') },
        { value: L('2026.09', '2026.09'), label: L('제작 시점', 'Produced') },
        { value: L('한 · 영', 'KO · EN'), label: L('병기 표기', 'Bilingual') },
      ],
    },
  ],
  tools: ['AI illustration (style prompt)', 'Local typesetting'],
  needsConfirmation: ['The Figma frame has no tool-stack box; `tools` is inferred from the concept text.'],
}
