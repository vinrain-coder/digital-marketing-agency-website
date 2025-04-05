"use client";

import { Heart, Star, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Integrity",
    icon: <Shield className="w-8 h-8 text-primary" />,
    desc: "We uphold honesty and transparency in every interaction, ensuring trust and long-term relationships.",
  },
  {
    title: "Innovation",
    icon: <Star className="w-8 h-8 text-primary" />,
    desc: "We strive to be at the forefront of technology and design, delivering creative solutions to complex problems.",
  },
  {
    title: "Collaboration",
    icon: <Users className="w-8 h-8 text-primary" />,
    desc: "We believe in the power of teamwork, bringing diverse skills and perspectives together for the best outcomes.",
  },
  {
    title: "Excellence",
    icon: <Heart className="w-8 h-8 text-primary" />,
    desc: "We are committed to delivering the highest quality in everything we do, ensuring superior results every time.",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-background"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-primary/30 to-purple-500/20 blur-3xl opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/20 to-purple-600/10 blur-2xl opacity-20 rounded-full animate-pulse delay-200" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Our Core Values
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          We hold ourselves to high standards and are driven by our core values,
          which guide every project and interaction.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div key={value.title}>
            <Card className="bg-card/60 backdrop-blur-md border border-border rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {value.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
