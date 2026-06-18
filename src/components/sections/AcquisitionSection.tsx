import { Link } from 'react-router-dom'
import { AnimatedReveal } from '../common/AnimatedReveal'
import { Button } from '../ui/Button'

const steps = [
  'แชร์โจทย์ธุรกิจและเป้าหมายการเปลี่ยนผ่าน',
  'วิเคราะห์ opportunity ด้วยทีม strategy, data และ technology',
  'ออกแบบ roadmap พร้อม solution ที่เหมาะกับองค์กร',
  'เดินหน้า delivery และวัดผลลัพธ์ร่วมกันอย่างต่อเนื่อง',
]

export function AcquisitionSection() {
  return (
    <section className="bg-blue-50 px-4 py-20 text-bluebik-950 sm:px-5 md:py-28">
      <div className="mx-auto max-w-[1920px]">
        <AnimatedReveal className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 className="air-editorial-text max-w-5xl font-display font-normal">
            Let&apos;s connect & transform together
          </h2>
          <p className="max-w-xl text-base font-medium leading-7 text-bluebik-950/60 md:ml-auto">
            เราพร้อมเป็นพาร์ตเนอร์ในการขับเคลื่อนธุรกิจของคุณ
            ติดต่อเราเพื่อค้นหาโซลูชันที่เหมาะกับองค์กร
          </p>
        </AnimatedReveal>

        <div className="mt-12 grid gap-px bg-bluebik-950/15 md:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedReveal key={step} delay={index * 90}>
              <div className="min-h-64 bg-blue-50 p-6">
                <p className="text-xs font-semibold text-bluebik-950/35">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-16 text-2xl font-medium uppercase leading-tight tracking-[-0.04em]">
                  {step}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">ติดต่อเรา</Link>
          </Button>
        </AnimatedReveal>
      </div>
    </section>
  )
}
