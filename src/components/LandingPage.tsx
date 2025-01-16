"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import { gradients } from "@/styles/gradients";
import { AboutSection } from "./sections/AboutUs";
import CoreFeatures from "./sections/CoreFeatures";
import ModularArchitecture from "./sections/ModularArchitecture";
import JoinOngrid from "./sections/JoinOngrid";
import { ScrollAnimate } from "./ui/scroll-animation";

export default function LandingPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [gradients.primary, gradients.secondary, gradients.primary],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Header isHome={true} />
      <main className="flex-grow">
        <Hero />
        <ScrollAnimate id="about" delay={0.5}>
          <AboutSection />
        </ScrollAnimate>

        <ScrollAnimate id="how-it-works" delay={0.5}>
          <ModularArchitecture />
        </ScrollAnimate>

        <ScrollAnimate delay={0.5}>
          <CoreFeatures />
        </ScrollAnimate>

        <ScrollAnimate delay={0.5}>
          <JoinOngrid />
        </ScrollAnimate>
      </main>
      <Footer />
    </div>
  );
}
