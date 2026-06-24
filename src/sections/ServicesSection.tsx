import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { BarChart3, Bot, Globe, Link, MessageSquare, Rocket, Server, Sparkles } from 'lucide-react'
import { services } from '@/data/portfolio'

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  rocket: Rocket,
  server: Server,
  bot: Bot,
  link: Link,
  message: MessageSquare,
  chart: BarChart3,
  sparkles: Sparkles,
} as const

export function ServicesSection() {
  return (
    <section id="serviços" className="mx-auto max-w-[1280px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-[#10b981]">
          Serviços
        </span>
        <h2 className="mt-5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text font-display text-4xl tracking-[-0.04em] text-transparent sm:text-5xl">
          Soluções completas para acelerar sua presença digital e automatizar seu crescimento.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon]

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1]/25 to-[#8b5cf6]/20 text-[#10b981]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-[-0.03em] text-[var(--color-text)]">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">{service.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}