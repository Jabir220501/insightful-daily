import React from "react";
import { auth } from "../../database/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function LogoutBtn() {
    const router = useRouter();
    const logOut = () => {
        signOut(auth).then(() => {
            router.reload("/")
            Cookies.remove("uid")
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
    <button className="md:hidden mr-10 bg-red-800 rounded-full p-1 px-12 text-white text-lg"
    onClick={logOut}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
