"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import ham from "../assets/public/icons/hamburger.svg";

import logo from "../assets/public/icons/logo.svg";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={ham}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white ">
          {" "}
          <Link
            href="/"
            className=" flex cursor-pointer items-center gap-1 px-4"
          >
            <Image alt="logo" src={logo} width={34} height={34} />
            <h1 className="sidebar-logo text-26 font-ibm-plex-serif font-bold text-black-1">
              HORIZON
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks?.map((menu) => {
                  const isActivePath = pathname === menu.route;
                  return (
                    <SheetClose asChild key={menu.route}>
                      <Link
                        href={menu.route}
                        key={menu.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActivePath,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={menu.imgURL}
                            alt={menu.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActivePath,
                            })}
                          />
                        </div>
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActivePath,
                          })}
                        ></p>
                        {menu.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
