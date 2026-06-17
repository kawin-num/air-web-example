import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FaqAccordion } from '../components/sections/FaqAccordion'
import { renderWithRouter } from '../test/test-utils'

describe('FaqAccordion', () => {
  it('expands an answer with keyboard-accessible controls', async () => {
    const user = userEvent.setup()
    renderWithRouter(<FaqAccordion />)

    await user.click(screen.getByRole('button', { name: /ทำไมเลือก Radix UI/i }))

    expect(screen.getByText(/Radix ให้ primitive/i)).toBeVisible()
  })
})
