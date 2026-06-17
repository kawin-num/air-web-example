import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, Heart, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/navigation'
import { useUiStore } from '../../stores/useUiStore'
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
          className="grid size-12 place-items-center rounded-full bg-white text-sm font-semibold uppercase shadow-lg shadow-black/10 backdrop-blur"
          aria-label="Air Center home"
        >
          <span aria-hidden="true">Air</span>
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
            aria-label="Favorites"
            className="hidden size-12 rounded-full p-0 sm:inline-flex"
            variant="secondary"
          >
            <Heart className="size-5" aria-hidden="true" />
          </Button>
          <Button
            asChild
            className="hidden uppercase tracking-wide md:inline-flex"
            size="sm"
          >
            <Link to="/contact">Choose an office</Link>
          </Button>
        </div>

        <Dialog.Root open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <Button
              aria-label="เปิดเมนู"
              className="mobile-menu-trigger fixed left-4 top-20 size-12 rounded-full p-0 shadow-lg shadow-black/10 md:left-5 md:top-5 lg:hidden"
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
              className="mobile-menu-content fixed inset-3 z-50 flex max-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-[1.75rem] bg-white text-black shadow-2xl sm:inset-4 sm:max-h-[calc(100svh-2rem)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-black/[0.04]" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.05))]" />

              <div className="relative flex items-center justify-between p-6">
                <Dialog.Title className="menu-title text-sm font-semibold uppercase tracking-[0.24em]">
                  Air Business Center
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
                className="menu-wordmark pointer-events-none px-6 font-display text-[clamp(4.5rem,32vw,12rem)] font-semibold uppercase leading-[0.72] tracking-[-0.11em] text-black/[0.04]"
                aria-hidden="true"
              >
                AIR
              </div>

              <div className="menu-items relative z-10 mt-2 grid flex-1 content-center gap-1 px-3 pb-5 sm:px-6">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className="menu-link group flex items-center justify-between rounded-[1.35rem] px-4 py-4 text-3xl font-medium uppercase tracking-[-0.055em] text-black transition hover:bg-black/5 sm:text-5xl"
                    onClick={closeMobileMenu}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className="size-5 translate-y-1 opacity-35 transition group-hover:translate-x-1 group-hover:-translate-y-0 group-hover:opacity-100 sm:size-7"
                      aria-hidden="true"
                    />
                  </NavLink>
                ))}
              </div>

              <div className="menu-footer relative z-10 flex items-end justify-between gap-6 border-t border-black/10 px-6 py-5">
                <p className="max-w-[12rem] text-xs font-semibold uppercase leading-5 tracking-wide text-black/45">
                  Premium office spaces with architectural momentum.
                </p>
                <Button asChild className="uppercase tracking-wide" size="sm">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Choose
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
