import { Link } from 'react-router-dom'
import { navigationItems } from '../../data/navigation'

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-space-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">Air Center</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Company profile template สำหรับธุรกิจที่ต้องการสื่อสารประสบการณ์ พื้นที่
            และบริการด้วยเว็บไซต์ที่เร็ว เข้าถึงง่าย และพร้อมต่อยอดจริง
          </p>
        </div>
        <nav
          aria-label="เมนูท้ายเว็บไซต์"
          className="flex flex-wrap gap-3 md:justify-end"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
