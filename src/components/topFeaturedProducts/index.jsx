import React from "react";
import TopFeaturedItem from "./topFeaturedItems/topFeaturedItem";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./topFeaturedProducts.scss";

const TopFeaturedProducts = ({
  topFeaturedItemsData,
  setShowWishlist,
  setShowCartlist,
}) => {
  return (
    <div className="topfeatured_products">
      <div className="topfeatured_products_container">
        <div className="topfeatured_products_row">
          <h2>Top Featured Products</h2>
          <a href="#">
            <h4 className="topfeatured_products_see_all">
              See All Products{" "}
              <MdKeyboardArrowRight className="topfeatured_icon" />
            </h4>
          </a>
        </div>
        <TopFeaturedItem
          topFeaturedItemsData={topFeaturedItemsData}
          setShowWishlist={setShowWishlist}
          setShowCartlist={setShowCartlist}
        />
        ;
      </div>
    </div>
  );
};

export default TopFeaturedProducts;
