import "../Styles/NavBar.css";
import { NavLink } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";

const NavBar = () => {
  const { setWineType, setSortBy, setOrder } = useContext(Context);

  const handleHome = () => {
    setWineType("");
    setSortBy("");
    setOrder("");
  };

  const navItems = [
    { label: "home", path: "/Wine-Shop", onClick: handleHome },
    { label: "requests", path: "/requests" },
    { label: "basket", path: "/basket" },
  ];

  return (
    <div className="navbar-container">
      <ul className="nav-container">
        {navItems.map(({ label, path, onClick }) => (
          <li key={label} className="nav-item">
            <NavLink to={path} className="navBar-link" onClick={onClick}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
