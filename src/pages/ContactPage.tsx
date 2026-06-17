import { ContactForm } from '../components/sections/ContactForm'
import { SectionHeading } from '../components/sections/SectionHeading'

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Start with an office request"
        description="Form validation and submit behavior stay isolated in a custom hook for testability."
      />
      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  )
}
