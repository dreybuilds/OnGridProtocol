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
  icon?: string
  iconSize: number
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
  iconSize,
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
      className="absolute"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
    >
      <svg
        viewBox="0 0 259 259"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <radialGradient id={`sphereGradient-${delay}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{stopColor: `${color}`, stopOpacity: 0.4}}/>
            <stop offset="80%" style={{stopColor: `${color}`, stopOpacity: 0.7}}/>
            <stop offset="100%" style={{stopColor: `${color}`, stopOpacity: 0.8}}/>
          </radialGradient>
          
          <radialGradient id={`glowGradient-${delay}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{stopColor: color, stopOpacity: 0.2}}/>
            <stop offset="100%" style={{stopColor: color, stopOpacity: 0}}/>
          </radialGradient>
          
          <filter id={`glow-${delay}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Base dark sphere */}
        <circle cx="129.5" cy="129.5" r="129.5" fill={`url(#sphereGradient-${delay})`}/>
        
        {/* Subtle glass effect */}
        <circle 
          cx="129.5" 
          cy="129.5" 
          r="129.5" 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1"
        />
        
        {/* Glow layer */}
        <circle 
          cx="129.5" 
          cy="129.5" 
          r="129.5" 
          fill={`url(#glowGradient-${delay})`} 
          style={{mixBlendMode: 'screen'}}
        />
        
        {/* Highlight */}
        <circle 
          cx="90" 
          cy="90" 
          r="20" 
          fill="rgba(255,255,255,0.1)"
        />

        {/* Centered Icon container */}
        {icon && (
          <foreignObject 
            x={(259 - iconSize) / 2} 
            y={(259 - iconSize) / 2} 
            width={iconSize} 
            height={iconSize}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={icon}
                alt="Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  )
}