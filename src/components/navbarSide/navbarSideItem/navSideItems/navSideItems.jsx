import react from "react";
import { Link } from "react-router-dom";
import { navSideMenuItemsData } from "../../../../data/navSideMenuItemsData";
import SubmenuItems from "./subMenuItems/SubmenuItems";

const NavSideItems = ({ navSideItems }) => {
  return navSideMenuItemsData.map((item) => (
    <li className="navside_item" key={item.id}>
      <Link to={item.link}>
        {item.title}
        <ul className="navside_subnav">
          <SubmenuItems item={item} />
        </ul>
      </Link>
    </li>
  ));
};

export default NavSideItems;
