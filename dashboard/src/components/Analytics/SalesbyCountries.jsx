import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const SalesbyCountries = () => {
  const data = [
    {
      amount: "$8.45k",
      country: "United States",
      percentage: "28.5%",
      trend: "up",
      sign: true, // up or down
    },
    {
      amount: "$7.78k",
      country: "Brazil",
      percentage: "16.2%",
      trend: "down",
      sign: false, // up or down
    },
    {
      amount: "$6.48k",
      country: "India",
      percentage: "12.3%",
      trend: "up",
      sign: true, // up or down
    },
    {
      amount: "$5.12k",
      country: "Australia",
      percentage: "11.9%",
      trend: "down",
      sign: false, // up or down
    },
    {
      amount: "$4.45k",
      country: "France",
      percentage: "16.2%",
      trend: "up",
      sign: true, // up or down
    },
    {
      amount: "$3.90k",
      country: "China",
      percentage: "14.8%",
      trend: "up",
      sign: true, // up or down
    },
  ];
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div>
        <h3 className="text-base font-bold text-gray-500">
          Sales by Countries
        </h3>
        <p className="text-sm text-gray-400">Monthly Sales by Overview</p>
      </div>
      {/* countries */}
      {data.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          {/* rightside */}
          <div className="flex mt-2">
            <BiWorld className="text-2xl mt-3" />
            <div className="ml-2">
              <p className="text-base text-gray-600">{item.amount}</p>
              <p className="text-sm text-gray-400 font-semibold">
                {item.country}
              </p>
            </div>
          </div>
          {/* rightside */}
          <div>
            <p
              className={`flex ml-1 text-sm font-medium ${
                item.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.sign ? <FaAngleUp /> : <FaAngleDown />}
              {item.percentage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesbyCountries;
