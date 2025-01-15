"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  IconBoltFilled,
  IconBrandTelegram,
  IconBrandX,
  IconBrightnessUpFilled,
  IconBulbFilled,
  IconWindmill,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 pt-32">
        <div className="relative min-h-screen  overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0  bg-[url('/landing/landing-bg.svg')] bg-bottom bg-no-repeat bg-opacity-20" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 mt-16 lg:mt-32 sm:px-6 lg:px-8">
            <IconWindmill className="w-16 h-16 md:w-24 md:h-24 absolute -rotate-45 text-green-500" />
            <IconBulbFilled className="w-16 h-16 md:w-24 md:h-24 absolute left-10 -bottom-20  sm:left-40  sm:bottom-20 text-orange-400" />
            <IconBrightnessUpFilled className="w-16 h-16 md:w-24 md:h-24 absolute right-6  text-oga-yellow" />
            <IconBoltFilled className="w-16 h-16 md:w-24 md:h-24 absolute  right-10 -bottom-28 sm:right-24 sm:bottom-0  text-blue-500" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center p-2 bg-green-500/10 rounded-full mb-6">
                {/* <Leaf className="w-5 h-5 text-green-500 mr-2" /> */}
                <span className="text-green-500 font-medium">Coming Soon</span>
              </div>
              <h1 className="mt-4 sm:mt-3 uppercase text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
                Coming Soon!
              </h1>

              <div className="mt-16 text-center">
                <Button
                  className=" bg-oga-green  border border-oga-green-dark  text-white text-lg rounded-full hover:bg-oga-yellow-dark hover:text-gray-900"
                  size="lg"
                >
                  Get Whitelisted <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>

              <div className="flex gap-6 justify-center w-fit mx-auto text-white mt-12">
                <Link
                  href="https://t.me/ongridprotocol"
                  target="blank"
                  className="hover:text-white transition-colors"
                >
                  <IconBrandTelegram className="h-8 w-8" />
                  <span className="sr-only">Discord</span>
                </Link>
                <Link
                  href="https://x.com/OngridProtocol"
                  target="blank"
                  className="hover:text-white transition-colors"
                >
                  <IconBrandX className="h-8 w-8" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
