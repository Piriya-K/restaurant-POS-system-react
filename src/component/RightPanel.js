import React from "react";
import RightPanelItemList from "./RightPanelItemList";
import { useState } from "react";

const RightPanel = ({ itemlist }) => {
  const [totalValue, setTotalValue] = useState(0);

  const receiveValueCallback = (valueDataFromChildComponent) => {
    setTotalValue(valueDataFromChildComponent);
  };

  return (
    <div className="text-red-500 shadow-lg rounded-md hover:bg-gray-100">
      <div>
        <ul>
          {itemlist.map((item, index) => (
            <RightPanelItemList
              item={item}
              key={index}
              itemValueCallBack={receiveValueCallback}
            />
          ))}
        </ul>
      </div>
      <div>${totalValue}</div>
    </div>
  );
};

export default RightPanel;
