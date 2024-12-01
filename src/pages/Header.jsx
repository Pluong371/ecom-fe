import { Logo } from "../components/Logo/Logo";
import { Navbar } from "../components/NavBar/Navbar";
import { UserSideProfile } from "../components/UserSideProfile/UserSideProfile";
import { ResponsiveMenu } from "../components/ResponsiveMenu/ResponsiveMenu";
import menu_icon from "../assets/menu_icon.png";
import React, { useState } from "react";
function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" mx-auto px-4 tablet:px-5">
      <header className="flex items-center justify-between py-5 tablet:mx-28 font-medium">
        <img
          onClick={() => setVisible(true)}
          src={menu_icon}
          alt="menu icon"
          className="tablet:hidden w-5 cursor-pointer"
        />

        <Logo className="mr-14" />

        <Navbar className="hidden tablet:flex" />

        <UserSideProfile />
        <ResponsiveMenu visible={visible} setVisible={setVisible} />
      </header>
    </div>
  );
}
export default Header;
