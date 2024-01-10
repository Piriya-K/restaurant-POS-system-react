import React, { useState } from "react";
import menu from "../services/menu";

const CenterPanel = ({ selectedMenu, onItemClick }) => {
  const handleClick = (item) => {
    onItemClick(item);
  };
  return (
    <div className="shadow-lg rounded-md hover:bg-gray-100">
      <div className="grid grid-cols-2 gap-2 m-2">
        {selectedMenu ? (
          menu.menus[selectedMenu].map((item, index) => (
            <button
              className="bg-blue-300 rounded-md shadow-lg"
              key={index}
              type="button"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </button>
          ))
        ) : (
          <p>No menu items selected</p>
        )}
      </div>
    </div>
  );
};

export default CenterPanel;
