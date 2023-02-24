import React from "react";
import { useEffect } from "react";
import CartItem from "./cartItem/cartItem";
import { GrClose } from "react-icons/gr";
import "./cart.scss";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Cart = ({ showCartlist, setShowCartlist }) => {
  const totalQuantity = useSelector((state) => state.products.totalQuantity);
  const styleOfAmmount = {
    backgroundColor: "#fcbe00",
    coolor: "rgb(13, 13, 13)",
    borderRadius: "50%",
    fontSize: "12px",
    padding: ".2rem .4rem",
  };
  const products = useSelector((state) => state.products);
  let freeShippingQuantity = 500 - totalQuantity;
  return (
    <div
      // onClick={() => setShowCartlist(false)}
      className={`cart_list ${showCartlist ? "show" : "hide"}`}
    >
      <div className="cart_list_container">
        <div className="cart_list_header">
          <h4>
            Shopping Cart{" "}
            <span style={styleOfAmmount}>{products.totalAmmount}</span>
          </h4>
          <button onClick={() => setShowCartlist(false)} className="hide_cart">
            <GrClose />
          </button>
        </div>
        <div className="cart_products">
          <div className="cart_products_container">
            <CartItem />
          </div>
        </div>
        <div className="total">
          <h3 className="total_h3">Total</h3>
          <h4 className="total_h4">${totalQuantity}.00</h4>
        </div>
        <div className="view_cart">
          <button className="view_cart_button">view cart</button>
        </div>
        <div className="show_cartlist">
          <button className="show_cartlist_button">show cart</button>
        </div>
        <div className="free_shipping_progress">
          <h4 className="spend_to_free_shipping">
            {totalQuantity !== 0
              ? totalQuantity <= 500
                ? `spend $${freeShippingQuantity}.00 to free shipping`
                : "free shipping"
              : "spend $500.00 to free shipping"}
          </h4>
          <ProgressBar
            striped
            variant="danger"
            animated
            className="progresbar"
            now={(totalQuantity / 500) * 100}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
