import Header from "@/components/Header/Header";
import ArticleInfo from "@/components/Posts/ArticleInfo";
import AuthorLink from "@/components/Posts/AuthorLink";
import BlogContent from "@/components/Posts/BlogContent";
import React from "react";

function InnerPageArticle() {
  return (
    <div className="w-full h-screen ">
      <div
        id="wrapper"
        className="bg-cremeBg h-full flex flex-col items-center justify-center px-5 md:pt-8 md:px-14 relative mb-28 md:mb-488 lg:mb-544"
      >
        <Header />
        <ArticleInfo
          genre="Productivity"
          title="The Need for Community and Connection"
          description="The Cost of Loneliness: Women, Work and The Invisible Force That’s
          Undermining Them As They Rise"
        />
        <div className="w-full h-InnerImage px-5 md:px-14 absolute -bottom-10 md:-bottom-2/4 ">
          <div
            className="h-full bg-cover bg-no-repeat "
            style={{ backgroundImage: "url(/img/dummy-image-1.jpg)" }}
          ></div>
        </div>
      </div>
      <div id="content_wrapper" className="px-5 md:px-14 md:max-w-4xl m-auto">
        <BlogContent published="Published March 28, 2023" />
        <AuthorLink />
      </div>
    </div>
  );
}

export default InnerPageArticle;
