import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { LuMousePointerClick } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { MdDoNotDisturbAlt } from "react-icons/md";
const MonthlyCampaign = () => {
  const stats = [
    {
      icon: <IoMailOutline />,
      label: "Emails",
      count: "12,346",
      change: "0.3%",
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
      percentageColor: "text-green-500",
    },
    {
      icon: <IoIosLink />,
      label: "Opened",
      count: "8,764",
      change: "2.1%",
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-100",
      percentageColor: "text-green-500",
    },
    {
      icon: <LuMousePointerClick />,
      label: "Clicked",
      count: "967",
      change: "1.4%",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
      percentageColor: "text-red-500",
    },

    {
      icon: <BsPeople />,
      label: "Subscribe",
      count: "345",
      change: "8.5%",
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-100",
      percentageColor: "text-green-500",
    },
    {
      icon: <BiError />,
      label: "Complaints",
      count: "10",
      change: "1.5%",
      iconColor: "text-gray-500",
      bgColor: "bg-gray-100",
      percentageColor: "text-red-500",
    },
    {
      icon: <MdDoNotDisturbAlt />,
      label: "Unsubscribe",
      count: "86",
      change: "0.8%",
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
      percentageColor: "text-green-500",
    },
  ];
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div>
        <h3 className="text-base font-bold text-gray-500">
          Monthly Campaign State
        </h3>
        <p className="text-sm text-gray-400">8.52k Social visitors</p>
      </div>
      <div>
        {stats.map((stat, index) => (
          <div key={index} className="flex mt-5 justify-between items-center">
            <div className="flex items-center">
              <div
                className={`${stat.iconColor} ${stat.bgColor}  rounded-sm text-xl p-1.5`}
              >
                {stat.icon}
              </div>
              <p className="ml-2 text-gray-500 font-semibold">{stat.label}</p>
            </div>
            <div className="flex">
              <p className="text-gray-500 font-semibold">{stat.count}</p>
              <p className={`ml-3 ${stat.percentageColor}`}>{stat.change}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyCampaign;
