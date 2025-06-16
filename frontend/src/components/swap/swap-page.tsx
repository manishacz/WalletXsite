import React from "react";
import { Card, CardBody, Select, SelectItem, Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const tokens = [
  { key: "btc", name: "Bitcoin", icon: "logos:bitcoin" },
  { key: "eth", name: "Ethereum", icon: "logos:ethereum" },
  { key: "ada", name: "Cardano", icon: "cryptocurrency:ada" },
  { key: "sol", name: "Solana", icon: "logos:solana" }
];

export const SwapPage: React.FC = () => {
  const [fromToken, setFromToken] = React.useState("");
  const [toToken, setToToken] = React.useState("");
  const [fromAmount, setFromAmount] = React.useState("");
  const [toAmount, setToAmount] = React.useState("");
  const [slippage, setSlippage] = React.useState("0.5");

  const handleSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const getQuote = () => {
    // Implement API call to get quote
    console.log("Getting quote...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto bg-content1">
        <CardBody className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Swap Tokens</h2>
            <Button isIconOnly variant="light" aria-label="Settings">
              <Icon icon="lucide:settings" className="text-xl" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">From</label>
              <div className="flex gap-2">
                <Select
                  placeholder="Select token"
                  selectedKeys={[fromToken]}
                  onChange={(e) => setFromToken(e.target.value)}
                  className="w-1/2"
                >
                  {tokens.map((token) => (
                    <SelectItem key={token.key} startContent={<Icon icon={token.icon} />}>
                      {token.name}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  type="number"
                  placeholder="0.0"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="w-1/2"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button isIconOnly variant="light" onPress={handleSwap}>
                <Icon icon="lucide:arrow-down-up" className="text-xl" />
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">To</label>
              <div className="flex gap-2">
                <Select
                  placeholder="Select token"
                  selectedKeys={[toToken]}
                  onChange={(e) => setToToken(e.target.value)}
                  className="w-1/2"
                >
                  {tokens.map((token) => (
                    <SelectItem key={token.key} startContent={<Icon icon={token.icon} />}>
                      {token.name}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  type="number"
                  placeholder="0.0"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="w-1/2"
                  isReadOnly
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Slippage Tolerance (%)</label>
              <Input
                type="number"
                placeholder="0.5"
                value={slippage}
                onChange={(e) => setSlippage(e.target.value)}
              />
            </div>

            <Button color="primary" className="w-full" onPress={getQuote}>
              Get Quote
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};