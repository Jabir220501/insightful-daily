import Card from "@/components/Dashboard/Home/Card";
import NavBar from "@/components/Dashboard/Nav/NavBar";
import SideNav from "@/components/Dashboard/Nav/SideNav";
import React from "react";

function dashboard() {
  return (
    <div className="h-screen w-screen">
      <div className="m-0 antialiased font-normal text-base leading-default bg-cremeBg w-full h-full">
        <SideNav />
        <main className="md:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          <NavBar />
          <div id="row-1" className="flex flex-wrap mx-6">
            <Card title="Today's article post" value="2" extraValue="+1%"/>
            <Card title="Total Article posted" value="15" extraValue="+5%"/>
            <Card title="Total views" value="4523" extraValue="+110%"/>
            <Card title="Drafts" value="5" extraValue="+20%"/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default dashboard;
