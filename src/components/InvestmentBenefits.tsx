import { DollarSign, TrendingUp, Briefcase, Leaf, Users, Building } from 'lucide-react'

const benefits = [
  {
    category: 'Financial Returns',
    items: [
      { icon: DollarSign, title: 'Investment Opportunities', description: 'Access to high-growth renewable energy projects' },
      { icon: TrendingUp, title: 'Portfolio Diversification', description: 'Spread risk across various sustainable investments' },
      { icon: Briefcase, title: 'Market Growth Potential', description: 'Capitalize on the expanding African energy sector' },
    ],
  },
  {
    category: 'Social Impact',
    items: [
      { icon: Leaf, title: 'Carbon Credit Generation', description: 'Contribute to global carbon reduction efforts' },
      { icon: Users, title: 'Community Development', description: 'Support local economies and improve living standards' },
      { icon: Building, title: 'Sustainable Infrastructure', description: 'Help build lasting, eco-friendly energy solutions' },
    ],
  },
]

export default function InvestmentBenefits() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Investment Benefits</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-green-500 text-white rounded-full p-2">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}