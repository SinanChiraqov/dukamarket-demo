import React from "react";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../../features/cartSlice";
import "./wishlistItem.scss";

const WishlistItem = () => {
  const dispathc = useDispatch();
  const handleRemoveFromWishlist = (id) => {
    dispathc(removeFromWishlist(id));
  };

  const wishlistProducts = useSelector((state) => state.products.wishlistItems);
  return wishlistProducts.map(({ id, imgUrl, title, discount, mainPrice }) => {
    return (
      <div key={id} className="wish_list_item">
        <div className="wish_list_item_container">
          <img src={`src/assets/images/${imgUrl}`} alt="" />
          <div className="wishlist_item_description">
            <a href="#">
              <h4 className="wishlist_item_heading">{title}</h4>
            </a>
            <div className="wishlist_price">
              <div className="wishlist_discount">${discount}.00</div>
              <div className="wishlist_main_price">{mainPrice}.00</div>
            </div>
          </div>
          <div
            onClick={() => {
              handleRemoveFromWishlist(id);
            }}
            className="wishlist_item_delete"
          >
            <GrClose className="delete_item" />
          </div>
        </div>
      </div>
    );
  });
};

export default WishlistItem;
