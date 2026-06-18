import { Badge } from '../ui/Badge'

export interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  description,
  eyebrow,
  title,
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge tone={tone}>{eyebrow}</Badge>
      <h2
        className={`air-editorial-text mt-6 font-display font-normal ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 text-base font-medium leading-7 sm:text-lg ${
            isDark ? 'text-white/60' : 'text-black/50'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
