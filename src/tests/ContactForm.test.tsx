import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'
import { ContactForm } from '../components/sections/ContactForm'
import { server } from '../mocks/server'
import { renderWithRouter } from '../test/test-utils'

describe('ContactForm', () => {
  it('validates required fields before submit', async () => {
    const user = userEvent.setup()
    renderWithRouter(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /ส่งข้อมูล/i }))

    expect(screen.getByText('กรุณาระบุชื่ออย่างน้อย 2 ตัวอักษร')).toBeInTheDocument()
    expect(screen.getByText('กรุณาระบุอีเมลให้ถูกต้อง')).toBeInTheDocument()
    expect(
      screen.getByText('กรุณาเล่าความต้องการอย่างน้อย 12 ตัวอักษร'),
    ).toBeInTheDocument()
  })

  it('submits valid lead information', async () => {
    const user = userEvent.setup()
    renderWithRouter(<ContactForm />)

    await user.type(screen.getByLabelText('ชื่อ'), 'Orbit Team')
    await user.type(screen.getByLabelText('อีเมล'), 'team@example.com')
    await user.type(
      screen.getByLabelText('รายละเอียด'),
      'We need a responsive company profile.',
    )
    await user.click(screen.getByRole('button', { name: /ส่งข้อมูล/i }))

    expect(await screen.findByRole('status')).toHaveTextContent(
      'รับข้อมูลแล้ว ทีมงานจะติดต่อกลับโดยเร็ว',
    )
  })

  it('surfaces submission errors from the API', async () => {
    server.use(
      http.post('/api/leads', () =>
        HttpResponse.json({ message: 'Bad gateway' }, { status: 502 }),
      ),
    )

    const user = userEvent.setup()
    renderWithRouter(<ContactForm />)

    await user.type(screen.getByLabelText('ชื่อ'), 'Orbit Team')
    await user.type(screen.getByLabelText('อีเมล'), 'team@example.com')
    await user.type(
      screen.getByLabelText('รายละเอียด'),
      'We need a responsive company profile.',
    )
    await user.click(screen.getByRole('button', { name: /ส่งข้อมูล/i }))

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'API request failed with status 502',
    )
  })
})
