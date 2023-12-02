import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MenuCard = (props) => {
  return (
    <div className="menu-card">
      <div style={{ backgroundImage: `url(${props.image})` }}></div>
      <p>{props.name}</p>
      <p>₹ {props.price}</p>
      {/* <Link> */}
      <div className="shopping-buttons">
        <button>Add to <AiOutlineShoppingCart/></button>
        <button>Buy Now</button>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default MenuCard;
