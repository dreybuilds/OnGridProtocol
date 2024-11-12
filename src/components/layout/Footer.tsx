'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { gradients } from '@/styles/gradients'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const footerLinks = [
  { title: 'Company', links: ['About Us', 'Team', 'Careers', 'Contact'] },
  { title: 'Resources', links: ['Blog', 'Newsletter', 'Events', 'Help Center'] },
  { title: 'Legal', links: ['Terms of Use', 'Privacy Policy', 'Cookie Policy'] },
]

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
]

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo-color.png" alt="OnGridAfrica Logo" width={40} height={40} />
              <span className="text-xl font-bold" style={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                OnGridAfrica
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Empowering Africa&apos;s sustainable future through innovative renewable energy investments.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-oga-green dark:hover:text-oga-green"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-600 hover:text-oga-green dark:text-gray-400 dark:hover:text-oga-green transition-colors duration-200">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} OnGridAfrica. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}