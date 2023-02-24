import React from "react";
import LaberItem from "./laberItems/LaberItem";
import "./laber.scss";

const Laber = ({ laberData }) => {
  return (
    <div className="laber">
      <div className="laber_container">
        {laberData.map((item) => (
          <LaberItem key={item.id}  item={item} />
        ))}
      </div>
    </div>
  );
};

export default Laber;
