# Scroll Animation System Guide

This project includes a comprehensive scroll-based animation system that provides beautiful, performant animations when elements come into view.

## Features

### 1. **AnimatedReveal Component**
A low-level component that triggers animations when an element becomes visible in the viewport.

**Variants:**
- `default` - Fade in with upward slide (42px)
- `clip` - Fade in with clip-path animation (rounded corners)
- `scale` - Fade in while scaling (0.92 → 1)
- `rotate` - Fade in with rotation (-4deg → 0deg)
- `blur` - Fade in from blurred state
- `slide-left` - Slide in from left (-42px → 0)
- `slide-right` - Slide in from right (42px → 0)
- `stagger` - Staggered animation for children

**Example:**
```tsx
import { AnimatedReveal } from '@/components/common'

export function MyComponent() {
  return (
    <AnimatedReveal variant="scale" delay={100}>
      <div>Content that animates in</div>
    </AnimatedReveal>
  )
}
```

**Props:**
- `variant` - Animation type
- `delay` - Animation delay in milliseconds
- `rootMargin` - IntersectionObserver rootMargin (default: '0px 0px -12% 0px')
- `threshold` - IntersectionObserver threshold (default: 0.16)

### 2. **SectionAnimation Component**
Higher-level component for animating entire sections with different variants.

**Variants:**
- `fade-up` - Section fades in and slides up (default)
- `fade-scale` - Section fades in while scaling
- `fade-left` - Section slides in from left
- `fade-right` - Section slides in from right
- `zoom` - Section zooms in

**Example:**
```tsx
import { SectionAnimation } from '@/components/common'

export function HomePage() {
  return (
    <SectionAnimation variant="fade-up" className="bg-white py-20">
      <h1>Section Content</h1>
    </SectionAnimation>
  )
}
```

### 3. **AnimatedContent Component**
Container for staggered animations of child elements.

**Example:**
```tsx
import { AnimatedContent } from '@/components/common'

export function CardGrid() {
  return (
    <AnimatedContent staggerDelay={80} className="grid gap-4">
      {items.map(item => (
        <Card key={item.id}>{item.title}</Card>
      ))}
    </AnimatedContent>
  )
}
```

**Props:**
- `staggerDelay` - Delay between each child animation (default: 80ms)

### 4. **Custom Hooks**

#### useScrollAnimation
Detects when an element is visible and returns `isVisible` state.

```tsx
import { useScrollAnimation } from '@/hooks'

function MyComponent() {
  const { elementRef, isVisible } = useScrollAnimation({
    rootMargin: '0px',
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <div ref={elementRef}>
      {isVisible && <p>I'm visible!</p>}
    </div>
  )
}
```

#### useParallax
Creates parallax scrolling effect for elements.

```tsx
import { useParallax } from '@/hooks'

function ParallaxSection() {
  const { elementRef, style } = useParallax(0.5) // speed multiplier

  return <div ref={elementRef} style={style}>Content</div>
}
```

#### useScrollProgress
Tracks scroll progress of an element (0 to 1).

```tsx
import { useScrollProgress } from '@/hooks'

function ProgressBar() {
  const { elementRef, progress } = useScrollProgress()

  return (
    <div ref={elementRef}>
      <div style={{ width: `${progress * 100}%` }}>Progress</div>
    </div>
  )
}
```

## CSS Classes

Direct CSS classes available for custom styling:

- `.air-reveal` - Base animation class
- `.air-reveal--{variant}` - Variant-specific animations
- `.air-animated-content` - Container for staggered animations
- `.air-section-animation` - Section animation container
- `.air-parallax` - Parallax effect

## Customization

### Animation Speed
Modify CSS transition durations in `src/index.css`:
```css
.air-reveal {
  transition:
    opacity 900ms cubic-bezier(0.25, 0.74, 0.22, 0.99),
    transform 900ms cubic-bezier(0.25, 0.74, 0.22, 0.99);
}
```

### Easing Functions
Default easing: `cubic-bezier(0.25, 0.74, 0.22, 0.99)` (custom bounce curve)

### Custom Variants
Add new animation variants in `src/index.css`:
```css
.air-reveal--custom {
  opacity: 0;
  transform: /* your transform */;
  transition: /* your transition */;
}

.air-reveal--custom.is-visible {
  opacity: 1;
  transform: /* final state */;
}
```

## Performance Tips

1. **Use `triggerOnce`** - Set to `true` in useScrollAnimation to remove observer after first trigger
2. **Throttle scroll listeners** - Scroll hooks use `passive: true` for better performance
3. **Lazy load images** - Combine with image lazy loading for optimal results
4. **Prefers reduced motion** - System respects `prefers-reduced-motion` media query

## Browser Support

- Chrome/Edge 51+
- Firefox 55+
- Safari 12.1+
- All modern browsers with IntersectionObserver support

## Examples

### Animated Card List
```tsx
import { AnimatedContent } from '@/components/common'

function CardList({ items }) {
  return (
    <AnimatedContent staggerDelay={100} className="grid gap-4">
      {items.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </AnimatedContent>
  )
}
```

### Section with Parallax
```tsx
import { SectionAnimation } from '@/components/common'
import { useParallax } from '@/hooks'

function HeroSection() {
  const { elementRef, style } = useParallax(0.3)

  return (
    <SectionAnimation className="relative overflow-hidden">
      <div ref={elementRef} style={style}>
        <img src="background.jpg" />
      </div>
    </SectionAnimation>
  )
}
```

### Conditional Reveal
```tsx
import { useScrollAnimation } from '@/hooks'

function ConditionalComponent() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <div ref={elementRef}>
      {isVisible && <ExpensiveComponent />}
    </div>
  )
}
```

## Resources

- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [Transform Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
