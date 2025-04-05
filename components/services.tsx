"use client";

import {
  Code,
  Smartphone,
  PenTool,
  Rocket,
  Paintbrush,
  ScanSearch,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    icon: <Code className="w-8 h-8 text-primary" />,
    desc: "Modern, fast and scalable websites built with cutting-edge technologies like Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    title: "App Development",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    desc: "Custom mobile and desktop applications for Android, iOS and cross-platform environments.",
  },
  {
    title: "Software Solutions",
    icon: <Rocket className="w-8 h-8 text-primary" />,
    desc: "Enterprise software solutions tailored to optimize and automate your business processes.",
  },
  {
    title: "Graphic Design",
    icon: <PenTool className="w-8 h-8 text-primary" />,
    desc: "Visually appealing and brand-aligned design for web, print, UI/UX, and social media.",
  },
  {
    title: "SEO & Marketing",
    icon: <ScanSearch className="w-8 h-8 text-primary" />,
    desc: "Grow your digital presence and rank higher with powerful SEO strategies and campaigns.",
  },
  {
    title: "Brand Identity",
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    desc: "Full-service branding to establish a unique, memorable and consistent brand across platforms.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-background"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-primary/30 to-purple-500/20 blur-3xl opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/20 to-purple-600/10 blur-2xl opacity-20 rounded-full animate-pulse delay-200" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Our Services
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          We offer high-quality digital solutions designed to help your business
          grow and thrive in the digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title}>
            <Card className="bg-card/60 backdrop-blur-md border border-border rounded-2xl hover:shadow-xl hover:scale-[1.015] transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
