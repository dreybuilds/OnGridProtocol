'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'
import { gradients } from '@/styles/gradients'

export default function WhitePaper() {
  return (
    <section id="whitepaper" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Our White Paper
        </motion.h2>
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Dive deep into our vision, technology, and the future of renewable energy investment in Africa. 
            Our comprehensive white paper outlines our approach to revolutionizing the energy sector.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" className="bg-oga-green hover:bg-oga-green/90 text-white inline-flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Download White Paper
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">What&apos;s Inside:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Market Analysis of Renewable Energy in Africa",
              "Our Innovative Investment Model",
              "Technology Behind Our Platform",
              "Impact Measurement Methodology",
              "Future Roadmap and Expansion Plans",
              "Risk Assessment and Mitigation Strategies"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <svg className="h-6 w-6 text-oga-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}