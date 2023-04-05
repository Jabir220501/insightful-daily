import React from "react";

function AuthInfo(props) {
  return (
    <div>
      <h2 className="text-yellow text-2xl font-bold mb-2 lg:text-3xl">
        {props.title}
      </h2>
      <p className="text-cremeTxt text-xs font-semibold mb-7 lg:text-sm lg:mb-9">
        {props.description}
      </p>
    </div>
  );
}

export default AuthInfo;
