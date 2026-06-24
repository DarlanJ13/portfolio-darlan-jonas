import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { FeaturedWorkSection } from '@/sections/FeaturedWorkSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { StatsSection } from '@/sections/StatsSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { CTASection } from '@/sections/CTASection'
import { Footer } from '@/sections/Footer'
import { Navbar } from '@/components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedWorkSection />
        <SkillsSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
