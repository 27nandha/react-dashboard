import React from "react";
import WebsiteAnalytics from "./Analytics/WebsiteAnalytics";
import DashboardWidgets from "./Analytics/DashboardWidgets";
import EarningReports from "./Analytics/EarningReports.jsx";
import SupportTracker from "./Analytics/SupportTracker.jsx";
import SalesbyCountries from "./Analytics/SalesbyCountries.jsx";
import TotalEarnings from "./Analytics/TotalEarnings.jsx";
import MonthlyCampaign from "./Analytics/MonthlyCampaign.jsx";
import SourceVisits from "./Analytics/SourceVisits.jsx";
import Projects from "./Analytics/Projects.jsx";

const AnalyticsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* First Row */}
      <div className="grid grid-cols-2 gap-4">
        <WebsiteAnalytics />
        <DashboardWidgets />
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <EarningReports />
        <SupportTracker />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <SalesbyCountries />
        <TotalEarnings />
        <MonthlyCampaign />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 items-stretch">
        <div className="col-span-1">
          <SourceVisits />
        </div>
        <div className="col-span-2">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
