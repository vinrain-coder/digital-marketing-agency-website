"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 md:gap-10 items-center z-10 py-16 md:py-24">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Design
            </span>
            ,<br />
            Build & Scale Brands
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
            We help startups and enterprises launch fast, clean, and scalable
            digital products that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#contact">
              <Button className="px-6 py-3 text-md rounded-full">
                Start a Project
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button
                variant="outline"
                className="px-6 py-3 text-md rounded-full border-muted text-muted-foreground hover:text-primary"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center relative">
          <div className="relative w-[280px] md:w-[380px] aspect-square rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.2)] border border-primary/20 backdrop-blur-lg">
            <Image
              src={HeroImage}
              alt="Hero Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
