import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRightIcon } from '@/icons/ArrowUpRightIcon'

export function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contato" ref={ref} className="border-t border-white/8">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.2),_transparent_50%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-5xl tracking-[-0.03em]">
              Vamos transformar sua ideia em um projeto real?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Entre em contato e receba um orçamento personalizado para o seu projeto.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5519993841163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-[#6366f1] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Solicitar orçamento
                <ArrowUpRightIcon />
              </a>
              <a
                href="https://wa.me/5519993841163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full border-2 border-white/30 px-8 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10 hover:border-white"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
