"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Projects() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-neutral-950 pt-32">
      <div className="max-w-7xl mx-auto px-4 mt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl text-white sm:text-4xl">
            Get notified when we launch
          </h1>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
            <span className="bg-clip-text uppercase bg-gradient-to-tr from-green-600 to-green-400 text-transparent">
             Ongrid
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 text-center">
          <Button
            className="bg-oga-green border border-oga-green-dark text-white text-lg rounded-full hover:bg-oga-yellow-dark hover:text-gray-900"
            size="lg"
          >
            Get Involved <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
