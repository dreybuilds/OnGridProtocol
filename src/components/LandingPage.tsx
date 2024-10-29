"use client"
import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Overview from './Overview'
import AboutUs from './AboutUs'
import HowItWorks from './HowItWorks'
import Projects from './Projects'
import Impact from './Impact'
import Partners from './Partners'
import Blog from './Blog'
import ContactUs from './ContactUs'
import Footer from './Footer'

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Overview />
        <AboutUs />
        <HowItWorks />
        <Projects />
        <Impact />
        <Partners />
        <Blog />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}