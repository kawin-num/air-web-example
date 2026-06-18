import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, Globe2, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/navigation'
import { useUiStore } from '../../stores/useUiStore'
import { publicAsset } from '../../utils/publicAsset'
import { Button } from '../ui/Button'

function navigationClass({ isActive }: { isActive: boolean }) {
  return [
    'rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-wide transition',
    isActive
      ? 'bg-black text-white'
      : 'text-neutral-700 hover:bg-black/5 hover:text-black',
  ].join(' ')
}

export function Header() {
  const { closeMobileMenu, isMobileMenuOpen, setMobileMenuOpen } = useUiStore()

  return (
    <header className="fixed inset-x-0 top-0 z-40 text-black">
      <nav
        aria-label="เมนูหลัก"
        className="flex items-center justify-between px-4 py-4 sm:px-5"
      >
        <Link
          to="/"
          className="grid h-12 w-32 place-items-center rounded-full bg-white px-4 shadow-lg shadow-blue-950/10 backdrop-blur"
          aria-label="Bluebik home"
        >
          <img
            alt=""
            className="h-7 w-full object-contain"
            src={publicAsset('bluebik/design/site-logo-2.svg')}
          />
        </Link>

        <div className="hidden items-center rounded-full border border-black/10 bg-white/80 p-1 shadow-lg shadow-black/5 backdrop-blur-xl lg:flex">
          {navigationItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navigationClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            aria-label="เปลี่ยนภาษา"
            className="hidden size-12 rounded-full p-0 text-xs font-bold sm:inline-flex"
            variant="secondary"
          >
            TH
            <Globe2 className="ml-1 size-4" aria-hidden="true" />
          </Button>
          <Button
            asChild
            className="hidden uppercase tracking-wide md:inline-flex"
            size="sm"
          >
            <Link to="/contact">ติดต่อเรา</Link>
          </Button>
        </div>

        <Dialog.Root open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <Button
              aria-label="เปิดเมนู"
              className="mobile-menu-trigger fixed left-4 top-20 size-12 rounded-full border-black/10 bg-white p-0 shadow-[0_14px_35px_rgba(0,0,0,0.18)] md:left-5 lg:hidden"
              size="sm"
              type="button"
              variant="secondary"
            >
              <span className="hamburger-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay
              className="mobile-menu-overlay fixed inset-0 z-40 bg-black/55 backdrop-blur-md"
              onClick={closeMobileMenu}
            />
            <Dialog.Content
              aria-describedby={undefined}
              className="mobile-menu-content fixed inset-x-0 top-2 z-50 mx-auto flex max-h-[calc(100svh-1rem)] w-[calc(100%-0.5rem)] max-w-[104rem] flex-col overflow-hidden rounded-[1.75rem] bg-white text-black shadow-2xl sm:top-2 sm:w-[calc(100%-1rem)]"
            >
              <div className="pointer-events-none absolute -right-14 -top-24 size-48 rounded-full bg-black/[0.04] sm:size-64" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.045))]" />

              <div className="relative flex items-center justify-between px-6 py-5 sm:px-8">
                <Dialog.Title className="menu-title text-xs font-semibold uppercase tracking-[0.32em] sm:text-sm">
                  Bluebik Group
                </Dialog.Title>
                <Dialog.Close asChild>
                  <Button
                    aria-label="ปิดเมนู"
                    className="menu-close-button size-10 p-0"
                    onClick={closeMobileMenu}
                    size="sm"
                    type="button"
                    variant="ghost"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </Button>
                </Dialog.Close>
              </div>
              <div
                className="menu-wordmark pointer-events-none px-6 font-display text-[clamp(5.4rem,16vw,10rem)] font-semibold uppercase leading-[0.72] tracking-[-0.11em] text-black/[0.035] sm:px-8"
                aria-hidden="true"
              >
                BBIK
              </div>

              <div className="menu-items relative z-10 -mt-2 grid gap-2 px-4 pb-8 sm:-mt-4 sm:px-8 sm:pb-8">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className="menu-link group flex items-center justify-between rounded-[1.35rem] px-3 py-2 text-[clamp(2.4rem,7vw,3.1rem)] font-medium uppercase leading-none tracking-[-0.075em] text-black transition hover:bg-black/5 sm:px-4 sm:py-3"
                    onClick={closeMobileMenu}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className="size-5 translate-y-1 opacity-35 transition group-hover:translate-x-1 group-hover:-translate-y-0 group-hover:opacity-100 sm:size-6"
                      aria-hidden="true"
                    />
                  </NavLink>
                ))}
              </div>

              <div className="menu-footer relative z-10 mt-auto flex items-end justify-between gap-6 border-t border-black/10 px-6 py-5 sm:px-8">
                <p className="max-w-[12rem] text-xs font-semibold uppercase leading-5 tracking-wide text-black/45">
                  Ambition to Excellence through digital transformation.
                </p>
                <Button asChild className="uppercase tracking-wide" size="sm">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Connect
                  </Link>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  )
}
