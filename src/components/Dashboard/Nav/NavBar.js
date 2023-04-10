import User from "@/components/User";
import React, { useState } from "react";
import CurrentUser from "./CurrentUser";

function NavBar() {
  return (
    <nav
      className="relative flex flex-wrap items-center justify-between px-0 py-6 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl md:flex-nowrap md:justify-start"
      navbar-main
      navbar-scroll="true"
    >
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <CurrentUser />

        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-0 md:mr-0 md:flex justify-end md:basis-auto">
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
              <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                placeholder="Type here..."
              />
            </div>
          </div>
          <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            <User />
            <li className="flex items-center pl-4 md:hidden">
              <div className="block p-0 transition-all ease-nav-brand text-sm text-yellow">
                <div className="w-4.5 overflow-hidden">
                  <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-yellow transition-all"></i>
                  <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-yellow transition-all"></i>
                  <i className="ease-soft relative block h-0.5 rounded-sm bg-yellow transition-all"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
