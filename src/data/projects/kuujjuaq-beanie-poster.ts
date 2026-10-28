import type { Project } from '../types'
import { L, P, TOOLS_TITLE, img } from './_helpers'

export const kuujjuaqBeaniePoster: Project = {
  id: 'P10',
  slug: 'kuujjuaq-beanie-poster',
  figmaNode: '340:2',
  figmaCard: '354:2',
  title: L('쿠주악 비니 — 학교 굿즈 포스터', 'Kuujjuaq Beanie — School Merch Poster'),
  subtitle: L('누나빅 이누이트 마을 학교 교사 비니 · 홍보 포스터 스터디', 'Teacher beanie from a Nunavik Inuit village school · promotional poster study'),
  cardTitle: L('쿠주악 비니 — 학교 굿즈 포스터', 'Kuujjuaq Beanie — School Merch Poster'),
  cardMeta: L('2026 (포스터 4종, 하이브리드 합성)', '2026 (4 posters, hybrid compositing)'),
  tags: [L('포스터', 'Poster'), L('AI 합성', 'AI compositing')],
  tagline: 'PRODUCT POSTER   ·   AI IMAGE   ·   COMPOSITING   ·   ART DIRECTION',
  category: 'poster',
  year: '2026',
  sortYear: 2026.08,
  icon: '✦',
  template: 'case',
  cover: img('kuujjuaq-beanie-poster/cover', '별 자수가 있는 검은 비니 포스터', 'Poster of a black beanie with star embroidery'),
  summary: L(
    'AI는 정교한 도안을 그대로 지키지 못합니다. 배경은 AI로 만들고 도안은 원본을 얹는 하이브리드 합성으로 학교 굿즈 포스터 4종을 만들었습니다.',
    'AI cannot reproduce an intricate print faithfully, so four school-merch posters were built as hybrids: AI-generated scene, original artwork placed on top.',
  ),
  sections: [
    {
      type: 'gallery',
      title: L('결과물 4종', '4 deliverables'),
      ratio: '214 / 268',
      cols: 4,
      items: [
        { image: img('kuujjuaq-beanie-poster/cover-01', '하이브리드 최종 포스터', 'Hybrid final poster'), caption: L('01 하이브리드 (최종)', '01 Hybrid (final)') },
        { image: img('kuujjuaq-beanie-poster/cover-02', '그래픽 버전', 'Graphic version'), caption: L('02 그래픽', '02 Graphic') },
        { image: img('kuujjuaq-beanie-poster/cover-03', 'AI 원본', 'AI original'), caption: L('03 AI 원본', '03 AI original') },
        { image: img('kuujjuaq-beanie-poster/cover-04', '도안 소스', 'Print source'), caption: L('04 도안 소스', '04 Print source') },
      ],
    },
    {
      type: 'work',
      num: '01',
      title: L('문제 — AI는 정교한 도안을 그대로 못 지킨다', 'Problem — AI cannot keep an intricate print intact'),
      sub: L('프린트 원본을 레퍼런스로 넣어도 별 개수와 인물 배치가 달라진다', 'Even with the original print as a reference, the star count and figure placement drift'),
      paragraphs: P(
        [
          '모자 챙에는 이누이트 두 사람 → 교사와 화이트보드 → 하키 선수 → 위성 안테나가 초록 점선으로 이어지는 다이어그램이 인쇄돼 있습니다. 마을 학교의 교사·공동체·놀이·바깥세상과의 연결을 한 줄로 그린 도안입니다.',
          'AI 이미지 모델에 원본을 레퍼런스로 넣고 "다시 그리지 말라"는 금지문까지 붙였지만, 결과물은 별의 개수와 인물 위치가 원본과 달랐습니다. 실제 학교 굿즈를 소개하는 자료에서 도안이 틀리는 것은 허용할 수 없는 오차였습니다.',
        ],
        [
          'The beanie’s brim carries a printed diagram: two Inuit figures → a teacher with a whiteboard → a hockey player → a satellite dish, joined by a green dotted line. It draws the village school’s teachers, community, play and link to the outside world in one line.',
          'The original was fed to an AI image model as a reference, with an explicit "do not redraw" instruction, yet the output changed the number of stars and the position of the figures. In material presenting real school merchandise, a wrong print was an unacceptable error.',
        ],
      ),
    },
    {
      type: 'work',
      num: '02',
      title: L('해법 — 배경은 AI, 도안은 원본', 'Solution — AI for the scene, original for the print'),
      sub: L('두 결과물의 장점만 합친 하이브리드 합성', 'A hybrid composite combining the strengths of both'),
      paragraphs: P(
        [
          'AI가 만든 실사 장면(자작나무 블록·울 스카프·법랑 머그·북극 겨울 채광)에서 모자의 위치와 크기를 픽셀 단위로 측정한 뒤, 원본 도안의 배경만 지워 그 자리에 정확히 얹었습니다.',
          '결과적으로 장면은 실사 제품 사진처럼 보이고, 프린트는 원본 그대로 남습니다. 배경에는 이글루·오로라 같은 상투적 장식을 넣지 않았습니다 — 문화 요소는 학교가 만든 도안 하나로 충분하다고 판단했습니다.',
        ],
        [
          'In the AI-generated photoreal scene (birch block, wool scarf, enamel mug, Arctic winter light) the beanie’s position and size were measured to the pixel; then the original print, with only its background removed, was placed exactly there.',
          'The result reads like a real product photograph while the print stays exactly as designed. No clichéd igloos or auroras were added to the background — the one piece of cultural content, the print the school made, was judged to be enough.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('4종', '4'), label: L('포스터 시안', 'Poster variants') },
        { value: L('100%', '100%'), label: L('도안 정확도', 'Print accuracy') },
        { value: L('1크레딧', '1 credit'), label: L('AI 생성 비용', 'AI generation cost') },
        { value: L('4:5', '4:5'), label: L('포스터 규격', 'Poster ratio') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('이미지 생성', 'Image generation'), v: L('Higgsfield · nano_banana (image-to-image, 레퍼런스 1장)', 'Higgsfield · nano_banana (image-to-image, one reference)') },
        { k: L('합성 · 배경 제거', 'Compositing · background removal'), v: L('Python PIL — 가장자리 flood fill로 배경만 투명화 (프린트의 흰 별 보존)', 'Python PIL — edge flood-fill to clear only the background (white stars preserved)') },
        { k: L('레이아웃 · 출력', 'Layout · output'), v: L('HTML / CSS 렌더링 → PNG · Figma', 'HTML / CSS render → PNG · Figma') },
      ],
    },
  ],
  tools: ['Higgsfield (nano_banana)', 'Python PIL', 'HTML/CSS', 'Figma'],
}
