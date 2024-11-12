'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const GradientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (t: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsl(${(t * 0.1) % 360}, 100%, 50%)`)
      gradient.addColorStop(0.5, `hsl(${(t * 0.2 + 120) % 360}, 100%, 50%)`)
      gradient.addColorStop(1, `hsl(${(t * 0.3 + 240) % 360}, 100%, 50%)`)
      return gradient
    }

    const animate = (t: number) => {
      ctx.fillStyle = createGradient(t)
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      animationFrameId = requestAnimationFrame(() => animate(t + 1))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1 }}
    />
  )
}

export default GradientBackground