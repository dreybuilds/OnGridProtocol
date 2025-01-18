'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string 
}

export function ScrollAnimate({ 
  children, 
  className = '', 
  delay = 0,
  id  // Add id to the destructured props
}: ScrollAnimateProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-20%" })

  return (
    <motion.div
      ref={ref}
      id={id}  // Add the id prop to the motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}