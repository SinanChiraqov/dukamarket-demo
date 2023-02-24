import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoginform } from "../../../features/userSlice";
import { hideNavSide } from "../../../features/navSideSlice";
import { FaSearch } from "react-icons/fa";
import NavSideItems from "./navSideItems/navSideItems";
import "./navbarSideItem.scss";

const NavbraSideItem = () => {
  const dispatch = useDispatch();
  const navSideItems = useSelector((state) => state.navSide.navSideItems);

  const handleShowLoginForm = () => {
    dispatch(showLoginform())
    dispatch(hideNavSide())
  }

  return (
    <div className="navbar_side_item">
      <div className="navbar_side_item_container">
        <ul className="navside_nav">
          <li className="list_item_search">
            <Link to="/search">
              Search...
              <FaSearch className="navside_search_icon" />
            </Link>
          </li>
          <NavSideItems navSideItems={navSideItems} />
          <li onClick={() => handleShowLoginForm()} className="navside_item list_item_login">
            <Link to="/login">
              Login / Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbraSideItem;
