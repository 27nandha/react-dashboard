import React, { useState } from "react";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { IoIosArrowDown } from "react-icons/io";
import { RxGithubLogo } from "react-icons/rx";
import { Dashboard } from "../data/dashboardData"; // Importing the Dashboard data
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div
      className={`h-auto p-5 mt-0 pt-2 shadow-lg ${
        open ? "w-60" : "w-20"
      } relative duration-300`}
    >
      <MenuOpenOutlinedIcon
        className={`text-3xl absolute ${
          open ? "right-3" : "-right-2 bg-white shadow-slate-600"
        } top-3.5 cursor-pointer duration-300 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <RxGithubLogo
          className={`text-customPurple text-3xl cursor-pointer block float-left ml-1 mr-3 duration-500 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-customh1 origin-left font-semibold text-2xl ${
            !open && "scale-0"
          }`}
        >
          Vuexy
        </h1>
      </div>
      <ul className="pt-2">
        {Dashboard.map((dashboard, index) => (
          <div key={dashboard.title + index}>
            {/* Render the subtitle if `sub` is true */}
            {dashboard.sub && open && (
              <li
                key={`subtitle-${index}`}
                className="text-grayishBlue text-sm uppercase font-semibold p-2 mt-4"
              >
                {dashboard.subtitle}
              </li>
            )}
            {/* Render the title */}
            <li
              key={index}
              className={`text-gray-600 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-customPurplelight rounded-md ${
                dashboard.sub ? "mt-2" : ""
              }`}
            >
              <span className="text-2xl block float-left">
                {dashboard.icon ? dashboard.icon : <MdDashboard />}
              </span>
              <span
                className={` text-sm font-medium flex-1 duration-500 ${
                  !open && "hidden"
                }`}
              >
                {dashboard.title}
              </span>
              {dashboard.submenu && open && (
                <IoIosArrowDown
                  className={`cursor-pointer text-black duration-200 ${
                    !submenuOpen && "rotate-180"
                  }`}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                />
              )}
            </li>
            {/* submenu for dashboard */}
            {dashboard.submenu && submenuOpen && open && (
              <ul>
                {dashboard.submenuItems.map((submenuItem) => (
                  <li
                    key={submenuItem.id}
                    className="text-gray-600 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-customPurplelight rounded-md"
                  >
                    <span className="text-sm block float-left">
                      {submenuItem.icon || <MdDashboard />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-500 ${
                        !open && "hidden"
                      }`}
                    >
                      {submenuItem.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
      {/* end of section1 */}
    </div>
  );
};

export default Sidebar;
