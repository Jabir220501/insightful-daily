import React from "react";
import ArticleCardBig from "./ArticleCardBig";
import ArticleCardSmall from "./ArticleCardSmall";

function ArticleDay() {
  return (
    <div className="mt-28 mb-9">
      <h2 className="font-light text-xl mb-2 md:text-5xl lg:text-7xl lg:mb-8">
        Article’s of the <span className="font-semibold italic">day</span>
        <span className="font-semibold text-yellow">.</span>
      </h2>
      <div id="wrapper" className="md:flex md:justify-between">
        <ArticleCardBig
          genre="Productivity"
          title="The Need for Community and Connection"
          description=" The Cost of Loneliness: Women, Work and The Invisible Force That’s
            Undermining Them As They Rise"
          width="md:w-arItemB"
          height="h-arItemB"
        />
        <div className="flex md:flex-col md:justify-between md:w-arItemS">
          <ArticleCardSmall
            genre="Productivity"
            title="The Need for Community and Connection"
            button=" Read more"
          />
          {/* <ArticleCardSmall
            genre="Productivity"
            title="The Need for Community and Connection"
            button=" Read more"
          /> */}
          <div className="w-full h-28 md:h-full rounded-3xl bg-slate-950"></div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDay;
