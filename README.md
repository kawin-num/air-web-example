# air-website-example

Production-ready React + Vite + TypeScript website example สำหรับ Company Profile / Landing Page แนว tech consulting โดยใช้ content และ asset ของ Bluebik สำหรับ hero, services, insights, newsroom, testimonials และ corporate CTA

## Tech stack

- React + Vite + TypeScript
- Tailwind CSS
- Radix UI primitives
- React Router
- zustand
- Vitest + React Testing Library
- MSW
- ESLint + Prettier

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

## Quality commands

```bash
npm run lint
npm run test
npm run test:coverage
npm run build
npm run preview
```

Coverage threshold ถูกตั้งไว้ขั้นต่ำ 80% สำหรับ statements และ functions ใน `vite.config.ts`

## Project structure

```text
src/
  app/          route composition และ lazy loaded pages
  components/   reusable UI, common layout parts, page sections
  data/         static content สำหรับหน้าเว็บตัวอย่าง
  hooks/        business/UI logic ที่แยกจาก page
  layouts/      shared page shell
  mocks/        MSW handlers/server สำหรับ test
  pages/        route-level pages
  services/     API client และ endpoint wrappers
  stores/       zustand state
  test/         shared test setup/helpers
  tests/        unit/component tests
  types/        shared TypeScript types
  utils/        pure utilities
```

Bluebik assets ที่ใช้ในหน้าเว็บถูกเก็บไว้ใน `public/bluebik/` แยกตามประเภท เช่น `design`, `services`, `clients`, `social` และ `favicon`

## Architecture notes

- Page files ทำหน้าที่ประกอบ section เท่านั้น ส่วน loading, validation, submit และ fetch logic ถูกแยกไปที่ hooks/services เพื่อให้ test และ scale ง่าย
- Components แบ่งเป็น `ui`, `common`, และ `sections` เพื่อ reuse ได้ชัดเจนและลด duplicate code
- Route ใช้ `React.lazy` + `Suspense` เพื่อลด initial bundle
- Radix UI ใช้สำหรับ primitive ที่ต้องการ accessibility เช่น Dialog และ Accordion ส่วน styling คุมด้วย Tailwind
- API base URL อ่านจาก `VITE_API_BASE_URL` เพื่อรองรับ environment แยก dev/staging/production
