import React from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex items-center justify-between absolute top-5 left-5 right-5 md:top-8 md:left-14 md:right-14">
      <Logo />
      <Nav />
      <Avatar />
    </header>
  );
}

export default Header;
