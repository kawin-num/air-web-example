import { FeaturedSpaces } from '../components/sections/FeaturedSpaces'
import { SectionHeading } from '../components/sections/SectionHeading'

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40 lg:px-8">
      <SectionHeading
        eyebrow="บริการ"
        title="บริการที่ปรึกษาและเทคโนโลยีเพื่อการเปลี่ยนผ่านองค์กร"
        description="รวมบริการหลักจาก Bluebik ตั้งแต่ strategy, data, AI, digital delivery, cybersecurity ไปจนถึง ERP advisory"
      />
      <FeaturedSpaces />
    </section>
  )
}
