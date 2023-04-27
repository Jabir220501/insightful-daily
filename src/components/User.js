import { getUserInfo } from "@/lib/Fetcher";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function User() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const id = Cookies.get("uid");
      const result = await getUserInfo(id);
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  const username = data[0]?.username;
  const firstName = username?.charAt(0);
  const lastName = username?.split(" ")[1]?.charAt(0);
  return (
    <>
      {isLoading ? (
        <Skeleton circle={true} width={40} height={40} />
      ) : (
        <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800">
          <span class="text-gray-300">
            {firstName + `${lastName ? lastName : ""}`}
          </span>
        </div>
      )}
    </>
  );
}

export default User;
