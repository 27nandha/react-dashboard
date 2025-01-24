import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";

const DashboardWidgets = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {/* Sales Overview */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between">
          <h3 className="text-sm font-bold text-gray-500">Sales Overview</h3>
          <p className="text-green-300 font-bold text-sm">+18.2</p>
        </div>
        <p className="font-bold text-xl text-gray-600">$42.5k</p>
        <div className="flex justify-between">
          <div className="text-lg mt-4">
            <div className="flex">
              <IoCartOutline className="text-cyan-600 text-lg duration-200 hover:text-cyan-300" />
              <p className="text-sm pl-1">Order</p>
            </div>
            <p className="pt-2 text-base font-semibold items-end text-gray-600">
              62.2%
            </p>
            <p className="text-sm text-gray-400">6,440</p>
          </div>
          <div className="flex items-center mt-4">
            <p>vs</p>
          </div>
          <div className="text-lg mt-4">
            <div className="flex">
              <p className="text-sm mr-1">Visits</p>
              <FaLink className="text-indigo-500 text-lg duration-200 hover:text-indigo-300" />
            </div>
            <p className="pt-2 text-base font-semibold text-gray-600">25.5%</p>
            <p className="text-sm text-gray-400">12,749</p>
          </div>
        </div>
        <div className="w-full mt-5 bg-gray-200 h-2 rounded-lg">
          <div className="bg-cyan-500 h-2 m-0 rounded-lg w-[62.2%] duration-200 hover:bg-cyan-700 "></div>
        </div>
      </div>

      {/* Revenue Generated */}
      <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
        <CiWallet className="text-xl mb-2 text-green-400 duration-200 bg-green-100 hover:bg-green-200 rounded-full w-1/6 h-1/6 p-1" />
        <p className="text-gray-600 font-bold">97.5k</p>
        <p className="text-sm text-gray-400">Revenue Generated</p>
      </div>
    </div>
  );
};

export default DashboardWidgets;
