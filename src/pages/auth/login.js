import React, { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/Auth/FormInput";
import Header from "@/components/Auth/Header";
import DesktopUI from "@/components/Auth/DesktopUI";
import { auth } from "../../database/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import RememberMe from "@/components/Auth/RememberMe";
import AuthInfo from "@/components/Auth/AuthInfo";
import SwitchAuth from "@/components/Auth/SwitchAuth";
import SubmitBtn from "@/components/Auth/SubmitBtn";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("uid", user.uid);
      router.push("/");
    } catch (error) {
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
              <AuthInfo
                title="Welcome Back"
                description="Enter your email and password to sign in"
              />

              <p className="text-red-800">{error}</p>
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <FormInput
                  label="Password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <RememberMe />
                <div id="sign_" className="mt-7 flex flex-col items-center">
                  <SubmitBtn type="submit" submit="Sign in" />
                  <SwitchAuth
                    info="Don't have an account?"
                    authName="Sign up"
                    authLink="/auth/register"
                  />
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
