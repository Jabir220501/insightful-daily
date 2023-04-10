import NavBar from "@/components/Dashboard/Nav/NavBar";
import SideNav from "@/components/Dashboard/Nav/SideNav";
import ProfileDashboard from "@/components/Dashboard/Profile/UserNav";
import React from "react";

function profile() {
  return (
    <div className="h-screen w-screen">
      <div className="m-0 antialiased font-normal text-base leading-default bg-cremeBg w-full h-full">
        <SideNav />
        <main className="md:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <NavBar />
        <ProfileDashboard />
        </main>
      </div>
    </div>
  );
}

export default profile;
