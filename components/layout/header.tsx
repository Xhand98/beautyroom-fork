"use client";

import Link from "next/link";
import locales from "@/locales/header.json";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Scissors } from "lucide-react";

export default function Header() {
  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="bg-[#FBF8F3] shadow-md border-b border-[#DDD5C8]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-3 items-center p-5">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
            <Scissors className="h-6 w-6 text-primary" />
            <Label className="text-xl font-semibold tracking-tight">BeautyRoom</Label>
          </Link>
          </div>

          <ul className="flex justify-center gap-6">
            {locales.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative inline-flex items-center px-1 text-sm font-medium select-none text-[#2D2520]/70 hover:text-[#2D2520] transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A67C52]/20 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A67C52] after:transition-all after:duration-700 hover:after:w-full"
                >
                  <Label>{item.label}</Label>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-4">
            <Button className="bg-[#8c4f2a] text-white px-4 py-2 rounded-md transition-transform duration-200 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-[#A67C52] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A67C52]/30">
              Iniciar sesión
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
