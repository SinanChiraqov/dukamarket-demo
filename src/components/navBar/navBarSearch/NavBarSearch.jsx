import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { BsBag, BsHeart } from "react-icons/bs";
import logo from "../../../assets/images/logo.png";
import "@fontsource/rubik";
import "./navBarSearch.scss";

const NavBarSearch = () => {
  return (
    <div className="navbar_search">
      <div className="navbar_search_container">
        <div className="navbar_brand">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar_search_input">
          <select name="" id="">
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
          </select>
          <input type="text" placeholder="Search For Products..." />
          <button>
            <FaSearch className="search_btn" />
          </button>
        </div>

        <div className="navbar_search_icons">
          <a href="#">
            <div className="login navbar_search_icon">
              <CiUser className="icon icon-user" />
              <div className="navbar_search_icon_text">
                <span>Login</span>
                <strong>Login / Register</strong>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="wishlist navbar_search_icon">
              <BsHeart className="icon icon-wishlist" />
              <div className="navbar_search_icon_text">
                <span>Favorite</span>
                <strong>My Wishlist</strong>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="cart navbar_search_icon">
              <BsBag className="icon icon-bag" />
              <div className="navbar_search_icon_text">
                <span>Your Cart</span>
                <strong>$0.00</strong>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBarSearch;
