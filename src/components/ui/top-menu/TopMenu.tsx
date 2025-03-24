"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";

import { useUIStore } from "@/store";
import { CiMenuBurger } from "react-icons/ci";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex justify-between items-center w-full sm:px-10">
      <Link
        href="/"
        className="flex flex-2 sm:flex-1 justify-start items-center"
      >
        <Image
          className="p-2"
          alt="pizzeria-los-arcos-logo"
          src={logo}
          width={140}
          height={140}
        />
      </Link>

      {/* Search, Cart, Menu */}
      <div className="flex flex-1 justify-end items-center">
        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-3xl"
          onClick={openSideMenu}
        >
          <CiMenuBurger />
        </button>
      </div>
    </nav>
  );
};
