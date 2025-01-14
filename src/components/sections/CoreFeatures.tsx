"use client";

import { IconLeaf, IconStackForward, IconBuilding } from "@tabler/icons-react";
import { BrainCircuit, UsersRound, Coins } from "lucide-react";
import { useEffect, useState } from "react";
import GradientSection from "../ui/gradient-section";

export default function CoreFeatures() {
  const [activeIndex, setActiveIndex] = useState(Number);

  const features = [
    {
      title: "Trustless Energy Investments",
      description:
        "Secure, verifiable transactions for effortless green investments, powered by AI to identify optimal returns and carbon impact.",
      Icon: IconLeaf,
      color: "text-green-500",
      hoverGlow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      borderHover: "border-green-500/50",
      label: "INVEST",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "Scalable Layer 2 Framework",
      description:
        "High-speed, low-cost transactions suited for large-scale renewable energy initiatives.",
      Icon: IconStackForward,
      color: "text-blue-500",
      hoverGlow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      borderHover: "border-blue-500/50",
      label: "CONNECT",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "Tokenization of Renewable Assets",
      description:
        "Convert solar, wind, and other clean energy projects into asset-backed tokens, making them accessible and tradable.",
      Icon: Coins,
      color: "text-orange-500",
      hoverGlow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
      borderHover: "border-orange-500/50",
      label: "TOKENIZE",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "DePin Devices & Carbon Credit Mining",
      description:
        "Deploy DePin (Decentralized Physical Infrastructure) devices to track, verify, and mine carbon credits on-chain—rewarding eco-friendly participation.",
      Icon: IconBuilding,
      color: "text-oga-yellow",
      hoverGlow: "shadow-[0_0_30px_rgba(234,179,8,0.3)]",
      borderHover: "border-yellow-500/50",
      label: "DEPLOY",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "AI-Driven Eco Solutions",
      description:
        "Leverage AI to analyze market data, forecast energy demands, and streamline green transitions in real-time.",
      Icon: BrainCircuit,
      color: "text-rose-500",
      hoverGlow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]",
      borderHover: "border-rose-500/50",
      label: "ANALYZE",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "DAO-Driven Governance",
      description:
        "Community-led decisions on funding and resource allocation, promoting transparent management of green projects.",
      Icon: UsersRound,
      color: "text-oga-yellow-light",
      hoverGlow: "shadow-[0_0_30px_rgba(234,179,8,0.3)]",
      borderHover: "border-oga-yellow/50",
      label: "GOVERN",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
  ];

  useEffect(() => {
    const activateRandom = () => {
      const randomIndex = Math.floor(Math.random() * features.length);
      setActiveIndex(randomIndex);
    };

    activateRandom();
    const interval = setInterval(activateRandom, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <GradientSection>
    <div className="relative mx-auto px-4 pb-12 pt-12 md:pt-16 md:min-h-screen">
      {/* <div className="glowing-ellipse h-[150px] w-[150px]"></div> */}
      <div className="glowing-ellipse h-[150px] w-[150px] bottom-0 right-0"></div>

      <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
        Core Features
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            className={`relative w-full rounded-[16px] p-6 overflow-visible  bg-zinc-900 
            border border-transparent transition-all duration-500 ease-in-out
            ${
              activeIndex === index
                ? `
              ${feature.hoverGlow}
              ${feature.borderHover}
              transform scale-[1.02]
            `
                : ""
            }`}
            key={index}
          >
            <div className="absolute inset-0 blur-3xl" />
            <div className="relative">
              <span
                className={`
                ${
                  activeIndex === index
                    ? `
                ${feature.color}`
                    : "text-white"
                }`}
              >
                <feature.Icon size={36} className={` mb-4`} />
                <h2
                  className={`text-xl sm:text-2xl font-bold mb-4 flex items-center gap-4`}
                >
                  {feature.title}
                </h2>
              </span>
              <p className="text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </GradientSection>
  );
}
