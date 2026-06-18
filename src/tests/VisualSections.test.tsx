import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { AnimatedReveal } from '../components/common/AnimatedReveal'
import { AcquisitionSection } from '../components/sections/AcquisitionSection'
import { ExperienceSequenceSection } from '../components/sections/ExperienceSequenceSection'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { FormatSection } from '../components/sections/FormatSection'
import { HeroSection } from '../components/sections/HeroSection'
import { InfrastructureSection } from '../components/sections/InfrastructureSection'
import { LocationSection } from '../components/sections/LocationSection'
import { MomentumSection } from '../components/sections/MomentumSection'
import { PlanExplorerSection } from '../components/sections/PlanExplorerSection'
import { SectionHeading } from '../components/sections/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { renderWithRouter } from '../test/test-utils'

describe('visual editorial sections', () => {
  it('renders the redesigned hero with Bluebik messaging and services scroll action', () => {
    renderWithRouter(<HeroSection />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Ambition to Excellence/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Scroll Down/i })).toHaveAttribute(
      'href',
      '/#services',
    )
  })

  it('renders the momentum editorial section', () => {
    renderWithRouter(<MomentumSection />)

    expect(screen.getAllByText('Ambition to Excellence').length).toBeGreaterThan(0)
    expect(
      screen.getByText(/บลูบิคเป็นที่ปรึกษาด้านกลยุทธ์และการจัดการ/i),
    ).toBeInTheDocument()
  })

  it('renders feature and format content for consulting positioning', () => {
    renderWithRouter(
      <>
        <FeatureGrid />
        <FormatSection />
      </>,
    )

    expect(screen.getByText('Ambition to Excellence')).toBeInTheDocument()
    expect(screen.getByText('Integrated services for every ambition')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'ดูบริการทั้งหมด' })).toBeInTheDocument()
  })

  it('renders expanded cinematic content sections', () => {
    renderWithRouter(
      <>
        <ExperienceSequenceSection />
        <InfrastructureSection />
        <LocationSection />
        <AcquisitionSection />
      </>,
    )

    expect(screen.getByText(/Strategy\. Technology\. Delivery/i)).toBeInTheDocument()
    expect(
      screen.getByText('Everything connects before transformation scales'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Built for industries moving at digital speed'),
    ).toBeInTheDocument()
    expect(screen.getByText("Let's connect & transform together")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ติดต่อเรา' })).toHaveAttribute(
      'href',
      '/contact',
    )
  })

  it('switches active content in the visual plan explorer', async () => {
    const user = userEvent.setup()
    renderWithRouter(<PlanExplorerSection />)

    expect(screen.getByText('Ambition to Excellence')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Delivery' }))

    expect(screen.getByText('Transform Together')).toBeInTheDocument()
  })

  it('renders reusable heading and badge variants', () => {
    renderWithRouter(
      <>
        <AnimatedReveal>Animated content</AnimatedReveal>
        <SectionHeading eyebrow="Service" title="Digital transformation" />
        <Badge tone="dark">Dark badge</Badge>
      </>,
    )

    expect(screen.getByText('Animated content')).toBeInTheDocument()
    expect(screen.getByText('Digital transformation')).toBeInTheDocument()
    expect(screen.getByText('Dark badge')).toBeInTheDocument()
  })
})
