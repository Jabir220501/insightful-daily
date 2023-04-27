import User from "@/components/User";
import Link from "next/link";
import React from "react";

function ProfileDashboard() {
  return (
    <div className="w-full px-6 mx-auto">
      <div
        className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl bg-yellow"
        // style={{
        //   backgroundImage: "url(/img/dummy-image-1.jpg)",
        //   backgroundPositionY: "50%",
        // }}
      >
        <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-black to-transparent opacity-70"></span>
      </div>
      <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
              <User />
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full">
              <h5 className="mb-1 font-bold">Trix Visuals</h5>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
            <div className="relative right-0">
              <ul className="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl">
                <li className="z-30 flex-auto text-center">
                  <Link href="">
                    <span className="ml-4">Edit profile picture</span>
                  </Link>
                  <Link href="">
                    <span className="ml-4">Edit backdrop</span>
                  </Link>
                  <Link href="">
                    <span className="ml-4">Add description</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDashboard;
