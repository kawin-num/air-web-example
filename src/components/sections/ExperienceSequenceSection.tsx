import { AnimatedReveal } from '../common/AnimatedReveal'

export function ExperienceSequenceSection() {
  return (
    <section className="bg-white px-4 py-20 text-black sm:px-5 md:py-28">
      <div className="mx-auto grid max-w-[1920px] gap-10 md:grid-cols-[0.88fr_1.12fr] md:items-center">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
            Experience
          </p>
          <h2 className="air-editorial-text mt-8 max-w-5xl font-display font-normal">
            Efficient layouts. Impressive views. Quiet confidence.
          </h2>
          <p className="mt-8 max-w-xl text-base font-medium uppercase leading-7 text-black/55">
            Each sequence is designed like a premium arrival journey: exterior rhythm,
            lobby volume, vertical movement, focused office floors and soft shared
            amenities.
          </p>
        </AnimatedReveal>

        <AnimatedReveal
          className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-neutral-100"
          delay={160}
          variant="clip"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#111_0_18%,#d8d8d8_18%_30%,#fff_30%_47%,#777_47%_55%,#f4f4f4_55%_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.86),transparent_18rem),linear-gradient(180deg,transparent,#fff_92%)]" />
          <div className="air-float absolute left-[10%] top-[16%] h-64 w-36 rounded-t-full bg-white/45 backdrop-blur-sm" />
          <div className="absolute bottom-8 right-8 max-w-sm rounded-[1.5rem] border border-white/60 bg-white/72 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-black/45">
              Interior continuation
            </p>
            <p className="mt-4 text-2xl font-medium uppercase leading-none tracking-[-0.04em]">
              Glass wave forms continue the architecture inside.
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
