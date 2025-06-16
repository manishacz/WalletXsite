import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="feature-card bg-content1 border-none transition-all duration-300">
        <CardBody className="p-6">
          <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
            <Icon icon={icon} className="text-primary text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground-500">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: "lucide:shield",
      title: "Secure Storage",
      description: "Your keys, your crypto. Non-custodial security with advanced encryption and biometric protection."
    },
    {
      icon: "lucide:globe",
      title: "Global Support",
      description: "Access your assets from anywhere in the world with multi-language support and 24/7 assistance."
    },
    {
      icon: "lucide:layout-dashboard",
      title: "Easy Management",
      description: "Simplified portfolio tracking with intuitive dashboards and real-time market data."
    },
    {
      icon: "lucide:zap",
      title: "Lightning Fast",
      description: "Experience blazing fast transactions on Solana with minimal fees and instant confirmations."
    },
    {
      icon: "lucide:layers",
      title: "Multi-Asset Support",
      description: "Store, send, and receive hundreds of tokens and NFTs on the Solana ecosystem."
    },
    {
      icon: "lucide:code",
      title: "Developer Friendly",
      description: "Seamless integration with dApps and comprehensive API for developers."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            WalletX combines security, speed, and simplicity to provide the ultimate Solana wallet experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};