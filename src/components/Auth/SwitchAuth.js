import Link from "next/link";
import React from "react";

function SwitchAuth(props) {
  return (
    <p className="mt-4 text-xs text-cremeTxt lg:text-sm lg:mt-6">
      {props.info}{" "}
      <span id="signup_mark" className="text-yellow">
        <Link href={props.authLink}>{props.authName}</Link>
      </span>
    </p>
  );
}

export default SwitchAuth;
