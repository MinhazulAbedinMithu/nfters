"use client";
import Link from "next/link";
import React, { useState } from "react";
import IndigoBtn from "./IndigoBtn";
import TransparentBtn from "./TransparentBtn";

const navItems = [
  {
    title: "Marketplace",
    slug: "/marketplace",
  },
  {
    title: "Resource",
    slug: "/resource",
  },
  {
    title: "About",
    slug: "/about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white z-50 fixed flex items-center justify-between w-full py-3 px-2 border border-[#EFEFEF]">
      <Link href="/" className="text-bold font-integral text-xl text-[#3D00B7]">
        NFTERS
      </Link>
      <div className="flex items-center justify-center gap-6">
        {navItems.map((navItem) => (
          <Link href={navItem.slug} key={navItem.slug} className="">
            {navItem.title}
          </Link>
        ))}
      </div>
      <div className="border-2 rounded-md border-[#EFEFEF]">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="bg-transparent px-[15px] py-[8px] text-[16px] rounded-md"
        />
      </div>
      <div className="flex items-center justify-center gap-5 flex-col sm:flex-row">
        <IndigoBtn text="Upload" />
        <TransparentBtn text="Connect Wallet" />
      </div>
      {/* Desktop Navigation */}
      {/* <div className="sm:flex hidden items-center justify-center gap-6">
        
      </div> */}

      {/* Mobile Navigation  */}
      {/* <div className="sm:hidden flex relative"></div> */}
    </nav>
  );
};

export default Navbar;
