'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Link as ScrollLink } from "react-scroll";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-opacity-30 backdrop-blur-lg backdrop-filter ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
      <nav className="mx-auto w-full max-w-screen-xl flex items-center justify-between py-5">
        <Link href="/" className="text-3xl font-bold text-oga-green-dark">
          OnGridAfrica
        </Link>
        <div className="hidden md:flex space-x-12 text-gray-900 md:text-lg">
          <ScrollLink
            to={"project"}
            smooth={true}
            duration={800}
            className='cursor-pointer hover:text-oga-green-light'
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to={"how-it-works"}
            smooth={true}
            duration={800}
            className='cursor-pointer'
          >
            How It Works
          </ScrollLink>
          <ScrollLink
            to={"impact"}
            smooth={true}
            duration={800}
            className='cursor-pointer'
          >
            Impact
          </ScrollLink>
          <ScrollLink
            to={"about"}
            smooth={true}
            duration={800}
            className='cursor-pointer'
          >
            About
          </ScrollLink>
        </div>
        <Button className="bg-white border border-oga-green text-oga-green rounded-full hover:bg-oga-green hover:text-white">
          Invest Now
        </Button>
      </nav>
    </header>
    // <header>

    // </header>
  )
}