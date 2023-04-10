import Header from "@/components/Header/Header";
import ArticleCardBig from "@/components/Home/ArticleCardBig";
import { getAllArticle } from "@/lib/Fetcher";
import React from "react";

function index({ articles }) {
  console.log(data);
  return (
    <div>
      <Header />
      <div id="wrapper" className="px-5 md:pt-8 md:px-14 h-full">
        <div className="mt-28 mb-9 ">
          <div className="row md:flex md:flex-wrap">
            <div className="w-1/2 md:w-1/4 p-2">
              <ArticleCardBig
                genre="Productivity"
                title="The Need for Community and Connection"
                description=" The Cost of Loneliness: Women, Work and The Invisible Force That’s
      Undermining Them As They Rise"
                width="md:max-w-135"
                height="h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const articles = await getAllArticle();
  return {
    props: {
      articles,
    },
  };
}

export default index;
