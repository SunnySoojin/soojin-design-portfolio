import type { Project } from '../types'
import { L, P, TOOLS_TITLE, img } from './_helpers'

export const advocacyDesign: Project = {
  id: 'P15',
  slug: 'advocacy-design',
  figmaNode: '286:2',
  title: L('메시지 디자인 — 목소리를 얹는 그래픽', 'Message Design — Graphics That Carry a Voice'),
  subtitle: L('사회적 메시지를 시각 언어로 옮긴 두 작업 · Advocacy graphics', 'Two works translating social messages into visual language · Advocacy graphics'),
  cardTitle: L('메시지 디자인 — 목소리를 얹는 그래픽', 'Message Design — Advocacy Graphics'),
  cardMeta: L('그래픽 2건 · 이모티콘 확장', '2 graphics · emoticon extension'),
  tags: [L('DESIGN', 'DESIGN'), L('일러스트 · 이모티콘', 'Illustration · Emoticon')],
  tagline: 'GRAPHIC DESIGN   ·   ILLUSTRATION   ·   ADVOCACY   ·   EMOTICON',
  category: 'design',
  year: '—',
  sortYear: 2023.5,
  icon: '✦',
  template: 'case',
  cover: img('advocacy-design/cover-01', '이누이트 아마우티 — Words of Peace', 'Inuit amauti — Words of Peace'),
  summary: L(
    '이누이트 아마우티 실루엣을 세 언어의 평화의 단어로 채운 「Words of Peace」와, 교사 처우 개선 캠페인 일러스트 「Things Have To Change Now!」.',
    '"Words of Peace", an Inuit amauti silhouette filled with words of peace in three languages, and "Things Have To Change Now!", a campaign illustration for better treatment of teachers.',
  ),
  sections: [
    {
      type: 'gallery',
      title: L('작업 이미지', 'Work images'),
      ratio: '1 / 1',
      cols: 4,
      items: Array.from({ length: 4 }, (_, i) => ({
        image: img(`advocacy-design/cover-${String(i + 1).padStart(2, '0')}`, `작업 이미지 ${i + 1}`, `Work image ${i + 1}`),
      })),
    },
    {
      type: 'work',
      num: '01',
      title: L('이누이트 아마우티 — Words of Peace', 'Inuit amauti — Words of Peace'),
      sub: L('트라이링구얼 타이포그래피 · 영어 / 프랑스어 / 이누크티투트 음절문자', 'Trilingual typography · English / French / Inuktitut syllabics'),
      paragraphs: P(
        [
          '캐나다 이누이트 전통 의복 아마우티의 실루엣을 중심에 두고, 그 주위를 평화·공감·연대를 뜻하는 단어들로 채웠습니다. 영어와 프랑스어 옆에 이누크티투트 음절문자(ᐃᓄᒃᑎᑐᑦ)를 나란히 배치해, 세 언어가 같은 무게로 읽히도록 했습니다.',
          '원주민 언어를 장식이 아니라 본문으로 다루는 것이 이 작업의 핵심 원칙이었습니다. 이누이트 자살예방 전략 자료를 배경으로 삼아, 문구 선정과 톤을 공동체의 맥락에 맞췄습니다.',
        ],
        [
          'The silhouette of the amauti, the traditional Canadian Inuit garment, sits at the centre, surrounded by words meaning peace, empathy and solidarity. Inuktitut syllabics (ᐃᓄᒃᑎᑐᑦ) are set beside the English and French so all three languages read with equal weight.',
          'Treating the Indigenous language as body text rather than decoration was the core principle. The Inuit suicide-prevention strategy served as background material, and wording and tone were matched to the community’s context.',
        ],
      ),
    },
    {
      type: 'work',
      num: '02',
      title: L('Things Have To Change Now!', 'Things Have To Change Now!'),
      sub: L('교사 처우 개선 캠페인 일러스트 · 네이버 이모티콘 확장', 'Campaign illustration for better treatment of teachers · extended to Naver emoticons'),
      paragraphs: P(
        [
          "'WE ARE TEACHER' 피켓을 든 인물들을 학교(IN SCHOOL)와 회사(IN COMPANY) 두 판본으로 그렸습니다. 같은 인물이 장소만 바뀌어 서 있는 구성으로, 문제가 특정 직군이 아니라 구조에 있다는 점을 드러냈습니다.",
          '굵은 외곽선과 노란 폭발 말풍선으로 시위 피켓의 즉각성을 살렸고, 같은 캐릭터를 네이버 이모티콘으로 확장해 메시지가 일상 대화에서도 쓰이도록 했습니다.',
        ],
        [
          "Figures holding 'WE ARE TEACHER' placards were drawn in two versions, IN SCHOOL and IN COMPANY. The same people stand in a different place, showing that the problem lies in the structure, not in one profession.",
          'Thick outlines and a yellow burst speech bubble keep the immediacy of a protest placard, and the same characters were extended into Naver emoticons so the message lives on in everyday chat.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('3개 언어', '3 languages'), label: L('이누이트 작업', 'Inuit piece') },
        { value: L('2개 판본', '2 versions'), label: L('학교 · 회사', 'School · Company') },
        { value: L('이모티콘', 'Emoticons'), label: L('네이버 확장', 'Naver extension') },
        { value: L('A3', 'A3'), label: L('최대 출력 규격', 'Max print size') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('일러스트', 'Illustration'), v: L('Adobe Illustrator', 'Adobe Illustrator') },
        { k: L('합성 · 마스터', 'Compositing · master'), v: L('Adobe Photoshop (PSD 레이어 관리)', 'Adobe Photoshop (PSD layer management)') },
        { k: L('배포', 'Distribution'), v: L('네이버 이모티콘 규격 (투명 PNG)', 'Naver emoticon spec (transparent PNG)') },
      ],
    },
  ],
  tools: ['Adobe Illustrator', 'Adobe Photoshop'],
  needsConfirmation: ['No home card or year exists for this page in Figma.'],
}
