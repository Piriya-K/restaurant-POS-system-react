import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CenterPanel from "./CenterPanel";
import { useState } from "react";

const MainScreen = () => {
  const [itemlist, setItemList] = useState([]);

  const handleItemClick = (item) => {
    setItemList([
      ...itemlist,
      {
        name: item.name,
        price: item.price,
        quantity: 1,
        value: item.price,
      },
    ]);
  };

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menuType) => {
    setSelectedMenu(menuType);
  };

  const handleQuantityClick = (index, newQuantity) => {
    const updatedItemList = [...itemlist];
    if (index >= 0 && index < updatedItemList.length && newQuantity >= 1) {
      updatedItemList[index].quantity = newQuantity;
      updatedItemList[index].value = newQuantity * updatedItemList[index].price;
      setItemList(updatedItemList);
    } else {
      setItemList((itemList) =>
        index >= 0 && index < itemList.length
          ? itemlist.filter((_, i) => i !== index)
          : itemList
      );
    }
  };

  return (
    <div className="grid grid-cols-3 flex-1 gap-8 bg-white p-5 sm:text-xs">
      <LeftPanel onCategoryClick={handleMenuClick} />
      <CenterPanel selectedMenu={selectedMenu} onItemClick={handleItemClick} />
      <RightPanel itemlist={itemlist} onQuantityClick={handleQuantityClick} />
    </div>
  );
};

export default MainScreen;
