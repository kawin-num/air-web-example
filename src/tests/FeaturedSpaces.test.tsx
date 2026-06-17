import { screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'
import { FeaturedSpaces } from '../components/sections/FeaturedSpaces'
import { server } from '../mocks/server'
import { renderWithRouter } from '../test/test-utils'

describe('FeaturedSpaces', () => {
  it('renders spaces returned by the API', async () => {
    renderWithRouter(<FeaturedSpaces />)

    expect(screen.getByText('กำลังโหลดพื้นที่แนะนำ')).toBeInTheDocument()
    expect(await screen.findByText('Lobby Atrium')).toBeInTheDocument()
    expect(screen.getByText('Sky Gallery')).toBeInTheDocument()
  })

  it('shows fallback content when the API fails', async () => {
    server.use(
      http.get('/api/spaces', () =>
        HttpResponse.json({ message: 'Server error' }, { status: 500 }),
      ),
    )

    renderWithRouter(<FeaturedSpaces />)

    expect(await screen.findByRole('status')).toHaveTextContent(
      'โหลดข้อมูลจาก API ไม่สำเร็จ',
    )
    expect(screen.getByText('Air Studio')).toBeInTheDocument()
  })
})
