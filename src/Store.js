import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { storeNavs } from "../src/navs/NavigationMenu";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import { store } from "../src/api/store";
import "./Store.css";
import Aside from "./Aside";
function Store() {
  return (
    <div className="store__wrapper">
      <Header navLinks={storeNavs} />
      <div className="store">
        {/* =================STORE MAIN =========================== */}
        <div className="store__main">
          <h2 className="store__headerTitle">SELECT YOUR LOCAL STORE</h2>
          <div className="store__locationContainer">
            <div className="store__locationHeader">
              <span className="store__emphasisHeader">STORES NEAR: NG</span>
              <span className="store__emphasis">
                Based on location you provided
              </span>
              <Link className="store__edit" to="#">
                EDIT
              </Link>
            </div>
            {store.map((store) => (
              <div className="store__locationDynamic">
                <div className="store__address">
                  <h4>
                    {store.city} {store.code}
                  </h4>
                  <p>{store.street}</p>
                  <p>{store.countryCode}</p>
                  <p>{store.phoneNumber}</p>
                </div>
                <div className="store__deliveryTime">
                  <h4>DELIVERY HOURS</h4>
                  <p>Fr-We 9:00am-9:30pm</p>
                  <p>Th 10:00am-9:30pm</p>
                  <h4>CARRYOUT HOURS</h4>
                  <p>Fr-We 9:00am-10:00pm</p>
                  <p>Th 10:00am-10:00pm</p>
                </div>
                <div className="store__details">
                  <h4>STORE DETAILS</h4>
                  <p>
                    <DirectionsBikeIcon className="store__icon" /> Delivery
                    Store
                  </p>
                  <p>
                    <StoreMallDirectoryIcon className="store__icon" /> Carryout
                    Store
                  </p>
                  <button>ORDER DELIVERY</button>
                  <button>ORDER CARRYOUT / PICKUP</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* =================STORE MAIN =========================== */}

        {/* ======================ASIDE DIV============================= */}
        <Aside />

        {/* ======================END OF ASIDE DIV========================== */}
      </div>
      <Footer />
    </div>
  );
}

export default Store;
