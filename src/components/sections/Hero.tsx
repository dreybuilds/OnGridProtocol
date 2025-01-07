import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingSphere } from "../ui/floating-spheres";

export default function Hero() {
  return (
    <main className="min-h-screen ">
      <div className="py-3 px-4">
        <div className="relative min-h-screen  overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0  bg-[url('/landing/landing-bg.svg')] bg-bottom bg-no-repeat bg-opacity-20"
            />
          </div>

          <div className="relative pt-24">
            <div className="relative px-6 py-24 sm:px-12 sm:py-32">
              <div className="mx-auto max-w-4xl">
                <h1 className="relative text-3xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Enable{" "}
                  <span className="relative inline-block">
                    Clean
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9C71.3333 3.66667 141.667 1 212 1C260 1 288 4.33333 296 6"
                        stroke="#FFD700"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  Energy Transition On-Chain with <span className="text-oga-green-light">OnGrid</span>
                </h1>
                <p className="mt-6 text-lg text-white/80 sm:text-xl">
                  Empowering the green energy market through a secure, scalable
                  Layer 2 network for trustless transactions and AI-assisted
                  eco-solutions.
                </p>

                <Button className="mt-8 bg-oga-green-dark  border border-oga-green-dark  text-white text-lg rounded-full hover:bg-oga-yellow-dark hover:text-gray-900"
                size="lg"
                >
                  Get Whitelisted <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingSphere
        size={120}
        color="#1e7e34"
        top="20%"
        left="10%"
        delay={100}
        icon="/landing/bulb-green.png"
        iconSize={50}
      />
      <FloatingSphere
        size={100}
        color="#28a745"
        top="20%"
        right="15%"
        delay={50}
        icon="/landing/biomass-green.png"
        iconSize={50}
      />
      <FloatingSphere
        size={90}
        color="#2fb344"
        bottom="15%"
        right="20%"
        delay={2500}
        icon="/landing/turbine-green.png"
        iconSize={50}
      />
    </main>
  );
}
