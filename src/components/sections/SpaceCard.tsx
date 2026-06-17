import { MapPin, Users } from 'lucide-react'
import { formatCompactNumber } from '../../utils/formatNumber'
import type { SpaceExperience } from '../../types/space'
import { Card } from '../ui/Card'

const accentClasses: Record<SpaceExperience['accent'], string> = {
  blue: 'from-neutral-200 via-white to-neutral-600',
  pearl: 'from-white via-neutral-100 to-neutral-300',
  slate: 'from-neutral-300 via-neutral-600 to-black',
}

export interface SpaceCardProps {
  space: SpaceExperience
}

export function SpaceCard({ space }: SpaceCardProps) {
  return (
    <Card className="group overflow-hidden border-black/10 p-0">
      <div
        className={`h-56 bg-gradient-to-br ${accentClasses[space.accent]} transition duration-500 group-hover:scale-[1.02]`}
        aria-hidden="true"
      />
      <div className="p-6">
        <h3 className="font-display text-3xl font-normal uppercase leading-none tracking-[-0.04em] text-black">
          {space.title}
        </h3>
        <p className="mt-5 text-sm font-medium uppercase leading-6 text-black/50">
          {space.summary}
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium uppercase text-black/60">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-black" aria-hidden="true" />
            <dt className="sr-only">Location</dt>
            <dd>{space.location}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4 text-black" aria-hidden="true" />
            <dt className="sr-only">Capacity</dt>
            <dd>{formatCompactNumber(space.capacity)} guests</dd>
          </div>
        </dl>
      </div>
    </Card>
  )
}
