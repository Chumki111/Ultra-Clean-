"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathName = usePathname();
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About Us", path: "/about" },
    { title: "Blog", path: "/blog" },
  ];

  const pagesDropdown = [
    { title: "Page 1", path: "/page1" },
    { title: "Page 2", path: "/page2" },
    { title: "Page 3", path: "/page3" },
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
          <div className="space-x-4 flex items-center">
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
            {/* Pages dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-[20px] font-medium leading-140 text-neutral-10"
              >
                Pages
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  {pagesDropdown.map((page) => (
                    <Link
                      key={page.title}
                      href={page.path}
                      className="block px-4 py-2 text-sm text-neutral-10 hover:bg-gray-100"
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
