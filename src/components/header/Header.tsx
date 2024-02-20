import { Avatar, AvatarFallback, AvatarImage } from "@/ui-components/ui/avatar";
import { Input } from "@/ui-components/ui/input";
import Link from "next/link";
import React from "react";
import UserNav from "./UserNav";

export const Header = () => {
  return (
    <div className="my-5">
      <div className="px-10 flex justify-between">
        <div>
          <div className="flex gap-5 items-center">
            <h5>theCoderGang</h5>
            <nav className="flex gap-3">
              <Link
                href="/dashboard"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Overview
              </Link>
              <Link
                href="/dashboard/quiz"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Customers
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Products
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Settings
              </Link>
            </nav>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[100px] lg:w-[300px]"
            />
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};
