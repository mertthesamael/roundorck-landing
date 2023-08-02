import AboutSection from '@/containers/about-container'
import ContactSection from '@/containers/contact-container'
import HeroSection from '@/containers/hero-container'
import ServicesSection from '@/containers/services-container'
import TestimonialsSection from '@/containers/testimonial-container'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
