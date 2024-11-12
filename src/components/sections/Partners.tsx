'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: "Solar Company 1", logo: "/solar-company1.png" },
  { name: "Solar Company 2", logo: "/solar-company2.jpeg" },
  { name: "Solar Company 3", logo: "/solar-company3.png" },
  { name: "Solar Company 4", logo: "/solar-company4.jpg" },
]

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 gradient-text gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Partners
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={150} 
                height={75} 
                className="max-w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}