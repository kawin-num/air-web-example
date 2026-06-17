import { Badge } from '../ui/Badge'

export interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ description, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="air-editorial-text mt-6 font-display font-normal text-black">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base font-medium uppercase leading-7 text-black/50 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
