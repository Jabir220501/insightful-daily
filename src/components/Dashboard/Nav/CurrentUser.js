import { getUserInfo } from "@/lib/Fetcher";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CurrentUser() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const id = Cookies.get('uid');
      const result = await getUserInfo(id);
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton width={100} count={1} />
      ) : (
        <nav>
          <h6 className="font-light text-2xl">
            Welcome back,{" "}
            {data.map((user) => (
              <span key={user.id} className="capitalize italic font-bold">
                {user.username}
              </span>
            ))}
          </h6>
        </nav>
      )}
    </>
  );
}

export default CurrentUser
