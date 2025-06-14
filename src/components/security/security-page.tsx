import React from "react";
import { Card, CardBody, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

export const SecurityPage: React.FC = () => {
  const [password, setPassword] = React.useState("");

  const securityStatus = [
    { name: "SSL Encryption", status: "Active", color: "success" },
    { name: "2FA Status", status: "Not Enabled", color: "warning" },
    { name: "Last Backup", status: "Never", color: "danger" },
    { name: "Security Audit", status: "Passed", color: "success" },
  ];

  const auditLogs = [
    { time: "2023-06-09 14:30:22", type: "Login", description: "Successful login from new IP", address: "192.168.1.1" },
    { time: "2023-06-08 11:15:45", type: "Password Change", description: "Password updated successfully", address: "192.168.1.1" },
    { time: "2023-06-07 09:22:10", type: "2FA", description: "Two-factor authentication disabled", address: "192.168.1.2" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Security Center</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-content1">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Icon icon="lucide:shield" className="mr-2" />
              Wallet Security
            </h2>
            <Input
              label="Encryption Password"
              placeholder="Enter a strong password"
              type="password"
              value={password}
              onValueChange={setPassword}
              className="mb-4"
            />
            <Button color="primary" className="w-full mb-4" startContent={<Icon icon="lucide:key" />}>
              Generate New Wallet
            </Button>
            <div className="flex gap-4">
              <Button variant="bordered" className="flex-1" startContent={<Icon icon="lucide:download" />}>
                Export Backup
              </Button>
              <Button variant="bordered" className="flex-1" startContent={<Icon icon="lucide:upload" />}>
                Import Backup
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-content1">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Icon icon="lucide:shield-check" className="mr-2" />
              Security Status
            </h2>
            <div className="space-y-4">
              {securityStatus.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <Chip color={item.color as any} variant="flat">
                    {item.status}
                  </Chip>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <Card className="bg-content1">
        <CardBody>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <Icon icon="lucide:list" className="mr-2" />
              Security Audit Log
            </h2>
            <Button variant="light" startContent={<Icon icon="lucide:refresh-cw" />}>
              Refresh
            </Button>
          </div>
          <Table removeWrapper aria-label="Security audit log">
            <TableHeader>
              <TableColumn>Time</TableColumn>
              <TableColumn>Type</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>Address</TableColumn>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{log.time}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>{log.description}</TableCell>
                  <TableCell>{log.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};