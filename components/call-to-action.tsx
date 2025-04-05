"use client";

import CTAButton from "./shared/CTAButton";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-primary/30 to-purple-500/20 blur-3xl opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/20 to-purple-600/10 blur-2xl opacity-20 rounded-full animate-pulse delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Whether you&apos;re looking to develop a website, mobile app, or
          software solution, our team is here to help bring your vision to life.
          Let’s work together to create something amazing!
        </p>

        {/* Call to Action Button */}
        <div>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
