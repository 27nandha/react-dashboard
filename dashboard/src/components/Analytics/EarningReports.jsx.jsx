import * as React from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { RiPaypalFill } from "react-icons/ri";

const EarningReports = () => {
  const Bardata = [
    { name: "Mo", Earnings: 180 },
    { name: "Tu", Earnings: 300 },
    { name: "We", Earnings: 270 },
    { name: "Th", Earnings: 180 },
    { name: "Fr", Earnings: 468 },
    { name: "Sa", Earnings: 200 },
    { name: "Su", Earnings: 290 },
  ];
  const data = [
    {
      title: "Earnings",
      value: "549.69",
      color: "indigo",
      progress: 62.2,
      icon: MdOutlineAttachMoney,
    },
    {
      title: "Profit",
      value: "256.34",
      color: "cyan",
      progress: 62.2,
      icon: FiPieChart,
    },
    {
      title: "Expense",
      value: "74.19",
      color: "red",
      progress: 62.2,
      icon: RiPaypalFill,
    },
  ];
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-around">
        <div>
          <h3 className="text-base font-bold text-gray-500">Earning Reports</h3>
          <p className="text-sm font-semibold text-gray-400">
            Weekly Earnings Overview
          </p>

          <p className="pt-8 text-3xl font-semibold text-gray-500">
            $468{" "}
            <span className="text-sm text-green-400 pl-1 pr-1 bg-green-100 align-middle">
              +4.2%
            </span>
          </p>
          <p className="pt-3 text-xs text-gray-400">
            You informed of this week <br /> compared to last week
          </p>
        </div>
        <div>
          <BarChart
            width={300}
            height={200}
            data={Bardata}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }} // Adjust margins for better spacing
          >
            <XAxis
              dataKey="name"
              tick={{ fontSize: 14 }}
              axisLine={false}
              tickLine={false}
            />{" "}
            {/* Only display X-axis names */}
            <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0)" }} />
            <Bar dataKey="Earnings" fill="#8884d8" radius={[7, 7, 7, 7]} />{" "}
            {/* Bars */}
          </BarChart>
        </div>
      </div>
      {/* Earning Profit Expense */}
      <div className="flex justify-between rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-out p-3 cursor-pointer">
        {data.map((item, index) => (
          <div key={index}>
            {/* Title and Icon */}
            <div className="flex justify-center items-center">
              <item.icon
                className={`text-${item.color}-500 font-bold p-1 rounded-sm text-2xl bg-${item.color}-100`}
              />
              <p className="pr-2 ml-2 text-gray-500">{item.title}</p>
            </div>

            {/* Value and Progress Bar */}
            <div>
              <div className="flex items-center text-2xl font-semibold text-gray-600 mt-2">
                <MdOutlineAttachMoney />
                <p>{item.value}</p>
              </div>
              <div className="w-full mt-5 bg-gray-200 h-1 rounded-lg">
                <div
                  className={`bg-${item.color}-500 h-1 m-0 rounded-lg duration-200 hover:bg-${item.color}-700`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningReports;
