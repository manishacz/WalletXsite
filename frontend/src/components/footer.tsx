import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Security", href: "#security" },
        { name: "Roadmap", href: "#" },
        { name: "Pricing", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Help Center", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: "logos:twitter", href: "#" },
    { icon: "logos:discord-icon", href: "#" },
    { icon: "logos:github-icon", href: "#" },
    { icon: "logos:telegram", href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-divider pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="logos:solana" width={24} height={24} />
              <span className="font-bold text-xl">WalletX</span>
            </div>
            <p className="text-foreground-500 mb-6 max-w-md">
              The most secure and user-friendly Web3 wallet for the Solana blockchain, designed for the modern crypto investor.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-foreground-400 hover:text-primary">
                  <Icon icon={social.icon} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-foreground-500 hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-500 text-sm">
            © {currentYear} WalletX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-foreground-500 text-sm hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground-500 text-sm hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-foreground-500 text-sm hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};