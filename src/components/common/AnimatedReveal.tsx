import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'

export interface AnimatedRevealProps extends ComponentPropsWithoutRef<'div'> {
  delay?: number
  variant?: 'default' | 'clip'
}

type RevealStyle = CSSProperties & {
  '--air-reveal-delay': string
}

export function AnimatedReveal({
  className,
  delay = 0,
  style,
  variant = 'default',
  ...props
}: AnimatedRevealProps) {
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
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const revealClassName = cn(
    'air-reveal',
    variant === 'clip' && 'air-reveal--clip',
    isVisible && 'is-visible',
    className,
  )

  const revealStyle: RevealStyle = {
    ...style,
    '--air-reveal-delay': `${delay}ms`,
  }

  return (
    <div ref={elementRef} className={revealClassName} style={revealStyle} {...props} />
  )
}
