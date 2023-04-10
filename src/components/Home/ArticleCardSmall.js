import React from "react";

function ArticleCardSmall(props) {
  return (
    <div
      className="w-full h-28 md:h-full rounded-3xl mr-4 bg-slate-700 md:mr-0 md:mb-5 bg-cover bg-no-repeat bg-bottom relative md:hover:bg-[length:105%] transition duration-200 cursor-pointer"
      style={{
        backgroundImage: "url(/img/dummy-image-2.jpg)",
      }}
    >
      <div className="absolute bottom-0 w-full h-full rounded-3xl bg-gradient-to-t from-grBlack to-transparent">
        <div id="content" className="absolute bottom-0 p-5 md:pb-7 md:px-10">
          <p className="font-medium text-lg text-yellow md:text-xl md:mb-1">
            {props.genre}
          </p>
          <h2 className="hidden md:block font-medium text-sm text-white md:text-lg">
            {props.title}
          </h2>
          <h2 className="font-medium text-sm text-white md:text-2xl md:hidden">
            {props.button}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardSmall;
