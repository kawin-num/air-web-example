export function formatCompactNumber(value: number, locale = 'th-TH') {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}
