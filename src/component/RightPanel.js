import React from "react";
import { useState } from "react";

const RightPanel = ({ itemlist, onQuantityClick }) => {
  const [totalValue, setTotalValue] = useState(0);

  const setQuantity = (index, newQuantity) => {
    onQuantityClick(index, newQuantity);
  };

  const removeItemFromList = (index) => {
    onQuantityClick(index);
  };

  const sumValue = itemlist.reduce((value, item) => {
    return value + item.value;
  }, 0);

  return (
    <div className="shadow-lg rounded-md hover:bg-gray-100">
      <div className="text-right mr-6">Total: ${sumValue.toFixed(2)}</div>
      <ul>
        {itemlist.map((item, index) => (
          <div>
            {item.quantity >= 1 ? (
              <li className="grid grid-cols-3 justify-around mt-2" key={index}>
                <div className="flex flex-row justify-around">{item.name}</div>
                <div className="flex flex-row justify-around bg-gray-600 rounded-md">
                  <button
                    className="w-full text-white"
                    onClick={() => {
                      let newQuantity = item.quantity - 1;
                      if (newQuantity > 0) {
                        setQuantity(index, newQuantity);
                      } else removeItemFromList(index);
                    }}
                  >
                    -
                  </button>
                  <span className="bg-white w-full text-center">
                    {item.quantity}
                  </span>
                  <button
                    className="w-full text-white"
                    onClick={() => {
                      let newQuantity = item.quantity + 1;
                      if (newQuantity > 0) {
                        setQuantity(index, newQuantity);
                      } else removeItemFromList(index);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-row justify-around">
                  ${item.price} - ${item.value.toFixed(2)}
                </div>
              </li>
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RightPanel;
