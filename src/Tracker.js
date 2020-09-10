import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom"
import "./Tracker.css";
function Tracker() {
  // The dynamic links displayed @ tracker on header ============================================
  const trackerNavs = [
    { name: "ORDER ONLINE", path: "/pages/order" },
    { name: "MENU", path: "/pages/order/menu" },
    { name: "DEALS", path: "/pages/order" },
    { name: "STORES", path: "/pages/order" },
    { name: "TRACKER", path: "/pages/tracker" },
  ];
  // ========================================================================================
  return (
    <div classname="tracker__wrapper">
      <Header navLinks={trackerNavs} />
      <div className="tracker">
        <div className="tracker__header"></div>
        <div className="tracker__notice">
          <div className="tracker__noticeBorder" />
          <p className="tracker__noticeBorderText">
            WANT TO KNOW WHAT'S HAPPENING WITH YOUR ORDER RIGHT NOW?
          </p>
          <div className="tracker__noticeBorder" />
        </div>
        <p className="tracker__Text">
          The delivery experts at Domino's have specifically engineered Domino's
          Tracker® to keep you up to date on the status of your order from the
          moment it's prepared to the second it leaves our store for delivery.
        </p>
        <div className="tracker__formContainer">
          <form className="tracker__form">
            <h2>TRACK YOUR ORDER</h2>
            <label className="tracker__prompt">
              Enter your phone number below
            </label>
            <label htmlFor="" className="tracker__phone" required>
              {" "}
              Phone#:
            </label>
            <label>
            <input type="text" placeholder="Phone" />
            <span>Ext.</span>
            <input type="text" placeholder="Ext." /></label>
            
            <label>
              <strong><input type="checkbox" />
                {" "}
                Yes. I agree to the <Link className= "tracker__link">Terms of Use</Link> and I am 13 or older.
              </strong>
            </label>
            <button>TRACK YOUR ORDER</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tracker;
