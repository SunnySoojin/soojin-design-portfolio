import type { Project } from '../types'
import { L, P, img } from './_helpers'

export const exhibitions: Project = {
  id: 'P18',
  slug: 'exhibitions',
  figmaNode: '287:2',
  title: L('전시 참여 이력', 'Exhibition History'),
  subtitle: L('작가·디자이너로 참여한 전시 기록 · Exhibition history', 'A record of exhibitions joined as artist and designer'),
  cardTitle: L('전시 참여 이력', 'Exhibition History'),
  cardMeta: L('2022 — 2024 (4회)', '2022 — 2024 (4 shows)'),
  tags: [L('EXHIBITION', 'EXHIBITION'), L('아카이브', 'Archive')],
  tagline: 'EXHIBITION   ·   ARTWORK   ·   ARCHIVE',
  category: 'exhibition',
  year: '2022 – 2024',
  sortYear: 2024.2,
  icon: '▣',
  template: 'case',
  // No image exists on this Figma page; the card renders a text tile instead.
  cover: img('exhibitions/cover', '전시 참여 이력', 'Exhibition history'),
  summary: L(
    '전시는 클라이언트 없이 스스로 주제를 정해 끝까지 밀어붙이는 자리입니다. 2022–2024년 참여한 네 번의 전시 기록.',
    'An exhibition is where you set your own subject and push it to the end without a client. Four shows joined between 2022 and 2024.',
  ),
  sections: [
    {
      type: 'list',
      title: L('참여 전시', 'Exhibitions'),
      items: [
        { lead: L('MONET ARTIST', 'MONET ARTIST'), text: L('모네 아티스트 전시', 'Monet Artist Exhibition'), meta: L('참여 작가', 'Participating artist') },
        { lead: L('GROUP SHOW', 'GROUP SHOW'), text: L('시대유감 전시회', '"Sidae Yugam" Group Exhibition'), meta: L('참여 작가', 'Participating artist'), meta2: L('2024', '2024') },
        { lead: L('JEJU ARCHITECTURE', 'JEJU ARCHITECTURE'), text: L('2022 제주 건축전시회', '2022 Jeju Architecture Exhibition'), meta: L('참여', 'Participant') },
        { lead: L('GRADUATION', 'GRADUATION'), text: L('제34회 군산대 산업디자인학과 졸업전시회', '34th Kunsan National University Industrial Design Graduation Exhibition'), meta: L('졸업 전시', 'Graduation show'), meta2: L('국립군산대학교', 'Kunsan National University') },
      ],
    },
    {
      type: 'text',
      title: L('작업 맥락', 'Context'),
      paragraphs: P(
        ['전시는 클라이언트 없이 스스로 주제를 정해 끝까지 밀어붙이는 자리입니다. 카드뉴스·브랜딩처럼 목적이 정해진 작업과 달리, 여기서 시도한 색과 형태가 이후 상업 작업의 어휘가 됐습니다.'],
        ['An exhibition is where you set your own subject, with no client, and push it all the way. Unlike card news or branding, where the purpose is given, the colours and forms tried here became the vocabulary of later commercial work.'],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('4회', '4'), label: L('참여 전시', 'Exhibitions') },
        { value: L('2022–2024', '2022–2024'), label: L('활동 기간', 'Active period') },
      ],
    },
  ],
  needsConfirmation: [
    'No images exist on this Figma page; the home card shows a text tile. Provide exhibition photographs if desired.',
    'Years for the Monet Artist exhibition and the graduation show are not in the Figma file.',
    'The Figma frame also contains a hidden "386점 작품 아카이브" stat (287:33–34) that is not shown.',
  ],
}
