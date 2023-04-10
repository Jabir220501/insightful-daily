import CreateBlogField from "@/components/Dashboard/Create-New-Article/CreateBlogField";
import NavBar from "@/components/Dashboard/Nav/NavBar";
import SideNav from "@/components/Dashboard/Nav/SideNav";
import React from "react";

function createNewArticle() {
  return (
    <>
      <div className="">
        <div className="m-0 antialiased font-normal text-base leading-default bg-cremeBg w-full h-full">
          <SideNav />
          <main className="md:ml-68.5 relative h-full rounded-xl transition-all duration-200 bg-cremeBg ">
            <NavBar />
            <div className="mx-10 m-auto">
              <div>
                <h2 className="text-yellow text-2xl font-bold mb-5 lg:text-3xl ">
                  Publish, grow, and earn, all in one place.
                </h2>
              </div>
              <CreateBlogField />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default createNewArticle;
