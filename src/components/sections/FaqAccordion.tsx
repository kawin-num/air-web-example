import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'โครงนี้ต่อ API จริงได้อย่างไร?',
    answer:
      'service layer อ่าน VITE_API_BASE_URL จาก environment variable และแยก endpoint ออกจาก UI ทำให้เปลี่ยน backend ได้โดยไม่กระทบ component',
  },
  {
    question: 'รองรับ mobile/tablet อย่างไร?',
    answer:
      'ใช้ responsive utility ของ Tailwind, mobile dialog navigation และ grid ที่ปรับจาก 1 เป็น 2-3 columns ตาม breakpoint',
  },
  {
    question: 'ทำไมเลือก Radix UI?',
    answer:
      'Radix ให้ primitive ที่ accessibility ดีตั้งแต่ต้น เช่น Dialog และ Accordion แล้วคุม visual design ด้วย Tailwind ได้เต็มที่',
  },
]

export function FaqAccordion() {
  return (
    <Accordion.Root className="mx-auto max-w-3xl" collapsible type="single">
      {faqs.map((faq) => (
        <Accordion.Item
          key={faq.question}
          className="border-b border-slate-200"
          value={faq.question}
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold text-space-950">
              {faq.question}
              <ChevronDown
                className="size-5 shrink-0 transition group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden pb-5 leading-7 text-slate-600">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
