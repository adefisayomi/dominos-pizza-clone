import React from 'react'
import {Link} from "react-router-dom"
import "./Aside.css"
function Aside() {
    return (
        <div className="store__aside">
          <button>CHECKOUT</button>
          <div className="store__orderSetting">
            <h4>ORDER SETTINGS</h4>
            <h3>
              My Store
              <span>
                <Link className="store__asideLink">CHANGE</Link>
              </span>
            </h3>
            <p>ILUPEJU (#51816)</p>
            <p>21 Coker Road </p>
            <p>Ilupeju, Lagos NG</p>
            <p>
              <Link className="store__asideLink2">Phone Number »</Link>
            </p>
            <h3 className="store__titleRed">Service Method</h3>
            <p>
              <input type="radio" /> Carryout
            </p>
            <p>
              <input type="radio" /> Delivery
            </p>
            <h3 className="store__titleRed">Order Timing</h3>
            <p>
              <input type="radio" /> Now
            </p>
            <p>
              <input type="radio" /> Later
            </p>
          </div>
        </div>
    )
}

export default Aside
