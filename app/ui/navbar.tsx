"use client";

import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="sticky top-0 flex justify-center bg-white w-full border-b">
      <div className="flex justify-between px-24 space-x-4 max-w-7xl w-full">
        <Link
          className={clsx("text-sky-500 font-semibold p-3 text-lg", {})}
          href={"/"}
        >
          Phucnh
        </Link>
        <div className="flex">
          <Link
            className={clsx("p-3 font-semibold text-slate-700 px-6", {
              "border-b-2 border-sky-500": pathname === "/tech",
            })}
            href={"/tech"}
          >
            Tech
          </Link>
          <Link
            className={clsx("p-3 font-semibold text-slate-700 px-6", {
              "border-b-2 border-sky-500": pathname === "/life",
            })}
            href={"/life"}
          >
            Life
          </Link>
          <Link
            className={clsx("p-3 font-semibold text-slate-700 px-6", {
              "border-b-2 border-sky-500": pathname === "/about",
            })}
            href={"/about"}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
