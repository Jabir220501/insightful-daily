import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { FaChartBar } from "@react-icons/all-files/fa/FaChartBar";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
function ActiveLink({ href, children, icon }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  const classNameBg = isActive ? "shadow-soft-xxs bg-white" : "";
  const classNameIcon = isActive ? "bg-yellow" : "bg-white text-creme";
  const classNameText = isActive ? "text-black" : "text-cremeTxt";
  const navIcon = isActive ? "white" : "rgb(255 192 23)";

  let Icon;
  switch (icon) {
    case "Dashboard":
      Icon = <FaHome color={navIcon} />;
      break;
    case "My Article":
      Icon = <FaChartBar color={navIcon}/>;
      break;
    case "Create new article":
      Icon = <FaPen color={navIcon}/>;
      break;
    case "Profile":
      Icon = <FaUser color={navIcon}/>;
      break;
    default:
      Icon = null;
  }

  return (
    <Link
      href={href}
      className={`py-3 text-sm ease-in my-0 mx-4 flex items-center whitespace-nowrap rounded-2xl px-4 transition-colors ${classNameBg}`}
    >
      <div
        class={`flex h-8 w-8 items-center justify-center rounded-xl bg-center mr-1 stroke-0 text-center ${classNameIcon}`}
      >
        {Icon}
      </div>
      <span
        class={`ml-2 duration-300 opacity-100 pointer-events-none  font-bold ${classNameText}`}
      >
        {children}
      </span>
    </Link>
  );
}

function NavigationBtn() {
  return (
    <li class="mt-0.5 w-full">
      <ActiveLink href="/dashboard/home" icon="Dashboard">
        Dashboard
      </ActiveLink>
      <ActiveLink href="/dashboard/my-article" icon="My Article">My Article</ActiveLink>
      <ActiveLink href="/dashboard/create-new-article" icon="Create new article">
        Create new article
      </ActiveLink>
      <ActiveLink href="/dashboard/profile" icon="Profile">Profile</ActiveLink>
    </li>
  );
}

export default NavigationBtn;
