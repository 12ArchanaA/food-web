import React, { useState } from "react";
import logo from "../assets/logo4.jpg";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const handleLinks = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="left-side" id={openLinks? "open": "close"}>
        <img className="logoImg" src={logo} alt=""/>
        <div className="hidden-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="right-side">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart"><AiOutlineShoppingCart/></NavLink>
        <button onClick={handleLinks}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
