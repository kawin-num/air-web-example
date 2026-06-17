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
  it('renders the redesigned hero with AIR-style messaging and scroll action', () => {
    renderWithRouter(<HeroSection />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /the architecture\s*of new success/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /the momentum to rise higher/i }),
    ).toHaveAttribute('href', '/#impulse')
  })

  it('renders the momentum editorial section', () => {
    renderWithRouter(<MomentumSection />)

    expect(screen.getByText('The momentum')).toBeInTheDocument()
    expect(screen.getByText('to rise higher')).toBeInTheDocument()
  })

  it('renders feature and format content for office positioning', () => {
    renderWithRouter(
      <>
        <FeatureGrid />
        <FormatSection />
      </>,
    )

    expect(screen.getByText('Class A business environment')).toBeInTheDocument()
    expect(screen.getByText('A scale for every ambition')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Choose an office' })).toBeInTheDocument()
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

    expect(screen.getByText(/Efficient layouts\. Impressive views/i)).toBeInTheDocument()
    expect(screen.getByText('Everything works before you arrive')).toBeInTheDocument()
    expect(screen.getByText('Connected to the city rhythm')).toBeInTheDocument()
    expect(screen.getByText('Acquisition without friction')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request a consultation' })).toHaveAttribute(
      'href',
      '/contact',
    )
  })

  it('switches active content in the visual plan explorer', async () => {
    const user = userEvent.setup()
    renderWithRouter(<PlanExplorerSection />)

    expect(screen.getByText('Open planning grid')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Sky terrace' }))

    expect(screen.getByText('Shared premium amenities')).toBeInTheDocument()
  })

  it('renders reusable heading and badge variants', () => {
    renderWithRouter(
      <>
        <AnimatedReveal>Animated content</AnimatedReveal>
        <SectionHeading eyebrow="Office" title="Premium infrastructure" />
        <Badge tone="dark">Dark badge</Badge>
      </>,
    )

    expect(screen.getByText('Animated content')).toBeInTheDocument()
    expect(screen.getByText('Premium infrastructure')).toBeInTheDocument()
    expect(screen.getByText('Dark badge')).toBeInTheDocument()
  })
})
