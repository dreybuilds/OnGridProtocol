'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { FileText, Download, ExternalLink } from 'lucide-react'

export default function WhitePaper() {
  return (
    <section id="white-paper" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">OnGridAfrica White Paper</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our comprehensive white paper outlines OnGridAfrica&apos;s vision, technology, and strategy 
              for revolutionizing renewable energy investments in Africa. Discover how we&apos;re leveraging 
              blockchain and community-driven investments to create a sustainable future.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Detailed market analysis and opportunity assessment</li>
              <li>Blockchain integration for transparent and efficient investments</li>
              <li>Carbon credit generation and distribution model</li>
              <li>Roadmap for scaling renewable energy projects across Africa</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-oga-green hover:bg-oga-green/90 transition-colors duration-200">
                <Download className="mr-2 h-4 w-4" /> Download White Paper
              </Button>
              <Button size="lg" variant="outline" className="border-oga-green text-oga-green hover:bg-oga-green hover:text-white transition-colors duration-200">
                <ExternalLink className="mr-2 h-4 w-4" /> View Online
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/white-paper-preview.jpg"
              alt="OnGridAfrica White Paper Preview"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end justify-center p-6">
              <Button size="lg" className="bg-white text-oga-green hover:bg-gray-100 transition-colors duration-200">
                <FileText className="mr-2 h-4 w-4" /> Preview White Paper
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}