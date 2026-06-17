import { experienceHighlights } from '../../data/content'
import { Card } from '../ui/Card'

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-[1920px] px-4 py-20 sm:px-5 md:py-28">
      <div className="grid border-t border-black md:grid-cols-3">
        {experienceHighlights.map((item) => (
          <Card
            key={item.label}
            className="rounded-none border-0 border-b border-black/20 bg-transparent px-0 py-8 shadow-none md:border-r md:px-6 md:last:border-r-0"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              {item.label}
            </p>
            <h2 className="mt-8 max-w-md font-display text-3xl font-normal uppercase leading-none tracking-[-0.04em] text-black">
              {item.title}
            </h2>
            <p className="mt-6 max-w-sm text-sm font-medium uppercase leading-6 text-black/50">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
