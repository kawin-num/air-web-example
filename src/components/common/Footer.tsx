import { Link } from 'react-router-dom'
import { navigationItems } from '../../data/navigation'
import { publicAsset } from '../../utils/publicAsset'

const footerLinks = [
  'บทความ',
  'ข่าวสาร',
  'ร่วมงานกับเรา',
  'นักลงทุนสัมพันธ์',
  'นโยบายความเป็นส่วนตัว',
  'นโยบายการใช้งานคุกกี้',
]

const socialIcons = [
  { label: 'Facebook', src: publicAsset('bluebik/social/icon-fb.svg'), url: 'https://www.facebook.com/bluebik' },
  { label: 'Instagram', src: publicAsset('bluebik/social/icon-ig.svg'), url: 'https://www.instagram.com/bluebik' },
  { label: 'LinkedIn', src: publicAsset('bluebik/social/icon-linkedin.svg'), url: 'https://www.linkedin.com/company/bluebik' },
  { label: 'TikTok', src: publicAsset('bluebik/social/icon-tiktok.svg'), url: 'https://www.tiktok.com/@bluebik' },
  { label: 'X', src: publicAsset('bluebik/social/icon-x.svg'), url: 'https://x.com/bluebik' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/70 bg-bluebik-950 text-white">
      <img
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full object-cover opacity-45"
        src={publicAsset('bluebik/design/footer-gradient.svg')}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.35fr_1fr] lg:px-8">
        <div>
          <img
            alt="Bluebik"
            className="h-10 w-auto brightness-0 invert"
            src={publicAsset('bluebik/design/footer-logo.svg')}
          />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/85">
            Bluebik
            ที่ปรึกษาธุรกิจที่จะนำพาธุรกิจสู่ความสำเร็จด้วยกลยุทธ์อัจฉริยะและเทคโนโลยีล้ำสมัย
            เชี่ยวชาญด้าน Digital Transformation, Enterprise Transformation, AI-Led
            Integrated Services, Big Data & AI, Cybersecurity และ Strategic PMO
          </p>
          <p className="mt-8 font-display text-4xl font-semibold uppercase leading-none tracking-[-0.06em] md:text-6xl">
            Let&apos;s connect & transform together
          </p>
        </div>
        <div className="grid content-between gap-8">
          <nav
            aria-label="เมนูท้ายเว็บไซต์"
            className="flex flex-wrap gap-3 md:justify-end"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full border border-white/15 px-3 py-2 text-sm text-blue-100 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-3 text-sm text-blue-100/75 md:text-right">
            {footerLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
            <div className="flex gap-3 pt-4 md:justify-end">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20 hover:border-white/30"
                  aria-label={icon.label}
                >
                  <img alt="" className="size-4" src={icon.src} />
                </a>
              ))}
            </div>
            <span className="pt-4 text-xs text-white/45">
              © 2025 Bluebik Group. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
