"use client";

import { Check } from "lucide-react";
import GradientSection from "@/components/ui/gradient-section";
import Statistics from "@/components/impact/Statistics";

export default function ImpactHero() {
  const timelineData = [
    {
      title: "DePIN Devices",
      list: [
        "Real-Time Measurement: IoT sensors verify kilowatt-hour outputs",
        "Automated Carbon Credits: Direct issuance for measurable CO₂ offsets",
      ],
    },
    {
      title: "AI-Insights",
      list: [
        "Predictive Analytics: Matches renewable supply with demand",
        "Smart Allocation: Minimizes waste, optimizes trading and storage",
      ],
    },
    {
      title: "Scalable Layer 2",
      list: [
        `Fast, Low-Cost Transactions: Enables frictionless energy and credit trading`,
        "Tokenized Ownership: Empowers communities to own a piece of local green projects",
      ],
    },
  ];

  return (
    <GradientSection>
      <section className=" relative flex flex-row items-center justify-center pt-12 md:pt-20">
        <section className="py-12 md:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mt-12 mb-16 md:mt-0 font-bold leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Capturing Global Renewable Energy Impact with OnGrid Protocol
            </h2>
            <div className="flex flex-col lg:flex-row justify-center gap-24 mx-auto  items-center mt-8">
              <div className="w-[80%] lg:basis-[30%]  divide-zinc-800 relative">
                <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-oga-green to-transparent -left-4 md:-left-10">
                  <span
                    className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-green-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] before:bg-gradient-to-l before:from-transparent before:via-green-500 before:to-cyan-500 style_meteor__iBwXl left-1"
                    style={
                      {
                        visibility: "hidden",
                        "--meteor-delay": "2s",
                        "--meteor-duration": "0s",
                        "--meteor-width": "140px",
                      } as React.CSSProperties
                    }
                  ></span>
                </div>
                {timelineData.map((data, index) => (
                  <div key={index} className="border-b border-zinc-800">
                    <h1 className="text-2xl font-bold text-zinc-200 my-8 relative">
                      <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-slate-500 bg-zinc-300 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                      {data.title}
                    </h1>
                    <div className="mb-8">
                      {data.list.map((list, listIndex) => (
                        <div
                          key={listIndex}
                          className="flex flex-row space-x-2 items-start my-2"
                        >
                          <Check
                            className="text-green-500 mt-[3px] flex-shrink-0"
                            size={16}
                          />
                          <span className="text-zinc-100 mb-4 font-medium md:text-xl">
                            {list}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Statistics />
            </div>
          </div>
        </section>
      </section>
    </GradientSection>
  );
}
