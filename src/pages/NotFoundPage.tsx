import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-space-950">
        ไม่พบหน้าที่ต้องการ
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        ลิงก์นี้อาจถูกย้ายหรือยังไม่ได้สร้างในตัวอย่างเว็บไซต์
      </p>
      <Button asChild className="mt-8">
        <Link to="/">กลับหน้าแรก</Link>
      </Button>
    </section>
  )
}
