import React from "react";
import ArticleCardBig from "./ArticleCardBig";

function ArticleWeek() {
  return (
    <div className="mt-28 mb-9">
      <h2 className="font-light text-xl mb-2 md:text-5xl lg:text-7xl lg:mb-8">
        Latest <span className="font-semibold italic">Article's</span>
        <span className="font-semibold text-yellow">.</span>
      </h2>
      <div className="w-full">
        <ArticleCardBig
          genre="Productivity"
          title="The Need for Community and Connection"
          description=" The Cost of Loneliness: Women, Work and The Invisible Force That’s
          Undermining Them As They Rise"
          width="w-full"
          height="h-arItemB"
        />
      </div>
    </div>
  );
}

export default ArticleWeek;
