import type { Project } from '../types'
import { CONCEPT_TITLE, L, P, TOOLS_TITLE, img } from './_helpers'

const shots: Array<[string, string]> = [
  ['그린 선인장 걸 · 비양도', 'Green Cactus Girl · Biyangdo'],
  ['레드 선인장 걸 · 범섬', 'Red Cactus Girl · Beomseom'],
  ['블루 선인장 걸 · 협재', 'Blue Cactus Girl · Hyeopjae'],
  ['퍼플 선인장 걸 · 풍차해안도로', 'Purple Cactus Girl · Windmill Coastal Road'],
  ['핑크 선인장 걸 · 서우봉', 'Pink Cactus Girl · Seoubong'],
  ['옐로우 선인장 걸 · 섭지코지', 'Yellow Cactus Girl · Seopjikoji'],
]

export const cactusGirlsJejuSkate: Project = {
  id: 'P17',
  slug: 'cactus-girls-jeju-skate',
  figmaNode: '323:2',
  title: L('백년초 걸스 — 제주 스케이트보드 시리즈', 'Prickly-Pear Girls — Jeju Skateboard Series'),
  subtitle: L('자체 IP 캐릭터 6종이 제주 해안도로를 달리는 세로형 영상 연작', 'Six original IP characters skate down Jeju’s coastal roads in a vertical video series'),
  cardTitle: L('백년초 걸스 — 제주 스케이트보드 시리즈', 'Prickly-Pear Girls — Jeju Skate Series'),
  cardMeta: L('2026 (개별 6편 · 합본 75초)', '2026 (6 shorts · 75 s compilation)'),
  tags: [L('AI VIDEO', 'AI VIDEO'), L('캐릭터 IP', 'Character IP')],
  tagline: 'AI VIDEO   ·   CHARACTER IP   ·   JEJU   ·   VERTICAL   ·   SERIES',
  category: 'ai-art',
  year: '2026',
  sortYear: 2026.065,
  icon: '🛹',
  template: 'case',
  cover: img('cactus-girls-jeju-skate/shot-01', '그린 선인장 걸 · 비양도', 'Green Cactus Girl · Biyangdo'),
  summary: L(
    '저작권 등록을 마친 자체 캐릭터 6종이 비양도·범섬·협재·풍차해안도로·서우봉·섭지코지를 스케이트보드로 달리는 1인칭 뒤쪽 시점 세로 영상 연작.',
    'Six registered original characters skate down Biyangdo, Beomseom, Hyeopjae, the Windmill Coastal Road, Seoubong and Seopjikoji in a vertical, rear-view series.',
  ),
  related: ['najeonchilgi-cactus-girls', 'star-cactus-fairies'],
  sections: [
    {
      type: 'gallery',
      title: L('개별 영상 6편 · 각 12~15초', 'Six individual videos · 12–15 s each'),
      ratio: '290 / 516',
      cols: 3,
      items: shots.map(([ko, en], i) => ({
        image: img(`cactus-girls-jeju-skate/shot-${String(i + 1).padStart(2, '0')}`, ko, en),
        caption: L(ko, en),
      })),
    },
    {
      type: 'gallery',
      title: L('합본 75초 — 여섯 편 이어붙임', '75-second compilation — six pieces joined'),
      ratio: '900 / 150',
      cols: 1,
      items: [{ image: img('cactus-girls-jeju-skate/strip', '합본 스트립', 'Compilation strip') }],
    },
    {
      type: 'text',
      title: CONCEPT_TITLE,
      paragraphs: P(
        [
          '저작권 등록을 마친 자체 캐릭터 「건드릴 수 없는 백년초 걸스」 6종을 영상으로 옮겼습니다. 각 캐릭터가 제주의 다른 해안도로를 스케이트보드로 달려 내려가는 1인칭 뒤쪽 시점 구성입니다.',
          '캐릭터마다 배경을 달리해 여섯 편이 제주 한 바퀴가 되도록 짰습니다. 비양도·범섬·협재·풍차해안도로·서우봉·섭지코지이 차례로 등장하고, 개별 편은 각 12~15초, 이어붙인 합본은 75초입니다.',
        ],
        [
          'The six registered original characters "Untouchable Prickly-Pear Girls" were moved into video. Each character skates down a different Jeju coastal road, seen from a first-person rear view.',
          'With a different backdrop per character, the six pieces add up to one lap of Jeju: Biyangdo, Beomseom, Hyeopjae, the Windmill Coastal Road, Seoubong and Seopjikoji in turn. Each piece runs 12–15 seconds; the joined compilation runs 75.',
        ],
      ),
    },
    {
      type: 'kv',
      title: L('산출물', 'Deliverables'),
      rows: [
        { k: L('개별 6편', '6 individual'), v: L('각 12~15초 · 세로형 · 캐릭터별 1편', '12–15 s each · vertical · one per character') },
        { k: L('합본 720p', 'Compilation 720p'), v: L('75초 · 720×1280 · 배경음 포함', '75 s · 720×1280 · with background music') },
        { k: L('합본 1080p', 'Compilation 1080p'), v: L('75초 · 1080×1920 · 업로드용 최종본', '75 s · 1080×1920 · final upload version') },
      ],
    },
    {
      type: 'stats',
      items: [
        { value: L('6편', '6 videos'), label: L('캐릭터별 영상', 'One per character') },
        { value: L('75초', '75 s'), label: L('합본 길이', 'Compilation length') },
        { value: L('1080×1920', '1080×1920'), label: L('최종 해상도', 'Final resolution') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('원작 캐릭터', 'Original characters'), v: L('Adobe Illustrator · Canva', 'Adobe Illustrator · Canva') },
        { k: L('영상 생성', 'Video generation'), v: L('Higgsfield 경유 Kling 3.0 — 스타트 프레임 이미지 → 영상', 'Kling 3.0 via Higgsfield — start-frame image → video') },
        { k: L('편집·합본', 'Editing · compilation'), v: L('ffmpeg — 이어붙이기, 해상도 변환, 배경음 합성', 'ffmpeg — concatenation, resolution conversion, background-music mix') },
      ],
    },
  ],
  tools: ['Adobe Illustrator', 'Canva', 'Higgsfield (Kling 3.0)', 'ffmpeg'],
  needsConfirmation: ['No home card exists for this page in Figma; the card uses Shot 01 as cover.', 'Video links for the six shorts and the compilation.'],
}
