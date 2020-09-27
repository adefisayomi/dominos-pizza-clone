import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export const storeNavs = [
  { name: "HOME", path: "/" },
  { name: "PIZZA", path: "/pages/order/menu" },
  { name: "SIDES", path: "/pages/order/menu" },
  { name: "SIDES", path: "/pages/order/MENU" },
  { name: "DRINKS", path: "/pages/order/menu" },
  { name: "DEALS", path: "/pages/order/menu" },
];
export const menuNavs = [
  { name: "HOME", path: "/" },
  { name: "MENU", path: "/pages/order/menu" },
  { name: "DEALS", path: "/pages/order/menu" },
];
export const HomeNavs = [
  { name: "ORDER ONLINE", path: "/pages/order/menu" },
  { name: "MENU", path: "/pages/order/menu" },
  { name: "DEALS", path: "/pages/order/menu" },
  { name: "STORES", path: "/pages/order/store" },
  { name: "TRACKER", path: "/pages/tracker" },
];
export const menuSubNav = [
  {name : "VIEW ALL", path : "/pages/order/menu"},
  {name : "SPECIALTY PIZZA", path : "/pages/order/menu/specialtypizza"},
  {name : "SMALLIE", path : "/pages/order/menu/smallie"},
  {name : "SIDES", path : "/pages/order/menu/sides"},
  {name : "EXTRAS", path : "/pages/order/menu/extras"},
  {name : "CHICKEN", path : "/pages/order/menu/chicken"},
  {name : "DRINKS", path : "/pages/order/menu/drinks"},
  {name : "DESSERTS", path : "/pages/order/menu/desserts"},
  {name : "DEALS", path : "/pages/order/menu/deals"}
]
