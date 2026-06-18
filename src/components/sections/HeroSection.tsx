import { useEffect, useState } from 'react'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroStories } from '../../data/content'

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStory = heroStories[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroStories.length)
    }, 7200)

    return () => window.clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? heroStories.length - 1 : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % heroStories.length)
  }

  return (
    <section className="relative min-h-svh overflow-hidden bg-bluebik-950 text-white">
      <div className="absolute inset-0">
        {heroStories.map((story, index) => (
          <video
            key={`${story.video}-${index}`}
            aria-hidden="true"
            autoPlay
            className={`bluebik-video-slide absolute inset-0 h-full w-full object-cover ${
              activeIndex === index ? 'is-active' : ''
            }`}
            loop
            muted
            playsInline
            poster={story.poster}
            preload="metadata"
            src={story.video}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,22,66,0.08),rgba(1,22,66,0.14)),linear-gradient(90deg,rgba(51,0,180,0.36),rgba(1,22,66,0.08)_48%,rgba(255,255,255,0.18))]" />
      <div className="absolute inset-0 bg-bluebik-950/10" />

      <button
        aria-label="Previous hero slide"
        className="bluebik-hero-nav left-6 md:left-12"
        type="button"
        onClick={goToPrevious}
      >
        <ChevronLeft className="size-6" aria-hidden="true" />
      </button>
      <button
        aria-label="Next hero slide"
        className="bluebik-hero-nav right-6 md:right-12"
        type="button"
        onClick={goToNext}
      >
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-4 pb-28 pt-32 text-center sm:px-5">
        <p className="bluebik-kicker text-xs font-semibold uppercase tracking-[0.34em] text-white/70">
          {activeStory.eyebrow}
        </p>
        <h1 className="bluebik-hero-title mt-5 max-w-6xl font-display text-[clamp(3.2rem,7.5vw,7.8rem)] font-bold leading-[0.92] tracking-[-0.07em]">
          {activeStory.title}
        </h1>
        <p className="bluebik-hero-copy mt-5 max-w-5xl text-base font-semibold leading-8 text-white md:text-xl">
          {activeStory.description}
        </p>
      </div>

      <Link
        aria-label="Scroll Down"
        className="bluebik-scroll-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-sm font-medium tracking-wide text-white/80 md:bottom-10"
        to="#services"
      >
        <span>Scroll Down</span>
        <ArrowDown className="size-5" aria-hidden="true" />
      </Link>

      <div className="absolute bottom-7 left-6 z-10 flex gap-2 md:left-12">
        {heroStories.map((story, index) => (
          <button
            key={`${story.title}-${index}`}
            aria-label={`Show hero slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === index ? 'w-10 bg-white' : 'w-4 bg-white/38'
            }`}
            type="button"
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
