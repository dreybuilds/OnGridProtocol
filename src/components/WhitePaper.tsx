import { Button } from "@/components/ui/button"

export default function WhitePaper() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Learn More About Our Vision</h2>
        <p className="text-xl mb-8">
          Access our brief white paper to understand how we&apos;re revolutionizing renewable energy investment in Africa.
        </p>
        <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
          Download White Paper
        </Button>
      </div>
    </section>
  )
}