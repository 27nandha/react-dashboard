import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { CgPaypal } from "react-icons/cg";
const TotalEarnings = () => {
  const progressBars = [
    { height: 120, progress: "60%" }, // First bar: height=64, progress=60%
    { height: 130, progress: "50%" }, // Second bar: height=30, progress=50%
    { height: 140, progress: "80%" },
    { height: 150, progress: "60%" }, // First bar: height=64, progress=60%
    { height: 160, progress: "50%" }, // Second bar: height=30, progress=50%
    { height: 120, progress: "80%" },
    { height: 100, progress: "50%" }, // Second bar: height=30, progress=50%
    { height: 80, progress: "80%" }, // Third bar: height=40, progress=80%
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div>
        <h3 className="text-base font-bold text-gray-500">Total Earnings</h3>
        <div className="flex items-center">
          <p className="text-2xl font-bold text-gray-500">87%</p>
          <FaAngleUp className="text-sm text-green-500 mr-1 ml-1" />
          <p className="text-sm text-green-500">25.8%</p>
        </div>
      </div>
      <div className="flex mt-4 justify-between items-center space-x-4">
        {progressBars.map((bar, index) => (
          <div
            key={index}
            className="w-3 bg-gray-200 rounded-lg relative"
            style={{ height: `${bar.height}px` }} // Dynamic height
          >
            <div
              className="absolute bottom-0 bg-blue-500 w-full rounded-lg transition-all duration-300"
              style={{ height: bar.progress }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-3 items-center">
        <div className="flex items-center ">
          <MdOutlineAttachMoney className="text-2xl text-indigo-400 bg-indigo-100 rounded-md" />
          <div className="ml-2 ">
            <p className="text-md text-gray-500 font-semibold ">Total Sales</p>
            <p className="text-sm text-gray-400 font-semibold">Refund</p>
          </div>
        </div>
        <div>
          <p className="text-green-500">+$98</p>
        </div>
      </div>
      <div className="flex justify-between mt-3 items-center">
        <div className="flex items-center ">
          <CgPaypal className="text-2xl text-gray-400 bg-gray-100 rounded-md" />
          <div className="ml-2 ">
            <p className="text-md text-gray-500 font-semibold ">
              Total Revenue
            </p>
            <p className="text-sm text-gray-400 font-semibold">
              Client Payment
            </p>
          </div>
        </div>
        <div>
          <p className="text-green-500">+$126</p>
        </div>
      </div>
    </div>
  );
};

export default TotalEarnings;
