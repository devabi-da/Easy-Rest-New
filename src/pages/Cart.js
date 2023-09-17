import React, { useContext } from "react";
import { MenuList } from "../helpers/MenuList";
import { ShopContext } from "../context/shop-context";
import CartItem from "../helpers/cartItem";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount= getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your products</h1>
      </div>
      <div className="cartItems">
        {MenuList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      <div className="checkout">
        <p> Total:{totalAmount} ₪</p>
        <button onClick={() => navigate("/deliveries")}> Continue Shopping</button>
        <button> Checkout </button>
      </div>
    </div>
  );
};

export default Cart;
