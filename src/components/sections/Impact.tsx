'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Wind, Droplet, Users } from 'lucide-react'
import { gradients } from '@/styles/gradients'

interface ImpactStat {
  icon: React.ElementType
  value: string
  label: string
}

const impactStats: ImpactStat[] = [
  { icon: Sun, value: "500 MW", label: "Solar Energy Generated" },
  { icon: Wind, value: "300 MW", label: "Wind Energy Generated" },
  { icon: Droplet, value: "100 MW", label: "Hydro Energy Generated" },
  { icon: Users, value: "1M+", label: "Lives Impacted" },
]

const ImpactCard: React.FC<{ stat: ImpactStat }> = ({ stat }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-oga-green mb-4 inline-block"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <stat.icon size={48} />
      </motion.div>
      <motion.h3 
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {stat.value}
      </motion.h3>
      <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
    </motion.div>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <ImpactCard key={index} stat={stat} />
          ))}
        </div>
        <motion.p 
          className="text-center mt-12 text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join us in our mission to power Africa&apos;s sustainable future. Every investment makes a difference.
        </motion.p>
      </div>
    </section>
  )
}