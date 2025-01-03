'use client'
import { useEffect, useRef } from 'react'

interface FloatingSphereProps {
  size: number
  color: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  delay?: number
  icon?:  string
  glassOpacity?: number
  iconSize?: number
  iconColor?: string
}

export function FloatingSphere({
  size,
  color,
  top,
  left,
  right,
  bottom,
  delay = 0,
  icon,
  glassOpacity = 0.2,
  iconSize = 24,
  iconColor = 'white'
}: FloatingSphereProps) {
  const sphereRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sphere = sphereRef.current
    if (!sphere) return

    const animation = sphere.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)' },
        { transform: 'translate(10px, -10px) rotate(5deg)' },
        { transform: 'translate(-5px, 15px) rotate(-5deg)' },
        { transform: 'translate(0, 0) rotate(0deg)' }
      ],
      {
        duration: 20000,
        iterations: Infinity,
        easing: 'ease-in-out',
        delay
      }
    )
    return () => animation.cancel()
  }, [delay])

  return (
    <div
      ref={sphereRef}
      className="absolute rounded-full bg-clip-padding backdrop-blur-xl backdrop-filter"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `linear-gradient(145deg, ${color}${Math.round(glassOpacity * 255).toString(16)} 0%, ${color}${Math.round(glassOpacity * 127).toString(16)} 100%)`,
        boxShadow: `
          0 0 40px ${color}33,
          inset -4px -4px 8px rgba(0, 0, 0, 0.1),
          inset 4px 4px 8px rgba(255, 255, 255, 0.1)
        `,
        border: `1px solid rgba(255, 255, 255, 0.18)`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
          opacity: 0.5
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* {typeof icon === 'string' ? ( */}
          <img 
            src={icon} 
            alt="Icon" 
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain'
            }}
          />
        {/* } */}
      </div>
    </div>
  )
}