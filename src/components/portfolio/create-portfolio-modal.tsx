import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CreatePortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePortfolioModal: React.FC<CreatePortfolioModalProps> = ({ isOpen, onClose }) => {
  const [portfolioName, setPortfolioName] = React.useState("");
  const [portfolioDescription, setPortfolioDescription] = React.useState("");
  
  const handleSubmit = () => {
    // Handle portfolio creation logic here
    onClose();
    setPortfolioName("");
    setPortfolioDescription("");
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Create New Portfolio</ModalHeader>
            <ModalBody>
              <Input
                label="Portfolio Name"
                placeholder="Enter portfolio name"
                value={portfolioName}
                onValueChange={setPortfolioName}
                variant="bordered"
                className="mb-4"
              />
              <Input
                label="Description"
                placeholder="Enter a brief description"
                value={portfolioDescription}
                onValueChange={setPortfolioDescription}
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button 
                color="primary" 
                onPress={handleSubmit}
                startContent={<Icon icon="lucide:plus" />}
                isDisabled={!portfolioName}
              >
                Create Portfolio
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};