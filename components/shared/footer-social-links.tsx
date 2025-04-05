// components/SocialLinks.js

import Link from "next/link";
import Image from "next/image";
import GitHub from "@/public/icons/github.svg";
import X from "@/public/icons/x.svg";
import Facebook from "@/public/icons/facebook.svg";
import Instagram from "@/public/icons/instagram.svg";
import Discord from "@/public/icons/discord.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import WhatsApp from "@/public/icons/whatsapp.svg";

const socialLinks = [
  {
    href: "https://github.com/your-profile",
    icon: GitHub,
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/company/your-profile",
    icon: LinkedIn,
    alt: "LinkedIn",
  },
  {
    href: "https://twitter.com/your-profile",
    icon: X,
    alt: "X",
  },
  {
    href: "https://www.instagram.com/your-profile",
    icon: Instagram,
    alt: "Instagram",
  },
  {
    href: "https://www.discord.com/your-profile",
    icon: Discord,
    alt: "Discord",
  },
  {
    href: "https://www.facebook.com/your-profile",
    icon: Facebook,
    alt: "Facebook",
  },
  {
    href: "https://www.whatsapp.com/your-profile",
    icon: WhatsApp,
    alt: "WhatsApp",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ href, icon, alt }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          className="text-white hover:text-gray-300"
        >
          <Image
            src={icon}
            alt={alt}
            width={24}
            height={24}
            className="bg-white rounded-md"
          />
        </Link>
      ))}
    </div>
  );
}
