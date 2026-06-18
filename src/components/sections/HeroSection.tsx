import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroStories } from '../../data/content'
import { Button } from '../ui/Button'
import { OrbitShowcase } from './OrbitShowcase'

export function HeroSection() {
  const [primaryStory, secondaryStory] = heroStories

  return (
    <section className="relative min-h-svh overflow-hidden bg-white text-bluebik-950">
      <OrbitShowcase />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.9)_70%,#fff)]" />

      <p
        aria-hidden="true"
        className="air-wordmark pointer-events-none absolute left-3 right-3 top-[17svh] z-10 select-none text-center font-display font-semibold text-bluebik-900/10 mix-blend-multiply sm:left-5 sm:right-5"
      >
        BLUEBIK
      </p>

      <div className="relative z-20 flex min-h-svh flex-col justify-center px-4 py-24 sm:px-5">
        <p className="absolute left-1/2 top-24 w-max max-w-[80vw] -translate-x-1/2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-bluebik-700">
          {primaryStory.eyebrow}
        </p>

        <h1 className="mx-auto max-w-4xl text-center font-display text-[clamp(2.7rem,8vw,7.2rem)] font-normal uppercase leading-[0.95] tracking-[-0.06em]">
          Ambition
          <br />
          to Excellence
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium leading-8 text-bluebik-950/70 md:text-lg">
          {primaryStory.description}
        </p>

        <div className="absolute bottom-5 left-4 right-4 flex items-end justify-between gap-4 sm:left-5 sm:right-5">
          <p className="max-w-[14rem] text-xs font-semibold uppercase leading-5 tracking-wide text-bluebik-900/70 sm:max-w-sm">
            {secondaryStory.title}: {secondaryStory.description}
          </p>
          <Button
            asChild
            aria-label="ดูบริการของ Bluebik"
            className="size-12 rounded-full p-0"
            variant="secondary"
          >
            <Link to="#services">
              <ArrowDown className="size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
