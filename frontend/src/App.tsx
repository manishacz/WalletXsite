import React from "react";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { SolanaAdvantages } from "./components/solana-advantages";
import { CallToAction } from "./components/call-to-action";
import { Footer } from "./components/footer";
import { ThemeSwitcher } from "./components/theme-switcher";
import { DashboardPage } from "./components/dashboard/dashboard-page";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/home-page";
import { PortfolioPage } from "./components/portfolio/portfolio-page";
import { SwapPage } from "./components/swap/swap-page";
import { TradingPage } from "./components/trading/trading-page";
import { SecurityPage } from "./components/security/security-page";
import { AuthPage } from "./components/auth/auth-page";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar maxWidth="xl" className="bg-background/80 backdrop-blur-md border-b border-divider">
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <Icon icon="logos:solana" width={24} height={24} />
            <p className="font-bold text-xl">WalletX</p>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/" className="font-medium">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/dashboard" className="font-medium">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/portfolio" className="font-medium">
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/trading" className="font-medium">
              Trade
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/dashboard/swap" className="font-medium">
              Swap
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/secure" className="font-medium">
              Security
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="gap-4">
          <NavbarItem className="flex">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Button 
              as={Link} 
              color="primary" 
              variant="flat" 
              startContent={<Icon icon="lucide:wallet" />}
            >
              Connect Wallet
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/dashboard/swap" element={<SwapPage />} />
          <Route path="/trading" element={<TradingPage />} />
          <Route path="/secure" element={<SecurityPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}