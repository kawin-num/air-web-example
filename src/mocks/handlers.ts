import { http, HttpResponse } from 'msw'
import { fallbackSpaces } from '../data/content'
import type { LeadRequest } from '../types/space'

export const handlers = [
  http.get('/api/spaces', () => HttpResponse.json(fallbackSpaces)),
  http.post('/api/leads', async ({ request }) => {
    const lead = (await request.json()) as LeadRequest

    return HttpResponse.json({
      id: `lead-${lead.email}`,
      receivedAt: new Date('2026-06-17T00:00:00.000Z').toISOString(),
    })
  }),
]
