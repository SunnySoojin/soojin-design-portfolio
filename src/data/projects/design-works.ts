import type { Project } from '../types'
import { L, P, img } from './_helpers'

export const designWorks: Project = {
  id: 'P04',
  slug: 'design-works',
  figmaNode: '22:12',
  figmaCard: '22:2',
  title: L('디자인 & 카드뉴스 | 복지 콘텐츠 제작', 'Design & Card News | Welfare Content'),
  cardTitle: L('디자인 & 카드뉴스 — 복지 콘텐츠', 'Design & Card News — Welfare Content'),
  cardMeta: L('2015 — 2024 (16 projects)', '2015 — 2024 (16 projects)'),
  tags: [L('DESIGN', 'DESIGN'), L('카드뉴스 · 홍보물', 'Card news · Print')],
  category: 'design',
  year: '2015 – 2024',
  sortYear: 2024,
  icon: '📁',
  template: 'media',
  cover: img('design-works/cover', '구개구순열 인식개선 캐릭터 일러스트', 'Cleft lip and palate awareness character illustration'),
  summary: L(
    '(사)한국발달장애인협회 콘텐츠디자이너로 제작한 복지 카드뉴스·홍보물·영상과, 웹디자이너 경력을 포함한 16건의 디자인 작업.',
    'Welfare card news, print collateral and video made as content designer at the Korea Association for Persons with Developmental Disabilities, plus earlier web-design work: 16 projects.',
  ),
  links: [{ href: 'https://www.instagram.com/soo.voice.diary' }],
  sections: [
    {
      type: 'media',
      title: L('🎬  구개구순열 인식개선 카드뉴스 (한/영/스페인어 3개 언어 제작)', '🎬  Cleft lip & palate awareness card news (made in Korean, English and Spanish)'),
      items: [
        { image: img('design-works/media-m1', '인식개선 카드뉴스 1', 'Awareness card news 1') },
        { image: img('design-works/media-m2', '인식개선 카드뉴스 2', 'Awareness card news 2') },
      ],
    },
    {
      type: 'list',
      title: L('📌  경력', '📌  Experience'),
      items: [
        {
          text: L('(사)한국발달장애인협회 — 콘텐츠디자이너 (2022.09 – 2024.09)', 'Korea Association for Persons with Developmental Disabilities — Content Designer (2022.09 – 2024.09)'),
          meta: L('DWB뉴스 웹콘텐츠 · 홍보 인쇄물 · 행사 콘텐츠 · 장애인 크리에이터 교육 보조강사 · 유니버설디자인 홍보 영상', 'DWB News web content · print collateral · event content · assistant instructor for creators with disabilities · universal-design promo video'),
        },
        {
          text: L('(주)하이네이처 — 웹디자이너 (2017.02 – 2018.05)', 'HiNature Co. — Web Designer (2017.02 – 2018.05)'),
          meta: L('화장품 제품촬영 · 상세페이지 · 이벤트 배너 · 카페24 웹몰 관리', 'Cosmetics product photography · product detail pages · event banners · Cafe24 web-store management'),
        },
      ],
    },
    {
      type: 'bullets',
      title: L('📌  주요 프로젝트 (16건 중 대표)', '📌  Key projects (selected from 16)'),
      items: P(
        [
          '국어문화원 공공언어 개선 카드뉴스 10편 — 2022 제주대학교',
          '제주 사회복지연구센터 기관·정책 홍보 카드뉴스 10편 — 2022',
          '제주 유니버설디자인 확산사업 영상편집·썸네일·카드뉴스 — 2022-2023',
          '제주 사회복지정책·장애인 생활 홍보 카드뉴스 12편 — 2023',
          '제주 장애인스포츠 종목별 카드뉴스 15편 + 유튜브 영상 — 2023-2024',
          '장애인 1인 크리에이터 육성 교육 사업 — 2022-2024',
          '제주 발달장애인영화제 웹사이트·발표자료 제작 — 2024 (콘텐츠진흥원 지원사업)',
          '장애 영어표현·국제커플 영어대화 카드뉴스 — 2024 (Multilingual Design)',
        ],
        [
          'Public-language improvement card news, 10 episodes — Jeju National University Korean Language Center, 2022',
          'Institution & policy card news for the Jeju Social Welfare Research Center, 10 episodes — 2022',
          'Jeju universal-design programme: video editing, thumbnails, card news — 2022–2023',
          'Jeju social-welfare policy & disability-life card news, 12 episodes — 2023',
          'Jeju disability sports card news by discipline, 15 episodes + YouTube videos — 2023–2024',
          'Training programme for solo creators with disabilities — 2022–2024',
          'Jeju Developmental Disability Film Festival website & presentation — 2024 (KOCCA-supported)',
          'Disability English expressions & international-couple conversation card news — 2024 (multilingual design)',
        ],
      ),
    },
    {
      type: 'text',
      title: L('📌  자격증', '📌  Certificates'),
      paragraphs: P(
        ['YL TESOL 국제영어강사 (2025.01) · 사회복지사 2급 (2024.05) · 생성형 AI 활용 디자인 수료 (2024.05)'],
        ['YL TESOL international English instructor (2025.01) · Social Worker Level 2 (2024.05) · Generative-AI design course completion (2024.05)'],
      ),
    },
    {
      type: 'links',
      title: L('📌  인스타그램', '📌  Instagram'),
      links: [{ href: 'https://www.instagram.com/soo.voice.diary', note: L('카드뉴스 연재 계정', 'Card-news account') }],
    },
  ],
  tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva'],
  needsConfirmation: ['Tools are inferred from the sibling card-news pages; the Figma frame itself lists none.'],
}
