import Toolbar_Selector_Button_4s from "../../assets/Toolbar_Selector Button_4s.png";
import Toolbar_Selector_Buttons_2 from "../../assets/Toolbar_Selector Buttons_2.png";
const ViewModeToggle = ({ viewMode, setViewMode }) => (
  <div className="flex ml-4">
    <button
      onClick={() => setViewMode("grid")}
      className={`${
        viewMode === "grid" ? "bg-black text-white" : "bg-gray-200 text-black"
      } p-2 rounded`}
    >
      <img src={Toolbar_Selector_Button_4s} alt="Grid View" />
    </button>
    <button
      onClick={() => setViewMode("list")}
      className={`${
        viewMode === "list" ? "bg-black text-white" : "bg-gray-200 text-black"
      } p-2 rounded`}
    >
      <img src={Toolbar_Selector_Buttons_2} alt="List View" />
    </button>
  </div>
);

export default ViewModeToggle;
