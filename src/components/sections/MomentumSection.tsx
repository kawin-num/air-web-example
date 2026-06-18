import { AnimatedReveal } from '../common/AnimatedReveal'

export function MomentumSection() {
  return (
    <section id="services" className="bg-white text-bluebik-950">
      <AnimatedReveal
        className="relative h-[72svh] min-h-[34rem] overflow-hidden"
        variant="clip"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#04246d,#ffffff_34%,#06a7ff_35%,#f7fbff_58%,#011642_59%,#d8edff)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.86),transparent_18rem),linear-gradient(180deg,rgba(255,255,255,0),#fff)]" />
        <div className="absolute left-[18%] top-0 h-full w-[1px] bg-bluebik-900/20" />
        <div className="absolute left-[44%] top-0 h-full w-[1px] bg-bluebik-900/20" />
        <div className="absolute right-[21%] top-0 h-full w-[1px] bg-bluebik-900/20" />
      </AnimatedReveal>

      <div className="mx-auto max-w-[1920px] px-4 py-16 sm:px-5 md:py-24">
        <AnimatedReveal className="air-editorial-text grid font-display font-normal md:grid-cols-2">
          <span>What we do</span>
          <span className="md:text-right">for transformation</span>
        </AnimatedReveal>
        <AnimatedReveal
          className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium leading-8 tracking-[-0.01em] text-bluebik-950/65"
          delay={120}
        >
          เสริมศักยภาพให้ธุรกิจก้าวข้ามขีดจำกัด
          ด้วยนวัตกรรมและบริการที่สร้างผลลัพธ์ทางธุรกิจได้จริง
        </AnimatedReveal>
      </div>
    </section>
  )
}
