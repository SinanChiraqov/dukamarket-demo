import React from "react";
import "./navBarMain.scss";
import NavBarMainDep from "./navBarMainDep/NavBarMainDep";

const NavBarMain = () => {
  return (
    <div className="navbar_main">
      <div className="navbar_main_container">
        <NavBarMainDep />
      </div>
    </div>
  );
};

export default NavBarMain;
