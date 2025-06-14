import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const SolanaAdvantages: React.FC = () => {
  const advantages = [
    {
      icon: "lucide:zap",
      title: "Lightning Fast",
      description: "Process up to 65,000 transactions per second with sub-second finality",
      metric: "400ms",
      metricLabel: "Block Time"
    },
    {
      icon: "lucide:coins",
      title: "Ultra Low Fees",
      description: "Transactions cost a fraction of a penny, making microtransactions viable",
      metric: "$0.00025",
      metricLabel: "Avg. Transaction Fee"
    },
    {
      icon: "lucide:leaf",
      title: "Energy Efficient",
      description: "Solana's proof-of-stake consensus uses minimal energy compared to other blockchains",
      metric: "99.9%",
      metricLabel: "More Efficient than BTC"
    },
    {
      icon: "lucide:layers",
      title: "Rich Ecosystem",
      description: "Access thousands of dApps, DeFi protocols, NFT marketplaces, and more",
      metric: "11,500+",
      metricLabel: "Active Developers"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-content2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Solana?</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Built on the fastest blockchain in the world, WalletX leverages Solana's speed and efficiency
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-content1 border-none h-full">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                      <Icon icon={advantage.icon} className="text-primary text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-foreground-500 mb-4">{advantage.description}</p>
                      
                      <Divider className="my-4" />
                      
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold gradient-text">{advantage.metric}</span>
                        <span className="text-foreground-400 text-sm">{advantage.metricLabel}</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-content3 px-4 py-2 rounded-full">
            <Icon icon="logos:solana" />
            <span className="text-sm font-medium">Powered by Solana Blockchain</span>
          </div>
        </div>
      </div>
    </section>
  );
};