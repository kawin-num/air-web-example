import { FeaturedSpaces } from '../components/sections/FeaturedSpaces'
import { SectionHeading } from '../components/sections/SectionHeading'

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40 lg:px-8">
      <SectionHeading
        eyebrow="Offices"
        title="Choose the format that matches your company"
        description="Lazy loaded office route with responsive gallery and API-driven content."
      />
      <FeaturedSpaces />
    </section>
  )
}
