import React from "react";
import { BiMenu } from "react-icons/bi";
import Menu from "./menu/Menu";
import "./navBarMainDep.scss";

const NavBarMainDep = () => {
  return (
    <>
      <div className="department">
        <BiMenu className="department-icon" />
        Shop by department
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div>Spend $120 more and get free shipping!</div>
    </>
  );
};

export default NavBarMainDep;
