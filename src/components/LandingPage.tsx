'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './sections/Hero'
import Overview from './sections/Overview'
import HowItWorks from './sections/HowItWorks'
import InvestmentBenefits from './sections/InvestmentBenefits'
import Impact from './sections/Impact'
// import Projects from './sections/Projects'
import CallToAction from './sections/CallToAction'
// import Blog from './sections/Blog'
import { gradients } from '@/styles/gradients'

export default function LandingPage() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      background: [
        gradients.primary,
        gradients.secondary,
        gradients.primary,
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    })
  }, [controls])

  return (
    <div className="min-h-screen flex flex-col">
      {/* <motion.div
        className="fixed inset-0 -z-10"
        animate={controls}
      /> */}
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* <Overview /> */}
        {/* <HowItWorks />
        <InvestmentBenefits />
        <Impact /> */}
        {/* <Projects /> */}
        {/* <CallToAction /> */}
        {/* <Blog /> */}
      </main>
      <Footer />
    </div>
  )
}