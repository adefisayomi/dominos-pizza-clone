import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import "./Menu.css"
function Menu() {
    const menuNavs = [
        { name: "HOME", path: "/" },
        { name: "MENU", path: "/pages/order/menu" },
        { name: "DEALS", path: "/pages/order" }
        
      ];
    return (
        <div clasname= "menu__wrapper">
            <Header navLinks = {menuNavs}/>
            <div className="menu">
        <h2>i am the menu page</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Menu
