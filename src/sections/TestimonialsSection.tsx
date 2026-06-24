import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/portfolio'

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-[#10b981]">
          Depoimentos
        </span>
        <h2 className="mt-5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text font-display text-4xl tracking-[-0.04em] text-transparent sm:text-5xl">
          Clientes que confiaram em soluções digitais feitas para crescer.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div className="flex items-center gap-1 text-[#10b981]">
              {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                <Star key={`${testimonial.name}-${starIndex}`} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-6 font-display text-3xl leading-[1.25] tracking-[-0.04em] text-[var(--color-text)]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8 border-t border-white/10 pt-6">
              <p className="text-base font-medium text-[var(--color-text)]">{testimonial.name}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{testimonial.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}