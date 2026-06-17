import { AcquisitionSection } from '../components/sections/AcquisitionSection'
import { ExperienceSequenceSection } from '../components/sections/ExperienceSequenceSection'
import { FaqAccordion } from '../components/sections/FaqAccordion'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { FeaturedSpaces } from '../components/sections/FeaturedSpaces'
import { FormatSection } from '../components/sections/FormatSection'
import { HeroSection } from '../components/sections/HeroSection'
import { InfrastructureSection } from '../components/sections/InfrastructureSection'
import { LocationSection } from '../components/sections/LocationSection'
import { MomentumSection } from '../components/sections/MomentumSection'
import { PlanExplorerSection } from '../components/sections/PlanExplorerSection'
import { SectionHeading } from '../components/sections/SectionHeading'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MomentumSection />
      <ExperienceSequenceSection />
      <FeatureGrid />
      <FormatSection />
      <PlanExplorerSection />
      <InfrastructureSection />
      <LocationSection />
      <section className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Offices"
          title="Efficient layouts and premium infrastructure"
          description="The section keeps mock API loading and fallback behavior, but now follows a cleaner editorial direction."
        />
        <FeaturedSpaces />
      </section>
      <AcquisitionSection />
      <section className="px-4 py-20 sm:px-5 md:py-28">
        <SectionHeading
          eyebrow="Architecture"
          title="Production structure beneath the visual system"
          description="Components, services and hooks remain separated so the more editorial UI can still scale."
        />
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </section>
    </>
  )
}
