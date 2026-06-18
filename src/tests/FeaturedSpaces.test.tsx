import { screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'
import { FeaturedSpaces } from '../components/sections/FeaturedSpaces'
import { server } from '../mocks/server'
import { renderWithRouter } from '../test/test-utils'

describe('FeaturedSpaces', () => {
  it('renders services returned by the API', async () => {
    renderWithRouter(<FeaturedSpaces />)

    expect(screen.getByText('กำลังโหลดบริการแนะนำ')).toBeInTheDocument()
    expect(await screen.findByText('Management Consulting')).toBeInTheDocument()
    expect(screen.getByText('Big Data & Artificial Intelligence')).toBeInTheDocument()
  })

  it('shows fallback content when the API fails', async () => {
    server.use(
      http.get('/api/spaces', () =>
        HttpResponse.json({ message: 'Server error' }, { status: 500 }),
      ),
    )

    renderWithRouter(<FeaturedSpaces />)

    // When API fails, fallback content is shown without error message
    expect(await screen.findByText('Experience Design')).toBeInTheDocument()
    expect(screen.getByText('Management Consulting')).toBeInTheDocument()
  })
})
