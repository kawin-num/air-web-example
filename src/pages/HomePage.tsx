import { AcquisitionSection } from '../components/sections/AcquisitionSection'
import { FeaturedSpaces } from '../components/sections/FeaturedSpaces'
import { HeroSection } from '../components/sections/HeroSection'
import { MomentumSection } from '../components/sections/MomentumSection'
import { SectionHeading } from '../components/sections/SectionHeading'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { careerCta, clientLogos, clientVoices, insights, newsroom, videoCta } from '../data/content'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MomentumSection />
      <section
        id="services"
        className="relative overflow-hidden bg-bluebik-950 py-20 text-white md:py-28"
      >
        <div className="pointer-events-none absolute -right-28 top-8 size-96 rounded-full bg-bluebik-500/20 blur-3xl" />
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="เสริมศักยภาพให้ธุรกิจก้าวข้ามขีดจำกัด ด้วยนวัตกรรมที่สร้างผลลัพธ์ทางธุรกิจได้จริง"
          description="Our Services"
          tone="dark"
        />
        <FeaturedSpaces />
      </section>
      <section className="relative h-screen overflow-hidden bg-bluebik-950">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          src={videoCta.video}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bluebik-950/5 via-bluebik-950/30 to-bluebik-950/60" />
      </section>
      <section className="overflow-hidden bg-white px-4 py-20 text-bluebik-950 sm:px-5 md:py-28">
        <div className="mx-auto flex max-w-[1920px] items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="ตามทันทุกเทรนด์ด้านกลยุทธ์ นวัตกรรมและเทคโนโลยี"
            description="All Insights"
          />
          <Link
            to="/work"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-bluebik-950/15 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-bluebik-950 transition hover:bg-bluebik-950 hover:text-white md:inline-flex"
          >
            All Insights
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="bluebik-card-rail mx-auto mt-12 flex max-w-[1920px] gap-5 overflow-x-auto pb-6">
          {insights.map((item) => (
            <article
              key={item.title}
              className="bluebik-card-lift min-w-[19rem] overflow-hidden rounded-[2rem] border border-bluebik-950/10 bg-white shadow-xl shadow-blue-950/5 md:min-w-[26rem]"
            >
              <img alt="" className="h-56 w-full object-cover" src={item.image} />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bluebik-700">
                  {item.category}
                </p>
                <h3 className="mt-8 font-display text-3xl font-normal uppercase leading-none tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-6 text-sm font-semibold text-bluebik-950/45">
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-bluebik-50 px-4 py-20 text-bluebik-950 sm:px-5 md:py-28">
        <div className="mx-auto flex max-w-[1920px] items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Newsroom"
            title="ติดตามข่าวและกิจกรรมล่าสุดของเรา"
            description="All news"
          />
          <Link
            to="/work"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-bluebik-950 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-bluebik-800 md:inline-flex"
          >
            All news
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1920px] gap-5 md:grid-cols-3">
          {newsroom.map((item) => (
            <article
              key={item.title}
              className="bluebik-card-lift overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-blue-950/5"
            >
              <img alt="" className="h-56 w-full object-cover" src={item.image} />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bluebik-700">
                  {item.date}
                </p>
                <h3 className="mt-8 font-display text-3xl font-normal uppercase leading-tight tracking-[-0.05em]">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 px-4 py-20 text-white sm:px-5 md:py-28">
        <div className="absolute inset-0 opacity-20"><div className="bluebik-marquee absolute inset-0 flex items-center gap-10 whitespace-nowrap font-display text-[22vw] font-bold uppercase leading-none tracking-[-0.09em]">voices voices voices</div></div>
        <SectionHeading
          eyebrow="Client voices"
          title="ความประทับใจจากลูกค้า"
          description="เสียงจากลูกค้าที่สะท้อน commitment และผลลัพธ์จากการทำงานร่วมกับ Bluebik"
          tone="dark"
        />
        <div className="relative z-10 mx-auto mt-12 grid w-full max-w-[1920px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {clientVoices.map((voice) => (
            <article
              key={voice.name}
              className="bluebik-card-lift air-rounded border border-white/30 bg-white/10 backdrop-blur-md p-4 shadow-xl shadow-black/20 sm:p-6"
            >
              <div className="mb-6 flex h-12 items-center justify-center opacity-90">
                <img
                  alt=""
                  className="max-h-12 max-w-40 object-contain"
                  src={voice.logo}
                />
              </div>
              <div className="mx-auto flex size-44 items-center justify-center rounded-full border border-bluebik-950/10 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-2.5 shadow-[0_30px_80px_-40px_rgba(1,22,66,0.45)] sm:size-52 sm:p-3 lg:size-56">
                <img
                  alt=""
                  className="size-full rounded-full object-cover object-center"
                  src={voice.image}
                />
              </div>
              <div className="px-2 pb-2 pt-6 text-center sm:px-6 sm:pb-0">
                <p className="text-sm leading-7 text-white/80 sm:text-base">
                  &ldquo;{voice.quote}&rdquo;
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                  {voice.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-200">
                  {voice.role}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="relative z-10 mt-14 flex justify-center overflow-hidden">
          <div className="bluebik-marquee flex items-center gap-10 whitespace-nowrap">
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                alt={logo.name}
                className="max-h-12 max-w-36 object-contain opacity-65"
                src={logo.asset}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-bluebik-950 px-4 py-20 text-white sm:px-5 md:py-28">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          src={careerCta.image}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#011642_0%,rgba(1,22,66,0.84)_48%,rgba(1,22,66,0.38))]" />
        <div className="relative mx-auto max-w-[1920px]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
            {careerCta.eyebrow}
          </p>
          <h2 className="mt-8 max-w-5xl font-display text-[clamp(2.8rem,7vw,7.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.08em]">
            {careerCta.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/70">
            {careerCta.description}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-bluebik-950 transition hover:bg-blue-100"
          >
            {careerCta.cta}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <AcquisitionSection />
    </>
  )
}
