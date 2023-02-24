import React from "react";
import "./navBarTop.scss";

const NavBarTop = () => {
  return (
    <div className="navBar_top">
      <div className="navBar_top_main">
        <ul className="nav_top_left">
          <li>USD</li>
          <li>EN</li>
          <li>
            Need Help? <a href="+001 123 456 789">+001 123 456 789</a>
          </li>
        </ul>
        <ul className="nav_top_right">
          <li>My Account</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarTop;
