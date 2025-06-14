import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface NetworkInfoProps {
  type: "gas" | "status";
}

export const NetworkInfo: React.FC<NetworkInfoProps> = ({ type }) => {
  return (
    <Card className="bg-content1 border-none">
      <CardBody className="p-6">
        {type === "gas" ? (
          <>
            <h2 className="text-lg font-medium mb-3">Gas Price</h2>
            <div className="flex items-center">
              <span className="text-2xl font-bold">9.785819429 Gwei</span>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-medium mb-3">Network Status</h2>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
              <span className="text-lg">Network is healthy</span>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
};