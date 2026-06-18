import { fallbackSpaces } from '../../data/content'
import { useFeaturedSpaces } from '../../hooks/useFeaturedSpaces'
import { LoadingFallback } from '../common/LoadingFallback'
import { SpaceCard } from './SpaceCard'

export function FeaturedSpaces() {
  const { data, error, isLoading } = useFeaturedSpaces()
  const spaces = data.length > 0 ? data : fallbackSpaces

  if (isLoading) {
    return <LoadingFallback label="กำลังโหลดบริการแนะนำ" />
  }

  return (
    <section className="mx-auto max-w-[1920px] px-4 py-16 sm:px-5">
      {error ? (
        <div
          className="mb-6 rounded-3xl border border-black/10 bg-black/5 px-5 py-4 text-sm font-medium uppercase text-black/70"
          role="status"
        >
          โหลดข้อมูลจาก API ไม่สำเร็จ จึงแสดงบริการสำรองจาก Bluebik homepage
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  )
}
