"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Dropdown = ({ pages }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="text-[20px] font-medium leading-140 text-neutral-10">
          Pages
        </div>
        {isDropdownOpen ? (
          <IoMdArrowDropup className="text-2xl" />
        ) : (
          <IoMdArrowDropdown className="text-2xl" />
        )}
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          {pages.map((page) => (
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
  );
};

export default Dropdown;
