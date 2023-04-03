import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center justify-between ">
      <h1 id="Logo" className="text-logo">
        <Link href="/">
          Insightful{" "}
          <span id="logo_p2" className="font-semibold">
            Daily
            <span className="text-yellow">.</span>
          </span>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
