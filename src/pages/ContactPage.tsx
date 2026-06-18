import { ContactForm } from '../components/sections/ContactForm'
import { SectionHeading } from '../components/sections/SectionHeading'

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="LET'S CONNECT & TRANSFORM TOGETHER"
        description="เราพร้อมเป็นพาร์ตเนอร์ในการขับเคลื่อนธุรกิจของคุณ ติดต่อเราเพื่อค้นหาโซลูชันที่เหมาะกับองค์กร"
      />
      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  )
}
