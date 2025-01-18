"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between relative text-white z-50 ">
      <Link
        className="flex items-center justify-center md:justify-start"
        href="/"
      >
        <span className="ml-2 text-2xl ">Lumi Life Therapy</span>
      </Link>
      <nav className="hidden md:flex gap-4 sm:gap-6">
        <Link
          className={`text-md font-medium hover:underline underline-offset-4 ${
            pathname === "/" ? "underline" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`text-md font-medium hover:underline underline-offset-4 ${
            pathname === "/about" ? "underline" : ""
          }`}
          href="/about"
        >
          About Us
        </Link>
        {/* <Link
          className={`text-md font-medium hover:underline underline-offset-4 ${
            pathname === "/anxiety" ? "underline" : ""
          }`}
          href="/anxiety"
        >
          Anxiety
        </Link>
        <Link
          className={`text-md font-medium hover:underline underline-offset-4 ${
            pathname === "/cancer" ? "underline" : ""
          }`}
          href="/cancer"
        >
          Cancer
        </Link> */}
        <Link
          className={`text-md font-medium hover:underline underline-offset-4 ${
            pathname === "/faqs" ? "underline" : ""
          }`}
          href="/faqs"
        >
          FAQs
        </Link>
        <Link
          className={`text-md font-medium hover:underline underline-offset-4 ${
            pathname === "/make-an-appointment" ? "underline" : ""
          }`}
          href="/make-an-appointment"
        >
          Make An Appointment
        </Link>
      </nav>
      <Button
        variant="ghost"
        className="w-10 px-0 md:hidden"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden text-black">
          <nav className="flex flex-col p-4">
            <Link className="py-2" href="/" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link className="py-2" href="/about" onClick={closeMobileMenu}>
              About Us
            </Link>
            {/* <Link className="py-2" href="/anxiety" onClick={closeMobileMenu}>
              Anxiety
            </Link>
            <Link className="py-2" href="/cancer" onClick={closeMobileMenu}>
              Cancer
            </Link> */}
            <Link className="py-2" href="/faqs" onClick={closeMobileMenu}>
              FAQs
            </Link>
            <Link
              className="py-2"
              href="/make-an-appointment"
              onClick={closeMobileMenu}
            >
              Make An Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
