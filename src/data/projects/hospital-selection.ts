import type { Project } from '../types'
import { L, img } from './_helpers'

export const hospitalSelection: Project = {
  id: 'P14',
  slug: 'hospital-selection',
  figmaNode: '234:2',
  title: L('병원 선택, 오해와 진실', 'Choosing a Hospital: Myths and Facts'),
  subtitle: L('구순구개열 2차 교정을 앞둔 분들을 위한 정보형 카드뉴스 · 9-card series', 'Informational card news for people facing secondary cleft lip and palate surgery · 9-card series'),
  cardTitle: L('병원 선택, 오해와 진실 — 카드뉴스 9컷', 'Choosing a Hospital — 9-Card Series'),
  cardMeta: L('카드뉴스 9컷 (정보형)', '9 cards (informational)'),
  tags: [L('CARD NEWS', 'CARD NEWS'), L('건강 정보', 'Health info')],
  tagline: 'EDITORIAL DESIGN   ·   CARD NEWS   ·   HEALTH INFORMATION',
  category: 'card-news',
  year: '—',
  sortYear: 2024.5,
  icon: '▦',
  template: 'case',
  cover: img('hospital-selection/card-01', '병원 선택, 오해와 진실 카드뉴스 1', 'Choosing a Hospital card news 1'),
  summary: L(
    '구순구개열 2차 교정을 앞둔 분들을 위한 정보형 카드뉴스 9컷. 병원 선택에 관한 오해와 진실을 정리했습니다.',
    'A nine-card informational series for people preparing for secondary cleft lip and palate surgery, sorting myths from facts about choosing a hospital.',
  ),
  related: ['welfare-policy', 'design-works'],
  sections: [
    {
      type: 'gallery',
      ratio: '280 / 350',
      cols: 3,
      fit: 'contain',
      items: Array.from({ length: 9 }, (_, i) => ({
        image: img(`hospital-selection/card-${String(i + 1).padStart(2, '0')}`, `카드뉴스 ${i + 1}`, `Card news ${i + 1}`),
      })),
    },
  ],
  tools: ['Adobe Illustrator', 'Canva'],
  needsConfirmation: [
    'No home card, year, concept text or tool list exists for this page in Figma — only the title, subtitle, tag line and 9 cards. Year and tools need confirmation.',
  ],
}
