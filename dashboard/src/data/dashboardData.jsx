// src/data/dashboardData.js

import { MdOutlineCircle } from "react-icons/md";
import { BsLayoutSidebar, BsBox } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuFile } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaFileDownload, FaRegIdCard } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { BsFillXDiamondFill } from "react-icons/bs";
import { IoCodeSlashSharp } from "react-icons/io5";
import { LuToggleRight } from "react-icons/lu";
import { RiLayoutTopLine } from "react-icons/ri";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { LiaTableSolid } from "react-icons/lia";
import { MdDataset } from "react-icons/md";

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
  {
    sub: true,
    subtitle: "Apps and pages",
    title: "Calender",
    icon: <SlCalender />,
  },
  {
    title: "Invoice",
    icon: <FaFileDownload />,
  },
  {
    title: "User",
    icon: <CiUser />,
  },
  {
    title: "Roles and permission",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Pages",
    icon: <LuFile />,
  },
  {
    title: "Authentication",
    icon: <FaLock />,
  },
  {
    title: "Wizard example",
    icon: <BsBox />,
  },
  {
    title: "Modal example",
    icon: <MdCheckBoxOutlineBlank />,
  },

  {
    sub: true,
    subtitle: "COMPONENTS",
    title: "Card",
    icon: <FaRegIdCard />,
  },
  {
    title: "User Interface",
    icon: <TbCards />,
  },
  {
    title: "Extended UI",
    icon: <BsFillXDiamondFill />,
  },
  {
    title: "Icons",
    icon: <IoCodeSlashSharp />,
  },
  {
    sub: true,
    subtitle: "FORMS AND TABLES",
    title: "Form Elements",
    icon: <LuToggleRight />,
  },
  {
    title: "Form layouts",
    icon: <RiLayoutTopLine />,
  },
  {
    title: "Form wizard",
    icon: <FaArrowUpRightDots />,
  },
  {
    title: "Form Validation",
    icon: <TiTickOutline />,
  },
  {
    title: "Tables",
    icon: <LiaTableSolid />,
  },
  {
    title: "Data tables",
    icon: <MdDataset />,
  },
];
