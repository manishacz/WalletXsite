import React from "react";
import { Hero } from "./hero";
import { Features } from "./features";
import { SolanaAdvantages } from "./solana-advantages";
import { CallToAction } from "./call-to-action";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <SolanaAdvantages />
      <CallToAction />
    </>
  );
};