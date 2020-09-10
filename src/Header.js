import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";

function Header({ navLinks }) {
  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="header__menu">
          {navLinks.map(({ name, path }) => (
            <Link to={path} className="header__menuLink">
              {name}
            </Link>
          ))}
        </div>

        <div className="header__signinSection">
          <Link className="header__personIconLink">
            <PersonOutlineIcon className="header__personIcon" />
          </Link>
          <Link className="header__personIconLink">
            <span className="header__signin">SIGN IN</span>
          </Link>
        </div>
        <Link to="/checkout" className="header__shoppingCartLink">
          <div className="header__shoppingCart">
            <span className="header__cartCounter">0</span>
            <ShoppingCartIcon className="header__shoppingCartIcon" />
            <span>cart</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
