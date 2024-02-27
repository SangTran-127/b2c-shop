import Link from "next/link";
import LogoIcon from "@/components/icons/logo";
import { Input } from "@/ui-components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui-components/ui/avatar";
import { ShoppingBagIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui-components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui-components/ui/sheet";

import AuthenticationTab from "@/components/authentication-tab/AuthenticationTab";

type Menu = {
  title: string;
  path: string;
};

const menu: Menu[] = [
  {
    title: "All",
    path: "/collection",
  },
  {
    title: "shirt",
    path: "/search/shirt",
  },
];

export default function Navbar() {
  const isUserAuth = false;
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center justify-between px-6">
        <div className="flex">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoIcon />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              My shop
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="w-full flex justify-center">
          <div className="w-1/2">
            <Input type="search" placeholder="Search for products..." />
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-6">
            <Sheet>
              <SheetTrigger>
                <ShoppingBagIcon className="" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <div className="">
              {/* popover */}
              {isUserAuth ? (
                <Popover>
                  <PopoverTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent>
                    Place content for the popover here.
                  </PopoverContent>
                </Popover>
              ) : (
                //
                <AuthenticationTab />
              )}
              {/* dialog */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
