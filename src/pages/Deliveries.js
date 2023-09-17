import React from "react";
import { MenuList } from "../helpers/MenuList";
import {Product} from "../components/Product";
import "../styles/Order.css";

const Deliveries = () => {
  return (
    <div className="shop">
      <h1 className="shopTitle"> Our Menu</h1>
      <div className="products">
        {MenuList.map((Item) => (
          <Product data={Item} />
        ))}
      </div>
    </div>
  );
};

export default Deliveries;
