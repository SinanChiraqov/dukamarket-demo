import React from "react";
import ArrivalsSlider from "./arrivalSlider/ArrivalsSlider";
import "./productsArrivals.scss";

const ProductsArrivals = ({
  arrivalsSliderData,
  setShowCartlist,
  setShowWishlist,
}) => {
  return (
    <div className="products_arrivals">
      <div className="products_arrivals_container">
        <div className="arrivals_row">
          <h2>Top Deals Of The Day</h2>
          <h4 className="arrivals_time_left">
            <p className="time_remaining_left">Hurry Up! Offer ends in:</p> <span></span>
          </h4>
        </div>
        <ArrivalsSlider
          arrivalsSliderData={arrivalsSliderData}
          setShowCartlist={setShowCartlist}
          setShowWishlist={setShowWishlist}
        />
      </div>
    </div>
  );
};

export default ProductsArrivals;
