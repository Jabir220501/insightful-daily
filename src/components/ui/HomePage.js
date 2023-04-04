import React from "react";
import Header from "../Header/Header";
import ArticleDay from "../Home/ArticleDay";
import ArticleWeek from "../Home/ArticleWeek";

function HomePage() {
  return (
    <div  className="h-screen">
      <div id="wrapper" className="px-5 md:pt-8 md:px-14 h-full">
        <Header />
        <ArticleDay />
        <ArticleWeek />
      </div>
    </div>
  );
}

export default HomePage;
