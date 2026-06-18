import { Button } from '../ui/Button'
import { AnimatedReveal } from '../common/AnimatedReveal'

const formats = [
  'Management Consulting, Strategy และ Enterprise Transformation',
  'Big Data, Artificial Intelligence และ Digital Excellence & Delivery',
  'Cybersecurity, ERP, Supply Chain และ Strategic PMO',
]

export function FormatSection() {
  return (
    <section className="bg-bluebik-950 px-4 py-20 text-white sm:px-5 md:py-28">
      <div className="mx-auto grid max-w-[1920px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Service portfolio
          </p>
          <h2 className="air-editorial-text mt-8 max-w-5xl font-display font-normal">
            Integrated services for every ambition
          </h2>
        </AnimatedReveal>
        <div className="grid gap-3">
          {formats.map((format, index) => (
            <AnimatedReveal key={format} delay={index * 90}>
              <div className="air-rounded flex items-center justify-between gap-6 border border-white/15 bg-white/8 px-5 py-5">
                <span className="text-xs font-semibold text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-right text-lg font-medium uppercase leading-6 tracking-[-0.02em]">
                  {format}
                </p>
              </div>
            </AnimatedReveal>
          ))}
          <Button className="mt-4 w-fit" variant="secondary">
            ดูบริการทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  )
}
