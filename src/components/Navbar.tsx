"use client";

import { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  const session = true;
  const admin = true;

  return (
    <div className="relative flex items-center justify-between h-18 border-0 border-b-[0.1px] border-b-gray-50/10 px-4">
      <div className="text-xl font-bold text-btn md:text-2xl lg:text-3xl">
        BlogApp
      </div>
      <NavLinks />
      <button className="md:hidden" onClick={() => setOpenSidebar(true)}>
        Open
      </button>
      {openSidebar && (
        <>
          <div
            onClick={() => setOpenSidebar(false)}
            className="absolute z-10 top-0 right-0 w-full h-screen bg-black/85 md:hidden cursor-pointer"
          ></div>
          <div className="absolute z-20 top-0 right-0 w-3/4 h-screen bg-black md:hidden border-l border-l-gray-50/10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              {navlinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.title}
                  className={`${pathname === link.path && "bg-white text-sm text-black px-4 py-1 rounded-full "} hover:${pathname === link.path ? "no-underline" : "underline"} `}
                >
                  {link.title}
                </Link>
              ))}
              {session &&
                (admin ? (
                  <>
                    <Link
                      href={"/admin"}
                      className={`${pathname === "/admin" && "bg-white text-sm text-black px-4 py-1 rounded-full "} hover:${pathname === "/admin" ? "no-underline" : "underline"} `}
                    >
                      Admin
                    </Link>
                    <button className="cursor-pointer px-4 py-2 bg-btn text-white rounded-full flex items-center gap-2 text-sm">
                      Logout
                    </button>
                  </>
                ) : (
                  <button className="cursor-pointer text-sm px-4 py-2 bg-btn text-white rounded-full flex items-center gap-2">
                    Logout
                  </button>
                ))}
            </div>
            <button
              className="md:hidden absolute cursor-pointer -left-6 top-0 px-2 py-1 text-xs bg-gray-500/50 rounded-full"
              onClick={() => setOpenSidebar(false)}
            >
              X
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
