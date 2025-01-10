import { Users, Brain, Shield, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientSection from "../ui/gradient-section";

export function AboutSection() {
  const advantages = [
    {
      icon: Users,
      title: "Decentralized Ownership",
      description:
        "Community stakes in renewable assets, enabling widespread participation in green energy initiatives.",
    },
    {
      icon: Brain,
      title: "AI-Assisted Green Systems",
      description:
        "Real-time insights optimize clean energy deployment through advanced artificial intelligence.",
    },
    {
      icon: Shield,
      title: "Secure, Scalable Transactions",
      description:
        "Ethereum Layer 2 ensures speed and affordability for all network operations.",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((current) => (current + 1) % advantages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [advantages.length]);

  const cardVariants = {
    initial: {
      opacity: 0.7,
      scale: 1,
      y: 0,
    },
    active: {
      opacity: 1,
      scale: 1.02,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    inactive: {
      opacity: 0.7,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <GradientSection>
      <section className=" min-h-fit relative flex flex-row items-center justify-center">
        {/* <div className="glowing-ellipse h-[100px] w-[100px]"></div> */}
        {/* <div className="glowing-ellipse h-[100px] w-[100px] top-[25%] ml-0 mr-0 left-0 right-0"></div> */}
        <section className=" py-24 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left Column - Main Content */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center p-2 bg-green-500/10 rounded-lg mb-6">
                    <Leaf className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-500 font-medium">
                      About OnGrid Protocol
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                    Bridging Real-World Renewable Energy with On-Chain Finance
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    OnGrid Protocol (OGP) bridges real-world renewable energy
                    projects with on-chain finance. By leveraging DePin devices
                    for carbon credit mining, AI-driven insights, and scalable
                    Layer 2 infrastructure, we aim to create a sustainable,
                    carbon-neutral future.
                  </p>
                </div>
              </div>

              {/* Right Column - Advantages Cards */}
              <div className="grid gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    initial="initial"
                    animate={activeCard === index ? "active" : "inactive"}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    key={index}
                  >
                    <Card
                      className={`bg-transparent cursor-pointer border-0 backdrop-blur-sm 
        ${activeCard === index
                          ? "shadow-xl shadow-green-500/20 border border-green-500/70"
                          : ""
                        }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-green-500/10">
                            <advantage.icon size={36} className="text-green-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {advantage.title}
                            </h3>
                            <p className="text-gray-400">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </GradientSection>
  );
}
