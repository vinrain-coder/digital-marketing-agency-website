"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO at Company Inc.",
    image: "/icons/businessman.svg",
    quote:
      "Working with this agency was an amazing experience. They delivered results above and beyond our expectations.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Director at Startup Co.",
    image: "/icons/female-user.svg",
    quote:
      "The team understood our needs and provided exceptional service. Their attention to detail made all the difference.",
  },
  {
    name: "Samuel Lee",
    title: "Product Manager at TechCorp",
    image: "/icons/male-user.svg",
    quote:
      "They are highly professional and have excellent communication. The result was exactly what we envisioned!",
  },
  {
    name: "Emily Clark",
    title: "Founder of Creative Hub",
    image: "/icons/female-user.svg",
    quote:
      "This agency truly cares about their clients. They go above and beyond to ensure success. We couldn't be happier.",
  },
  {
    name: "Lindan Krugger",
    title: "Founder of Vingram.LLC",
    image: "/icons/female-user.svg",
    quote:
      "This agency truly cares about their clients. They go above and beyond to ensure success. We couldn't be happier.",
  },
  {
    name: "Doe Johnah",
    title: "Founder of Grastify",
    image: "/icons/businessman.svg",
    quote:
      "This agency truly cares about their clients. They go above and beyond to ensure success. We couldn't be happier.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-background"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-primary/30 to-purple-500/20 blur-3xl opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/20 to-purple-600/10 blur-2xl opacity-20 rounded-full animate-pulse delay-200" />
      </div>
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Here’s what some of our valued clients have to say about working with
          us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name}>
            <Card className="bg-card/60 backdrop-blur-md border border-border rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all">
              <div className="relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full object-cover mx-auto -mt-12 border-2 border-primary"
                  width={48}
                  height={48}
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground italic text-center">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
