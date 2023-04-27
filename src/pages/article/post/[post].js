import Header from "@/components/Header/Header";
import ArticleInfo from "@/components/Posts/ArticleInfo";
import AuthorLink from "@/components/Posts/AuthorLink";
import BlogContent from "@/components/Posts/BlogContent";
import { getArticleById } from "@/lib/articles";
import { secondsToDate } from "@/lib/secondsToDate";

function InnerPageArticle({ article }) {
  return (
    <div className="w-full h-screen ">
      <div
        id="wrapper"
        className="bg-cremeBg h-full flex flex-col items-center justify-center px-5 md:pt-8 md:px-14 relative mb-28 md:mb-488 lg:mb-544"
      >
        <Header />
        <ArticleInfo
          genre={article.genre}
          title={article.title}
          description={article.description}
          author={article.authorName}
          published={secondsToDate(
            article.created_at.seconds,
            article.created_at.nanoseconds
          )}
          readingTime="10"
          authorNameLink={article.authorName.replace(/\s+/g, "-").toLowerCase()}
          authorInfoLink={article.author_id}
          firstName={article.authorName.charAt(0)}
          lastName={article.authorName.split(" ")[1]?.charAt(0)}
        />
        <div className="w-full h-InnerImage px-5 md:px-14 absolute -bottom-10 md:-bottom-2/4">
          <div
            className="h-full bg-cover bg-no-repeat "
            style={{ backgroundImage: "url(/img/dummy-image-1.jpg)" }}
          ></div>
        </div>
      </div>
      <div id="content_wrapper" className="px-5 md:px-14 md:max-w-4xl m-auto">
        <BlogContent
          published={
            "Published " +
            secondsToDate(
              article.created_at.seconds,
              article.created_at.nanoseconds
            )
          }
          content={article.body}
        />
        <AuthorLink
          author={article.authorName}
          firstName={article.authorName.charAt(0)}
          lastName={article.authorName.split(" ")[1]?.charAt(0)}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const docIdParam = query.post?.substr(query.post.length - 20) || "";
  const article = await getArticleById(docIdParam);
  return {
    props: {
      article,
    },
  };
}

export default InnerPageArticle;
