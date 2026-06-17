import { Outlet } from 'react-router-dom'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'

export function SiteLayout() {
  return (
    <div className="air-shell min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
