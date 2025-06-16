import React from "react";
import { Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { BalanceCard } from "./balance-card";
import { ActionButtons } from "./action-buttons";
import { NetworkInfo } from "./network-info";
import { TransactionsTable } from "./transactions-table";

export const DashboardPage: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = React.useState("ethereum");
  
  const cryptoOptions = [
    { key: "ethereum", name: "Ethereum", icon: "logos:ethereum" },
    { key: "solana", name: "Solana", icon: "logos:solana" },
    { key: "bitcoin", name: "Bitcoin", icon: "logos:bitcoin" },
    { key: "usdc", name: "USDC", icon: "logos:usd-coin" }
  ];
  
  const selectedOption = cryptoOptions.find(option => option.key === selectedCrypto);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="flat" 
              className="min-w-[160px] justify-between"
              endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
            >
              <div className="flex items-center gap-2">
                <Icon icon={selectedOption?.icon || ""} className="text-xl" />
                <span>{selectedOption?.name}</span>
              </div>
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Cryptocurrency selection" 
            onAction={(key) => setSelectedCrypto(key as string)}
          >
            {cryptoOptions.map((option) => (
              <DropdownItem
                key={option.key}
                startContent={<Icon icon={option.icon} className="text-xl" />}
              >
                {option.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <BalanceCard />
        
        <ActionButtons />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NetworkInfo type="gas" />
          <NetworkInfo type="status" />
        </div>
        
        <TransactionsTable />
      </div>
    </div>
  );
};