"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form handling logic)
    setTimeout(() => {
      alert("Your message has been sent!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
          Get in Touch with Us
        </h2>

        <p className="text-lg sm:text-xl text-center mb-8 max-w-2xl mx-auto">
          Whether you have a question or want to start a project, we&apos;d love
          to hear from you. Fill out the form below, and we’ll get back to you
          as soon as possible!
        </p>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <Label htmlFor="name" className="text-lg font-semibold mb-2">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="py-5 rounded-lg"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <Label htmlFor="email" className="text-lg font-semibold mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="py-5 rounded-lg"
              placeholder="Your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <Label htmlFor="message" className="text-lg font-semibold mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="py-5 rounded-lg"
              placeholder="Your message"
              rows={6}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              //   isLoading={isSubmitting}
              className="bg-primary px-6 py-4 rounded-lg shadow-lg mt-4 hover:scale-105 transition-all cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
