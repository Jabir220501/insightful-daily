import AppContext from "@/lib/appContext";
import Link from "next/link";
import React, { useContext } from "react";
import NavigationBtn from "./NavigationBtn";

function SideNav() {
  const stateManagement = useContext(AppContext);
  const hamburgerOpen = stateManagement.hamburgerOpen;

  const style = hamburgerOpen
    ? "bg-gray-50 rounded-xl "
    : "-translate-x-full bg-gray-50 rounded-xl ";
  return (
    <aside
      className={`max-w-62.5 z-50 fixed inset-y-0 my-4 ml-4 w-full flex-wrap items-center justify-between overflow-y-auto rounded-2md border-0  p-0 antialiased shadow-none transition-transform duration-200 md:left-0 md:translate-x-0 md:bg-transparent ${style}`}
      onClick={() => {
        stateManagement.setHamburgerOpen(true);
        stateManagement.hamburgerOpen
          ? !stateManagement.setHamburgerOpen(false)
          : "";
      }}
    >
      <div className="h-19.5">
        <h1 id="Logo" className="flex items-center justify-center h-full">
          <Link href="/" className="text-2xl">
            Insightful{" "}
            <span id="logo_p2" className="font-semibold">
              Daily
              <span id="logo_dot" className="text-yellow ">
                .
              </span>
            </span>
          </Link>
        </h1>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <NavigationBtn />
        </ul>
      </div>
    </aside>
  );
}

export default SideNav;
