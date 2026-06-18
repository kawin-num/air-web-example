import { ArrowUpRight, BriefcaseBusiness, Sparkles } from 'lucide-react'
import type { SpaceExperience } from '../../types/space'
import { Card } from '../ui/Card'

const accentClasses: Record<SpaceExperience['accent'], string> = {
  blue: 'from-blue-100 via-white to-blue-500',
  pearl: 'from-white via-blue-50 to-sky-100',
  slate: 'from-blue-200 via-bluebik-700 to-bluebik-950',
}

export interface SpaceCardProps {
  space: SpaceExperience
}

export function SpaceCard({ space }: SpaceCardProps) {
  return (
    <Card className="bluebik-card-lift group overflow-hidden border-bluebik-950/10 p-0">
      <div className={`relative h-64 bg-gradient-to-br ${accentClasses[space.accent]}`}>
        <img
          alt=""
          className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-[1.04]"
          src={space.asset}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(4,36,109,0.48))]" />
        <ArrowUpRight
          className="absolute right-5 top-5 size-8 rounded-full bg-white p-1.5 text-bluebik-900 transition group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bluebik-700">
          {space.category}
        </p>
        <h3 className="mt-4 font-display text-3xl font-normal uppercase leading-none tracking-[-0.04em] text-bluebik-950">
          {space.title}
        </h3>
        <p className="mt-5 text-sm font-medium leading-6 text-bluebik-950/58">
          {space.summary}
        </p>
        <dl className="mt-6 grid gap-3 text-sm font-medium uppercase text-bluebik-950/65 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="size-4 text-bluebik-800" aria-hidden="true" />
            <dt className="sr-only">Category</dt>
            <dd>{space.category}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-bluebik-800" aria-hidden="true" />
            <dt className="sr-only">Result</dt>
            <dd>{space.result}</dd>
          </div>
        </dl>
      </div>
    </Card>
  )
}
