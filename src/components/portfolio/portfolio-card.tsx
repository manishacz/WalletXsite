import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  portfolio: {
    id: string;
    name: string;
    description: string;
    value: number;
    change: number;
    chartData: Array<{ date: string; value: number }>;
  };
  timeRange: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio, timeRange }) => {
  return (
    <Card className="bg-content1 border-none overflow-hidden">
      <CardBody className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold">{portfolio.name}</h3>
              <p className="text-foreground-500 text-sm">{portfolio.description}</p>
            </div>
            <div className="flex gap-2">
              <Button isIconOnly size="sm" variant="light">
                <Icon icon="lucide:download" className="text-lg" />
              </Button>
              <Button isIconOnly size="sm" variant="light">
                <Icon icon="lucide:bell" className="text-lg" />
              </Button>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">${portfolio.value.toLocaleString()}</span>
              <div className={`flex items-center ${portfolio.change >= 0 ? 'text-success' : 'text-danger'}`}>
                <Icon icon={portfolio.change >= 0 ? "lucide:trending-up" : "lucide:trending-down"} className="mr-1" />
                <span className="font-medium">{portfolio.change.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[120px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolio.chartData}>
              <XAxis 
                dataKey="date" 
                hide={true}
              />
              <YAxis 
                hide={true}
                domain={['dataMin - 500', 'dataMax + 500']}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={portfolio.change >= 0 ? "#14F195" : "#f31260"} 
                strokeWidth={2}
                dot={false}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="p-4 border-t border-divider">
          <Button 
            as={Link}
            to={`/portfolio/${portfolio.id}`}
            variant="flat" 
            color="primary" 
            fullWidth
            endContent={<Icon icon="lucide:chevron-right" />}
          >
            View Details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};