import Header from "@/components/Header/Header";
import React from "react";

function InnerPageArticle() {
  return (
    <div className="w-full h-screen">
      <div
        id="wrapper"
        className="bg-cremeBg h-full flex flex-col items-center justify-center px-5 md:pt-8 md:px-14 relative"
      >
        <Header />
        <div id="articleInfo" className="">
          <h3 id="genre" className="text-xs text-yellow uppercase ">
            Productivity
          </h3>
          <h1 id="title" className="text-xl mb-4">
            The Need for Community and Connection
          </h1>
          <p id="description" className="text-xs font-light mb-4">
            The Cost of Loneliness: Women, Work and The Invisible Force That’s
            Undermining Them As They Rise
          </p>
          <div id="author" className="flex items-center">
            <div
              id="avatar"
              className="w-6 h-6 bg-gray-800 rounded-full mr-3 md:mr-0 md:w-11 md:h-11"
            ></div>
            <div id="info">
              <h4 id="name" className="text-xs font-medium">
                Trix Visuals
              </h4>
              <p className="text-yellow text-xs">
                18 July 2022{" "}
                <span className="text-cremeTxt">/ 10 min read</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-36 md:h-690 px-5 md:pt-8 md:px-14 absolute -bottom-full">
          <div
            className="h-full bg-cover bg-no-repeat "
            style={{ backgroundImage: "url(/img/dummy-image-1.jpg)" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default InnerPageArticle;
