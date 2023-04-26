import React from "react";

function BlogContent(props) {
  return (
    <div id="content">
      <p
        className="text-sm md:text-lg tracking-widest leading-relaxed"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></p>
      <div className="mt-8 mb-10 text-sm text-cremeTxt md:mt-14 md:mb-14">
        <p>{props.published}</p>
      </div>
    </div>
  );
}

export default BlogContent;
