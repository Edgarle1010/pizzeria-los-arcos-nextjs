"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";
import { FaCat, FaDog } from "react-icons/fa";
import { GiTurtle } from "react-icons/gi";

import { useUIStore } from "@/store";

export const Sidebar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const onSearchTerm = () => {
    const query = searchTerm.trim();
    if (query.length === 0) return;

    navigateTo(`/search/${query}`);
  };

  const navigateTo = (url: string) => {
    closeMenu();
    router.push(url);
  };

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blue */}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[300px] md:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 overflow-auto",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />
      </nav>
    </div>
  );
};
