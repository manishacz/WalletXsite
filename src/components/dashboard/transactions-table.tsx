import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

export const TransactionsTable: React.FC = () => {
  const transactions = [
    {
      id: "tx1",
      type: "send",
      amount: "0.1 ETH",
      token: "ETH",
      time: "about 1 hour ago",
      status: "confirmed"
    },
    {
      id: "tx2",
      type: "receive",
      amount: "100 USDC",
      token: "USDC",
      time: "about 2 hours ago",
      status: "confirmed"
    }
  ];

  const renderTypeIcon = (type: string) => {
    if (type === "send") {
      return <Icon icon="lucide:arrow-up-right" className="text-foreground" />;
    } else if (type === "receive") {
      return <Icon icon="lucide:arrow-down-left" className="text-foreground" />;
    } else if (type === "swap") {
      return <Icon icon="lucide:repeat" className="text-foreground" />;
    }
    return null;
  };

  return (
    <Card className="bg-content1 border-none">
      <CardBody className="p-6">
        <h2 className="text-lg font-medium mb-4">Recent Transactions</h2>
        
        <Table 
          aria-label="Recent transactions" 
          removeWrapper
          classNames={{
            th: "bg-transparent text-foreground-500 border-b border-divider",
            td: "py-4 border-b border-divider"
          }}
        >
          <TableHeader>
            <TableColumn>Type</TableColumn>
            <TableColumn>Amount</TableColumn>
            <TableColumn>Token</TableColumn>
            <TableColumn>Time</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <div className="flex items-center">
                    {renderTypeIcon(transaction.type)}
                    <span className="ml-2">{transaction.type}</span>
                  </div>
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.token}</TableCell>
                <TableCell>{transaction.time}</TableCell>
                <TableCell>
                  <Chip 
                    size="sm" 
                    color={transaction.status === "confirmed" ? "success" : "warning"}
                    variant="flat"
                  >
                    {transaction.status}
                  </Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};