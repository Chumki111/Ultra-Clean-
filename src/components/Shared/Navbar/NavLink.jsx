"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const NavLink = ({ links }) => {
  const pathName = usePathname();
  return (
    <>
      {links?.map((item) => (
        <Link
          className={`text-[20px] font-medium leading-140 ${
            pathName === item.path ? "text-primary" : "text-neutral-10"
          }`}
          key={item.title}
          href={item.path}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
