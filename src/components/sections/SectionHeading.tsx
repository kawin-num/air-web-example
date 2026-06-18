import { Badge } from '../ui/Badge'

export interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
  fullWidth?: boolean
}

export function SectionHeading({
  description,
  eyebrow,
  title,
  tone = 'light',
  fullWidth = false,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className={`mx-auto max-w-3xl text-center ${fullWidth ? 'w-full' : ''}`}>
      <Badge tone={tone}>{eyebrow}</Badge>
      <h2
        className={`mt-6 font-display text-[clamp(1.8rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-tighter ${
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
