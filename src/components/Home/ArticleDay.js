import React from "react";

function ArticleDay() {
  return (
    <div className="mt-28">
      <h2 className="font-light text-xl mb-2">
        Article’s of the <span className="font-semibold italic">day</span>
        <span className="font-semibold text-yellow">.</span>
      </h2>
      <div id="wrapper" className="md:flex">
        <div className="max-w-960 w-full max-h-690 h-52 rounded-3xl mb-2 bg-yellow"></div>

        <div id="small" className="flex md:flex-col">
          <div className="max-w-320 w-full h-28 rounded-3xl mr-4 bg-slate-700"></div>
          <div className="max-w-320 w-full h-28 rounded-3xl bg-slate-950"></div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDay;
