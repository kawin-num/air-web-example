import { useEffect, useRef, useState } from 'react'

export interface UseScrollAnimationOptions {
  rootMargin?: string
  threshold?: number | number[]
  triggerOnce?: boolean
}

/**
 * Hook for detecting when an element becomes visible in viewport
 * and triggering scroll-based animations
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    rootMargin = '0px 0px -12% 0px',
    threshold = 0.16,
    triggerOnce = true,
  } = options

  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin, threshold, triggerOnce])

  return { elementRef, isVisible }
}

/**
 * Hook for parallax scrolling effect
 * Adjusts element position based on scroll distance
 */
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const elementRect = elementRef.current.getBoundingClientRect()
      const scrolled = window.innerHeight - elementRect.top

      setOffset(scrolled * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return {
    elementRef,
    style: {
      transform: `translate3d(0, ${offset}px, 0)`,
    },
  }
}

/**
 * Hook for scroll progress tracking
 * Returns value from 0 to 1 based on element visibility
 */
export function useScrollProgress() {
  const elementRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const { top, height } = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate progress from 0 to 1
      const totalDistance = windowHeight + height
      const currentDistance = windowHeight - top

      const newProgress = Math.max(0, Math.min(1, currentDistance / totalDistance))
      setProgress(newProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { elementRef, progress }
}
