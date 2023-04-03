import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="">
      <ul className="hidden space-x-10 md:flex">
        <li className="text-md text-cremeTxt">
          <Link href="/">Home</Link>
        </li>
        <li className="text-md text-cremeTxt">
          <Link href="/article">Articles</Link>
        </li>
        <li className="text-md text-cremeTxt">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
