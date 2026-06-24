import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { metrics } from '@/data/portfolio'

function Counter({ target }: { target: string }) {
  const num = parseInt(target.replace(/[^0-9]/g, ''))
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = Date.now()
    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * num))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, num])

  const formatted = target.includes('.') ? count.toLocaleString('pt-BR') : count.toString()
  const hasSuffix = target.includes('+') || target.includes('%')

  return (
    <span ref={ref}>
      {formatted}{hasSuffix ? target.replace(/[0-9.,]/g, '') : ''}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(16,185,129,0.2),_transparent_50%)]" />
      <div className="relative mx-auto max-w-[1280px] px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                <Counter target={m.value} />
              </p>
              <p className="mt-2 text-sm text-white/70">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
