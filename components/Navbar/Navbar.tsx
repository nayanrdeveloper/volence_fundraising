import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);
  interface navItemStruct {
    name: string;
    to: string;
  }
  const navItemList: navItemStruct[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About Us",
      to: "/",
    },
    {
      name: "FAQ",
      to: "/",
    },
    {
      name: "Volunteer",
      to: "/",
    },
  ];
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            className="mr-3 h-10 w-28"
            alt="Logo"
            width={90}
            height={120}
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <AiOutlineMenu />
        </button>
        <div
          className={`${open ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItemList.map((navItem) => {
              return (
                <li key={navItem.name}>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-light-grey rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-global-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {navItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
