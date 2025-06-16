import React from "react";
import { Card, CardBody, Tabs, Tab, Chip } from "@heroui/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface PortfolioPerformanceProps {
  portfolios: Array<{
    id: string;
    name: string;
    value: number;
    chartData: Array<{ date: string; value: number }>;
  }>;
  timeRange: string;
}

export const PortfolioPerformance: React.FC<PortfolioPerformanceProps> = ({ portfolios, timeRange }) => {
  const [selectedPortfolio, setSelectedPortfolio] = React.useState("all");
  
  // Generate combined chart data
  const combinedData = portfolios[0].chartData.map((item, index) => {
    const dataPoint: any = { date: item.date };
    
    portfolios.forEach(portfolio => {
      dataPoint[portfolio.id] = portfolio.chartData[index].value;
    });
    
    dataPoint.total = portfolios.reduce((sum, portfolio) => sum + portfolio.chartData[index].value, 0);
    
    return dataPoint;
  });
  
  const chartData = selectedPortfolio === "all" ? combinedData : combinedData.map(item => ({
    date: item.date,
    value: item[selectedPortfolio]
  }));
  
  const portfolioOptions = [
    { key: "all", name: "All Portfolios" },
    ...portfolios.map(portfolio => ({ key: portfolio.id, name: portfolio.name }))
  ];
  
  const getColor = (portfolioId: string) => {
    switch(portfolioId) {
      case 'defi': return '#9945FF';
      case 'blue-chip': return '#14F195';
      case 'total': return '#00C2FF';
      default: return '#00C2FF';
    }
  };
  
  return (
    <Card className="bg-content1 border-none">
      <CardBody className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-xl font-semibold">Portfolio Performance</h2>
          
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {portfolioOptions.map((option) => (
              <Chip
                key={option.key}
                color={selectedPortfolio === option.key ? "primary" : "default"}
                variant={selectedPortfolio === option.key ? "flat" : "bordered"}
                onClick={() => setSelectedPortfolio(option.key)}
                className="cursor-pointer"
              >
                {option.name}
              </Chip>
            ))}
          </div>
        </div>
        
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="date" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', padding: '10px' }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
              />
              
              {selectedPortfolio === "all" ? (
                <>
                  {portfolios.map((portfolio) => (
                    <Area
                      key={portfolio.id}
                      type="monotone"
                      dataKey={portfolio.id}
                      name={portfolio.name}
                      stroke={getColor(portfolio.id)}
                      fill={`${getColor(portfolio.id)}33`}
                      stackId="1"
                    />
                  ))}
                  <Area
                    type="monotone"
                    dataKey="total"
                    name="Total"
                    stroke={getColor('total')}
                    fill="none"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </>
              ) : (
                <Area
                  type="monotone"
                  dataKey="value"
                  name={portfolioOptions.find(p => p.key === selectedPortfolio)?.name}
                  stroke={getColor(selectedPortfolio)}
                  fill={`${getColor(selectedPortfolio)}33`}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {portfolios.map((portfolio) => {
            const startValue = portfolio.chartData[0].value;
            const endValue = portfolio.chartData[portfolio.chartData.length - 1].value;
            const change = ((endValue - startValue) / startValue) * 100;
            
            return (
              <Card key={portfolio.id} className="bg-content2 border-none">
                <CardBody className="p-4">
                  <h4 className="text-sm text-foreground-500">{portfolio.name}</h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg font-bold">${portfolio.value.toLocaleString()}</span>
                    <div className={`flex items-center text-xs ${change >= 0 ? 'text-success' : 'text-danger'}`}>
                      {change >= 0 ? '+' : ''}{change.toFixed(2)}%
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
          
          <Card className="bg-content2 border-none">
            <CardBody className="p-4">
              <h4 className="text-sm text-foreground-500">Total</h4>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-lg font-bold">
                  ${portfolios.reduce((sum, p) => sum + p.value, 0).toLocaleString()}
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
};