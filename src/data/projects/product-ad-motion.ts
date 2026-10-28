import type { Project } from '../types'
import { L, P, img } from './_helpers'

const posters: Array<[string, string]> = [
  ['rdrd 그린 애플 팝핑 토너', 'rdrd Green Apple Popping Toner'],
  ['구달 청귤 비타C 세럼 α', 'Goodal Green Tangerine Vita C Serum α'],
  ['레이비 산양유 바디로션', 'Leivy Goat Milk Body Lotion'],
  ['키엘 칼렌듈라 토너', "Kiehl's Calendula Toner"],
  ['SK-II 피테라 에센스', 'SK-II Pitera Essence'],
  ['아벤느 제라캄 뉴트리션 로션', 'Avène XeraCalm Nutrition Lotion'],
]

export const productAdMotion: Project = {
  id: 'P12',
  slug: 'product-ad-motion',
  figmaNode: '363:2',
  figmaCard: '363:70',
  title: L('제품 광고 모션그래픽 — 6편', 'Product Ad Motion Graphics — 6 Pieces'),
  subtitle: L('상세페이지 링크 하나로 만드는 30초 숏폼 광고 · 자체 파이썬 렌더 엔진', '30-second short-form ads built from a single product-page link · in-house Python render engine'),
  cardTitle: L('제품 광고 모션그래픽 — 6편', 'Product Ad Motion Graphics — 6 Pieces'),
  cardMeta: L('2026/09 (30초 × 6, 상세페이지 → 광고)', '2026/09 (30 s × 6, product page → ad)'),
  tags: [L('MOTION', 'MOTION'), L('제품 광고', 'Product ad')],
  tagline: 'MOTION GRAPHICS · PRODUCT AD · PYTHON / PIL · 2026.09',
  category: 'motion',
  year: '2026',
  sortYear: 2026.095,
  icon: '🎬',
  template: 'case',
  cover: img('product-ad-motion/cover', '제품 광고 모션그래픽 훅 장면 6편', 'Hook frames from the six product ads'),
  summary: L(
    'Threads 광고 스타일을 Python PIL로 재구현한 자체 렌더 엔진으로, 상세페이지 링크와 시연 영상만으로 30초 숏폼 광고 6편을 조립했습니다.',
    'Six 30-second short-form ads assembled from a product-page link and demo footage, using an in-house Python PIL render engine that recreates the Threads ad style.',
  ),
  sections: [
    {
      type: 'gallery',
      title: L('결과물 5종', 'Deliverables'),
      ratio: '900 / 266',
      cols: 1,
      items: [{ image: img('product-ad-motion/strip', '훅 장면 6편 스트립', 'Strip of six hook frames'), caption: L('훅 장면 6편 — rdrd · 구달 · 레이비 · 키엘 · SK-II · 아벤느 (각 30초, 1080×1920)', 'Six hook frames — rdrd · Goodal · Leivy · Kiehl’s · SK-II · Avène (30 s each, 1080×1920)') }],
    },
    {
      type: 'gallery',
      ratio: '284 / 505',
      cols: 3,
      items: posters.map(([ko, en], i) => ({
        image: img(`product-ad-motion/poster-${String(i + 1).padStart(2, '0')}`, `${ko} 광고 훅 장면`, `${en} ad hook frame`),
        caption: L(`${i + 1}. ${ko}`, `${i + 1}. ${en}`),
      })),
    },
    {
      type: 'kv',
      title: L('📌 프로젝트 정보', '📌 Project info'),
      rows: [
        { k: L('기간', 'Period'), v: L('2026.09 (6편, 각 30초)', '2026.09 (6 pieces, 30 s each)') },
        { k: L('형식', 'Format'), v: L('1080×1920 세로 숏폼 · 6장면 · 나레이션 없음 · BGM만', '1080×1920 vertical short · 6 scenes · no narration · BGM only') },
        { k: L('소재', 'Material'), v: L('브랜드 공식 상세페이지 이미지 + 직접 촬영 시연 영상', 'Official brand product-page images + self-shot demo footage') },
        { k: L('근거', 'Claims'), v: L('리뷰 수치·브랜드 시험값은 각주(*) 표기, 가격 미표기', 'Review figures and brand test values footnoted (*), no prices shown') },
        { k: L('도구', 'Tools'), v: L('Python PIL 렌더 엔진 · ffmpeg · rembg · mediapipe', 'Python PIL render engine · ffmpeg · rembg · mediapipe') },
      ],
    },
    {
      type: 'work',
      num: '01',
      title: L('레퍼런스 분석 → 자체 렌더 엔진', 'Reference analysis → in-house render engine'),
      sub: L('Threads 광고 스타일(구겨진 종이·스티커 누끼·글자 타일·손글씨 인용·5초 컷)을 PIL로 재구현', 'The Threads ad style (crumpled paper, sticker cut-outs, letter tiles, handwritten quotes, 5-second cuts) rebuilt in PIL'),
      paragraphs: P(
        [
          '• engine.py: 종이 텍스처·스티커·폴라로이드·배지·이징 / scenes.py: 장면 함수 6개 / render.py: 프레임 → ffmpeg',
          '• 제품 누끼는 rembg, 시연 영상은 mediapipe 얼굴 랜드마크로 턱선 12% 보정 후 정사각 폴라로이드로 삽입',
        ],
        [
          '• engine.py: paper texture, stickers, polaroids, badges, easing / scenes.py: six scene functions / render.py: frames → ffmpeg',
          '• Product cut-outs via rembg; demo footage jawline-corrected 12 % with mediapipe face landmarks, then inserted as a square polaroid',
        ],
      ),
    },
    {
      type: 'work',
      num: '02',
      title: L('상세페이지 → 30초 광고 조립', 'Product page → 30-second ad assembly'),
      sub: L('훅 → 리뷰 요약 → 성분 타일 → 효과 배지 → 제형 시연 → CTA, 6장면 고정 구조', 'Hook → review summary → ingredient tiles → effect badges → texture demo → CTA: a fixed six-scene structure'),
      paragraphs: P(
        [
          '• 올리브영 글로벌·공식몰·화해에서 이미지와 리뷰 수치를 수집, 낮은 평점(SK-II 3.7, 아벤느 4.0)은 "호불호·밀림"으로 정직 표기',
          '• 새 제품은 링크 + 시연 영상만으로 같은 규격 재생산 (rdrd → 구달 → 레이비 → 키엘 → SK-II → 아벤느)',
        ],
        [
          '• Images and review figures collected from Olive Young Global, official stores and Hwahae; low ratings (SK-II 3.7, Avène 4.0) shown honestly as "divisive / pilling"',
          '• A new product is reproduced in the same format from just a link and demo footage (rdrd → Goodal → Leivy → Kiehl’s → SK-II → Avène)',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('6편', '6 ads'), label: L('제품 광고 영상', 'Product ad videos') },
        { value: L('30초', '30 s'), label: L('6장면 고정 구조', 'Fixed six-scene structure') },
        { value: L('5개', '5'), label: L('브랜드 소스 사이트', 'Brand source sites') },
        { value: L('1엔진', '1 engine'), label: L('제품별 scenes.py 교체', 'scenes.py swapped per product') },
      ],
    },
    {
      type: 'kv',
      title: L('🛠 사용 도구', '🛠 Tools'),
      rows: [
        { k: L('렌더', 'Render'), v: L('Python PIL · numpy · ffmpeg (30fps 1080×1920)', 'Python PIL · numpy · ffmpeg (30 fps 1080×1920)') },
        { k: L('보정', 'Correction'), v: L('rembg u2net 누끼 · mediapipe FaceMesh 턱선 워프', 'rembg u2net cut-outs · mediapipe FaceMesh jawline warp') },
        { k: L('소재', 'Sources'), v: L('올리브영 글로벌 · 브랜드 공식몰 · 화해 / 글로우픽 리뷰', 'Olive Young Global · official brand stores · Hwahae / Glowpick reviews') },
      ],
    },
  ],
  tools: ['Python PIL', 'numpy', 'ffmpeg', 'rembg', 'mediapipe'],
  needsConfirmation: [
    'Figma says "결과물 5종" (5 deliverables) but shows 6 posters. Confirm the count.',
    'The stats row in the Figma frame (363:42–49) still carries copied text from the Channel Art page ("5종 채널 아트 세트", "1546×423", "8색", "1템플릿"); the site shows the product-ad figures from the design’s own 6편/30초/5개/1엔진 block instead.',
    'Video files or links for the six ads are not in the Figma file.',
  ],
}
