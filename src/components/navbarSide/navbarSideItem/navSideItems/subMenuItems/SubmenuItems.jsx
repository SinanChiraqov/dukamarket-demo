import React from "react";
import { Link } from "react-router-dom";

const SubmenuItems = ({ item }) => {
  return item.submenu.map((element) => {
    <li key={element.subId}>
      <Link to={element.subLink}>{element.subTitle}</Link>
    </li>;
  });
};
export default SubmenuItems;
