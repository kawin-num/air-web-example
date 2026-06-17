import { useState } from 'react'
import { submitLead } from '../services/contactService'
import { hasMinimumLength, isValidEmail } from '../utils/validation'
import type { LeadRequest } from '../types/space'

export type LeadFormFields = LeadRequest

export type LeadFormErrors = Partial<Record<keyof LeadFormFields, string>>

const initialFields: LeadFormFields = {
  name: '',
  email: '',
  interest: 'Brand experience',
  message: '',
}

export function validateLeadForm(fields: LeadFormFields): LeadFormErrors {
  const errors: LeadFormErrors = {}

  if (!hasMinimumLength(fields.name, 2)) {
    errors.name = 'กรุณาระบุชื่ออย่างน้อย 2 ตัวอักษร'
  }

  if (!isValidEmail(fields.email)) {
    errors.email = 'กรุณาระบุอีเมลให้ถูกต้อง'
  }

  if (!hasMinimumLength(fields.message, 12)) {
    errors.message = 'กรุณาเล่าความต้องการอย่างน้อย 12 ตัวอักษร'
  }

  return errors
}

export function useLeadForm() {
  const [fields, setFields] = useState<LeadFormFields>(initialFields)
  const [errors, setErrors] = useState<LeadFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function updateField<TField extends keyof LeadFormFields>(
    field: TField,
    value: LeadFormFields[TField],
  ) {
    setFields((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitError(null)
  }

  async function handleSubmit() {
    const nextErrors = validateLeadForm(fields)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return false
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await submitLead(fields)
      setIsSubmitted(true)
      setFields(initialFields)
      return true
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง'

      setSubmitError(message)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    errors,
    fields,
    handleSubmit,
    isSubmitted,
    isSubmitting,
    submitError,
    updateField,
  }
}
