import { Loader2 } from 'lucide-react'

export interface LoadingFallbackProps {
  label?: string
}

export function LoadingFallback({ label = 'กำลังโหลดข้อมูล' }: LoadingFallbackProps) {
  return (
    <div
      aria-live="polite"
      className="flex min-h-[40vh] items-center justify-center gap-3 text-slate-700"
    >
      <Loader2 className="size-5 animate-spin" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}
