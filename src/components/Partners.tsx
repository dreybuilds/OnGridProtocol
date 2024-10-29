import { Button } from "@/components/ui/button"
import Image from 'next/image'

const partnerLogos = [
  '/solar-company1.png',
  '/solar-company2.jpeg',
  '/solar-company3.png',
  '/solar-company4.jpg',
]

export default function Partners() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {partnerLogos.map((logo, index) => (
            <Image key={index} src={logo} alt={`Partner ${index + 1}`} width={200} height={100} className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Become a Partner</h3>
          <p className="mb-8 max-w-2xl mx-auto">Join us in our mission to revolutionize renewable energy investment in Africa. Together, we can make a lasting impact.</p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  )
}