import React from "react";
import BrandsSlider from "./brandSlider";
import "./brands.scss";

const Brands = ({ brandsData }) => {
  return (
    <div className="brands">
      <div className="brands_container">
        <BrandsSlider brandsData={brandsData} />
      </div>
    </div>
  );
};

export default Brands;
