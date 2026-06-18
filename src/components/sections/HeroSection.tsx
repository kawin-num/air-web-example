import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroStories } from '../../data/content'
import { Button } from '../ui/Button'

export function HeroSection() {
  const [primaryStory, secondaryStory] = heroStories

  return (
    <section className="relative min-h-svh overflow-hidden bg-bluebik-950 text-white">
      <div className="absolute inset-0">
        {heroStories.map((story, index) => (
          <img
            key={story.title}
            alt=""
            className="bluebik-hero-slide absolute inset-0 h-full w-full object-cover"
            src={story.image}
            style={{ animationDelay: `${index * 5}s` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,22,66,0.92),rgba(1,22,66,0.62)_48%,rgba(1,22,66,0.2)),radial-gradient(circle_at_72%_18%,rgba(6,167,255,0.5),transparent_22rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,#011642_82%,#fff_100%)]" />

      <div className="relative z-20 flex min-h-svh flex-col justify-center px-4 py-24 sm:px-5">
        <p className="absolute left-4 top-28 text-xs font-semibold uppercase tracking-[0.28em] text-white/55 sm:left-5">
          TH / EN / VN
        </p>
        <p className="absolute right-4 top-28 hidden origin-right rotate-90 text-xs font-semibold uppercase tracking-[0.28em] text-white/55 md:block">
          Scroll Down
        </p>
        <p className="bluebik-kicker max-w-4xl text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
          {primaryStory.eyebrow}
        </p>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(3.1rem,9vw,8.8rem)] font-semibold uppercase leading-[0.86] tracking-[-0.085em]">
          AI-Led
          <br /> Enterprise
          <br /> Digital Transformation
        </h1>
        <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-white/78 md:text-lg">
          {primaryStory.description}
        </p>
        <Button
          asChild
          className="mt-8 w-fit gap-2 rounded-full px-6"
          variant="secondary"
        >
          <Link to="/work">
            {primaryStory.cta}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>

        <div className="absolute bottom-5 left-4 right-4 grid gap-4 sm:left-5 sm:right-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="grid gap-3 md:grid-cols-3">
            {heroStories.map((story, index) => (
              <article
                key={story.title}
                className="bluebik-card-lift rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
              >
                <p className="text-xs font-semibold text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-4 text-sm font-semibold uppercase leading-5 tracking-wide">
                  {story.title}
                </h2>
                <p className="mt-3 max-h-10 overflow-hidden text-xs leading-5 text-white/58">
                  {index === 1 ? secondaryStory.description : story.description}
                </p>
              </article>
            ))}
          </div>
          <Button
            asChild
            aria-label="ดูบริการของ Bluebik"
            className="size-12 shrink-0 rounded-full p-0"
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
