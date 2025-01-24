// WebsiteAnalytics.jsx
import React from "react";

const WebsiteAnalytics = () => {
  return (
    <div className="text-white bg-gradient-to-r from-indigo-500 to-indigo-400 shadow rounded-lg p-6 duration-500 transition-all hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-300">
      <h3 className="text-white text-base font-bold">Website Analytics</h3>
      <p className="text-xs">Total 28.5% Conversion Rate</p>
      <p className="text-sm font-semibold mt-3 mb-3">Traffic</p>
      <div className="flex">
        <div className="flex flex-col items-center">
          <span className="bg-indigo-400 rounded-lg p-1 m-2">28%</span>

          <span className="bg-indigo-400 rounded-lg p-1 m-2">1.3k</span>
        </div>
        <div className="flex flex-col items-start">
          <p className="p-1 m-2">Sessions</p>
          <p className="p-1 m-2">Leads</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-indigo-400 rounded-lg p-1 m-2">3.1k</span>

          <span className="bg-indigo-400 rounded-lg p-1 m-2">12%</span>
        </div>
        <div className="flex flex-col items-start">
          <p className="p-1 m-2">Page Views</p>
          <p className="p-1 m-2">Conversions</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAnalytics;
