"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ fullName, avatar, email }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar ">
      <Link href="/">
        <div className="flex flex-1">
          <Image
            src="/assets/icons/logo-brand.svg"
            alt="logo"
            width={60}
            height={25}
            className=" hidden h-auto lg:block"
          />
          <p className="h2 hidden items-center justify-center pl-3 text-brand lg:flex">
            Storage
          </p>
        </div>
        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className=" lg:hidden"
        />
      </Link>

      <nav className=" sidebar-nav">
        <ul className=" flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className=" lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image src={icon} alt={name} width={24} height={24} />
                <p className=" hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src="/assets/images/files.png"
        alt="logo"
        width={506}
        height={418}
        className=" w-full"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block ">
          <p className="subtitle-2 capitalize text-gray-200">{fullName}</p>
          <p className="caption text-gray-400">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
