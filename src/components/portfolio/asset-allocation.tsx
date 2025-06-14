import React from "react";
import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface AssetAllocationProps {
  portfolios: Array<{
    id: string;
    name: string;
    value: number;
  }>;
}

export const AssetAllocation: React.FC<AssetAllocationProps> = ({ portfolios }) => {
  const [selectedView, setSelectedView] = React.useState("by-portfolio");
  
  const COLORS = ['#9945FF', '#14F195', '#00C2FF', '#F31260', '#F5A524', '#7928CA'];
  
  const portfolioData = portfolios.map((portfolio, index) => ({
    name: portfolio.name,
    value: portfolio.value,
    color: COLORS[index % COLORS.length]
  }));
  
  const assetData = [
    { name: "Bitcoin", value: 15000, color: COLORS[0] },
    { name: "Ethereum", value: 12000, color: COLORS[1] },
    { name: "Solana", value: 8000, color: COLORS[2] },
    { name: "USDC", value: 3500, color: COLORS[3] },
    { name: "Other", value: 2100, color: COLORS[4] }
  ];
  
  const data = selectedView === "by-portfolio" ? portfolioData : assetData;
  
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
    return percent > 0.05 ? (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };
  
  return (
    <Card className="bg-content1 border-none">
      <CardBody className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-xl font-semibold">Asset Allocation</h2>
          
          <Tabs 
            aria-label="Asset allocation view" 
            selectedKey={selectedView} 
            onSelectionChange={setSelectedView as any}
            size="sm"
          >
            <Tab key="by-portfolio" title="By Portfolio" />
            <Tab key="by-asset" title="By Asset" />
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[350px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', padding: '10px' }}
                />
                <Legend 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  formatter={(value, entry, index) => (
                    <span className="text-foreground">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Allocation Breakdown</h3>
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">${item.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-content3 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${(item.value / totalValue) * 100}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-foreground-500 mt-1">
                    {((item.value / totalValue) * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};