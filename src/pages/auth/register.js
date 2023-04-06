import React, { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/Auth/FormInput";
import { auth, db } from "../../database/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Header from "@/components/Auth/Header";
import DesktopUI from "@/components/Auth/DesktopUI";
import { useRouter } from "next/router";
import RememberMe from "@/components/Auth/RememberMe";
import AuthInfo from "@/components/Auth/AuthInfo";
import SwitchAuth from "@/components/Auth/SwitchAuth";
import SubmitBtn from "@/components/Auth/SubmitBtn";
import axios from "axios";

function register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const response = await axios.post("/api/users", {
        userId: user.uid,
        username: username,
        email: email,
      });
      sessionStorage.setItem("uid", user.uid);
      router.push("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
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
                title="Hello theire!"
                description="Use these awesome forms to login or create new account in your project
        for free."
              />
              <p className="text-red-800">{error}</p>
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Username"
                  type="text"
                  placeholder="Your username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
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
                  <SubmitBtn type="submit" submit="Sign up" />
                  <SwitchAuth
                    info="Already have an account?"
                    authName="Sign in"
                    authLink="/auth/login"
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

export default register;
