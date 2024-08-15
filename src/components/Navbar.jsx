"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <>
      <Container>
        <div className="justify-between flex items-center">
          {/* logo */}
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={198}
            height={46}
            className="object-contain"
          />
          {/* nav item */}
          <div className="space-x-4">
            {navLinks?.map((item) => (
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
          </div>
          {/*login button */}
          <button className="px-4 py-2 bg-primary text-white rounded">
            Login
          </button>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
