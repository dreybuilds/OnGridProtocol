import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function JoinOngrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-950 bg-opacity-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              ONLY One Earth Invest to keep it GREEN
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed  lg:text-2xl/relaxed">
              Join OnGrid: Powering Clean Energy Together
            </p>
          </div>
    
        </div>
        <div className="grid gap-6 lg:grid-cols-3 mt-12">
        <div
            className={`relative w-full rounded-[16px] max-w-sm p-6 overflow-visible  bg-zinc-900 
            border border-transparent transition-all duration-500 ease-in-out
          `}
          >
            <div className="absolute inset-0 blur-3xl" />
            <div className="relative">
              <span
                className={`text-gray-300`}
              >
                <h2
                  className={`text-2xl font-bold mb-4 flex items-center gap-4`}
                >
              Investors
                </h2>
              </span>
              <p className="text-gray-300 text-base leading-relaxed">
              Support the transition to renewables, earning potential returns and aiding carbon reduction.

              </p>
            </div>
          </div>

          <div
            className={`relative w-full rounded-[16px] max-w-sm p-6 overflow-visible  bg-zinc-900 
            border border-transparent transition-all duration-500 ease-in-out
          `}
          >
            <div className="absolute inset-0 blur-3xl" />
            <div className="relative">
              <span
                className={`text-gray-300`}
              >
                <h2
                  className={`text-2xl font-bold mb-4 flex items-center gap-4`}
                >
              Investors
                </h2>
              </span>
              <p className="text-gray-300 text-base leading-relaxed">
              Support the transition to renewables, earning potential returns and aiding carbon reduction.

              </p>
            </div>
          </div>

          <div
            className={`relative w-full rounded-[16px] max-w-sm p-6 overflow-visible  bg-zinc-900 
            border border-transparent transition-all duration-500 ease-in-out
          `}
          >
            <div className="absolute inset-0 blur-3xl" />
            <div className="relative">
              <span
                className={`text-gray-300`}
              >
                <h2
                  className={`text-2xl font-bold mb-4 flex items-center gap-4`}
                >
              Investors
                </h2>
              </span>
              <p className="text-gray-300 text-base leading-relaxed">
              Support the transition to renewables, earning potential returns and aiding carbon reduction.

              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-8 '>
        <Button size="lg" className="rounded-full bg-green-600 hover:bg-oga-yellow-dark hover:text-gray-800">
            Build with us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

