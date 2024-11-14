'use client'

import { motion } from 'framer-motion'
import { Sun, DollarSign, Leaf, Users } from 'lucide-react'

const benefits = [
  {
    icon: Sun,
    title: "Clean Energy Production",
    description: "Contribute to the generation of renewable energy, reducing reliance on fossil fuels."
  },
  {
    icon: DollarSign,
    title: "Financial Returns",
    description: "Earn competitive returns on your investment while supporting sustainable development."
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Help reduce carbon emissions and combat climate change through green energy projects."
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Support local communities by providing access to reliable and affordable energy."
  }
]

export default function InvestmentBenefits() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Investing in a Sustainable Energy Future
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-oga-green text-white rounded-full p-4 mb-4">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Support clean energy projects, from small rooftop installations to expansive solar farms. OnGrid Protocol enables direct access to renewable energy assets, offering potential for solid returns, eco-friendly impact, and portfolio diversification beyond traditional markets—all while advancing the green energy transition on-chain.
        </motion.p>
      </div>
    </section>
  )
}