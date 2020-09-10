import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  // The dynamic links displayed @ home on header ============================================
  const homeNavs = [
    { name: "ORDER ONLINE", path: "/pages/order" },
    { name: "MENU", path: "/pages/order/menu" },
    { name: "DEALS", path: "/pages/order" },
    { name: "STORES", path: "/pages/order" },
    { name: "TRACKER", path: "/pages/tracker" },
  ];
  // ========================================================================================
  return (
    <div className="home__wrapper">
      <Header navLinks={homeNavs} />
      <div className="home">
        <div className="home__headerSection">
          <div className="home__headerBorder" />
          <div className="home__headerCenter">
            <h2 className="home__startorder">START YOUR ORDER</h2>
            <Link className="home__link">DELIVERY</Link>
            <span className="home__para">or</span>
            <Link className="home__link">CARRYOUT</Link>
          </div>
          <div className="home__headerBorder" />
        </div>
        {/* Banner section ========================================= */}
        <div className="home__bannerWrapper">
          <div className="home__pizzaBanner">
            <img className= "home__pizzaMain"
              className="home__image1 home__img"
              src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/db37b57c-dd96-454a-b0a5-2c58675a3f55.jpg"
              alt=""
            />

            <img
              className="home__image2 home__img"
              src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/c8a252e2-ad43-4306-ae5f-86f7830a7722.jpg"
              alt=""
            />
            <img
              className="home__image3 home__img"
              src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/ed788b5a-bbce-4b1c-97a8-80aed066cf57.jpg"
              alt=""
            />

            
              <img
                className="home__image4 home__img"
                src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/ca86a567-970a-4bd9-9b56-da50cd80f454.jpg"
                alt=""
              />
           
          </div>
          <div className="home__deliveryTime">
          <span className="home__notice home__current">Current Average Delivery Times</span>
          <span className="home__notice home__num2">2</span>
          <span className="home__notice home__num5">5</span>
          <span className="home__notice home__min">mins</span>
          
          </div>
        </div>
      </div>
      <Footer />
    </div> /* ending of the main Home-wrapper Div  */
  );
}

export default Home;
