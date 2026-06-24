import { motion } from 'framer-motion'

const highlights = [
  'Automações com IA para vendas, suporte e operações.',
  'Integrações de APIs e sistemas sob medida para escalar processos.',
  'Experiências web modernas com foco em performance e conversão.',
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-[1280px] gap-8 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur xl:p-10"
        >
          <span className="inline-flex rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-[#10b981]">
            Sobre
          </span>
          <h2 className="mt-6 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text font-display text-4xl tracking-[-0.04em] text-transparent sm:text-5xl">
            Darlan Jonas, desenvolvedor web especialista em automações, IA, APIs e sistemas sob medida.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            Crio soluções digitais que unem estratégia, tecnologia e design para transformar operações complexas em experiências fluidas, escaláveis e prontas para gerar resultado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="grid gap-5"
        >
          {highlights.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]" />
              <p className="text-base leading-7 text-[var(--color-text)]">{item}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}