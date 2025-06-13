"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image
              src="/lovio-icon.png"
              alt="Lovio logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
            <span className="text-lg font-bold text-[#7B61FF] ml-2 tracking-tight">
              Lovio
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-[#7B61FF] transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("problem-solution")}
              className="text-gray-700 hover:text-[#7B61FF] transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-[#7B61FF] transition-colors duration-200 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-[#7B61FF] text-white px-6 py-2 rounded-full hover:bg-[#6B51E6] transition-colors duration-200 font-medium"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-[#7B61FF] text-white px-4 py-2 rounded-full hover:bg-[#6B51E6] transition-colors duration-200 font-medium text-sm"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}