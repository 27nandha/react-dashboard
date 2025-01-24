// src/data/dashboardData.js

import { MdOutlineCircle } from "react-icons/md";
import { BsLayoutSidebar } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";

export const Dashboard = [
  {
    title: "Dashboard",
    icon: <RiHome6Line />,
    submenu: true,
    submenuItems: [
      { id: 1, title: "Analytics", icon: <MdOutlineCircle /> },
      { id: 2, title: "CRM", icon: <MdOutlineCircle /> },
      { id: 3, title: "Ecommerce", icon: <MdOutlineCircle /> },
    ],
  },
  {
    title: "Layouts",
    icon: <BsLayoutSidebar />,
  },
];
