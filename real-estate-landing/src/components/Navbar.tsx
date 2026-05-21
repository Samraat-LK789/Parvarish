import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em]">
          <img
            src={logo}
            alt="Parvarish logo"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          {/* <span>PARVARISH / <b>परवरिश</b></span> */}
          <p className="text-xs uppercase tracking-[0.35em] text-black">
          <b>Legacy Spanning nearly 2 Decades</b>
        </p>
        </div>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-neutral-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-black transition-opacity duration-200 hover:opacity-70 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 text-xs uppercase tracking-[0.2em]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-neutral-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
