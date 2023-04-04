import React from "react";
import User from "../User";

function AuthorLink() {
  return (
    <div
      id="author_wrapper"
      className="w-full bg-cremeBg h-14 rounded-md px-5 md:h-40 md:rounded-2xl"
    >
      <div id="author" className="flex items-center h-full">
        <User />
        <p className="text-sm font-medium tracking-tight">Trix Visuals</p>
      </div>
    </div>
  );
}

export default AuthorLink;
