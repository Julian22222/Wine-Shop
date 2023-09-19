import { NavLink } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";

const NavBar = () => {
  const value = useContext(Context);

  const items = ["home", "requests", "basket"];

  const handleHome = () => {
    value.setWineType("");
    value.setSortBy("");
    value.setOrder("");
  };

  return (
    <div className="NaviBar">
      <ul className="nav-container">
        {items.map((item) => {
          return item === "home" ? (
            <li key={item} className="NavBar">
              <NavLink
                to="/Wine-Shop"
                className="NavBar-link"
                onClick={handleHome}
              >
                {" "}
                {item}
              </NavLink>
            </li>
          ) : item === "requests" ? (
            <li key={item} className="NavBar">
              <NavLink to="requests" className="NavBar-link">
                {item}
              </NavLink>
            </li>
          ) : (
            <li key={item} className="NavBar">
              <NavLink to="basket" className="NavBar-link">
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
