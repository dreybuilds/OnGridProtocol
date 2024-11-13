'use client'

import { motion } from 'framer-motion'
import { FileText, Search, Check, BarChart, TrendingUp } from 'lucide-react'
import { gradients } from '@/styles/gradients'

const steps = [
  { icon: FileText, title: 'Project Listing', description: 'Energy infrastructure developers gather data and propose projects' },
  { icon: Search, title: 'Rigorous Review', description: 'Our team thoroughly vets and approves each project' },
  { icon: Check, title: 'Investment Selection', description: 'Choose projects that align with your goals' },
  { icon: BarChart, title: 'Progress Monitoring', description: 'Track project development in real-time via the investor dashboard' },
  { icon: TrendingUp, title: 'Returns & Impact', description: 'Receive returns and monitor your impact' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-oga-green text-white rounded-full p-4 mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <step.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}