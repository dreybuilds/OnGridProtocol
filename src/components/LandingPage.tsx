"use client"
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Hero from './Hero'
import KeyStatistics from './KeyStatistics'
import HowItWorks from './HowItWorks'
import InvestmentBenefits from './InvestmentBenefits'
// import ProjectShowcase from './ProjectShowcase'
import TrustSignals from './TrustSignals'
import CallToAction from './CallToAction'
import WhitePaper from './WhitePaper'

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">OnGridAfrica</div>
          <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>
      <main className="pt-20">
        <Hero />
        <KeyStatistics />
        <HowItWorks />
        <InvestmentBenefits />
        {/* <ProjectShowcase /> */}
        <WhitePaper />
        <TrustSignals />
        <CallToAction />
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 OnGridAfrica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}