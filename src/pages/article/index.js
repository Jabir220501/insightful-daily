import Author from "@/components/Author";
import Header from "@/components/Header/Header";
import SearchInput from "@/components/SearchInput";
import { getAllArticle } from "@/lib/Fetcher";
import { lengthCharacter } from "@/lib/limitedWords";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function index({ articles, isLoading }) {
  const [issLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(isLoading);
  }, []);
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
                      .replaceAll("/", "-")
                      .toLowerCase()}-${article.articleId}`}
                    className="h-full"
                  >
                    <div
                      className="img h-52 bg-cover bg-no-repeat bg-yellow md:hover:bg-[length:105%] transition duration-200 mb-2 rounded-2xl"
                      style={{
                        backgroundImage: "url(/img/dummy-image-1.jpg)",
                      }}
                    ></div>
                    {issLoading ? (
                      <Skeleton width={40} height={10} count={1} />
                    ) : (
                      <p className="text-xs mt-1 text-yellow">
                        {article.genre}
                      </p>
                    )}
                    {issLoading ? (
                      <Skeleton width={300} height={30} count={1} />
                    ) : (
                      <h2 className="font-semibold text-xl mb-2">
                        {article.title}
                      </h2>
                    )}
                    {issLoading ? (
                      <div>
                        <div style={{ marginBottom: "-8px" }}>
                          <Skeleton width={250} height={5} count={1} />
                        </div>
                        <div style={{ marginBottom: "5px" }}>
                          <Skeleton width={200} height={5} count={1} />
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm font-normal mb-4 text-cremeTxt">
                        {lengthCharacter(article.description, 75)}
                      </p>
                    )}
                    <div className="author flex items-center">
                      <div id="author" className="flex items-center">
                        {issLoading ? (
                          <Skeleton circle={true} width={40} height={40} />
                        ) : (
                          <Author
                            firstName={article.authorName.charAt(0)}
                            lastName={article.authorName
                              .split(" ")[1]
                              ?.charAt(0)}
                          />
                        )}

                        <div id="info" className="ml-1">
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
                            <span className="text-cremeTxt">{`/ ${article.readingTime} min read`}</span>
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
  try {
    const articles = await getAllArticle();
    return {
      props: {
        articles,
        isLoading: false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        articles: null,
        isLoading: false,
      },
    };
  }
}


export default index;
