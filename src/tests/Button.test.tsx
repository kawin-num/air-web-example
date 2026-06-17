import { screen } from '@testing-library/react'
import { Link } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Button } from '../components/ui/Button'
import { renderWithRouter } from '../test/test-utils'

describe('Button', () => {
  it('renders a native button with accessible name', () => {
    renderWithRouter(<Button>เริ่มต้น</Button>)

    expect(screen.getByRole('button', { name: 'เริ่มต้น' })).toBeInTheDocument()
  })

  it('supports composing as a link through Radix Slot', () => {
    renderWithRouter(
      <Button asChild>
        <Link to="/contact">ติดต่อเรา</Link>
      </Button>,
    )

    expect(screen.getByRole('link', { name: 'ติดต่อเรา' })).toHaveAttribute(
      'href',
      '/contact',
    )
  })
})
