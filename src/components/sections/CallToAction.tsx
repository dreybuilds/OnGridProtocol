'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 bg-oga-green text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join OnGridProtocol today and be part of the renewable energy revolution. 
            Your investment can power communities and drive sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-oga-green transition-colors duration-200">
              Learn More
            </Button>
            <Button size="lg" className="bg-white text-oga-green hover:bg-gray-100 transition-colors duration-200">
              Start Investing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}