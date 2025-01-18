import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function GetInvolved() {
  return (
    // <GradientSection>
    <section className="w-full relative min-h-[70vh] overflow-hidden bg-transparent bg-opacity-10 px-6 text-white md:px-12 py-12 md:py-16">
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `
            radial-gradient(80% 80% at 50% 0%, rgba(40, 167, 69, 0.15) 0%, transparent 50%),
            radial-gradient(60% 60% at 100% 100%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
          `
        }}
      />
      <div className="container  md:min-h-[70vh] flex flex-col justify-center mx-auto px-4 md:px-6">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-12 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Get Involved
        </h2>
        <div>
          <p className="mx-auto text-center max-w-[800px] text-gray-400 text-lg md:text-xl/relaxed lg:text-2xl/relaxed ">
            Join OnGrid Protocol to invest, track, and trade in a cleaner, more
            equitable energy future—powered by AI, IoT, and blockchain.
          </p>
        </div>
        <div className="flex justify-center mt-12 ">
          <Link href="https://forms.gle/moCpCKMtVwCpVa92A" target="blank">
            <Button
              size="lg"
              className=" bg-oga-green p-4  border border-oga-green-dark  text-white text-lg rounded-full hover:bg-oga-yellow-dark hover:text-gray-900  md:text-lg md:px-6 md:py-3"
            >
              Build with us <ArrowRight size={20} className="ml-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
    // </GradientSection>
  );
}
