import React from "react";
import { GiRoundKnob } from "react-icons/gi";
import { GiMeshNetwork } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { RiCoupon2Line } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
const SourceVisits = () => {
  const sources = [
    {
      icon: <GiRoundKnob />,
      title: "Direct Source",
      description: "Direct link click",
      value: "1.2k",
      change: "+4.2%",
      changeColor: "text-green-500 bg-green-100",
    },
    {
      icon: <GiMeshNetwork />,
      title: "Social Network",
      description: "Social channel",
      value: "31.5k",
      change: "+8.2%",
      changeColor: "text-green-500 bg-green-100",
    },
    {
      icon: <CiMail />,
      title: "Email Newsletter",
      description: "Mail Campaigns",
      value: "893",
      change: "+2.4%",
      changeColor: "text-green-500 bg-green-100",
    },
    {
      icon: <FiExternalLink />,
      title: "Refferals",
      description: "Impact Radius Visits",
      value: "342",
      change: "-0.4%",
      changeColor: "text-red-500 bg-red-100",
    },

    {
      icon: <RiCoupon2Line />,
      title: "ADVT",
      description: "Google ADVT",
      value: "2.15k",
      change: "+9.1%",
      changeColor: "text-green-500 bg-green-100",
    },
    {
      icon: <CiStar />,
      title: "Other",
      description: "Many Sources",
      value: "12.5k",
      change: "+6.2%",
      changeColor: "text-green-500 bg-green-100",
    },
  ];
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-base font-bold text-gray-500">Source Visits</h3>
      <p className="text-sm text-gray-400">33.8k Visitors</p>
      {sources.map((source, index) => (
        <div key={index} className="mt-3 flex justify-between ">
          <div className="flex items-center">
            <div className="text-2xl m-1 rounded-sm  text-gray-500 bg-gray-100">
              {source.icon}
            </div>

            <div className="ml-2">
              <p className="text-base  text-gray-500 font-medium">
                {source.title}
              </p>
              <p className="text-sm text-gray-500 ">{source.description}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-2 text-sm text-gray-400 items-end">
              {source.value}
            </p>
            <p className={`m-1 text-sm rounded-sm p-1 ${source.changeColor}`}>
              {source.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SourceVisits;
