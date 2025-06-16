import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const CallToAction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const walletOptions = [
    { icon: "logos:metamask", name: "MetaMask" },
    { icon: "logos:coinbase", name: "Coinbase Wallet" },
    { icon: "lucide:wallet", name: "WalletConnect" },
    { icon: "lucide:mail", name: "Continue with Email" }
  ];

  return (
    <section id="security" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70 z-0"></div>
      
      {/* Purple glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      
      {/* Green glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-content1 border-none overflow-hidden">
            <CardBody className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Ready to Experience the Future of Crypto?
                  </motion.h2>
                  
                  <motion.p 
                    className="text-foreground-500 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Download WalletX now or connect your existing wallet to get started with the most secure and user-friendly Solana wallet.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      size="lg" 
                      color="primary" 
                      className="px-8 font-medium w-full md:w-auto"
                      startContent={<Icon icon="lucide:wallet" />}
                      onPress={() => setIsModalOpen(true)}
                    >
                      Connect Wallet
                    </Button>
                  </motion.div>
                </div>
                
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://img.heroui.chat/image/finance?w=600&h=400&u=walletx-cta" 
                    alt="WalletX Mobile App" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      {/* Connect Wallet Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md"
          >
            <Card className="bg-content1 border-none">
              <CardBody className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Connect to WalletX</h3>
                  <Button 
                    isIconOnly 
                    variant="light" 
                    onPress={() => setIsModalOpen(false)}
                  >
                    <Icon icon="lucide:x" className="text-lg" />
                  </Button>
                </div>
                
                <p className="text-foreground-500 mb-6">Choose your preferred method to connect</p>
                
                <div className="space-y-3">
                  {walletOptions.map((wallet, index) => (
                    <Button 
                      key={index}
                      className="w-full justify-start h-14 text-md"
                      variant={index === 3 ? "bordered" : "flat"}
                      color={index === 3 ? "default" : "default"}
                      startContent={<Icon icon={wallet.icon} className="text-xl" />}
                    >
                      {wallet.name}
                    </Button>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      )}
    </section>
  );
};