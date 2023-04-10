import { getUserInfo } from "@/lib/Fetcher";
import React from "react";
function GetUser({ data }) {
  console.log(data);
  return (
    <nav>
      <h6 className="font-light text-2xl">
        Welcome back,{" "}
        {data.map((user) => (
          <span className="capitalize italic font-bold">{user.username}</span>
        ))}
      </h6>
      <span class="react-loading-skeleton" style="width:100px;height:50px">‌</span>
    </nav>
  );
}

export default GetUser;
export const getStaticProps = async () => {
  const data = await getUserInfo("0cXNYD99dIXQ7VuDtRGmYgTJvvE3");
  return {
    props: {
      data,
    },
  };
};
