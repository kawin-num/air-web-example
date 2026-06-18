import { buildingMetrics, infrastructureItems } from '../../data/content'
import { AnimatedReveal } from '../common/AnimatedReveal'

export function InfrastructureSection() {
  return (
    <section className="overflow-hidden bg-bluebik-950 py-20 text-white md:py-28">
      <div className="air-ticker flex w-[200%] gap-8 whitespace-nowrap text-[18vw] font-semibold uppercase leading-none tracking-[-0.1em] text-white/[0.06]">
        <span>Bluebik Transformation</span>
        <span>Bluebik Transformation</span>
      </div>

      <div className="mx-auto grid max-w-[1920px] gap-12 px-4 sm:px-5 md:grid-cols-[0.95fr_1.05fr]">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Integrated capabilities
          </p>
          <h2 className="air-editorial-text mt-8 max-w-5xl font-display font-normal">
            Everything connects before transformation scales
          </h2>
        </AnimatedReveal>

        <div className="grid gap-4">
          {infrastructureItems.map((item, index) => (
            <AnimatedReveal key={item} delay={index * 100}>
              <div className="air-rounded border border-white/15 bg-white/[0.06] p-6">
                <p className="text-xs font-semibold text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-5 text-2xl font-medium uppercase leading-tight tracking-[-0.04em]">
                  {item}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1920px] gap-px bg-white/15 px-4 sm:px-5 md:grid-cols-4">
        {buildingMetrics.map((metric) => (
          <div key={metric.value} className="bg-bluebik-950 py-8">
            <p className="font-display text-6xl font-normal uppercase tracking-[-0.08em]">
              {metric.value}
            </p>
            <p className="mt-4 max-w-xs text-xs font-semibold uppercase leading-5 tracking-wide text-white/45">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
