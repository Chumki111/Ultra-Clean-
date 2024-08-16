"use client";
import React from "react";
import Drawer from "react-modern-drawer";
import { FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";

const DrawerMenu = ({ isOpen, onClose, navLinks, pagesDropdown, pathName }) => {
  return (
    <Drawer open={isOpen} onClose={onClose} direction="right" className="p-4">
      <button onClick={onClose} className="text-2xl mb-4">
        <FaTimes />
      </button>

      <div className="space-y-4">
        {navLinks.map((item) => (
          <NavLink
            key={item.title}
            path={item.path}
            title={item.title}
            isActive={pathName === item.path}
            onClick={onClose} // Close drawer on click
          />
        ))}
        <Dropdown pages={pagesDropdown} />
      </div>

      <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded">
        Login
      </button>
    </Drawer>
  );
};

export default DrawerMenu;
