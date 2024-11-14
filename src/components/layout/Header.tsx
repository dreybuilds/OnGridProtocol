'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          OnGridProtocol
        </Link>
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#how-it-works">How It Works</Link></li>
          <li><Link href="#impact">Impact</Link></li>
          <li><Link href="#about">About</Link></li>
        </ul>
        <Button className="bg-white text-oga-green hover:bg-white/90">
          Invest Now
        </Button>
      </nav>
    </header>
  )
}