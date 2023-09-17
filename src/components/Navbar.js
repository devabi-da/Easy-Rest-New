import {React, useState} from "react";
import logo from "../assets/otoko_logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/Navbar.css'

const Navbar = () => {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className="hiddenLinks">
        <Link to='/'> Home </Link>
        <Link to='/menu'> Menu </Link>
        <Link to='/Deliveries'> Deliveries\T.A </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        {/* <Link to='/cart'> <ShoppingCartIcon /> </Link> */}
        </div>
      </div>
      <div className="rightSide">
        <Link to='/'> Home </Link>
        <Link to='/menu'> Menu </Link>
        <Link to='/Deliveries'> Deliveries\T.A </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        {/* <Link to='/cart'> <ShoppingCartIcon /> </Link> */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
