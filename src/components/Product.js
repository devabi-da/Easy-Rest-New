import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "../styles/Order.css";

export const Product = (props) => {
  const { id, image, name, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmonut = cartItems[id];
  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <h1> {name} </h1>
        <p> {price}.00₪ </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}> Add Item {cartItemAmonut > 0 && <> ({cartItemAmonut})</>}</button>
    </div>
  );
};
