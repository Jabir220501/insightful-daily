import React from "react";
import Link from "next/link";

function login() {
  return (
    <div className="bg-cremeBg w-screen h-screen">
      <div className="h-full">
        <div className="">
          <h1
            id="Logo"
            className="text-logo absolute top-5 left-5 md:top-5 md:left-14"
          >
            <Link href="/">
              Insightful{" "}
              <span id="logo_p2" className="font-semibold">
                Daily
                <span id="logo_dot" className="text-yellow font-semibold">
                  .
                </span>
              </span>
            </Link>
          </h1>
        </div>
        <div id="container" className="h-full md:flex md:justify-between">
          <div
            id="form_field"
            className="flex flex-col justify-center h-full px-5 pt-6 md:max-w-md w-full md:m-auto lg:px-0 lg:pt-0"
          >
            <div id="wrapper">
              <h2 className="text-yellow text-2xl font-bold mb-2 lg:text-3xl">
                Welcome Back
              </h2>
              <p className="text-cremeTxt text-xs font-semibold mb-7 lg:text-sm lg:mb-9">
                Enter your email and password to sign in
              </p>
              <form>
                <label htmlFor="email" className="flex flex-col mb-5 lg:mb-6">
                  Email
                  <input
                    type="text"
                    name="email"
                    id="name"
                    placeholder="Your email address"
                    className="mt-1 p-4 rounded-xl text-sm text-cremeTxt"
                  />
                </label>
                <label
                  htmlFor="password"
                  className="flex flex-col mb-5 lg:mb-6"
                >
                  Password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    className="mt-1 p-4 rounded-xl text-sm text-cremeTxt"
                  />
                </label>
                <label
                  htmlFor="remember_me"
                  className="flex align-center text-xs lg:text-sm "
                >
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <div id="sign_" className="mt-7 flex flex-col items-center">
                  <button
                    type="submit"
                    className="bg-yellow py-3 px-2 w-full text-xs text-white rounded-lg uppercase font-semibold lg:py-4 lg:px-3"
                  >
                    Sign in
                  </button>
                  <p className="mt-4 text-xs text-cremeTxt lg:text-sm lg:mt-6">
                    Don't have an account?{" "}
                    <span id="signup_mark" className="text-yellow">
                      <Link href="/auth/register">Sign up</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div id="desktop_design" className="max-w-720 w-full">
            <div
              id="container"
              className="bg-yellow h-full bg-auth-pattern bg-cover bg-center bg-no-repeat hidden md:block"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
