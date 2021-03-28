import React from "react";

import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
export const SidebarTopData = [
  {
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-icon nav-top nav-text",
    id: 1,
  },
  {
    path: "/cart",
    icon: <RiIcons.RiShoppingBagLine />,
    cName: "nav-icon nav-top nav-text",
    id: 2,
  },
  {
    path: "/register",
    icon: <RiIcons.RiAccountPinBoxLine />,
    cName: "nav-icon  nav-top nav-text",
    id: 3,
  },
];

export const SidebarData = [
  {
    title: "Women",
    path: "/women/homepage",
    id: 4,
    cName: "nav-text",
  },
  {
    title: "Men",
    path: "/men/homepage",
    id: 5,

    cName: "nav-text",
  },
  {
    title: "Kids",
    path: "/kids/homepage",
    id: 6,

    cName: "nav-text",
  },
  {
    title: "Gifts",
    path: "/gifts/homepage",
    id: 7,

    cName: "nav-text",
  },
];
