import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function ActiveLink({ href, children }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  const className = isActive ? "text-yellow" : "text-cremeTxt";
  return (
    <li className={`text-md ${className}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
}

function Nav() {
  return (
    <nav className="">
      <ul className="hidden space-x-10 md:flex">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/article">Articles</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
      </ul>
    </nav>
  );
}

export default Nav;
