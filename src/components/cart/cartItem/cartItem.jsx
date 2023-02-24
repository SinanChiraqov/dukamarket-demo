import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import "./cartItem.scss";
import { removeFromCart, increaseAmount, decreaseAmount } from "../../../features/cartSlice";
import { useEffect } from "react";

const CartItem = () => {
  // const [value, setValue] = useState("01");
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseAmmount = (itemId) => {
    dispatch(increaseAmount(itemId));
  };
  
  const handleDecreaseAmmount = (itemId) => {
    dispatch(decreaseAmount(itemId));
  };

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setValue(result);
  };
  const products = useSelector((state) => state.products.cartItems);

  return products.map((item) => {
    return (
      <div key={item.id} className="cart_list_item">
        <div className="cart_list_item_container">
          <img src={`src/assets/images/${item.imgUrl}`} alt="" />
          <div className="cartlist_item_description">
            <a href="#">
              <h4 className="cartlist_item_heading">{item.title}</h4>
            </a>
            <div className="cartlist_price">
              <div className="cartlist_price_container">
                <div className="cartlist_ammount">{item.ammount}x</div>
                <div className="cartlist_discount">${item.discount}</div>
              </div>
              <div className="cartlist_item_ammount">
                <button
                  onClick={() => {
                    handleDecreaseAmmount(item.id);
                  }}
                  className="decrease_ammount ammount_btn"
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.ammount}
                  className="cartItemAmmountInput"
                  onChange={handleChange}
                />
                <button
                  onClick={() => {
                    handleIncreaseAmmount(item.id);
                  }}
                  className="increase_ammount ammount_btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleRemoveFromCart(item);
            }}
            className="cartlist_item_delete"
          >
            <GrClose className="delete_item" />
          </div>
        </div>
      </div>
    );
  });
};

export default CartItem;
