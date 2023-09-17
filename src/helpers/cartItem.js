import React, {useContext} from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = (props) => {
  const { id, image, name, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>{price}.00₪</p>
        <div className="countHandler"></div>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]}></input>
        <button onClick={() => addToCart(id)}> + </button>
      </div>
    </div>
  );
};

export default CartItem;
