import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from '../components/common/Header'
import { renderWithRouter } from '../test/test-utils'

describe('Header mobile menu', () => {
  it('opens as a large dialog and closes from the close button', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Header />)

    await user.click(screen.getByRole('button', { name: 'เปิดเมนู' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Air Business Center')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /overview/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'ปิดเมนู' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes when a mobile menu link is selected', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Header />)

    await user.click(screen.getByRole('button', { name: 'เปิดเมนู' }))
    await user.click(screen.getByRole('link', { name: /contacts/i }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
