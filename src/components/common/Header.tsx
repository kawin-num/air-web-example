import * as Dialog from '@radix-ui/react-dialog'
import { Heart, Menu, X } from 'lucide-react'
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
              className="fixed left-4 top-20 size-12 rounded-full p-0 shadow-lg shadow-black/10 md:left-5 md:top-5 lg:hidden"
              size="sm"
              variant="secondary"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
            <Dialog.Content
              aria-describedby={undefined}
              className="fixed inset-x-4 top-4 z-50 rounded-[1.75rem] bg-white p-6 text-black shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-sm font-semibold uppercase tracking-[0.24em]">
                  Air Center
                </Dialog.Title>
                <Dialog.Close asChild>
                  <Button
                    aria-label="ปิดเมนู"
                    className="size-10 p-0"
                    size="sm"
                    variant="ghost"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </Button>
                </Dialog.Close>
              </div>
              <div className="mt-8 grid gap-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className="rounded-2xl px-4 py-4 text-2xl font-medium uppercase tracking-[-0.04em] text-black hover:bg-black/5"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  )
}
