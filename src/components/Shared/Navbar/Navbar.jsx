"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaTimes } from "react-icons/fa"; // Import close icon
import Container from "../Container";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

          {/* Hamburger menu button for mobile and tablet */}
          <button onClick={handleDrawerToggle} className="lg:hidden text-2xl">
            ☰
          </button>

          {/* Desktop nav items */}
          <div className="hidden lg:flex space-x-4 items-center">
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

          {/* Login button for desktop */}
          <button className="hidden lg:block px-4 py-2 bg-primary text-white rounded">
            Login
          </button>
        </div>

        {/* Mobile and Tablet Drawer */}
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          direction="right"
          className="p-4"
        >
          {/* Close button inside the drawer */}
          <button onClick={handleDrawerToggle} className="text-2xl mb-4">
            <FaTimes />
          </button>

          <div className="space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`block text-[20px] font-medium leading-140 ${
                  pathName === item.path ? "text-primary" : "text-neutral-10"
                }`}
                onClick={handleDrawerToggle} // Close drawer on click
              >
                {item.title}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-[20px] font-medium leading-140 text-neutral-10"
              >
                Pages
              </button>

              {isDropdownOpen && (
                <div className="mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                  {pagesDropdown.map((page) => (
                    <Link
                      key={page.title}
                      href={page.path}
                      className="block px-4 py-2 text-sm text-neutral-10 hover:bg-gray-100"
                      onClick={handleDrawerToggle} // Close drawer on click
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Login button for mobile and tablet */}
          <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded">
            Login
          </button>
        </Drawer>
      </Container>
    </>
  );
};

export default Navbar;
