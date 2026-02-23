"use client";

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

const NavLinks = () => {
  const pathname = usePathname();
  const session = true;
  const admin = true;

  return (
    <div className="items-center gap-4 hidden md:flex">
      {navlinks.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`${pathname === link.path && "bg-white text-black px-4 py-1 rounded-full "} hover:${pathname === link.path ? "no-underline" : "underline"} `}
        >
          {link.title}
        </Link>
      ))}
      {session &&
        (admin ? (
          <>
            <Link
              href={"/admin"}
              className={`${pathname === "/admin" && "bg-white text-black px-4 py-1 rounded-full "} hover:${pathname === "/admin" ? "no-underline" : "underline"} `}
            >
              Admin
            </Link>
            <button className="cursor-pointer px-4 py-2 bg-btn text-white rounded-full flex items-center gap-2">
              Logout
            </button>
          </>
        ) : (
          <button className="cursor-pointer px-4 py-2 bg-btn text-white rounded-full flex items-center gap-2">
            Logout
          </button>
        ))}
    </div>
  );
};

export default NavLinks;
