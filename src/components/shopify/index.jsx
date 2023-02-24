import React from "react";
import { shopifyData } from "../../data/shopifyData";
import { FaShippingFast } from "react-icons/fa";
import "./shopify.scss";

const Shopify = ({ shopifyData }) => {
  // const shopifyData = props.shopifyData;
  return (
    <div className="shopify">
      <div className="shopify_options">
        {shopifyData.map(({ icon, shpfyTitle, shpfySubTitle }) => {
          return (
            <div key={shpfyTitle} className="shopify_option">
              {/* {console.log(item.icon)} */}
              <FaShippingFast className="shopify_icon"/>
              <div className="shopify_option_text">
                <strong>{shpfyTitle}</strong>
                <span>{shpfySubTitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shopify;
