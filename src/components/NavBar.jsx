import { Link } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";

const NavBar = () => {
  const value = useContext(Context);

  const items = ["home", "requests", "basket"];

  const handleHome = () => {
    value.setWineType("");
  };

  return (
    <div className="NaviBar">
      <ul className="nav-container">
        {items.map((item) => {
          return item === "home" ? (
            <li key={item} className="NavBar">
              <Link
                to="/Wine-Shop"
                className="NavBar-link"
                onClick={handleHome}
              >
                {" "}
                {item}
              </Link>
            </li>
          ) : item === "requests" ? (
            <li key={item} className="NavBar">
              <Link to="requests" className="NavBar-link">
                {item}
              </Link>
            </li>
          ) : (
            <li key={item} className="NavBar">
              <Link to="basket" className="NavBar-link">
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
