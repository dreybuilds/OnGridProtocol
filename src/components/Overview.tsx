import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Stat {
  label: string;
  value: number;
  unit: string;
}

const stats: Stat[] = [
  { label: 'Africans Lacking Energy Access', value: 640, unit: 'million' },
  { label: 'Potential CO2 Reduction', value: 500, unit: 'million tons' },
  { label: 'Investment Opportunity', value: 100, unit: 'billion USD' },
  { label: 'Possible Carbon Credit Generation', value: 500, unit: 'million credits' },
]

export default function Overview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About OnGridAfrica</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          OnGridAfrica is a revolutionary platform connecting investors with sustainable energy projects across Africa. Our mission is to accelerate the transition to clean energy while providing attractive investment opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} animate={inView} />
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

interface StatCardProps extends Stat {
  animate: boolean;
}

function StatCard({ label, value, unit, animate }: StatCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (animate) {
      const start = 0
      const end = value
      const duration = 2000
      let startTimestamp: number | null = null

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        setCount(Math.floor(progress * (end - start) + start))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [animate, value])

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
      <div className="text-4xl font-bold mb-2">
        {count}
        {unit && <span className="text-2xl ml-1">{unit}</span>}
      </div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  )
}