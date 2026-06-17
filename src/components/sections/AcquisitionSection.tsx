import { Link } from 'react-router-dom'
import { AnimatedReveal } from '../common/AnimatedReveal'
import { Button } from '../ui/Button'

const steps = [
  'Select office format and target floor',
  'Review planning options with the sales team',
  'Reserve the unit and prepare documents',
  'Move into a premium ready business environment',
]

export function AcquisitionSection() {
  return (
    <section className="bg-neutral-100 px-4 py-20 text-black sm:px-5 md:py-28">
      <div className="mx-auto max-w-[1920px]">
        <AnimatedReveal className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 className="air-editorial-text max-w-5xl font-display font-normal">
            Acquisition without friction
          </h2>
          <p className="max-w-xl text-base font-medium uppercase leading-7 text-black/55 md:ml-auto">
            A clear commercial flow helps users understand the next step without slowing
            down the cinematic browsing experience.
          </p>
        </AnimatedReveal>

        <div className="mt-12 grid gap-px bg-black/15 md:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedReveal key={step} delay={index * 90}>
              <div className="min-h-64 bg-neutral-100 p-6">
                <p className="text-xs font-semibold text-black/35">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-16 text-2xl font-medium uppercase leading-tight tracking-[-0.04em]">
                  {step}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Request a consultation</Link>
          </Button>
        </AnimatedReveal>
      </div>
    </section>
  )
}
