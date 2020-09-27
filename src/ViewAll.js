import React from "react"
import { Link } from "react-router-dom";
import "./ViewAll.css"
export default function Viewall({menuItems}) {
    return (
        <>
             <div className="menu__main">
          <h2>MENU</h2>
          {/* dynamic pages */}
          {menuItems.map(menu => (
              <Link className = "menu__link">
            <div className="menu__dynamicPages">
              <img src={menu.url} alt="" />
              <div className = "menu__labels">
          <h2>{menu.title}</h2>
          <p>{menu.alt}</p>
              </div>
            </div>
          </Link>
          ))}
        </div>
        </>
    )
}
