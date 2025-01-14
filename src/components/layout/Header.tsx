"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import logo from "../../../public/ongrid-logo.png";
import { MobileNav } from "./MobileNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950 bg-opacity-30 backdrop-blur-lg backdrop-filter"
          : "bg-transparent backdrop-blur-lg backdrop-filter pt-5"
      }`}
    >
      <nav className="mx-auto w-full max-w-screen-xl flex items-center justify-between py-4 px-5 md:p-5">
        <Link href="/" className="text-4xl font-bold text-white">
          <Image src={logo} alt="Ongrid-logo" className="w-32 lg:w-40" />
        </Link>
        <div className="hidden md:flex space-x-12 text-white md:text-lg">
          <ScrollLink
            to={"project"}
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-oga-yellow-dark"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to={"how-it-works"}
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-oga-yellow-dark"
          >
            How It Works
          </ScrollLink>
          <ScrollLink
            to={"impact"}
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-oga-yellow-dark"
          >
            Impact
          </ScrollLink>
          <ScrollLink
            to={"about"}
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-oga-yellow-dark"
          >
            About
          </ScrollLink>
        </div>
        <Button className="hidden md:inline-flex bg-oga-green  border border-oga-green-dark  text-white text-lg rounded-full hover:bg-oga-yellow-dark hover:text-gray-900 px-4 py-2  md:text-lg md:px-6 md:py-3">
          Build with us
        </Button>

        <MobileNav/>
      </nav>
    </header>
  );
}
