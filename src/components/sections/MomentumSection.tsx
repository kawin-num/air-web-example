import { AnimatedReveal } from '../common/AnimatedReveal'

export function MomentumSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-bluebik-950 md:py-28">
      <div className="bluebik-marquee pointer-events-none absolute inset-x-0 top-8 flex whitespace-nowrap font-display text-[13vw] font-bold uppercase leading-none tracking-[-0.09em] text-bluebik-950/[0.035]">
        <span>Ambition to Excellence&nbsp;</span>
        <span>Ambition to Excellence&nbsp;</span>
      </div>
      <div className="mx-auto max-w-[1920px] px-4 sm:px-5">
        <AnimatedReveal className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bluebik-700">
            Ambition to Excellence
          </p>
          <h2 className="font-display text-[clamp(2.8rem,7vw,7.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.08em]">
            บลูบิคเป็นที่ปรึกษาด้านกลยุทธ์และการจัดการด้วยนวัตกรรมและเทคโนโลยีระดับโลก
          </h2>
        </AnimatedReveal>
        <AnimatedReveal
          className="ml-auto mt-10 max-w-3xl text-lg font-medium leading-9 text-bluebik-950/65"
          delay={120}
        >
          และผู้ให้บริการด้านดิจิทัลทรานส์ฟอร์เมชันแบบครบวงจร
          เพื่อช่วยองค์กรยกระดับประสิทธิภาพ เพิ่มความคล่องตัว
          และสร้างความได้เปรียบในการแข่งขัน
        </AnimatedReveal>
      </div>
    </section>
  )
}
