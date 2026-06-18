import { useState } from 'react'
import { planHighlights } from '../../data/content'
import { AnimatedReveal } from '../common/AnimatedReveal'

export function PlanExplorerSection() {
  const [activeId, setActiveId] = useState(planHighlights[0].id)
  const activeHighlight =
    planHighlights.find((highlight) => highlight.id === activeId) ?? planHighlights[0]

  return (
    <section className="bg-white px-4 py-20 text-bluebik-950 sm:px-5 md:py-28">
      <div className="mx-auto max-w-[1920px]">
        <AnimatedReveal className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
              Transformation layers
            </p>
            <h2 className="air-editorial-text mt-8 max-w-5xl font-display font-normal">
              Choose the layer that unlocks enterprise value
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium leading-7 text-bluebik-950/60 md:ml-auto">
            เลือกมุมมองการเปลี่ยนผ่านจาก strategy, data & AI ไปจนถึง delivery
            เพื่ออธิบายว่า Bluebik เชื่อม business ambition เข้ากับ technology execution
            อย่างไร
          </p>
        </AnimatedReveal>

        <AnimatedReveal
          className="mt-12 grid overflow-hidden rounded-[2rem] border border-bluebik-950/10 md:grid-cols-[1.2fr_0.8fr]"
          delay={120}
        >
          <div className="relative min-h-[34rem] bg-blue-50">
            <div className="absolute inset-8 rounded-[2rem] border border-bluebik-900/20 bg-white" />
            <div className="absolute left-[18%] top-[18%] h-[62%] w-[58%] rounded-[1.5rem] border border-bluebik-900/25 bg-[linear-gradient(90deg,transparent_0_23%,rgba(4,36,109,0.08)_23%_24%,transparent_24%_51%,rgba(4,36,109,0.08)_51%_52%,transparent_52%)]" />
            <div className="absolute bottom-[16%] right-[16%] h-[38%] w-[28%] rounded-[1.5rem] border border-bluebik-900/25 bg-bluebik-900/5" />
            {planHighlights.map((highlight) => (
              <button
                key={highlight.id}
                type="button"
                className={`air-pulse-marker absolute grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-xs font-semibold uppercase transition ${highlight.position} ${
                  activeId === highlight.id
                    ? 'border-bluebik-800 bg-bluebik-800 text-white'
                    : 'border-bluebik-900/25 bg-white text-bluebik-950 hover:border-bluebik-800'
                }`}
                onClick={() => setActiveId(highlight.id)}
              >
                {highlight.label.slice(0, 1)}
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-between bg-bluebik-950 p-6 text-white md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                {activeHighlight.label}
              </p>
              <h3 className="mt-6 font-display text-5xl font-normal uppercase leading-none tracking-[-0.06em]">
                {activeHighlight.title}
              </h3>
              <p className="mt-6 text-sm font-medium uppercase leading-6 text-white/55">
                {activeHighlight.description}
              </p>
            </div>
            <div className="mt-10 grid gap-3">
              {planHighlights.map((highlight) => (
                <button
                  key={highlight.id}
                  type="button"
                  className={`rounded-full border px-4 py-3 text-left text-sm font-semibold uppercase transition ${
                    activeId === highlight.id
                      ? 'border-white bg-white text-black'
                      : 'border-white/20 text-white/60 hover:border-white hover:text-white'
                  }`}
                  onClick={() => setActiveId(highlight.id)}
                >
                  {highlight.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
