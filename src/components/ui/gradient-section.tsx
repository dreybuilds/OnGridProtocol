'use client'

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GradientSectionProps {
  children: ReactNode
  className?: string
  primaryColor?: string
  secondaryColor?: string
}

export default function GradientSection({
  children,
  className,
  primaryColor = "rgba(40, 167, 69, 0.15)",
  secondaryColor = "rgba(34, 197, 94, 0.1)",
}: GradientSectionProps) {
  return (
    <section 
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-transparent bg-opacity-10 px-6 py-12 text-white md:px-12",
        className
      )}
    >
      {/* Animated gradient overlays */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `
            radial-gradient(80% 80% at 50% 0%, ${primaryColor} 0%, transparent 50%),
            radial-gradient(60% 60% at 100% 100%, ${secondaryColor} 0%, transparent 50%)
          `
        }}
      />
      
      {/* Content */}
      <div className="relative">{children}</div>
    </section>
  )
}
