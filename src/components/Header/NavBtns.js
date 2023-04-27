import Link from "next/link";
import React, { useState } from "react";
import User from "../User";
import { useRouter } from "next/router";
import LogoutBtn from "./LogoutBtn";

function ActiveLink({ href, children }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  const className = isActive ? "text-yellow" : "text-gray-900";
  return (
    <li className={`text-md ${className}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
function Avatar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const style = hamburgerOpen ? "block" : "hidden";
  return (
    <div className="flex items-center">
      <Link href="/dashboard/home">
        <button className="hidden md:block mr-10 bg-yellow rounded-full p-2 px-12 text-white">
          Create a blog!
        </button>
      </Link>

      <User />
      <div
        className="flex md:hidden cursor-pointer"
        onClick={() => setHamburgerOpen(true)}
      >
        <div className="space-y-1">
          <span className="block w-6 h-1 bg-yellow rounded-md"></span>
          <span className="block w-6 h-1 bg-yellow rounded-md"></span>
          <span className="block w-6 h-1 bg-yellow rounded-md"></span>
        </div>
      </div>
      <div
        id="hamburger-open"
        className={
          "fixed top-0 right-0 h-screen w-screen bg-gray-50 z-50 md:hidden " +
          style
        }
      >
        <div
          className="absolute right-5 top-5 md:hidden cursor-pointer"
          onClick={() => setHamburgerOpen(false)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-1 bg-white rounded-md"></span>
            <span className="block w-6 h-1 bg-white rounded-md"></span>
          </div>
        </div>
        <nav className="w-full h-full flex items-center justify-center">
          <ul className="space-y-10 md:hidden text-xl">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/article">Articles</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
            <ActiveLink href="/dashboard/home">Create a article!</ActiveLink>
            <div>
              <LogoutBtn />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Avatar;
