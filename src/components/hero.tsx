import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70 z-0"></div>
      
      {/* Purple glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      
      {/* Green glow */}
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Gateway to <span className="gradient-text">Digital Assets</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-foreground-500 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Secure, simple, and powerful Web3 wallet for the modern crypto investor on the Solana blockchain
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              color="primary" 
              className="px-8 font-medium"
              startContent={<Icon icon="lucide:user-plus" />}
              as={Link}
              to="/auth"
            >
              Sign Up
            </Button>
            <Button 
              size="lg" 
              variant="bordered" 
              className="px-8 font-medium"
              startContent={<Icon icon="lucide:log-in" />}
              as={Link}
              to="/auth"
            >
              Log In
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="gradient-border p-4 rounded-xl overflow-hidden">
            <img 
              src="https://img.heroui.chat/image/dashboard?w=1200&h=600&u=walletx" 
              alt="WalletX Dashboard" 
              className="rounded-lg w-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
            <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};