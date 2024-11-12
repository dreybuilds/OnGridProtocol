'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GradientBackground from './animations/gradient-background'
import Hero from './sections/Hero'
import Overview from './sections/Overview'
import HowItWorks from './sections/HowItWorks'
// import Projects from './sections/Projects'
import Impact from './sections/Impact'
import AboutUs from './sections/AboutUs'
// import Partners from './sections/Partners'
import ContactUs from './sections/ContactUs'
import WhitePaper from './sections/WhitePaper'
import Header from './layout/Header'
import Footer from './layout/Footer'

const LandingPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <GradientBackground />
      <Hero />
      <Overview />
      <HowItWorks />
      {/* <Projects /> */}
      <Impact />
      <AboutUs />
      {/* <Partners /> */}
      <ContactUs />
      <WhitePaper />
      <Footer />
    </motion.div>
  )
}

export default LandingPage