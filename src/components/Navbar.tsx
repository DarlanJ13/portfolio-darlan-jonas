import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/portfolio'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,10,15,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#" className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text font-display text-2xl tracking-[-0.05em] text-transparent">
          Darlan Jonas
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden min-h-11 items-center rounded-full border border-white/10 px-5 text-sm text-[var(--color-text)] transition-colors duration-300 hover:border-[#6366f1] hover:text-[#10b981] lg:inline-flex"
        >
          Contato
        </a>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 text-[var(--color-text)] lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-white/10 px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-text)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      ) : null}
    </header>
  )
}