import { Shield, Lock, FileCheck, Users } from 'lucide-react'
import Image from 'next/image'

const trustSignals = [
  { icon: Shield, title: 'Rigorous Vetting', description: 'All projects undergo thorough due diligence' },
  { icon: Lock, title: 'Bank-Level Security', description: 'Your investments are protected by advanced encryption' },
  { icon: FileCheck, title: 'Regulatory Compliance', description: 'We adhere to all relevant financial regulations' },
  { icon: Users, title: 'Expert Team', description: 'Our team has decades of combined experience in renewable energy and finance' },
]

const partnerLogos = [
  '/solar-company1.png?height=100&width=200',
  '/solar-company2.jpeg?height=100&width=200',
  '/solar-company3.png?height=100&width=200',
  '/solar-company4.jpg?height=100&width=200',
]

export default function TrustSignals() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Trust Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trustSignals.map((signal, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <signal.icon className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{signal.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{signal.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((logo, index) => (
              <Image key={index} src={logo} alt={`Partner ${index + 1}`} width={200} height={100} className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}