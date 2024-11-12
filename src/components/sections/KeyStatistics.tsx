'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

interface Statistic {
  value: number;
  label: string;
  suffix: string;
}

const statistics: Statistic[] = [
  { value: 50, label: "Projects Funded", suffix: "+" },
  { value: 100000, label: "kWh Clean Energy Generated", suffix: "+" },
  { value: 25000, label: "Investors", suffix: "+" },
  { value: 15, label: "African Countries", suffix: "" }
]

export default function KeyStatistics() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-16 bg-oga-green text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Impact in Numbers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CountUp end={stat.value} inView={inView} suffix={stat.suffix} />
              <p className="text-xl mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CountUpProps {
  end: number;
  inView: boolean;
  suffix: string;
}

function CountUp({ end, inView, suffix }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [end, inView])

  return <h3 className="text-4xl font-bold">{count.toLocaleString()}{suffix}</h3>
}