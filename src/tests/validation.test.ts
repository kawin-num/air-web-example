import { describe, expect, it } from 'vitest'
import { formatCompactNumber } from '../utils/formatNumber'
import { hasMinimumLength, isValidEmail } from '../utils/validation'

describe('validation utilities', () => {
  it('validates email and minimum length edge cases', () => {
    expect(isValidEmail('team@example.com')).toBe(true)
    expect(isValidEmail('not-an-email')).toBe(false)
    expect(hasMinimumLength('  ok  ', 2)).toBe(true)
    expect(hasMinimumLength('x', 2)).toBe(false)
  })

  it('formats compact numbers for capacity labels', () => {
    expect(formatCompactNumber(420, 'en-US')).toBe('420')
    expect(formatCompactNumber(1200, 'en-US')).toBe('1.2K')
  })
})
