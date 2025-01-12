import Link from "next/link";
import { Twitter, RssIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/ongrid-logo.png"

export default function Footer() {
  // const color = useMotionValue("#28a745");

  // Create the gradient template
  // const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 60%, ${color})`
  return (
    <motion.div
      className="rounded-t-4xl text-gray-400 p-4"
      // style={{
      //   backgroundImage,
      // }}
    >
      <div className="w-11/12 mx-auto px-8 pt-16 pb-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link href="/" className="text-4xl font-bold text-white">
            <Image src={logo} alt="Ongrid-logo" className="w-52" />
            </Link>
            <div className="flex gap-4 max-w-[200px]">
              <Link href="#" className="hover:text-white transition-colors">
                <RssIcon className="h-6 w-6" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Partnership Requests
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2">
            <h2 className="text-white text-3xl">Sign-Up to Our Newsletter</h2>
            <p className="">Stay updated on Ongrid Protocol latest updates.</p>
            <form className="flex  mt-5 transition-all ease-linear hover:shadow-lg focus-within:shadow-lg rounded-full border border-[#1a3b2d] p-1.5 pl-5 items-center bg-white w-9/12">
              <input
                type="text"
                className="flex-grow focus:outline-none dark:text-white bg-transparent text-gray-700"
                placeholder="What's on your mind?"
                id="search-box"
              />
              <button className="border dark:border-zinc-600 py-1 md:py-2 px-4 text-white text-sm rounded-full flex items-center justify-center bg-oga-green-dark hover:bg-oga-yellow-dark hover:bg-indigo-600 hover:text-gray-900 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-sm text-center">
          <p>2025 Ongrid Protocol All Rights Reserved.</p>
        </div>
      </div>
    </motion.div>
  );
}
