import React from "react";
import NavBarTop from "./navBarTop/NavBarTop";
import "./navbar.scss";
import NavBarSearch from "./navBarSearch/NavBarSearch";
import NavBarMain from "./navBarMain/NavBarMain";

const Navbar = ({
  isShown,
  setIsShown,
  menuData,
  showWishlist,
  setShowWishlist,
  showCartlist,
  setShowCartlist,
}) => {
  return (
    <div className="navBar">
      <NavBarTop />
      <NavBarSearch
        showWishlist={showWishlist}
        setShowWishlist={setShowWishlist}
        showCartlist={showCartlist}
        setShowCartlist={setShowCartlist}
      />
      <NavBarMain
        isShown={isShown}
        setIsShown={setIsShown}
        menuData={menuData}
      />
    </div>
  );
};

export default Navbar;
