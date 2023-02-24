import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../../features/cartSlice";
import { AiOutlineStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import "./topFeaturedItems.scss";

const TopFeaturedItem = ({
  topFeaturedItemsData,
  setShowWishlist,
  setShowCartlist,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (cart) => {
    dispatch(addToCart(cart));
    setShowCartlist(true);
  };
  const handleAddToWishlist = (wish) => {
    dispatch(addToWishlist(wish));
    setShowWishlist(true);
  };
  return (
    <div className="topfeatured_items">
      {topFeaturedItemsData.map((item) => {
        return (
          <div key={item.id} className={`topfeatured_item ${item.gridClass}`}>
            <div
              className={`image ${item.isAddToCart ? "image_b" : "image_s"}`}
            >
              <div className="topfeatured_item_image_hover"></div>
              <img src={`src/assets/images/${item.imgUrl}`} alt="" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <div className="raiting">
                <AiOutlineStar className="stars" />
                <AiOutlineStar className="stars" />
                <AiOutlineStar className="stars" />
                <AiOutlineStar className="stars" />
                <AiOutlineStar className="stars" />
              </div>
              <div className="price">
                <div className="discount">${item.mainPrice}</div>
                <div className="main_price">${item.discount}</div>
              </div>
              <div className={item.isAddToCart ? "active" : "non_active"}>
                <p>{item.description}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="add_to_cart_btn"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="add_to_wishlist"
                >
                  <BsHeart className="wishlist_icon" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopFeaturedItem;
