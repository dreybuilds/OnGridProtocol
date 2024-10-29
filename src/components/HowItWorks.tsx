import { FileText, Search, Check, BarChart, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

const steps = [
  { icon: FileText, title: 'Project Listing', description: 'Energy infrastructure developers gather data and propose projects' },
  { icon: Search, title: 'Rigorous Review', description: 'Our team thoroughly vets and approves each project' },
  { icon: Check, title: 'Investment Selection', description: 'Choose projects that align with your goals' },
  { icon: BarChart, title: 'Progress Monitoring', description: 'Track project development in real-time via the investor dashboard' },
  { icon: TrendingUp, title: 'Returns & Impact', description: 'Receive returns and monitor your impact' },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-0.5 bg-gray-300 dark:bg-gray-600 mt-8"></div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  )
}