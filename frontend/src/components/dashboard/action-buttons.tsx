import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const ActionButtons: React.FC = () => {
  const actions = [
    { name: "Buy", icon: "lucide:dollar-sign", path: "/buy", color: "default" },
    { name: "Sell", icon: "lucide:credit-card", path: "/sell", color: "default" },
    { name: "Swap", icon: "lucide:repeat", path: "/swap", color: "default" },
    { name: "Send", icon: "lucide:arrow-up-right", path: "/send", color: "default" },
    { name: "Receive", icon: "lucide:arrow-down-left", path: "/receive", color: "default" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {actions.map((action) => (
        <Button
          key={action.name}
          as={Link}
          to={action.path}
          variant="flat"
          color={action.color as any}
          className="h-14 text-foreground"
          startContent={<Icon icon={action.icon} className="text-xl" />}
          fullWidth
        >
          {action.name}
        </Button>
      ))}
    </div>
  );
};