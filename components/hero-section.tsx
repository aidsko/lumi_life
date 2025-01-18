"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black relative overflow-hidden">
      <Image
        src="/hero-background.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 container mx-auto max-w-screen-lg">
        <h1 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white animate-fadeIn">
          Helping women who struggle with anxiety and all people touched by
          cancer
        </h1>

        <div className="mt-5 sm:flex sm:justify-center">
          <Button className="bg-primary text-primary-foreground" size="lg">
            Make An Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
