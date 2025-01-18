import { Fuel } from "lucide-react";

import {
  IconShieldBolt,
  IconTrendingUp
} from "@tabler/icons-react";

export default function WhyItMatters() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-12 md:py-16  bg-green-950 bg-opacity-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center  text-4xl lg:text-5xl font-bold mb-16 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Why It Matters
        </h2>

        <div className="grid gap-6 lg:grid-cols-3 mt-12 px-4 md:px-0">
          <div className="w-full bg-zinc-900 rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <Fuel className="text-yellow-500 w-16 h-16" size={36} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Reduced Reliance on Fossil Fuels
            </h2>
            <p className="text-gray-400 text-base">
              Diminishes coal/gas shares in the energy mix
            </p>
          </div>

          <div className="w-full bg-zinc-900 rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <IconShieldBolt className="w-16 h-16 text-blue-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Transparent Impact
            </h2>
            <p className="text-gray-400 text-base">
              On-chain data confirms CO₂ reductions and investment flows
            </p>
          </div>

          <div className="w-full  bg-zinc-900 rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <IconTrendingUp className="w-16 h-16  text-green-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Inclusive Growth
            </h2>
            <p className="text-gray-400 text-base">
              Opens clean energy markets to investors, communities, and
              innovators worldwide
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
