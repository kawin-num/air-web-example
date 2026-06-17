import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { OrbitShowcase } from './OrbitShowcase'

export function HeroSection() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-white text-black">
      <OrbitShowcase />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.92)_72%,#fff)]" />

      <p
        aria-hidden="true"
        className="air-wordmark pointer-events-none absolute left-3 right-3 top-[18svh] z-10 select-none text-center font-display font-semibold text-black mix-blend-screen sm:left-5 sm:right-5"
      >
        AIR
      </p>

      <div className="relative z-20 flex min-h-svh flex-col justify-center px-4 py-24 sm:px-5">
        <p className="absolute left-1/2 top-24 -translate-x-1/2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
          Class (A) premium business center
        </p>

        <h1 className="mx-auto max-w-4xl text-center font-display text-[clamp(2.7rem,8vw,7.2rem)] font-normal uppercase leading-[0.95] tracking-[-0.06em]">
          The architecture
          <br />
          of New Success
        </h1>

        <div className="absolute bottom-5 left-4 right-4 flex items-end justify-between gap-4 sm:left-5 sm:right-5">
          <p className="max-w-[13rem] text-xs font-semibold uppercase leading-5 tracking-wide text-black/70 sm:max-w-xs">
            Premium office spaces, panoramic light and business infrastructure.
          </p>
          <Button
            asChild
            aria-label="The momentum to rise higher"
            className="size-12 rounded-full p-0"
            variant="secondary"
          >
            <Link to="#impulse">
              <ArrowDown className="size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
