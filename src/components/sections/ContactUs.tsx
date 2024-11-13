'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { gradients } from '@/styles/gradients'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              Have questions about investing in renewable energy projects or want to learn more about our platform? 
              We&apos;re here to help. Reach out to us using the form or contact information below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-oga-green mr-4" />
                <span className="text-gray-600 dark:text-gray-300">info@ongridafrica.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-oga-green mr-4" />
                <span className="text-gray-600 dark:text-gray-300">+254 123 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-oga-green mr-4" />
                <span className="text-gray-600 dark:text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <Input id="name" type="text" placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <Textarea id="message" placeholder="Your message" className="w-full" rows={4} />
              </div>
              <Button type="submit" className="w-full bg-oga-green hover:bg-oga-green/90 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}