import type { Project } from '../types'
import { CONCEPT_TITLE, L, P, TOOLS_TITLE, img } from './_helpers'

export const disabilityEnglish: Project = {
  id: 'P05',
  slug: 'disability-english',
  figmaNode: '245:2',
  figmaCard: '249:2',
  title: L('장애유형별 영어표현 카드뉴스', 'Disability English Expressions Card News'),
  subtitle: L('법정 장애유형 14종을 영어 학습 콘텐츠로 옮긴 시리즈 · 14-part series', 'The 14 legally defined disability types turned into English-learning content · 14-part series'),
  cardTitle: L('장애유형별 영어표현 — 카드뉴스 14종', 'Disability English Expressions — 14-Part Card News'),
  cardMeta: L('2024 — 2025 (14 parts)', '2024 — 2025 (14 parts)'),
  tags: [L('CARD NEWS', 'CARD NEWS'), L('접근성 · 영어교육', 'Accessibility · English')],
  tagline: 'EDITORIAL DESIGN   ·   CARD NEWS   ·   ACCESSIBILITY',
  category: 'card-news',
  year: '2024 – 2025',
  sortYear: 2025.1,
  icon: '▦',
  template: 'case',
  cover: img('disability-english/cover', '장애유형별 영어표현 카드뉴스 표지 모음', 'Covers of the disability English expressions card news'),
  summary: L(
    "'장애 정보'와 '영어 학습'을 교차시킨 14편 시리즈. 메모지 레이아웃과 펜 오브제를 공통 골격으로, 편마다 일러스트와 색을 달리했습니다.",
    "A 14-part series crossing disability information with English learning. A memo-pad layout and pen object form the shared skeleton; each episode changes illustration and colour.",
  ),
  sections: [
    {
      type: 'gallery',
      ratio: '1 / 1',
      cols: 4,
      items: Array.from({ length: 14 }, (_, i) => ({
        image: img(`disability-english/cover-${String(i + 1).padStart(2, '0')}`, `카드뉴스 표지 ${i + 1}`, `Card news cover ${i + 1}`),
      })),
    },
    {
      type: 'text',
      title: CONCEPT_TITLE,
      paragraphs: P(
        [
          "'장애 정보'와 '영어 학습'을 교차시킨 시리즈입니다. 간·간질·뇌병변·시각·신장·심장·안면·언어·자폐성·장루요루·지적·지체·청각·호흡기 — 법정 장애유형 14종을 각각 한 편으로 다뤘습니다.",
          '메모지 레이아웃과 펜 오브제를 공통 골격으로 두고, 편마다 해당 장기·상황 일러스트와 색상을 달리해 한 시리즈로 읽히면서도 편이 구별되도록 설계했습니다. 내지는 영어 용어 → 예문 → 한글 번역 → 상황 일러스트 순으로 카드 한 장에 개념 하나만 담았습니다.',
        ],
        [
          "A series that crosses 'disability information' with 'English learning'. Each of the 14 legally defined disability types — liver, epilepsy, brain lesion, visual, kidney, heart, facial, speech, autism, ostomy, intellectual, physical, hearing and respiratory — gets its own episode.",
          'A memo-pad layout and a pen object are the shared skeleton; each episode changes the organ or situation illustration and the colour so the series reads as one while episodes stay distinct. Inside, each card holds one concept in the order English term → example sentence → Korean translation → situation illustration.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('14편', '14 episodes'), label: L('법정 장애유형 커버', 'Legal disability types covered') },
        { value: L('2024–2025', '2024–2025'), label: L('제작 기간', 'Production period') },
        { value: L('10컷', '10 cards'), label: L('편당 카드 수', 'Cards per episode') },
      ],
    },
    { type: 'divider', eyebrow: L('2026 EXTENSION', '2026 EXTENSION'), title: L('보는 카드뉴스에서 듣는 카드뉴스로', 'From card news you read to card news you hear') },
    {
      type: 'work',
      num: '',
      title: L('문제 정의', 'Problem'),
      paragraphs: P(
        ['시각장애 편은 정작 시각장애인이 읽을 수 없었습니다. 접근성을 다루는 콘텐츠가 접근 불가능하다는 모순에서 출발했습니다.'],
        ['The visual-impairment episode could not be read by blind readers. The project started from that contradiction: content about accessibility that was itself inaccessible.'],
      ),
    },
    {
      type: 'work',
      num: '',
      title: L('해결 방식', 'Solution'),
      paragraphs: P(
        ['카드 139장의 텍스트를 추출해 한국어·영어 나레이션을 입히고 세로 영상으로 재구성했습니다. 한국어는 국내 화자, 영어는 원어민 화자로 분리해 발음의 학습 가치를 지켰습니다. 한 문장에 두 언어를 섞지 않는 것이 설계의 핵심 규칙입니다.'],
        ['Text from 139 cards was extracted, voiced in Korean and English narration and rebuilt as vertical video. Korean uses a native Korean voice and English a native English voice to keep the pronunciation value. The core rule: never mix two languages in one sentence.'],
      ),
    },
    {
      type: 'steps',
      title: L('제작 파이프라인', 'Production pipeline'),
      layout: 'cards',
      steps: [
        { num: '01', title: L('텍스트 추출', 'Text extraction'), desc: L('카드 139장에서 영어 문장 OCR', 'OCR of English sentences from 139 cards'), tool: 'Tesseract OCR' },
        { num: '02', title: L('번역 · 대본', 'Translation · script'), desc: L('장애 용어를 한국어로 옮겨 나레이션 구성', 'Disability terms translated into Korean narration'), tool: 'CLOVA Studio (HyperCLOVA X)' },
        { num: '03', title: L('음성 합성', 'Voice synthesis'), desc: L('한국어·영어 원어민 음성 441컷 생성', '441 native Korean and English voice clips generated'), tool: 'CLOVA Voice Premium' },
        { num: '04', title: L('영상 재구성', 'Video rebuild'), desc: L('1080×1920 세로, 음성 길이에 맞춰 카드 전환', '1080×1920 vertical, card transitions timed to the audio'), tool: 'FFmpeg' },
      ],
    },
    {
      type: 'stats',
      items: [
        { value: L('36편', '36 videos'), label: L('60초 이하 쇼츠', 'Shorts under 60 s') },
        { value: L('441컷', '441 clips'), label: L('생성한 나레이션', 'Narration clips generated') },
        { value: L('27분', '27 min'), label: L('총 재생 시간', 'Total runtime') },
        { value: L('2026', '2026'), label: L('음성 확장', 'Audio extension') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('원본 디자인', 'Original design'), v: L('Adobe Illustrator · Canva (카드 139장)', 'Adobe Illustrator · Canva (139 cards)') },
        { k: L('텍스트 추출', 'Text extraction'), v: L('Tesseract OCR 5.5', 'Tesseract OCR 5.5') },
        { k: L('번역 · 대본', 'Translation · script'), v: L('CLOVA Studio — HyperCLOVA X (HCX-005)', 'CLOVA Studio — HyperCLOVA X (HCX-005)') },
        { k: L('음성 합성', 'Voice synthesis'), v: L('CLOVA Voice Premium — 한국어 nara · 영어 clara', 'CLOVA Voice Premium — Korean "nara" · English "clara"') },
        { k: L('영상 편집', 'Video editing'), v: L('FFmpeg (1080×1920 세로 재구성 · 자동 컷 전환)', 'FFmpeg (1080×1920 vertical rebuild · automatic cut transitions)') },
      ],
    },
  ],
  tools: ['Adobe Illustrator', 'Canva', 'Tesseract OCR', 'CLOVA Studio', 'CLOVA Voice', 'FFmpeg'],
}
