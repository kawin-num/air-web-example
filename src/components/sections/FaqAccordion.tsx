import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Bluebik ช่วยองค์กรเริ่ม Digital Transformation อย่างไร?',
    answer:
      'เริ่มจากการทำความเข้าใจโจทย์ธุรกิจและเป้าหมายเชิงกลยุทธ์ ก่อนออกแบบ roadmap, solution และ delivery model ที่เหมาะกับองค์กร',
  },
  {
    question: 'บริการครอบคลุมด้านใดบ้าง?',
    answer:
      'ครอบคลุม Management Consulting, Big Data & AI, Digital Excellence & Delivery, Cybersecurity, ERP advisory, Experience Design และ Strategic PMO',
  },
  {
    question: 'เว็บไซต์นี้พร้อมต่อยอดกับระบบจริงไหม?',
    answer:
      'ยังคงแยก UI, services, hooks และ validation ออกจากกัน ทำให้ต่อ API, CMS หรือระบบ lead management จริงได้โดยไม่ต้องรื้อโครงหลัก',
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
