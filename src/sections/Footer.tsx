import { Mail, MessageCircle } from 'lucide-react'

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M8 10v8M8 6.01 7.99 6M12 10v8m0-4a3 3 0 0 1 6 0v4M4 10v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { label: 'WhatsApp', href: 'https://wa.me/5519993841163', icon: MessageCircle },
  { label: 'Email', href: 'mailto:contato@darlanjonas.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b14]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <a
            href="#"
            className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text font-display text-2xl tracking-[-0.05em] text-transparent"
          >
            Darlan Jonas
          </a>
          <p className="mt-2 text-sm text-[var(--color-muted)]">Soluções digitais sob medida para marcas que querem escalar.</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-text)] transition-colors duration-300 hover:border-[#6366f1] hover:text-[#10b981]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-[var(--color-muted)]">© 2026 Darlan Jonas. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
