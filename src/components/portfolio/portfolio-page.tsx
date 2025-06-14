import React from "react";
import { Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { PortfolioCard } from "./portfolio-card";
import { AssetAllocation } from "./asset-allocation";
import { PortfolioPerformance } from "./portfolio-performance";
import { CreatePortfolioModal } from "./create-portfolio-modal";

export const PortfolioPage: React.FC = () => {
  const [timeRange, setTimeRange] = React.useState("24h");
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("overview");
  
  const timeRanges = [
    { key: "24h", name: "24h" },
    { key: "7d", name: "7d" },
    { key: "30d", name: "30d" },
    { key: "90d", name: "90d" },
    { key: "1y", name: "1y" },
    { key: "all", name: "All" }
  ];
  
  const selectedTimeRange = timeRanges.find(range => range.key === timeRange);
  
  const portfolios = [
    {
      id: "defi",
      name: "DeFi Portfolio",
      description: "Decentralized Finance investments",
      value: 5600,
      change: 2.5,
      chartData: [
        { date: "16/05/2023", value: 5200 },
        { date: "23/05/2023", value: 6100 },
        { date: "30/05/2023", value: 4800 },
        { date: "09/06/2023", value: 5600 }
      ]
    },
    {
      id: "blue-chip",
      name: "Blue Chip Holdings",
      description: "Major cryptocurrency investments",
      value: 35000,
      change: 1.8,
      chartData: [
        { date: "16/05/2023", value: 32000 },
        { date: "23/05/2023", value: 38000 },
        { date: "30/05/2023", value: 31000 },
        { date: "09/06/2023", value: 35000 }
      ]
    }
  ];
  
  const totalValue = portfolios.reduce((sum, portfolio) => sum + portfolio.value, 0);
  const weightedChange = portfolios.reduce((sum, portfolio) => sum + (portfolio.change * portfolio.value), 0) / totalValue;
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Portfolios</h1>
          <p className="text-foreground-500 mt-1">
            Manage and track your investment portfolios
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="flat" 
                className="min-w-[100px]"
                endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
              >
                {selectedTimeRange?.name}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Time range selection" 
              onAction={(key) => setTimeRange(key as string)}
            >
              {timeRanges.map((range) => (
                <DropdownItem key={range.key}>
                  {range.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      
      <Tabs 
        aria-label="Portfolio tabs" 
        selectedKey={selectedTab} 
        onSelectionChange={setSelectedTab as any}
        className="mb-6"
      >
        <Tab key="overview" title="Overview" />
        <Tab key="performance" title="Performance" />
        <Tab key="allocation" title="Allocation" />
      </Tabs>
      
      {selectedTab === "overview" && (
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-content1 border-none">
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-lg font-medium mb-1">Total Portfolio Value</h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">${totalValue.toLocaleString()}</span>
                      <div className={`flex items-center ${weightedChange >= 0 ? 'text-success' : 'text-danger'}`}>
                        <Icon icon={weightedChange >= 0 ? "lucide:trending-up" : "lucide:trending-down"} className="mr-1" />
                        <span className="font-medium">{weightedChange.toFixed(2)}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    color="primary"
                    startContent={<Icon icon="lucide:plus" />}
                    onPress={() => setIsCreateModalOpen(true)}
                  >
                    Create Portfolio
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolios.map((portfolio) => (
                    <PortfolioCard 
                      key={portfolio.id}
                      portfolio={portfolio}
                      timeRange={timeRange}
                    />
                  ))}
                  
                  <Card className="border-dashed border-2 border-divider bg-transparent h-[280px] flex items-center justify-center cursor-pointer hover:bg-content2/50 transition-colors">
                    <CardBody className="flex flex-col items-center justify-center" onClick={() => setIsCreateModalOpen(true)}>
                      <div className="rounded-full bg-content3 p-3 mb-4">
                        <Icon icon="lucide:plus" className="text-2xl" />
                      </div>
                      <p className="text-lg font-medium">Create New Portfolio</p>
                    </CardBody>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      )}
      
      {selectedTab === "performance" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PortfolioPerformance portfolios={portfolios} timeRange={timeRange} />
        </motion.div>
      )}
      
      {selectedTab === "allocation" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AssetAllocation portfolios={portfolios} />
        </motion.div>
      )}
      
      <CreatePortfolioModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
};