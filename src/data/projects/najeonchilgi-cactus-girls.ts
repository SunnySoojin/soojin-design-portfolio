import type { Project } from '../types'
import { CONCEPT_TITLE, L, P, TOOLS_TITLE, img } from './_helpers'

const pieces: Array<[string, string]> = [
  ['핑크 선인장 걸', 'Pink Cactus Girl'],
  ['퍼플 선인장 걸', 'Purple Cactus Girl'],
  ['블루 선인장 걸', 'Blue Cactus Girl'],
  ['레드 선인장 걸', 'Red Cactus Girl'],
  ['그린 선인장 걸', 'Green Cactus Girl'],
  ['옐로우 선인장 걸', 'Yellow Cactus Girl'],
]

export const najeonchilgiCactusGirls: Project = {
  id: 'P16',
  slug: 'najeonchilgi-cactus-girls',
  figmaNode: '320:2',
  title: L('건드릴 수 없는 백년초 걸스 — 나전칠기', 'Untouchable Prickly-Pear Girls — Najeonchilgi'),
  subtitle: L('자체 IP 캐릭터를 한국 전통 나전칠기 공예로 재해석한 6점 연작', 'Original character IP reinterpreted in traditional Korean mother-of-pearl lacquerware · 6-piece series'),
  cardTitle: L('백년초 걸스 — 나전칠기 연작 6점', 'Prickly-Pear Girls — Najeonchilgi Series'),
  cardMeta: L('2026 (6점, 저작권 등록 캐릭터)', '2026 (6 pieces, registered character IP)'),
  tags: [L('AI ART', 'AI ART'), L('한국 공예', 'Korean craft')],
  tagline: 'AI ART   ·   CHARACTER IP   ·   KOREAN CRAFT   ·   NAJEONCHILGI   ·   SERIES',
  category: 'ai-art',
  year: '2026',
  sortYear: 2026.06,
  icon: '🐚',
  template: 'case',
  cover: img('najeonchilgi-cactus-girls/piece-01', '핑크 선인장 걸 — 나전칠기', 'Pink Cactus Girl — najeonchilgi'),
  summary: L(
    '저작권 등록을 마친 자체 캐릭터 「건드릴 수 없는 백년초 걸스」를 검정 옻칠 바탕에 자개를 박아 넣는 나전칠기의 물성으로 옮긴 6점 연작.',
    'A six-piece series moving the registered original characters "Untouchable Prickly-Pear Girls" into the materiality of najeonchilgi — mother-of-pearl inlaid on black lacquer.',
  ),
  related: ['star-cactus-fairies', 'cactus-girls-jeju-skate'],
  sections: [
    {
      type: 'gallery',
      title: L('연작 6점', 'Six pieces'),
      ratio: '290 / 387',
      cols: 3,
      items: pieces.map(([ko, en], i) => ({
        image: img(`najeonchilgi-cactus-girls/piece-${String(i + 1).padStart(2, '0')}`, `${ko} 나전칠기`, `${en} in mother-of-pearl`),
        caption: L(ko, en),
      })),
    },
    {
      type: 'text',
      title: CONCEPT_TITLE,
      paragraphs: P(
        [
          '「건드릴 수 없는 백년초 걸스」는 제가 만들어 저작권 등록을 마친 캐릭터입니다(한국저작권위원회 제C-2026-041348호). 백년초는 제가 사는 제주의 특산 식물이기도 합니다.',
          '화면 안에서만 존재하던 캐릭터를 한국 전통 나전칠기의 물성으로 옮겨 보았습니다. 검정 옻칠 바탕에 자개를 잘라 박아 넣는 기법으로, 선인장 줄기 하나하나가 별개의 조각이 되고 가시는 음각 점으로 표현됩니다.',
          '여섯 캐릭터의 고유 색을 자수정·전복껍데기·산호·옥빛·호박으로 옮기고, 파도·동백·구름은 공통으로 두어 연작으로 묶었습니다.',
        ],
        [
          '"Untouchable Prickly-Pear Girls" are characters I created and registered (Korea Copyright Commission no. C-2026-041348). The prickly pear is also a signature plant of Jeju, where I live.',
          'Characters that existed only on screen were moved into the materiality of traditional Korean najeonchilgi. In the technique of cutting mother-of-pearl and inlaying it on black lacquer, every cactus stem becomes a separate piece and the spines become engraved dots.',
          'Each character’s colour was translated into amethyst, abalone shell, coral, jade and amber, while waves, camellias and clouds stay shared so the six read as one series.',
        ],
      ),
    },
    {
      type: 'steps',
      title: L('제작 과정', 'Process'),
      layout: 'list',
      steps: [
        { num: '01', title: L('원본 캐릭터 6종을 참조 이미지로 투입 — 얼굴·포즈·의상 실루엣 유지', 'Six original characters fed in as reference images — face, pose and costume silhouette preserved') },
        { num: '02', title: L('재질만 자개로 치환. 평면 상감임을 명시해 3D 피규어화 방지', 'Only the material swapped to mother-of-pearl; flat inlay specified to prevent 3D-figurine drift') },
        { num: '03', title: L('캐릭터별 자개 색 지정, 장식 모티프와 여백은 고정해 연작 통일', 'Shell colour set per character; decorative motifs and margins fixed to unify the series') },
        { num: '04', title: L('색 이탈 보정 — 노란색이 금박 단색으로 빠져 무지갯빛 지시 후 재생성', 'Colour-drift correction — yellow collapsed into flat gold leaf, regenerated with an iridescent instruction') },
      ],
    },
    {
      type: 'stats',
      items: [
        { value: L('6점', '6 pieces'), label: L('연작 규모', 'Series size') },
        { value: L('1792×2400', '1792×2400'), label: L('작업 해상도', 'Working resolution') },
        { value: L('제C-2026-041348호', 'No. C-2026-041348'), label: L('원작 저작권 등록', 'Original copyright registration') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('원작 캐릭터', 'Original characters'), v: L('Adobe Illustrator · Canva', 'Adobe Illustrator · Canva') },
        { k: L('이미지 생성', 'Image generation'), v: L('Higgsfield (Nano Banana Pro) · 참조 이미지 기반 변환', 'Higgsfield (Nano Banana Pro) · reference-image transformation') },
        { k: L('프롬프트 설계', 'Prompt design'), v: L('직접 작성 · 반복 검증 후 템플릿화', 'Written by hand · templated after repeated validation') },
      ],
    },
  ],
  tools: ['Adobe Illustrator', 'Canva', 'Higgsfield (Nano Banana Pro)'],
  needsConfirmation: ['No home card exists for this page in Figma; the card uses Piece 01 as cover.'],
}
