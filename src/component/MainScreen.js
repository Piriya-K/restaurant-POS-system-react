import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CenterPanel from "./CenterPanel";
import { useState } from "react";

const MainScreen = () => {
  const [itemlist, setItemList] = useState([]);

  const handleItemClick = (item) => {
    setItemList([...itemlist, item]);
  };

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menuType) => {
    setSelectedMenu(menuType);
  };

  return (
    <div className="grid grid-cols-3 flex-1 gap-8 bg-white p-5 sm:text-xs">
      <LeftPanel onCategoryClick={handleMenuClick} />
      <CenterPanel selectedMenu={selectedMenu} onItemClick={handleItemClick} />
      <RightPanel itemlist={itemlist} />
    </div>
  );
};

export default MainScreen;
