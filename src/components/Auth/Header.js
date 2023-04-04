import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="">
      <h1
        id="Logo"
        className="text-logo absolute top-5 left-5 md:top-5 md:left-14"
      >
        <Link href="/">
          Insightful{" "}
          <span id="logo_p2" className="font-semibold">
            Daily
            <span id="logo_dot" className="text-yellow font-semibold">
              .
            </span>
          </span>
        </Link>
      </h1>
    </div>
  );
}

export default Header;
