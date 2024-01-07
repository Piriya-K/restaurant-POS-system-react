import React from "react";
import menu from "../services/menu";

const LeftPanel = () => {
  return (
    <div className="text-red-500 shadow-lg rounded-md  hover:bg-gray-100">
      {Object.keys(menu.menus).map((menuType) => (
        <div key={menuType}>
          <h3 className="shadow-lg bg-gray-100">{menuType}</h3>
          <ul>
            {menu.menus[menuType].map(item => (
              <li key={item.name}>
                {item.name}-${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;
