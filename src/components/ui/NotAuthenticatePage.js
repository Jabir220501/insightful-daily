import Link from "next/link";
import React from "react";

function NotAuthenticatePage() {
  return (
    <div className="bg-yellow bg-bg-pattern bg-cover bg-right-bottom bg-no-repeat w-screen h-screen">
      <div className="h-full">
        <header className="flex items-center justify-between absolute top-5 left-5 right-5 md:top-11 md:left-14 md:right-14">
          <h1 id="Logo" className="text-logo">
            <Link href="/">
              Insightful{" "}
              <span id="logo_p2" className="font-semibold">
                Daily.
              </span>
            </Link>
          </h1>
          <div id="auth_btn" className="flex items-center">
            <p className="pr-10 hidden md:block md:font-medium">
              <Link href="/auth/login">Sign in</Link>
            </p>
            <button className="bg-black text-white rounded-xl p-2 text-xs md:text-base md:w-52 md:p-3 md:rounded-full md:font-medium">
              <Link href="/auth/register">Get started</Link>
            </button>
          </div>
        </header>
        <div
          id="wrapper_content"
          className="h-full flex flex-col justify-center px-5 md:px-14"
        >
          <h1 className="text-5xl w-2/4 mb-3 tracking-tight md:text-8xl md:w-full md:mb-10">
            Stay curious.
          </h1>
          <p className="mb-10 tracking-tight font-light md:text-3xl md:w-2/5">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className="bg-black text-white text-xs p-3 rounded-3xl w-2/3 md:text-xl md:w-80 md:rounded-full md:p-3">
            <Link href="/auth/login">Start reading</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotAuthenticatePage;
