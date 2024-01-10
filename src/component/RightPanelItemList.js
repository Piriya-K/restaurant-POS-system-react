import React from "react";
import { useState } from "react";

const RightPanelItemList = ({ item, index, itemValueCallBack }) => {
  //   let quantity = 1;
  const [quantity, setQuantity] = useState(1);
  const [itemValue, setItemValue] = useState(item.price * quantity);

  return (
    <>
      {quantity >= 1 ? (
        <li className="grid grid-cols-3 justify-around" key={index}>
          {itemValueCallBack(itemValue)}
          <div className="border border-solid border-black flex flex-row justify-around">
            {item.name}
          </div>
          <div className="border border-solid border-black flex flex-row justify-around">
            <button
              onClick={() => {
                setQuantity(quantity - 1);
                setItemValue(((quantity - 1) * item.price).toFixed(2));
                itemValueCallBack(itemValue);
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
                setItemValue(((quantity + 1) * item.price).toFixed(2));
                itemValueCallBack(itemValue);
              }}
            >
              +
            </button>
          </div>
          <div className="border border-solid border-black flex flex-row justify-around">
            ${item.price} - ${itemValue}
          </div>
        </li>
      ) : null}
    </>
  );
};

export default RightPanelItemList;
