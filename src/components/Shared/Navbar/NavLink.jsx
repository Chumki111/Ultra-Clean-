"use client";
import React from "react";
import Link from "next/link";

const NavLink = ({ path, title, isActive }) => {
  return (
    <Link
      href={path}
      className={`text-[20px] font-medium leading-140 ${
        isActive ? "text-primary" : "text-neutral-10"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
