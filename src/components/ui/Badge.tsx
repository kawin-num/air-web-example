import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../utils/cn'

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  tone?: 'light' | 'dark'
}

export function Badge({ className, tone = 'light', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]',
        tone === 'light'
          ? 'border border-black/15 bg-white/80 text-black'
          : 'border border-white/20 bg-white/10 text-white',
        className,
      )}
      {...props}
    />
  )
}
