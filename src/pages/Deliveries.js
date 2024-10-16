import React from 'react';
import { MenuList } from '../helpers/MenuList';
import { Product } from '../components/Product';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../styles/Order.css';

const Deliveries = () => {
  return (
    <div className="shop">
      <div className="cart-icon">
        <Link to="/cart">
          {' '}
          <ShoppingCartIcon />{' '}
        </Link>
      </div>
      <div className="products">
        {MenuList.map((Item) => (
          <Product data={Item} />
        ))}
      </div>
    </div>
  );
};

export default Deliveries;
