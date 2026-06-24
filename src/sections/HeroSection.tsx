import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@/icons/ArrowUpRightIcon'
import { metrics } from '@/data/portfolio'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.2),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.15),_transparent_28%),linear-gradient(180deg,_rgba(8,10,15,0.96),_rgba(8,10,15,1))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366f1] to-transparent opacity-70" />
      <div className="relative mx-auto flex min-h-[720px] max-w-[1280px] flex-col justify-center px-6 py-24 sm:px-8 lg:min-h-[78vh] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-[2px] shadow-lg shadow-[#6366f1]/20">
                <img
                  src="/darlan.jpg"
                  alt="Foto de Darlan Jonas"
                  className="h-20 w-20 rounded-full border-2 border-white/20 object-cover"
                />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-[#10b981]">
                  Portfolio
                </p>
                <p className="text-lg font-semibold text-white">Darlan Jonas</p>
              </div>
            </div>
            <h1 className="font-display text-4xl leading-[1] font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.5rem]">
              Desenvolvedor Web, Especialista em{' '}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                Automações
              </span>{' '}
              e Soluções com{' '}
              <span className="bg-gradient-to-r from-[#10b981] to-[#6366f1] bg-clip-text text-transparent">
                IA
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Transformando ideias em sistemas, automações e experiências digitais de alto nível.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5519993841163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#6366f1]/30"
              >
                Solicitar orçamento
                <ArrowUpRightIcon />
              </a>
              <a
                href="#projetos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#6366f1] hover:text-[#6366f1]"
              >
                Ver projetos
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,_rgba(99,102,241,0.15),_transparent_60%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-[var(--color-panel)] p-5">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <p className="text-sm text-[var(--color-muted)]">Especialidades</p>
                    <p className="mt-1 text-lg font-medium text-white">Desenvolvimento & IA</p>
                  </div>
                  <div className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#10b981]">
                    Disponível
                  </div>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4">
                      <p className="font-display text-3xl tracking-[-0.04em] text-white">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
