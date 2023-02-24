import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const menuItems = (props) => {
  const menuData = props.menuData;
  // console.log(menuItems);
  return (
    <>
      {menuData.map((menuItem) => {
        return (
          <>
            <li key={menuItem.id}>
              <a href={menuItem.link}>
                {menuItem.title}
                {menuItem.dropdown ? (
                  <MdKeyboardArrowDown className="menuIcon" />
                ) : null}
              </a>
            </li>
          </>
        );
      })}
        <div className="dropdown">
          {menuData
            .filter((filteredItem) => (filteredItem.id = 3))
            .map((item) => {
              console.log(item);
              return (
                <div key={item.id}>
                  <a href={item.subLink}>{item.subTitle}</a>
                </div>
              );
            })}
        </div>
    </>
  );
};

export default menuItems;
