import React from "react";

function ArticleDay() {
  return (
    <div className="mt-28 mb-9">
      <h2 className="font-light text-xl mb-2 md:text-5xl lg:text-7xl lg:mb-8">
        Article’s of the <span className="font-semibold italic">day</span>
        <span className="font-semibold text-yellow">.</span>
      </h2>
      <div id="wrapper" className="md:flex md:justify-between">
        <div
          className="w-full md:w-arItemB h-arItemB rounded-3xl mb-5 bg-yellow relative bg-cover bg-no-repeat md:mb-0 md:mr-5 bg-center hover:bg-[length:105%] transition duration-200"
          style={{
            backgroundImage: "url(/img/dummy-image-1.jpg)",
          }}
        >
          <div className="absolute bottom-0 w-full h-full rounded-3xl bg-gradient-to-t from-grBlack to-transparent">
            <div
              id="content"
              className="absolute bottom-0 p-5 md:pb-20 md:px-10"
            >
              <p className="font-medium text-xs text-yellow md:text-xl md:mb-1">
                Productivity
              </p>
              <h2 className="font-medium text-sm text-white mb-1 md:text-4xl md:mb-3">
                The Need for Community and Connection
              </h2>
              <p className="font-light text-xs text-white md:text-lg">
                The Cost of Loneliness: Women, Work and The Invisible Force
                That’s Undermining Them As They Rise
              </p>
            </div>
          </div>
        </div>

        <div
          id="small"
          className="flex md:flex-col md:justify-between md:w-arItemS"
        >
          <div
            className="w-full h-28 md:h-full rounded-3xl mr-4 bg-slate-700 md:mr-0 md:mb-5 bg-cover bg-no-repeat bg-bottom"
            style={{
              backgroundImage: "url(/img/dummy-image-2.jpg)",
            }}
          ></div>
          <div className="w-full h-28 md:h-full rounded-3xl bg-slate-950"></div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDay;
