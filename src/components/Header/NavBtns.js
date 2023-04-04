import React from "react";
import User from "../User";

function Avatar() {
  return (
    <div className="flex items-center">
      <button className="hidden md:block mr-10 bg-yellow rounded-full p-2 px-12 text-white">
        Create a blog!
      </button>
      <User />
      <div class="flex md:hidden">
        <div class="space-y-1">
          <span class="block w-6 h-1 bg-yellow rounded-md"></span>
          <span class="block w-6 h-1 bg-yellow rounded-md"></span>
          <span class="block w-6 h-1 bg-yellow rounded-md"></span>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
