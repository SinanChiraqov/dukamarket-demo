import React from "react";
import { BiMenu } from "react-icons/bi";
import Menu from "./menu/Menu";
import "./navBarMainDep.scss";

const NavBarMainDep = ({ isShown, setIsShown, menuData }) => {
  return (
    <div className="navbar_main_dep">
      <div className="department">
        <h4 className="department_heading">
          <BiMenu className="department-icon" />
          <span>Shop by department</span>
        </h4>
      </div>
      <div className="menu">
        <Menu menuData={menuData} />
      </div>
      <div>Spend $120 more and get free shipping!</div>
    </div>
  );
};

export default NavBarMainDep;
