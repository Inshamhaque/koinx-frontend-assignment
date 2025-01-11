"use client";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div>
          <Image
            src="https://www.koinx.com/guides/_next/static/media/Logo.cdf70f30.svg"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center space-x-8 text-base font-medium">
          <div className="cursor-pointer hover:text-gray-600 transition">
            Crypto Taxes
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            Free Tools
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            Resource Center
          </div>
          <button className="text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="line bg-black h-1 w-full rounded"></div>
          <div className="line bg-black h-1 w-full rounded"></div>
          <div className="line bg-black h-1 w-full rounded"></div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
          <div className="cursor-pointer hover:text-gray-600 transition">
            Crypto Taxes
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            Free Tools
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            Resource Center
          </div>
          <button className="text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
