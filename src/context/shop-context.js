import { useScrollTrigger } from "@mui/material";
import React, { createContext, useState } from "react";
import { MenuList } from "../helpers/MenuList";

export const ShopContext = createContext(null);

const getDeafaultCart = () => {
  let cart = {};
  for (let i = 1; i < MenuList.length; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDeafaultCart());

  const getTotalCartAmount = () => {
    let amount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = MenuList.find((product) => product.id === Number(item));
        amount += cartItems[item] * itemInfo.price;
      }
    }
    return amount;
  };

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
