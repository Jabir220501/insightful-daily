import React from "react";
import User from "../User";

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
        <User />
        <div id="info">
          <h4 id="name" className="text-xs font-medium">
            Trix Visuals
          </h4>
          <p className="text-yellow text-xs">
            18 July 2022 <span className="text-cremeTxt">/ 10 min read</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleInfo;
