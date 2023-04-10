import React from "react";

function SubmitBtn(props) {
  return (
    <button
      type={props.type}
      className="bg-yellow py-3 px-2 w-full text-xs text-white rounded-lg uppercase font-semibold lg:py-4 lg:px-3"
    >
      {props.submit}
    </button>
  );
}

export default SubmitBtn;
