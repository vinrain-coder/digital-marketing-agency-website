"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Website",
    image: "/images/ecommerce.png",
    description:
      "A cutting-edge eCommerce platform built with MongoDB, Next.js, React, and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Job Board",
    image: "/images/job-board.png",
    description:
      "A sleek job appication mobile app designed for an enhanced user experience across Android and iOS.",
    link: "#",
  },
  {
    title: "AI SAAS Resume Builder",
    image: "/images/resume-builder.png",
    description:
      "A modern SaaS solution built with scalable backend systems and a user-friendly UI.",
    link: "#",
  },
  {
    title: "eCommerce with WIX",
    image: "/images/ecommerce2.png",
    description:
      "A modern eCommerce solution built with next.js for a user-friendly UI and WIX CMS.",
    link: "#",
  },
  {
    title: "Social Media Application",
    image: "/images/social-media.png",
    description:
      "A beatiful social media solution with cool interactive features and messaging",
    link: "#",
  },
  {
    title: "Developer's Portfolio",
    image: "/images/portfolio.png",
    description:
      "A stunning animated portfolio website for a freelance designer, with custom animations and transitions.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Our Portfolio
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Take a look at some of the best work we&apos;ve done for our clients.
          We pride ourselves on delivering top-notch results.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title}>
            <Card className="bg-card/60 backdrop-blur-md border border-border rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-t-2xl"
                  width={640}
                  height={320}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 rounded-t-2xl flex justify-center items-center opacity-0 hover:opacity-100 transition-all">
                  <Link
                    href={project.link}
                    className="text-white text-xl font-semibold"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
