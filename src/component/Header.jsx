import { FaRegMoon } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

const Header = ({ isLightMode, toggleTheme }) => {
  return (
    <div className="header">
      <h3>Where in the world?</h3>

      <div className="header__theme_switch" onClick={toggleTheme}>
        {isLightMode ? <IoMoon className="dark__moonIcon" /> : <FaRegMoon />}
        <p>{isLightMode ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default Header;
