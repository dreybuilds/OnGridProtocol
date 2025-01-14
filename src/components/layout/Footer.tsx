import Link from "next/link";
import { RssIcon } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/ongrid-logo.png";
import { IconBrandX } from "@tabler/icons-react";

export default function Footer() {
  // const color = useMotionValue("#28a745");

  // Create the gradient template
  // const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 60%, ${color})`
  return (
    // <motion.div
    //   classNameName="rounded-t-4xl text-gray-400 p-4"
    //   // style={{
    //   //   backgroundImage,
    //   // }}
    // >
    //   <div classNameName="md:w-11/12 mx-auto px-8 pt-16 pb-8 rounded-3xl">
    //     <div classNameName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       <div classNameName="space-y-6">
    //         <Link href="/" classNameName="text-4xl font-bold text-white">
    //         <Image src={logo} alt="Ongrid-logo" classNameName="w-52" />
    //         </Link>
    //         <div classNameName="flex gap-4 max-w-[200px]">
    //           <Link href="#" classNameName="hover:text-white transition-colors">
    //             <RssIcon classNameName="h-6 w-6" />
    //             <span classNameName="sr-only">Discord</span>
    //           </Link>
    //           <Link href="#" classNameName="hover:text-white transition-colors">
    //             <Twitter classNameName="h-6 w-6" />
    //             <span classNameName="sr-only">Twitter</span>
    //           </Link>
    //         </div>
    //       </div>

    //       <div classNameName="space-y-4">
    //         <h3 classNameName="text-lg font-medium text-white">Quick Links</h3>
    //         <ul classNameName="space-y-3">
    //           <li>
    //             <Link href="#" classNameName="hover:text-white transition-colors">
    //               Docs
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" classNameName="hover:text-white transition-colors">
    //               Privacy Policy
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" classNameName="hover:text-white transition-colors">
    //               Terms of Service
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" classNameName="hover:text-white transition-colors">
    //               Partnership Requests
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div classNameName="space-y-4 col-span-2">
    //         <h2 classNameName="text-white text-3xl">Sign-Up to Our Newsletter</h2>
    //         <p classNameName="">Stay updated on Ongrid Protocol latest updates.</p>
    //         <form classNameName="flex  mt-5 transition-all ease-linear hover:shadow-lg focus-within:shadow-lg rounded-full border border-[#1a3b2d] p-1.5 pl-5 items-center bg-white w-9/12">
    //           <input
    //             type="text"
    //             classNameName="flex-grow focus:outline-none dark:text-white bg-transparent text-gray-700"
    //             placeholder="What's on your mind?"
    //             id="search-box"
    //           />
    //           <button classNameName="border dark:border-zinc-600 py-1 md:py-2 px-4 text-white text-sm rounded-full flex items-center justify-center bg-oga-green-dark hover:bg-oga-yellow-dark hover:bg-indigo-600 hover:text-gray-900 transition">
    //             Subscribe
    //           </button>
    //         </form>
    //       </div>
    //     </div>

    //     {/* Copyright */}
    //     <div classNameName="mt-16 text-sm text-center">
    //       <p>2025 Ongrid Protocol All Rights Reserved.</p>
    //     </div>
    //   </div>
    // </motion.div>

    <footer className="w-full py-12 sm:py-20 bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row pb-12 gap-7 lg:gap-0 ">
          <Link href="/" className="text-4xl font-bold text-white">
            <Image src={logo} alt="Ongrid-logo" className="w-36 lg:w-52" />
          </Link>
        </div>
        <div className="flex justify-between flex-col py-4 min-[500px]:py-14 gap-8 min-[500px]:gap-16 lg:gap-0 md:flex-row">
          <div className="flex items-start flex-row gap-8 sm:gap-12 xl:gap-24">
            <div className="block">
              <h4 className="text-gray-200 mb-8 text-lg">Quick Links</h4>
              <ul className="grid text-gray-400 gap-4 min-[500px]:gap-6 min-[500px]:text-left">
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
          </div>
          <div className="block my-8 lg:max-w-md">
            <h3 className=" font-semibold text-xl md:text-2xl text-gray-300 leading-9 mb-4 text-center md:text-left">
              Sign-Up to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-8 text-center md:text-left">
              Stay updated on Ongrid Protocol latest updates.
            </p>
            <div className="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-2.5 sm:flex-row gap-6 lg:gap-0 flex flex-col items-center justify-between max-w-lg sm:max-w-7xl ">
              <input
                type="text"
                name="email"
                className="py-2.5 px-6 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none flex-1 w-[90%] max-w-lg mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent"
                placeholder="Your email here..."
              />
              <button
                type="submit"
                className="w-fit py-2.5 px-7 bg-oga-green shadow-md rounded-full text-white font-semibold hover:bg-oga-yellow-dark hover:text-gray-900"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="py-9 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
            <span className="text-sm text-gray-500 ">
              ©2025 Ongrid Protocol All Rights Reserved.
            </span>
            <div className="flex gap-4 text-white max-w-[200px]">
              <Link href="#" className="hover:text-white transition-colors">
                <RssIcon className="h-6 w-6" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <IconBrandX className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
