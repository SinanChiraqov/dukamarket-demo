import React, { useState } from "react";
import NavbarSideItem from "./navbarSideItem/NavbarSideItem";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/images/logo.png"
import { hideNavSide } from "../../features/navSideSlice";
import "./navbarSide.scss";

const NavbarSide = ({}) => {
  const navSide = useSelector((state) => state.navSide);
  const dispatch = useDispatch()
  const handleCloseNavSide = () => {
    dispatch(hideNavSide())
  } 
  

  return (
    <div
      className={`navbar_side_list ${
        navSide.isNavsideShown ? "show_navbar" : "hide_navbar"
      }`}
    >
      <div className="navbar_side">
        <div className="navbar_side_header">
          <div className="navside_header_brand">
            <button
              onClick={() => handleCloseNavSide()}
              className="hide_navbar_side"
            >
              <GrClose className="hide_navbar_icon" />
            </button>
            <div className="navbar_side_brand">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="navbar_side_menu">
            <NavbarSideItem />
        </div>
      </div>
    </div>
  );
};

export default NavbarSide;
