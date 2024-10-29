import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Invest in Africa&apos;s Renewable Energy Future
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Join us in transforming the energy sector through community-driven investments.
        </p>
        <Button size="lg" className="bg-green-500 hover:bg-green-600">
          Get Started
        </Button>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>
      </div>
    </section>
  )
}