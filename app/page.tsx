import CTASection from "@/components/call-to-action";
import ContactSection from "@/components/contact";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Values from "@/components/value";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Values />
      <Portfolio />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  );
}
