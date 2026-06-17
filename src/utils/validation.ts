const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: string) {
  return emailPattern.test(email.trim())
}

export function hasMinimumLength(value: string, minLength: number) {
  return value.trim().length >= minLength
}
