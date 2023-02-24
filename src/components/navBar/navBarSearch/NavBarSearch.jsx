import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { showLoginform } from "../../../features/userSlice";
import { showNavSide } from "../../../features/navSideSlice";
import { BsBag, BsHeart } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import logo from "../../../assets/images/logo.png";
import "@fontsource/rubik";
import "./navBarSearch.scss";

const NavBarSearch = ({
  setShowWishlist,
  setShowCartlist,
}) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.products.totalQuantity);
  const totalAmmount = useSelector((state) => state.products.totalAmmount);
  const navSide = useSelector((state) => state.navSide);
  const wishlistTotalAmmount = useSelector(
    (state) => state.products.wishlistTotalAmmount
  );

  const handleShowNavSide = () => {
    dispatch(showNavSide())
  }
  
  return (
    <div className="navbar_search">
      <div className="navbar_search_container">
        <div className="navbar_brand">
          <div className="navbar_side_res">
            <button onClick={() => handleShowNavSide()} className="navside_menu_btn">
              <BiMenu className="menu_icon" />
            </button>
          </div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <a className="responsive_cart" href="#" onClick={() => setShowCartlist(true)}>
            <div className="navbar_search_icon_cart">
              <BsBag className="icon icon_bag_res" />
              <div className="badges">{totalAmmount}</div>
            </div>
          </a>
        </div>
        <div className="navbar_search_input">
          <select className="navbar_search_select" name="" id="">
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
          </select>
          <input
            className="navbar_search_text_input"
            type="text"
            placeholder="Search For Products..."
          />
          <button>
            <FaSearch className="search_btn_icon" />
          </button>
        </div>

        <div className="navbar_search_icons">
          <Link onClick={() => dispatch(showLoginform())} to="/login">
            <div className="login navbar_search_icon">
              <CiUser className="icon icon-user" />
              <div className="navbar_search_icon_text">
                <span>Login</span>
                <strong>Login / Register</strong>
              </div>
            </div>
          </Link>
          <a href="#" onClick={() => setShowWishlist(true)}>
            <div className="wishlist navbar_search_icon">
              <div className="badges">{wishlistTotalAmmount}</div>
              <BsHeart className="icon icon-wishlist" />
              <div className="navbar_search_icon_text">
                <span>Favorite</span>
                <strong>My Wishlist</strong>
              </div>
            </div>
          </a>
          <a href="#" onClick={() => setShowCartlist(true)}>
            <div className="cart navbar_search_icon">
              <BsBag className="icon icon-bag" />
              <div className="badges">{totalAmmount}</div>
              <div className="navbar_search_icon_text">
                <span>Your Cart</span>
                <strong className="total_ammount">${totalQuantity}.00</strong>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBarSearch;
