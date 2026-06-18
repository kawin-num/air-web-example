import { Send } from 'lucide-react'
import { useLeadForm } from '../../hooks/useLeadForm'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

const interestOptions = [
  'Digital Transformation',
  'Big Data & Artificial Intelligence',
  'Cybersecurity & Digital Trust',
  'SAP ERP Advisory & Implementation',
  'Experience Design',
  'Strategic PMO',
]

export function ContactForm() {
  const {
    errors,
    fields,
    handleSubmit,
    isSubmitted,
    isSubmitting,
    submitError,
    updateField,
  } = useLeadForm()

  return (
    <Card className="mx-auto max-w-2xl">
      <form
        className="grid gap-5"
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          void handleSubmit()
        }}
      >
        <div>
          <label className="text-sm font-semibold text-space-950" htmlFor="name">
            ชื่อ
          </label>
          <input
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="mt-2 h-12 w-full rounded-2xl border border-slate-300 bg-white px-4"
            id="name"
            name="name"
            value={fields.name}
            onChange={(event) => updateField('name', event.target.value)}
          />
          {errors.name ? (
            <p className="mt-2 text-sm text-red-700" id="name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-space-950" htmlFor="email">
            อีเมล
          </label>
          <input
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="mt-2 h-12 w-full rounded-2xl border border-slate-300 bg-white px-4"
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
          {errors.email ? (
            <p className="mt-2 text-sm text-red-700" id="email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-space-950" htmlFor="interest">
            ความสนใจ
          </label>
          <select
            className="mt-2 h-12 w-full rounded-2xl border border-slate-300 bg-white px-4"
            id="interest"
            name="interest"
            value={fields.interest}
            onChange={(event) => updateField('interest', event.target.value)}
          >
            {interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-space-950" htmlFor="message">
            รายละเอียด
          </label>
          <textarea
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className="mt-2 min-h-32 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3"
            id="message"
            name="message"
            value={fields.message}
            onChange={(event) => updateField('message', event.target.value)}
          />
          {errors.message ? (
            <p className="mt-2 text-sm text-red-700" id="message-error">
              {errors.message}
            </p>
          ) : null}
        </div>

        {submitError ? (
          <p
            className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
          >
            {submitError}
          </p>
        ) : null}
        {isSubmitted ? (
          <p
            className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
            role="status"
          >
            รับข้อมูลแล้ว ทีม Bluebik จะติดต่อกลับโดยเร็ว
          </p>
        ) : null}

        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อมูล'}
          <Send className="ml-2 size-4" aria-hidden="true" />
        </Button>
      </form>
    </Card>
  )
}
