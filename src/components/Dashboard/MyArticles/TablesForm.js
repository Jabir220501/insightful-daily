import React, { useEffect, useState } from "react";
import { getArticleUser } from "@/lib/Fetcher";
import Dropdown from "./Dropdown";
import TablesRow from "./TablesRow";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { deleteArticle } from "@/lib/Fetcher";
import axios from "axios";
import { Router, useRouter } from "next/router";
import Cookies from "js-cookie";
import SearchInput from "@/components/SearchInput";
function TablesForm() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const id = Cookies.get("uid");
      const articleUser = await getArticleUser(id);
      setData(articleUser);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const router = useRouter();
  const handleDelete = async (articleId) => {
    try {
      const response = await deleteArticle(articleId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
      <div className="flex items-center justify-between pb-4">
        <Dropdown />
        <SearchInput />
      </div>
      <table className="w-full text-sm text-left text-gray-900 font-semibold">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-6 py-3">
              Article name
            </th>
            <th scope="col" className="px-6 py-3">
              Genre
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Published
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((articles) =>
            isLoading ? (
              <Skeleton width={100} count={1} />
            ) : (
              <TablesRow
                name={articles.title}
                genre={articles.genre}
                status={
                  articles.published.toString() == "true" ? "Online" : "Draft"
                }
                published={new Date(
                  articles.created_at.seconds * 1000 +
                    articles.created_at.nanoseconds / 1000000
                ).toLocaleDateString("en-US", {
                  timeZone: "UTC",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                handleDelete={handleDelete}
                articleId={articles.articleId}
                update={articles.articleId}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablesForm;
