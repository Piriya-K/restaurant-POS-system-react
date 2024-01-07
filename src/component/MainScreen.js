import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CenterPanel from "./CenterPanel";

const MainScreen = () => {
  return (
    <div className="grid grid-cols-3 flex-1 gap-8 bg-white p-5">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
};

export default MainScreen;
