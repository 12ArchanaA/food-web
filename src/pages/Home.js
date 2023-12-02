import React from "react";
import BackgroundImg from "../assets/background.avif";
import Profile from "../assets/profile1.webp";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Profile})` }}>
      <div className="header-part">
        <h2>Xyz</h2>
        <p>Hello there!!!!!!!!!</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
