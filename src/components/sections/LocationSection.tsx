import { locationNodes } from '../../data/content'
import { AnimatedReveal } from '../common/AnimatedReveal'

export function LocationSection() {
  return (
    <section className="bg-white px-4 py-20 text-bluebik-950 sm:px-5 md:py-28">
      <div className="mx-auto grid max-w-[1920px] gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-center">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
            Industries
          </p>
          <h2 className="air-editorial-text mt-8 max-w-4xl font-display font-normal">
            Built for industries moving at digital speed
          </h2>
          <div className="mt-10 grid gap-3">
            {locationNodes.map((node) => (
              <p
                key={node}
                className="border-t border-bluebik-950/15 py-4 text-sm font-semibold uppercase tracking-wide text-bluebik-950/60"
              >
                {node}
              </p>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal
          className="air-animated-lines relative min-h-[38rem] overflow-hidden rounded-[2rem] bg-bluebik-950"
          delay={140}
          variant="clip"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.24),transparent_16rem)]" />
          <div className="absolute left-[12%] top-[18%] h-px w-[78%] rotate-[18deg] bg-white/25" />
          <div className="absolute left-[18%] top-[68%] h-px w-[64%] -rotate-[24deg] bg-white/25" />
          <div className="absolute left-[46%] top-[12%] h-[76%] w-px rotate-[8deg] bg-white/20" />
          {locationNodes.map((node, index) => (
            <div
              key={node}
              className="absolute grid size-12 place-items-center rounded-full border border-white/25 bg-white text-xs font-semibold text-black"
              style={{
                left: `${18 + index * 19}%`,
                top: `${index % 2 === 0 ? 34 : 58}%`,
              }}
            >
              {index + 1}
            </div>
          ))}
          <p className="absolute bottom-6 left-6 right-6 max-w-xl text-3xl font-medium uppercase leading-none tracking-[-0.05em] text-white">
            Industry map for financial services, retail, manufacturing, energy, healthcare
            and public sector transformation.
          </p>
        </AnimatedReveal>
      </div>
    </section>
  )
}
