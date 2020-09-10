import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import "./Store.css"
function Store() {
    const storeNavs = [
        { name: "HOME", path: "/" },
        { name: "PIZZA", path: "/pages/order/menu" },
        { name: "SIDES", path: "/pages/order/menu" },
        { name: "SIDES", path: "/pages/order/MENU" },
        { name: "DRINKS", path: "/pages/order/menu" },
        { name: "DEALS", path: "/pages/order/menu" },
      ];
    return (
        <div className= "store__wrapper">
            <Header navLinks = {storeNavs}/>
            <div className="store">
            <h2>i am the store page</h2>
        </div>
        <Footer />
        </div>
    )
}

export default Store
