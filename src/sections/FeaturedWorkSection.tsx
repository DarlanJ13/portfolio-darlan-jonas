import { motion } from 'framer-motion'
import { featuredProjects } from '@/data/portfolio'

export function FeaturedWorkSection() {
  return (
    <section id="projetos" className="mx-auto max-w-[1280px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-[#10b981]">
            Projetos em destaque
          </span>
          <h2 className="mt-5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text font-display text-4xl tracking-[-0.04em] text-transparent sm:text-5xl">
            Cinco entregas que mostram como tecnologia, estratégia e design podem gerar impacto real.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
          Cada projeto foi pensado para resolver desafios específicos com performance, automação e uma experiência premium do início ao fim.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]" />
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {project.category}
              </span>
              <span className="h-3 w-3 rounded-full bg-[#10b981]" />
            </div>
            <h3 className="mt-8 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">{project.summary}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-sm leading-7 text-[var(--color-text)]">{project.impact}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gradient-to-r from-[#6366f1]/15 to-[#8b5cf6]/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}