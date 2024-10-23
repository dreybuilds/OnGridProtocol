import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8">Join OnGridAfrica today and start investing in a sustainable future for Africa.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100">
            Start Investing Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-500">
            Schedule a Demo
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">$100</h3>
            <p>Minimum Investment</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">10%</h3>
            <p>Average Annual Returns</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">100+</h3>
            <p>Impact Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}