import Link from "next/link";
import React from "react";

function ArticleInfo(props) {
  return (
    <div id="articleInfo" className="max-w-4xl md:mb-40">
      <h3
        id="genre"
        className="text-xs text-yellow uppercase md:text-base md:mb-4"
      >
        {props.genre}
      </h3>
      <h1 id="title" className="text-xl mb-4 md:text-6xl md:mb-8">
        {props.title}
      </h1>
      <p
        id="description"
        className="text-xs font-light mb-4 text-cremeTxt md:text-lg md:mb-8"
      >
        {props.description}
      </p>
      <div id="author" className="flex items-center">
        <Link
          href={"/author/" + props.authorNameLink + "-" + props.authorInfoLink}
        >
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 mr-1">
            <span class="text-gray-300">
              {props.firstName + `${props.lastName ? props.lastName : ""}`}
            </span>
          </div>
        </Link>
        <div id="info">
          <Link
            href={
              "/author/" + props.authorNameLink + "-" + props.authorInfoLink
            }
          >
            <h4 id="name" className="text-xs font-medium">
              {props.author}
            </h4>
          </Link>
          <p className="text-yellow text-xs">
            {props.published}{" "}
            <span className="text-cremeTxt">/{props.readingTime}min read</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleInfo;
