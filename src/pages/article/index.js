import Header from "@/components/Header/Header";
import ArticleCardBig from "@/components/Home/ArticleCardBig";
import AuthorLink from "@/components/Posts/AuthorLink";
import SearchInput from "@/components/SearchInput";
import User from "@/components/User";
import { getAllArticle } from "@/lib/Fetcher";
import { lengthCharacter } from "@/lib/limitedWords";
import Link from "next/link";
import React from "react";

function index({ articles }) {
  console.log(articles);
  return (
    <div>
      <Header />
      <div id="wrapper" className="px-5 md:pt-8 md:px-14 h-full">
        <div className="mt-28 mb-9 ">
        <div className="flex justify-end mb-5">
        <SearchInput />
        </div>
          <div className="row md:flex md:flex-wrap">
            {articles.map((article) =>
              !article.published ? (
                ""
              ) : (
                <div className="w-1/1 md:w-1/5 p-2  cursor-pointer">
                  <Link
                    href={`/article/post/${article.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}-${article.articleId}`}
                    className="h-full"
                  >
                    <div
                      className="img h-52 bg-cover bg-no-repeat bg-yellow md:hover:bg-[length:105%] transition duration-200 mb-2 "
                      style={{
                        backgroundImage: "url(/img/dummy-image-1.jpg)",
                      }}
                    ></div>
                    <p className="text-sm mb-2 md:mb-1 "></p>
                    <h2 className="font-bold text-xl mb-2">{article.title}</h2>
                    <p className="text-sm mb-4 text-cremeTxt">
                      {lengthCharacter(article.description, 75)}
                    </p>
                    <div className="author flex">
                      <div id="author" className="flex items-center">
                        <User />
                        <div id="info">
                          <h4 id="name" className="text-xs font-medium">
                            {article.authorName}
                          </h4>
                          <p className="text-yellow text-xs">
                            {new Date(
                              article.created_at.seconds * 1000 +
                                article.created_at.nanoseconds / 1000000
                            ).toLocaleDateString("en-US", {
                              timeZone: "UTC",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                            <span className="text-cremeTxt">/ 10 min read</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
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
