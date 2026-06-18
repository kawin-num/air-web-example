import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FaqAccordion } from '../components/sections/FaqAccordion'
import { renderWithRouter } from '../test/test-utils'

describe('FaqAccordion', () => {
  it('expands an answer with keyboard-accessible controls', async () => {
    const user = userEvent.setup()
    renderWithRouter(<FaqAccordion />)

    await user.click(
      screen.getByRole('button', {
        name: /Bluebik ช่วยองค์กรเริ่ม Digital Transformation อย่างไร/i,
      }),
    )

    expect(screen.getByText(/ออกแบบ roadmap/i)).toBeVisible()
  })
})
