import React from "react";
import { Card, CardBody, Tabs, Tab, Input, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, password });
  };

  const handleGoogleAuth = () => {
    // Handle Google authentication
    console.log("Google authentication initiated");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-content1 border-none">
          <CardBody className="p-6">
            <div className="flex justify-center mb-6">
              <Icon icon="logos:solana" width={48} height={48} />
            </div>
            <h1 className="text-2xl font-bold text-center mb-6">Welcome to WalletX</h1>
            <Tabs 
              aria-label="Auth options" 
              selectedKey={activeTab}
              onSelectionChange={setActiveTab as any}
              className="mb-6"
            >
              <Tab key="login" title="Log In" />
              <Tab key="signup" title="Sign Up" />
            </Tabs>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email or Username"
                placeholder="Enter your email or username"
                type="text"
                value={email}
                onValueChange={setEmail}
                startContent={<Icon icon="lucide:mail" />}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onValueChange={setPassword}
                startContent={<Icon icon="lucide:lock" />}
              />
              <Button type="submit" color="primary" className="w-full">
                {activeTab === "login" ? "Log In" : "Sign Up"}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-foreground-500 mb-2">Or continue with</p>
              <Button 
                variant="bordered" 
                startContent={<Icon icon="logos:google-icon" />}
                className="w-full"
                onPress={handleGoogleAuth}
              >
                Google
              </Button>
            </div>
            {activeTab === "login" && (
              <p className="mt-4 text-center text-sm text-foreground-500">
                Don't have an account? <Link href="#" className="text-primary" onPress={() => setActiveTab("signup")}>Sign up</Link>
              </p>
            )}
            {activeTab === "signup" && (
              <p className="mt-4 text-center text-sm text-foreground-500">
                Already have an account? <Link href="#" className="text-primary" onPress={() => setActiveTab("login")}>Log in</Link>
              </p>
            )}
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};