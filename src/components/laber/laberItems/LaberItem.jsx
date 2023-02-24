import React from "react";

const laberItem = ({ item }) => {
  return <div className={item.laberClassname}>
  <a href="#">
    <div className="hover_1"></div>
    <div className="hover_2"></div>
    <div className="hover_3"></div>
    <div className="hover_4"></div>
    <div className="hover_center"></div>
    <div className="laber_item_container">
      <h3>{item.laberTitle}</h3>
      <h1>{item.laberSubTitle}</h1>
      <p>{item.laberDesc}</p>
    </div>
  </a>
</div>
};

export default laberItem;


