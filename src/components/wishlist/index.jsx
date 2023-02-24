import React from "react";
import WishlistItem from "./wishlistItem/wishlistItem";
import { GrClose } from "react-icons/gr";
import "./wishlist.scss";

const Wishlist = ({ showWishlist, setShowWishlist }) => {
  return (
    <div
      // onClick={() => setShowWishlist(false)}
      className={`wish_list ${showWishlist ? "show" : "hide"}`}
    >
      <div className="wish_list_container">
        <div className="wish_list_header">
          <h4>Wishlist</h4>
          <button
            onClick={() => setShowWishlist(false)}
            className="hide_wishlist"
          >
            <GrClose />
          </button>
        </div>
        <div className="wishlist_products">
          <WishlistItem />
        </div>
        <div className="show_wishlist">
          <button className="show_wishlist_button">show wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
