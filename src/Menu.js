import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import "./Menu.css";
import {menuItems} from "../src/api/menuItems"
import { menuNavs } from "../src/navs/NavigationMenu";
import Aside from "./Aside";
import MenuSubNav from "./MenuSubNav";
import Viewall from "./ViewAll";
function Menu() {
  return (
    <div clasname="menu__wrapper">
      <Header navLinks={menuNavs} />
      <MenuSubNav />
      <div className="menu">
        <Viewall  menuItems = {menuItems}/>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
