import React, { useState } from "react";
import "../styles/Menu.css";
import { MenuList } from "../data/MenuList";
import MenuCard from "../components/MenuCard";

const Menu = () => {
  const [items, setItems] = useState(MenuList);
  const filterItem = (categoryName) => {
    const updatedItems = MenuList.filter((currentElement) => {
      return currentElement.category === categoryName;
    });
    setItems(updatedItems);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menu-lists">
        <button onClick={() => filterItem("Burger")}>Burgers</button>
        <button onClick={() => filterItem("Sandwich")}>Sandwiches</button>
        <button onClick={() => filterItem("French Fries")}>French Fries</button>
        <button onClick={() => setItems(MenuList)}>All</button>
      </div>
      <div className="list">
        {items.map((item, key) => {
          return (
            <>
              <MenuCard
                key={key}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
