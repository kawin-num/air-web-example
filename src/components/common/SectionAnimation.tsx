import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'

export interface SectionAnimationProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode
  /**
   * Animation variant for the section
   * 'fade-up': Fade in and slide up (default)
   * 'fade-scale': Fade in while scaling
   * 'fade-left': Fade in from left
   * 'fade-right': Fade in from right
   * 'zoom': Zoom in effect
   */
  variant?: 'fade-up' | 'fade-scale' | 'fade-left' | 'fade-right' | 'zoom'
  /**
   * Delay before animation starts (in ms)
   */
  delay?: number
  /**
   * How much of the element should be visible to trigger animation (0-1)
   */
  threshold?: number
  /**
   * Margin around viewport to trigger animation (CSS-like string)
   */
  rootMargin?: string
}

type SectionStyle = CSSProperties & {
  '--section-delay': string
}

export function SectionAnimation({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.16,
  rootMargin = '0px 0px -12% 0px',
  style,
  ...props
}: SectionAnimationProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current

    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  const animationClassName = cn(
    'air-section-animation',
    `air-section-animation--${variant}`,
    isVisible && 'is-visible',
    className,
  )

  const animationStyle: SectionStyle = {
    ...style,
    '--section-delay': `${delay}ms`,
  }

  return (
    <section ref={sectionRef} className={animationClassName} style={animationStyle} {...props}>
      {children}
    </section>
  )
}

/**
 * Wrapper component for animated content within a section
 * Applies staggered animations to children
 */
export interface AnimatedContentProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
  /**
   * Delay between each child animation (in ms)
   */
  staggerDelay?: number
}

export function AnimatedContent({
  children,
  className,
  staggerDelay = 80,
  ...props
}: AnimatedContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = contentRef.current

    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const contentClassName = cn('air-animated-content', isVisible && 'is-visible', className)

  return (
    <div
      ref={contentRef}
      className={contentClassName}
      style={{ '--stagger-delay': `${staggerDelay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}
