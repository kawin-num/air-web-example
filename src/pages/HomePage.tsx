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
import { clientVoices, insights, newsroom } from '../data/content'

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
          eyebrow="WHAT WE DO"
          title="เสริมศักยภาพให้ธุรกิจก้าวข้ามขีดจำกัด"
          description="บริการที่ปรึกษาด้านกลยุทธ์ ข้อมูล AI ดิจิทัลทรานส์ฟอร์เมชัน ERP และ cybersecurity จาก Bluebik"
        />
        <FeaturedSpaces />
      </section>
      <section className="bg-white px-4 py-20 text-bluebik-950 sm:px-5 md:py-28">
        <SectionHeading
          eyebrow="Insights"
          title="ตามทันทุกเทรนด์ด้านกลยุทธ์ นวัตกรรมและเทคโนโลยี"
          description="บทความล่าสุดจาก Bluebik homepage สำหรับผู้นำองค์กรที่ต้องการเปลี่ยน insight ให้เป็น action"
        />
        <div className="mx-auto mt-12 grid max-w-[1920px] gap-4 md:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="air-rounded border border-bluebik-950/10 bg-blue-50/70 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bluebik-700">
                {item.category}
              </p>
              <h3 className="mt-8 font-display text-3xl font-normal uppercase leading-none tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-6 text-sm font-semibold text-bluebik-950/45">
                {item.date}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-bluebik-950 px-4 py-20 text-white sm:px-5 md:py-28">
        <SectionHeading
          eyebrow="Newsroom"
          title="ติดตามข่าวและกิจกรรมล่าสุดของเรา"
          description="ข่าวธุรกิจและความเคลื่อนไหวล่าสุดจาก Bluebik"
          tone="dark"
        />
        <div className="mx-auto mt-12 grid max-w-[1920px] gap-px bg-white/15 md:grid-cols-3">
          {newsroom.map((item) => (
            <article key={item.title} className="min-h-72 bg-bluebik-950 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
                {item.date}
              </p>
              <h3 className="mt-14 font-display text-3xl font-normal uppercase leading-tight tracking-[-0.05em]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white px-4 py-20 text-bluebik-950 sm:px-5 md:py-28">
        <SectionHeading
          eyebrow="Client voices"
          title="ความประทับใจจากลูกค้า"
          description="เสียงจากลูกค้าที่สะท้อน commitment และผลลัพธ์จากการทำงานร่วมกับ Bluebik"
        />
        <div className="mx-auto mt-12 grid max-w-[1920px] gap-5 md:grid-cols-3">
          {clientVoices.map((voice) => (
            <article
              key={voice.name}
              className="air-rounded overflow-hidden border border-bluebik-950/10 bg-white shadow-xl shadow-blue-950/5"
            >
              <img alt="" className="h-64 w-full object-cover" src={voice.image} />
              <div className="p-6">
                <p className="text-sm leading-7 text-bluebik-950/70">
                  &ldquo;{voice.quote}&rdquo;
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em]">
                  {voice.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-bluebik-700">
                  {voice.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <AcquisitionSection />
      <section className="px-4 py-20 sm:px-5 md:py-28">
        <SectionHeading
          eyebrow="FAQ"
          title="โครงสร้างเว็บไซต์พร้อมต่อยอด"
          description="Components, services และ hooks ยังแยกชั้นเพื่อให้เว็บบริษัทนี้พร้อมต่อยอดกับ API และ CMS จริง"
        />
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </section>
    </>
  )
}
