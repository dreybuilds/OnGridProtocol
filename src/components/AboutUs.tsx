import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About OnGridAfrica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-6">
              At OnGridAfrica, we&apos;re on a mission to revolutionize renewable energy investment in Africa. We believe in the power of community-driven investments to create sustainable change and economic growth across the continent.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="mb-6">
              We envision an Africa where clean, reliable energy is accessible to all, driving economic prosperity and environmental sustainability. Through our platform, we aim to connect visionary investors with impactful renewable energy projects.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Sustainability: We prioritize environmentally responsible practices in all our projects.</li>
              <li>Transparency: We believe in open communication and accountability in all our operations.</li>
              <li>Innovation: We continuously seek new ways to improve and expand our impact.</li>
              <li>Community: We put the needs and development of local communities at the forefront of our projects.</li>
            </ul>
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Join Our Mission
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/about-us-image.jpg"
              alt="OnGridAfrica team working on a solar project"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Story</h3>
          <p className="max-w-3xl mx-auto text-center">
            OnGridAfrica was founded in 2024 by a group of passionate entrepreneurs and renewable energy experts. Witnessing the immense potential for clean energy in Africa, coupled with the challenges of traditional investment models, we set out to create a platform that would democratize access to renewable energy investments. Our journey began with a single solar project in rural Kenya, and has since grown to encompass multiple countries and technologies across the continent. Today, we&apos;re proud to be at the forefront of the renewable energy revolution in Africa, connecting investors worldwide with impactful projects that are lighting up communities and powering a sustainable future.
          </p>
        </div>
      </div>
    </section>
  )
}