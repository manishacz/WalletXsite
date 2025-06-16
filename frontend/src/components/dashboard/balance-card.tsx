import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { value: 2700 },
  { value: 2750 },
  { value: 2690 },
  { value: 2800 },
  { value: 2750 },
  { value: 2830 },
  { value: 2751.46 }
];

export const BalanceCard: React.FC = () => {
  return (
    <Card className="bg-content1 border-none">
      <CardBody className="p-6">
        <h2 className="text-lg font-medium mb-3">Total Balance</h2>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold">$2,751.46</h1>
            <div className="flex items-center mt-2 text-success">
              <Icon icon="lucide:trending-up" className="mr-1" />
              <span className="font-medium">8.55%</span>
            </div>
          </div>
          
          <div className="w-32 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14F195" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#14F195" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#14F195" 
                  strokeWidth={2}
                  fill="url(#colorValue)" 
                  isAnimationActive={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};