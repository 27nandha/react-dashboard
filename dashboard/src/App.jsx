import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AnalyticsPage from "./components/AnalyticsPage";

function App() {
  return (
    <div className="flex grid-cols-2">
      <Sidebar />
      <div className="flex-1 overflow-hidden flex-col">
        <Navbar />
        <AnalyticsPage />
      </div>
    </div>
  );
}

export default App;
