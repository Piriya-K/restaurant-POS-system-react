import React from "react";
import menu from "../services/menu";

const LeftPanel = ({ onCategoryClick }) => {
  const handleClick = (menuType) => {
    onCategoryClick(menuType);
  };

  return (
    <div className="shadow-lg rounded-md  hover:bg-gray-100 ">
      {Object.keys(menu.menus).map((menuType) => (
        <div key={menuType}>
          <button
            className="shadow-lg bg-yellow-200 w-full mt-2 rounded-md"
            onClick={() => handleClick(menuType)}
          >
            {menuType}
          </button>
          {/* <ul>
            {menu.menus[menuType].map((item) => (
              <li key={item.name}>
                {item.name}-${item.price.toFixed(2)}
              </li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;
