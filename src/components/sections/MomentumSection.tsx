import { AnimatedReveal } from '../common/AnimatedReveal'

export function MomentumSection() {
  return (
    <section id="impulse" className="bg-white text-black">
      <AnimatedReveal
        className="relative h-[72svh] min-h-[34rem] overflow-hidden"
        variant="clip"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#d8d8d8,#ffffff_34%,#7c7c7c_35%,#f7f7f7_58%,#111_59%,#dedede)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.8),transparent_18rem),linear-gradient(180deg,rgba(255,255,255,0),#fff)]" />
        <div className="absolute left-[18%] top-0 h-full w-[1px] bg-black/20" />
        <div className="absolute left-[44%] top-0 h-full w-[1px] bg-black/20" />
        <div className="absolute right-[21%] top-0 h-full w-[1px] bg-black/20" />
      </AnimatedReveal>

      <div className="mx-auto max-w-[1920px] px-4 py-16 sm:px-5 md:py-24">
        <AnimatedReveal className="air-editorial-text grid font-display font-normal md:grid-cols-2">
          <span>The momentum</span>
          <span className="md:text-right">to rise higher</span>
        </AnimatedReveal>
        <AnimatedReveal
          className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium uppercase leading-7 tracking-[-0.01em] text-black/60"
          delay={120}
        >
          AIR is a new generation of offices that brings a new level of premium quality
          and style to Class A business real estate.
        </AnimatedReveal>
      </div>
    </section>
  )
}
