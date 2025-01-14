"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <MenuIcon
          className="text-6xl block md:hidden cursor-pointer text-white"
          size={32}
        />
      </SheetTrigger>
      <SheetContent className="bg-zinc-950 text-white border-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>

        <div className="flex flex-col gap-10 mt-12">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="audits"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </ScrollLink>

          <ScrollLink
            to="reviews"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Impact
          </ScrollLink>

          <ScrollLink
            to="reviews"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </ScrollLink>

          <Link
            href="https://app.deform.cc/form/6d07745a-8a46-4445-b064-4755c72e8c4b/?page_number=0"
            target="blank"
          >
            <Button className=" bg-oga-green p-4  border border-oga-green-dark  text-white text-lg rounded-full hover:bg-oga-yellow-dark hover:text-gray-900  md:text-lg md:px-6 md:py-3">
              Build with us <ArrowRight className="ml-4" />
            </Button>
          </Link>
        </div>

          <div className=" flex gap-6 text-white mt-12">
            <Link
              href="https://t.me/audits33"
              target="blank"
              className="text-3xl hover:underline text-white block underline-offset-4"
              prefetch={false}
            >
              <i className="bi bi-telegram"></i>
            </Link>
            <Link
              href="https://github.com/leeftk/leeftk/blob/main/README.md"
              target="blank"
              className="text-3xl hover:underline underline-offset-4"
              prefetch={false}
            >
              <i className="bi bi-github"></i>
            </Link>
            <Link
              href="https://x.com/solidityauditor"
              target="blank"
              className="text-2xl hover:underline underline-offset-4"
              prefetch={false}
            >
              <i className="bi bi-twitter-x"></i>
            </Link>
          </div>
        {/* </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
