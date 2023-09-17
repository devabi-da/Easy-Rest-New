import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/plate.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="headerContainer">
        <h1> OTOKO </h1>
        <p>Botique sushi by Sensei Tugarashi</p>
        <Link to="/deliveries">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
