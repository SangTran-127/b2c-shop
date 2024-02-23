"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui-components/ui/avatar";
import { Button } from "@/ui-components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/ui-components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/ui-components/ui/dialog";
import { Input } from "@/ui-components/ui/input";
import { Label } from "@/ui-components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/ui-components/ui/tabs";
import React, { useEffect, useState } from "react";
import LoginForm from "../form/login";
import RegisterForm from "../form/register";

const AuthenticationTab = () => {
  const [status, setStatus] = useState<"login" | "register">("login");

  const handleToggleStatus = () => {
    setStatus((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <TabStatus status={status} />
          <DialogFooter>
            {status === "login" ? (
              <div className="flex items-center gap-3 px-6">
                <p>Don&apos;t have an account?</p>
                <button
                  onClick={handleToggleStatus}
                  className="text-[#0f172a] font-medium underline"
                >
                  Register
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 px-6">
                <p>Do you have an account?</p>
                <button
                  onClick={handleToggleStatus}
                  className="text-[#0f172a] font-medium underline"
                >
                  Login
                </button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const TabStatus = ({ status }: { status: "login" | "register" }) => {
  return (
    <div>
      {status === "login" ? (
        <div>
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AuthenticationTab;
