import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { style } from "@mui/system";

const StyledLi = styled.li`
  float: left;
  height: 100%;
  padding: 10px;
  &:hover {
    color: #fcbe00;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 9999;
  background-color: white;
  padding; 3rem;
  width: auto;
  margin-top: 10px;
  
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: grid;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;

const SubA = styled(StyledA)`
  text-decoration: none;
`;

const menuItems = ({ menuData }) => {
  return (
    <>
      {menuData.map((menuItem) => {
        return (
          <DropDownLi key={menuItem.id} className="menu_item">
            <StyledA
              className="menu_item_a"
              onClick={() => this.handleClick("Home")}
            >
              {menuItem.title}
              {menuItem.dropdown ? (
                <MdKeyboardArrowDown className="menuIcon" />
              ) : null}
            </StyledA>
            {menuItem.dropdown ? (
              <DropDownContent
                className={`drowdown_content ${
                  menuItem.id === 2 ? "dropdown_full_with" : null
                }`}
                style={{
                  gridTemplateColumns: `repeat(${menuItem.gridRow}, 1fr)`,
                }}
              >
                {menuItem.submenu.map((subMenuItem) => {
                  return (
                    <SubA
                      className={`sub_a sub_a_grid_${
                        menuItem.id === 2 ? subMenuItem.subId : null
                      }`}
                      key={subMenuItem.subId}
                      onClick={() => this.handleClick(subMenuItem.subTitle)}
                    >
                      {subMenuItem.subTitle}
                      <img
                        style={{ gridColumn: "4 / span 5" }}
                        src={subMenuItem.dropdownShopImg}
                      />
                    </SubA>
                  );
                })}
                {menuItem.id === 2 ? (
                  <div className="dropdown_footer">
                    <p className="dropdown_footer_text">
                      <strong>30% Off </strong> the shipping of your first order
                      with the code:
                      <strong>DUKA-SALE30</strong>
                    </p>
                  </div>
                ) : null}
              </DropDownContent>
            ) : null}
          </DropDownLi>
        );
      })}
    </>
  );
};

export default menuItems;
