import React from "react";

function ArticleCardBig(props) {
  return (
    <div
      className={
        props.width +
        " " +
        props.height +
        " " +
        "w-full rounded-3xl mb-5 bg-yellow relative bg-cover bg-no-repeat md:mb-0 md:mr-5 bg-center md:hover:bg-[length:105%] transition duration-200"
      }
      style={{
        backgroundImage: "url(/img/dummy-image-1.jpg)",
      }}
    >
      <div className="absolute bottom-0 w-full h-full rounded-3xl bg-gradient-to-t from-grBlack to-transparent">
        <div id="content" className="absolute bottom-0 p-5 md:pb-20 md:px-10">
          <p className="font-medium text-xs text-yellow md:text-xl md:mb-1">
            {props.genre}
          </p>
          <h2 className="font-medium text-sm text-white mb-1 md:text-4xl md:mb-3">
            {props.title}
          </h2>
          <p className="font-light text-xs text-white md:text-lg">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardBig;
