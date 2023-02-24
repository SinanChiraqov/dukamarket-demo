import React from "react";
import MenuItems from "./MenuItems";
import styled, { ThemeProvider } from "styled-components";
import "./menu.scss";

const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0px;
    color: black;
`;

const Menu = ({  menuData }) => {
  return (
    <div className="menu">
      <StyledUl className="navbar_menu">
        <MenuItems
          menuData={menuData}
        />
      </StyledUl>
    </div>
  );
};

export default Menu;
