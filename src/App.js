import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardRouter from "./components/routers/DashboardRouter";
import { GlobalContext } from "./components/contexts/GlobalContext";
import "./components/styles/tree.css";

function App() {
  const [globalContextState, setGlobalContextState] = useState({
    currentId: "",
    currentPath: "",
    selectedIndex: 1,
    currentNodeType: "",
    apiData: []
  });

  return (
    <GlobalContext.Provider value={{ globalContextState, setGlobalContextState }}>
      <div>
        <Routes>
          <Route path="/*" element={<DashboardRouter />} />
        </Routes>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
