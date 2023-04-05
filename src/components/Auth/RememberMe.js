import React from "react";

function RememberMe() {
  return (
    <label
      htmlFor="remember_me"
      className="flex align-center text-xs lg:text-sm "
    >
      <input type="checkbox" className="mr-2" />
      Remember me
    </label>
  );
}

export default RememberMe;
