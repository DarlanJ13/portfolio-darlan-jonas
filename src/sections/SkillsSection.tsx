import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/data/portfolio'

export function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const categories = Object.entries(skills)

  return (
    <section id="habilidades" ref={ref} className="border-t border-white/8">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-[#10b981]">Tech Stack</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Habilidades &{' '}
            <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">Tecnologias</span>
          </h2>
        </motion.div>

        <div className="mt-14 space-y-10">
          {categories.map(([category, items], catIdx) => (
            <div key={category}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">{category}</p>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.15 + i * 0.05 }}
                    className="rounded-full bg-white/5 backdrop-blur border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
