import React from "react";

function AuthorLink(props) {
  return (
    <div
      id="author_wrapper"
      className="w-full bg-cremeBg h-14 rounded-md px-5 md:h-40 md:rounded-2xl"
    >
      <div id="author" className="flex items-center h-full">
        <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 mr-1">
          <span class="text-gray-300">
            {props.firstName + `${props.lastName ? props.lastName : ""}`}
          </span>
        </div>
        <p className="text-sm font-medium tracking-tight">{props.author}</p>
      </div>
    </div>
  );
}

export default AuthorLink;
