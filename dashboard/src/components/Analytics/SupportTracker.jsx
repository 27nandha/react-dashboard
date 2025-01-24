import React from "react";
import { LuTicket } from "react-icons/lu";
import { TiInputChecked } from "react-icons/ti";
import { IoTimeOutline } from "react-icons/io5";

const SupportTracker = () => {
  const data = [
    {
      title: "New Tickets",
      value: "142",
      color: "indigo",
      icon: LuTicket,
    },
    {
      title: "Open Tickets",
      value: "28",
      color: "cyan",
      icon: TiInputChecked,
    },
    {
      title: "Response Time",
      value: "1 Day",
      color: "orange",
      icon: IoTimeOutline,
    },
  ];
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex">
        <div>
          <h3 className="text-base font-bold text-gray-500">Support Tracker</h3>
          <p className="text-sm font-semibold text-gray-400">Last 7 Days</p>
          <h2 className="mt-6 text-3xl font-bold text-gray-500">164</h2>
          <p className="text-sm text-gray-400">Total Tickets</p>
          <div>
            {data.map((item, index) => (
              <div key={index} className="flex items-center mt-3">
                {/* Icon */}
                <div>
                  <item.icon
                    className={`text-2xl text-${item.color}-500 bg-${item.color}-100 p-1 justify-center items-center`}
                  />
                </div>
                {/* Title and Value */}
                <div>
                  <p className="text-base text-gray-700 ml-2">{item.title}</p>
                  <p className="text-sm text-gray-400 ml-2">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="radial-progress text-primary" style={{ "--value": 85 }}>
          85%
        </div>
      </div>
    </div>
  );
};

export default SupportTracker;
