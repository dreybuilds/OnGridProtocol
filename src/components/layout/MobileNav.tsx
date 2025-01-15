"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconBrandTelegram, IconBrandX } from "@tabler/icons-react";
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
          className="text-6xl block  cursor-pointer text-white"
          size={32}
        />
      </SheetTrigger>
      <SheetContent className="bg-zinc-900 text-white border-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-10 mt-12">
          <Link
            href="/projects"
            className="text-lg cursor-pointer hover:text-green-400"
          >
            Projects
          </Link>

          <ScrollLink
            to="audits"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </ScrollLink>

          <ScrollLink
            to="reviews"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Impact
          </ScrollLink>

          <ScrollLink
            to="reviews"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </ScrollLink>

          <Link href="https://forms.gle/moCpCKMtVwCpVa92A" target="blank">
            <Button className=" bg-oga-green p-4  border border-oga-green-dark  text-white text-lg rounded-full hover:bg-oga-yellow-dark hover:text-gray-900  md:text-lg md:px-6 md:py-3">
              Build with us <ArrowRight className="ml-4" />
            </Button>
          </Link>
        </div>

        <div className=" flex gap-6 text-white mt-12">
          <Link
            href="https://t.me/ongridprotocol"
            target="blank"
            className="hover:text-white transition-colors"
          >
            <IconBrandTelegram className="h-6 w-6" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href="https://x.com/OngridProtocol"
            target="blank"
            className="hover:text-white transition-colors"
          >
            <IconBrandX className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
