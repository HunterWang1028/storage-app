"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNavigationProps } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { logoutUser } from "@/lib/actions/user.actions";

const MobileNavigation = ({
  fullName,
  avatar,
  email,
  $id: ownerId,
  accountId,
}: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="mobile-header">
      <div className="flex">
        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={45}
          height={39}
          className="h-auto"
        />
        <p className="h3 ml-3 flex items-center justify-center text-brand">
          Storage
        </p>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="Search"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen bg-dark-200 px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatar}
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className=" sm:hidden lg:block">
                <p className=" subtitle-2 capitalize text-gray-200">
                  {fullName}
                </p>
                <p className="caption text-gray-400">{email}</p>
              </div>
            </div>
            <Separator className=" mb-4 bg-light-200/20" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ url, name, icon }) => (
                <Link href={url} key={name} className=" lg:w-full">
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathname === url && "shad-active"
                    )}
                  >
                    <Image src={icon} alt={name} width={24} height={24} />
                    <p>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className=" my-5 bg-light-200/20" />
          <div className=" flex flex-col justify-between gap-5 pb-5">
            <FileUploader ownerId={ownerId} accountId={accountId} />
            <Button
              type="submit"
              className=" mobile-sign-out-button"
              onClick={async () => {
                await logoutUser();
              }}
            >
              <Image
                src="/assets/icons/logout.svg"
                alt="logo"
                width={24}
                height={24}
              />
              <p>Logout</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
