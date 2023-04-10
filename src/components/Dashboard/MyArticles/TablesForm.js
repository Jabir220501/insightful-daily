import React, { useEffect, useState } from "react";
import { getArticleUser } from "@/lib/Fetcher";
import Dropdown from "./Dropdown";
import TablesRow from "./TablesRow";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { deleteArticle } from "@/lib/Fetcher";
import axios from "axios";
import { Router, useRouter } from "next/router";
function TablesForm() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const id = sessionStorage.getItem("uid");
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
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
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
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablesForm;
