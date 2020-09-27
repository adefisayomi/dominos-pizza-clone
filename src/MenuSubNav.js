import React from "react";
import { Link } from "react-router-dom";
import { menuSubNav } from "../src/navs/NavigationMenu";
import "./MenuSubNav.css";
function MenuSubNav() {
  return (
    <div className="menu__subNavBar">
      <div className="menu__subNav">
        <ul>
          {menuSubNav.map((menu) => (
            <Link className = "list__link" to={menu.path}>
              <li>{menu.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuSubNav;
