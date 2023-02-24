import React from "react";
import "./navBarMain.scss";
import NavBarMainDep from "./navBarMainDep/NavBarMainDep";

const NavBarMain = ({ isShown, setIsShown, menuData }) => {
  return (
    <div className="navbar_main">
      <div className="navbar_main_container">
        <NavBarMainDep
          isShown={isShown}
          setIsShown={setIsShown}
          menuData={menuData}
        />
      </div>
    </div>
  );
};

export default NavBarMain;
