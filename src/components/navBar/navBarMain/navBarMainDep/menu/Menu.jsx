import React from "react";
import MenuItems from "./MenuItems";
import { menuData } from "../../../../../data/menuData";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="navbar_menu">
        <MenuItems menuData={menuData} />
      </ul>
    </div>
  );
};

export default Menu;
