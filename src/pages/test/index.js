import Header from "@/components/Header/Header";
import ArticleCardSmall from "@/components/Home/ArticleCardSmall";
import SearchInput from "@/components/SearchInput";
import React from "react";
import Skeleton from "react-loading-skeleton";

function index({ posts, author }) {
  console.log(posts, author);
  return (
    <div>
      <Header />
      <div id="all_articles" className="mt-28 p-10">
        <SearchInput />
        <div className="mt-5 flex items-center space-x-3">
          {posts.map((post) => (
            <div id="item" className="bg-yellow p-5 rounded-lg h-52">
              <h2 className="font-bold">{post.title || <Skeleton />}</h2>
              <p className="font-light">
                {post.description || <Skeleton count={10} />}
              </p>
              <p className="font-normal">
                {post.authorName || <Skeleton count={10} />}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resArticle = await fetch("http://localhost:3000/api/articles");
  const posts = await resArticle.json();
  return {
    props: {
      posts,
    },
  };
}

export default index;
