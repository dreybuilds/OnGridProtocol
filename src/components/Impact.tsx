import { Battery, Leaf, Users } from 'lucide-react'

const impactData = [
  { icon: Battery, title: 'Energy Generated', value: '500 MW', description: 'Clean energy powering communities' },
  { icon: Leaf, title: 'CO2 Emissions Reduced', value: '1.2M tons', description: 'Equivalent to planting 20 million trees' },
  { icon: Users, title: 'Lives Improved', value: '2.5 million', description: 'Through access to reliable, clean energy' },
]

export default function Impact() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <item.icon className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-3xl font-bold text-green-500 mb-2">{item.value}</p>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}