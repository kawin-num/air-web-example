import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../utils/cn'

export type CardProps = ComponentPropsWithoutRef<'article'>

export function Card({ className, ...props }: CardProps) {
  return (
    <article
      className={cn(
        'air-rounded border border-black/10 bg-white p-6 shadow-xl shadow-black/[0.04]',
        className,
      )}
      {...props}
    />
  )
}
