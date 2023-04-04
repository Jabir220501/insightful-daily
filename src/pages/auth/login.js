import React, { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/Auth/FormInput";
import Header from "@/components/Auth/Header";
import DesktopUI from "@/components/Auth/DesktopUI";
import { auth } from "../../database/config";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const { user } = await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className="bg-cremeBg w-screen h-screen">
      <div className="h-full">
        <Header />
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
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="Your email address"
                />
                <FormInput
                  label="Password"
                  type="password"
                  placeholder="Your password"
                />
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
          <DesktopUI />
        </div>
      </div>
    </div>
  );
}

export default login;
