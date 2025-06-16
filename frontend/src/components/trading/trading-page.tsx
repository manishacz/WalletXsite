import React from "react";
import { Card, CardBody, Input, Button, Tabs, Tab, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";

const tokens = [
  { key: "btc", name: "Bitcoin (BTC)", price: 50000 },
  { key: "eth", name: "Ethereum (ETH)", price: 3000 },
  { key: "ada", name: "Cardano (ADA)", price: 0.45 },
  { key: "sol", name: "Solana (SOL)", price: 95 }
];

export const TradingPage: React.FC = () => {
  const [selectedToken, setSelectedToken] = React.useState("");
  const [orderType, setOrderType] = React.useState("market");
  const [amount, setAmount] = React.useState("");
  const [isBuying, setIsBuying] = React.useState(true);

  const handleTrade = () => {
    // Implement API call to place trade
    console.log(`${isBuying ? "Buying" : "Selling"} ${amount} ${selectedToken}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-content1">
          <CardBody className="p-6">
            <h2 className="text-2xl font-bold mb-6">Select Token</h2>
            <Input
              placeholder="Search tokens..."
              startContent={<Icon icon="lucide:search" />}
              className="mb-4"
            />
            <div className="space-y-2">
              {tokens.map((token) => (
                <Button
                  key={token.key}
                  className="w-full justify-between"
                  variant={selectedToken === token.key ? "flat" : "ghost"}
                  color={selectedToken === token.key ? "primary" : "default"}
                  onPress={() => setSelectedToken(token.key)}
                >
                  <span>{token.name}</span>
                  <span>${token.price.toLocaleString()}</span>
                </Button>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="bg-content1">
          <CardBody className="p-6">
            <h2 className="text-2xl font-bold mb-6">Trade</h2>
            <Tabs 
              aria-label="Trade options" 
              selectedKey={isBuying ? "buy" : "sell"}
              onSelectionChange={(key) => setIsBuying(key === "buy")}
              className="mb-4"
            >
              <Tab key="buy" title="Buy" />
              <Tab key="sell" title="Sell" />
            </Tabs>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Order Type</label>
                <Select
                  placeholder="Select order type"
                  selectedKeys={[orderType]}
                  onChange={(e) => setOrderType(e.target.value)}
                >
                  <SelectItem key="market">Market Order</SelectItem>
                  <SelectItem key="limit">Limit Order</SelectItem>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amount</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  endContent={<span className="text-small">{selectedToken.toUpperCase()}</span>}
                />
              </div>

              <Button 
                color="primary" 
                className="w-full" 
                onPress={handleTrade}
                isDisabled={!selectedToken || !amount}
              >
                {isBuying ? "Buy" : "Sell"} {selectedToken.toUpperCase()}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};