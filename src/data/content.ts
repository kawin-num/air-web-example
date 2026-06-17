import type { SpaceExperience } from '../types/space'

export const experienceHighlights = [
  {
    label: '01',
    title: 'Class A business environment',
    description:
      'Premium offices, efficient layouts and public areas designed to make daily work feel elevated.',
  },
  {
    label: '02',
    title: 'Panoramic glazing and light',
    description:
      'A calm white interface, monumental typography and visual depth echo the original architectural mood.',
  },
  {
    label: '03',
    title: 'Infrastructure for growth',
    description:
      'Reusable React sections and service boundaries keep the website ready for production expansion.',
  },
]

export const fallbackSpaces: SpaceExperience[] = [
  {
    id: 'lobby-atrium',
    title: 'Lobby Atrium',
    location: 'Bangkok',
    summary: 'โถงต้อนรับความสูงพิเศษที่ออกแบบเพื่อสร้าง first impression',
    capacity: 420,
    accent: 'blue',
  },
  {
    id: 'sky-gallery',
    title: 'Sky Gallery',
    location: 'Singapore',
    summary: 'พื้นที่จัดแสดงแบบ modular สำหรับแบรนด์และงานศิลป์ร่วมสมัย',
    capacity: 180,
    accent: 'pearl',
  },
  {
    id: 'air-studio',
    title: 'Air Studio',
    location: 'Tokyo',
    summary: 'สตูดิโอขนาดกลางสำหรับ workshop, filming และ product reveal',
    capacity: 96,
    accent: 'slate',
  },
]

export const buildingMetrics = [
  { value: '24', label: 'floors of flexible office planning' },
  { value: '8m', label: 'lobby ceiling height with sculptural columns' },
  { value: '360°', label: 'panoramic glazing and skyline orientation' },
  { value: '5', label: 'arrival scenarios for residents and guests' },
]

export const infrastructureItems = [
  'Representative lobby with concierge and guest routing',
  'Business lounges, meeting suites and private event rooms',
  'Smart access, covered parking and separated logistics',
  'Retail, wellness and daily services within walking distance',
]

export const planHighlights = [
  {
    id: 'office',
    label: 'Office core',
    title: 'Open planning grid',
    description:
      'A modular workspace field for focused teams, product groups and executive zones.',
    position: 'left-[29%] top-[31%]',
  },
  {
    id: 'lobby',
    label: 'Atrium lobby',
    title: 'Arrival as a statement',
    description:
      'A double-height entrance experience shaped by light, glass and calm navigation.',
    position: 'left-[52%] top-[56%]',
  },
  {
    id: 'terrace',
    label: 'Sky terrace',
    title: 'Shared premium amenities',
    description:
      'Outdoor pauses, informal meetings and brand events above the business district.',
    position: 'left-[70%] top-[24%]',
  },
]

export const locationNodes = [
  'Airport express route',
  'Metro and business district',
  'Park, retail and hospitality',
  'City center connection',
]
