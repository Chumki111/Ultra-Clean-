"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaTimes } from "react-icons/fa"; // Import close icon
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import NavLink from "./Navlink";
import Dropdown from "./Dropdown";
import Container from "../Container";
import PrimaryButton from "@/components/Button/PrimaryButton";

const Navbar = () => {
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
    <Container>
      <div className="justify-between flex items-center">
        {/* logo */}
        <Logo />

        {/* Hamburger menu button for mobile and tablet */}
        <button onClick={handleDrawerToggle}>
          <FiMenu className="lg:hidden text-2xl font-bold text-primary" />
        </button>

        {/* Desktop nav items */}
        <div className="hidden lg:flex space-x-7 items-center">
          {navLinks?.map((item) => (
            <NavLink
              key={item.title}
              path={item.path}
              title={item.title}
              isActive={pathName === item.path}
            />
          ))}

          {/* Pages dropdown */}
          <Dropdown pages={pagesDropdown} />
        </div>

        {/* Login button for desktop */}
        <PrimaryButton text="Login" />
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

        <div className="space-y-4 flex flex-col">
          {navLinks.map((item) => (
            <NavLink
              key={item.title}
              path={item.path}
              title={item.title}
              isActive={pathName === item.path}
              onClick={handleDrawerToggle}
            />
          ))}

          <Dropdown pages={pagesDropdown} />
        </div>

        {/* Login button for mobile and tablet */}
        <PrimaryButton text="Login" />
      </Drawer>
    </Container>
  );
};

export default Navbar;
