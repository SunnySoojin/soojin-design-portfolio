import type { Project } from '../types'
import { L, P, TOOLS_TITLE, img } from './_helpers'

export const coupleCounselingChannelArt: Project = {
  id: 'P11',
  slug: 'couple-counseling-channel-art',
  figmaNode: '352:2',
  figmaCard: '354:11',
  title: L('국제커플 상담 채널 — 채널 아트', 'International Couple Counseling — Channel Art'),
  subtitle: L('International Couple Counseling · 배너 · 썸네일 템플릿 · 프로필', 'International Couple Counseling · banner · thumbnail template · profile'),
  cardTitle: L('국제커플 상담 채널 — 채널 아트', 'International Couple Counseling — Channel Art'),
  cardMeta: L('2026 (배너 · 썸네일 3편 · 프로필)', '2026 (banner · 3 thumbnails · profile)'),
  tags: [L('채널 아트', 'Channel art'), L('유튜브', 'YouTube')],
  tagline: 'CHANNEL ART   ·   YOUTUBE   ·   THUMBNAIL SYSTEM   ·   BRAND COLOR',
  category: 'channel-art',
  year: '2026',
  sortYear: 2026.085,
  icon: '✦',
  template: 'case',
  cover: img('couple-counseling-channel-art/cover', 'International Couple Counseling 채널 배너', 'International Couple Counseling channel banner'),
  summary: L(
    '유튜브 배너의 3.66:1 세이프 영역에 맞춰 원본 키 아트의 구도를 90도 돌리고, 색은 원본에서 뽑아 Brand 변수 8색으로 묶은 채널 아트 세트 5종.',
    'A five-piece channel-art set: the key art’s composition rotated 90° to fit YouTube’s 3.66:1 safe area, with eight brand colours extracted from the original artwork.',
  ),
  sections: [
    {
      type: 'gallery',
      title: L('결과물 5종', '5 deliverables'),
      ratio: '900 / 506',
      cols: 1,
      items: [{ image: img('couple-counseling-channel-art/banner', '채널 배너 2560×1440', 'Channel banner 2560×1440'), caption: L('01 채널 배너 2560×1440 (모바일 세이프 1546×423)', '01 Channel banner 2560×1440 (mobile safe area 1546×423)') }],
    },
    {
      type: 'gallery',
      ratio: '289 / 163',
      cols: 3,
      items: [
        { image: img('couple-counseling-channel-art/ep01', 'EP.01 썸네일', 'EP.01 thumbnail'), caption: L('02 EP.01 썸네일', '02 EP.01 thumbnail') },
        { image: img('couple-counseling-channel-art/ep02', 'EP.02 썸네일', 'EP.02 thumbnail'), caption: L('03 EP.02', '03 EP.02') },
        { image: img('couple-counseling-channel-art/ep03', 'EP.03 썸네일', 'EP.03 thumbnail'), caption: L('04 EP.03', '04 EP.03') },
      ],
    },
    {
      type: 'gallery',
      ratio: '1 / 1',
      cols: 4,
      items: [{ image: img('couple-counseling-channel-art/profile', '프로필 800×800', 'Profile 800×800'), caption: L('05 프로필 800×800', '05 Profile 800×800') }],
    },
    {
      type: 'kv',
      title: L('유튜브 규격 · SPECS', 'YouTube specs'),
      rows: [
        { k: L('배너', 'Banner'), v: L('2560×1440 업로드 · 실제 표시는 가운데 1546×423 (3.66:1)', 'Uploaded at 2560×1440 · only the central 1546×423 (3.66:1) is always visible') },
        { k: L('썸네일', 'Thumbnail'), v: L('1280×720 · 우하단 250×90은 재생시간 표시가 덮어 비워 둠', '1280×720 · bottom-right 250×90 left empty for the duration badge') },
        { k: L('프로필', 'Profile'), v: L('800×800 · 실제로는 지름 98px 원형으로 잘려 보임', '800×800 · displayed as a 98 px circle') },
        { k: L('폰트', 'Fonts'), v: L('Baloo 2 ExtraBold (제목) · Satisfy (이름) · Nunito (라벨)', 'Baloo 2 ExtraBold (title) · Satisfy (names) · Nunito (labels)') },
        { k: L('색', 'Colour'), v: L('원본 아트에서 추출한 Brand 변수 8색 (paper·coral·maple·ink 등)', 'Eight brand variables extracted from the original art (paper, coral, maple, ink …)') },
      ],
    },
    {
      type: 'work',
      num: '01',
      title: L('문제 — 3.66:1 띠에는 원본 세로 구도를 못 쓴다', 'Problem — the original portrait composition does not fit a 3.66:1 strip'),
      sub: L('2560×1440으로 올리지만 모든 기기에 공통으로 보이는 건 가운데 1546×423뿐', 'Uploaded at 2560×1440, but only the central 1546×423 shows on every device'),
      paragraphs: P(
        [
          '원본 키 아트는 제목이 위, 두 사람이 아래인 세로 구도입니다. 하지만 유튜브 배너에서 기기와 무관하게 항상 보이는 영역은 가운데 1546×423 — 3.66:1의 납작한 띠라, 세로 구도를 그대로 얹으면 제목이나 얼굴 중 하나가 잘려 나갑니다.',
          '그래서 구도를 90도 돌렸습니다. 얼굴 둘을 양옆으로 보내고 제목과 방송 요일을 가운데에 세로로 쌓아, 띠 안에서 읽는 순서가 얼굴 → 제목 → 얼굴로 완결되게 했습니다. 바깥 여백에는 단풍 패턴을 깔아 데스크톱·TV에서만 브랜드 색이 넓게 보이도록 했습니다.',
        ],
        [
          'The original key art is a portrait composition — title on top, the two people below. But the part of a YouTube banner that is visible on every device is the central 1546×423, a flat 3.66:1 strip; dropping the portrait layout in would crop either the title or a face.',
          'So the composition was rotated 90°. The two faces moved to the sides, and the title and broadcast day were stacked vertically in the centre, so the reading order inside the strip resolves as face → title → face. A maple-leaf pattern fills the outer margins so the brand colour spreads wide only on desktop and TV.',
        ],
      ),
    },
    {
      type: 'work',
      num: '02',
      title: L('해법 — 박힌 글자를 피해 자르고, 색은 원본에서 뽑는다', 'Solution — crop around the baked-in lettering, pull colours from the original'),
      sub: L('아트에 제목·이름·국기가 이미 인쇄돼 있어 크롭할 때마다 따라 들어왔다', 'Title, names and flags were printed into the art and crept into every crop'),
      paragraphs: P(
        [
          '얼굴만 쓰려고 크롭하면 원본에 인쇄된 제목·이름 글자가 함께 걸려 들어옵니다. Figma의 CROP은 크롭 영역 비율이 프레임 비율과 다르면 영역을 넓혀서 채우기 때문에, 프레임 크기를 크롭 비율에 맞춰야 의도한 만큼만 나옵니다.',
          '색은 새로 고르지 않고 원본 아트에서 직접 뽑아 Brand 변수 컬렉션으로 묶었습니다. 썸네일은 템플릿 한 장을 복제해 제목과 EP 번호만 바꾸는 구조로 만들어, 에피소드가 늘어도 배너·프로필과 같은 색·같은 폰트를 유지하게 했습니다.',
        ],
        [
          'Cropping to just the faces drags in the title and name lettering printed on the original. Because Figma’s CROP expands the area to fill when the crop ratio differs from the frame ratio, the frame has to match the crop ratio to get exactly the intended region.',
          'Rather than choosing new colours, they were sampled directly from the original art and grouped into a Brand variable collection. Thumbnails are a single template duplicated with only the title and episode number changed, so new episodes keep the same colours and fonts as the banner and profile.',
        ],
      ),
    },
    {
      type: 'stats',
      items: [
        { value: L('5종', '5'), label: L('채널 아트 세트', 'Channel-art set') },
        { value: L('1546×423', '1546×423'), label: L('모바일 세이프 영역', 'Mobile safe area') },
        { value: L('8색', '8 colours'), label: L('Brand 변수', 'Brand variables') },
        { value: L('1템플릿', '1 template'), label: L('썸네일 재사용 구조', 'Reusable thumbnail') },
      ],
    },
    {
      type: 'kv',
      title: TOOLS_TITLE,
      rows: [
        { k: L('채널 아트', 'Channel art'), v: L('Figma — Brand 변수 컬렉션 · 프레임별 PNG 내보내기 설정', 'Figma — Brand variable collection · per-frame PNG export settings') },
        { k: L('타이포', 'Typography'), v: L('Baloo 2 ExtraBold · Satisfy · Nunito', 'Baloo 2 ExtraBold · Satisfy · Nunito') },
        { k: L('소스 아트', 'Source art'), v: L('일러스트 키 아트 1장에서 얼굴·단풍 패턴을 크롭해 재사용', 'Faces and maple pattern cropped and reused from one illustrated key art') },
      ],
    },
  ],
  tools: ['Figma', 'Baloo 2', 'Satisfy', 'Nunito'],
}
