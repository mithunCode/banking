"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/public/icons/logo.svg";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            alt="logo"
            className="size-[24px] max-xl:size-14"
            src={logo}
            width={34}
            height={34}
          />
          <h1 className="sidebar-logo">HORIZON</h1>
        </Link>
        {sidebarLinks?.map((menu) => {
          const isActivePath = pathname === menu.route;
          return (
            <Link
              href={menu.route}
              key={menu.label}
              className={cn(
                "sidebar-link  text-gray-600 whitespace-nowrap px-0",
                {
                  "bg-bank-gradient text-white": isActivePath,
                }
              )}
            >
              <div className="relative size-6">
                <Image
                  src={menu.imgURL}
                  alt={menu.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActivePath })}
                />
              </div>
              <p
                className={cn("sidebar-label ", {
                  "text-white": isActivePath,
                })}
              ></p>
              {menu.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
